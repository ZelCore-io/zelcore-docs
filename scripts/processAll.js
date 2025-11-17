#!/usr/bin/env node

/**
 * Complete Ticket Processing Pipeline
 * Self-contained script with all logic included
 * Runs: Count → Extract → Analyze
 */

// Load environment variables from .env file
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const openaiClient = require('./openaiClient');

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Print a section header
 */
function printHeader(title, emoji = '📊') {
  console.log('\n' + '='.repeat(60));
  console.log(`${emoji} ${title}`);
  console.log('='.repeat(60) + '\n');
}

/**
 * Print a step header
 */
function printStep(stepNumber, title) {
  console.log('\n' + '─'.repeat(60));
  console.log(`STEP ${stepNumber}: ${title}`);
  console.log('─'.repeat(60) + '\n');
}

/**
 * Finds all Tickets JSON files in the data directory
 */
function findTicketFiles(dataDir) {
  try {
    const files = fs.readdirSync(dataDir);
    return files
      .filter(file => file.startsWith('Tickets') && file.endsWith('.json'))
      .map(file => path.join(dataDir, file))
      .sort();
  } catch (error) {
    console.error(`Error reading directory ${dataDir}:`, error);
    return [];
  }
}

/**
 * Extracts keywords from text for analysis
 */
function extractKeywords(text) {
  if (!text) return [];

  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
    'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been',
    'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
    'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those',
    'i', 'you', 'he', 'she', 'it', 'we', 'they', 'what', 'which', 'who', 'when',
    'where', 'why', 'how', 'my', 'your', 'his', 'her', 'its', 'our', 'their'
  ]);

  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));

  return words;
}

// ============================================================
// STEP 1: COUNT TICKETS
// ============================================================

function countTickets(dataDir) {
  printStep(1, 'Counting Tickets');

  const ticketFiles = findTicketFiles(dataDir);

  if (ticketFiles.length === 0) {
    console.error('❌ No ticket files found in the data directory.');
    return { success: false, total: 0, files: [] };
  }

  console.log(`📁 Found ${ticketFiles.length} ticket file(s)\n`);

  let totalTickets = 0;
  const results = [];

  for (const filePath of ticketFiles) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const ticketsData = JSON.parse(fileContent);
      const count = ticketsData.length;
      totalTickets += count;

      const fileName = path.basename(filePath);
      console.log(`  ✓ ${fileName}: ${count.toLocaleString()} tickets`);
      results.push({ fileName, count });
    } catch (error) {
      console.error(`  ✗ ${path.basename(filePath)}: ERROR`);
    }
  }

  console.log('\n' + '─'.repeat(60));
  console.log(`📊 Total Tickets: ${totalTickets.toLocaleString()}`);
  console.log('─'.repeat(60));

  return { success: true, total: totalTickets, files: results };
}

// ============================================================
// STEP 2: EXTRACT FAQ TICKETS
// ============================================================

/**
 * Determines if a ticket is successfully resolved
 */
function isSuccessfullyResolved(ticket) {
  return ticket.status === 4 || ticket.status === 5 ||
         ticket.status_name === 'Resolved' || ticket.status_name === 'Closed';
}

/**
 * Determines if a ticket has meaningful content for FAQ
 */
function hasMeaningfulContent(ticket) {
  if (ticket.spam || ticket.deleted) {
    return false;
  }

  if (!ticket.subject || !ticket.description) {
    return false;
  }

  const hasAgentReply = ticket.reports_data.agent_reply_count && ticket.reports_data.agent_reply_count > 0;
  const hasResolutionTime = ticket.ticket_states.resolved_at !== null;

  return hasResolutionTime || hasAgentReply;
}

/**
 * Extracts FAQ-relevant notes from a ticket
 */
function extractFAQNotes(ticket) {
  return ticket.notes
    .filter(note => {
      if (note.deleted || note.body.length < 10 || note.private) {
        return false;
      }
      return true;
    })
    .map(note => ({
      id: note.id,
      body: note.body,
      isPrivate: note.private,
      isIncoming: note.incoming,
      isAgentReply: !note.incoming,
      createdAt: note.created_at
    }))
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
}

/**
 * Transforms a helpdesk ticket into FAQ format
 */
function transformToFAQTicket(ticket) {
  return {
    ticketId: ticket.id,
    displayId: ticket.display_id,
    subject: ticket.subject,
    description: ticket.description,
    descriptionHtml: ticket.description_html,
    ticketType: ticket.ticket_type,
    status: ticket.status_name,
    priority: ticket.priority_name,
    createdAt: ticket.created_at,
    resolvedAt: ticket.ticket_states.resolved_at,
    requesterName: ticket.requester_name,
    requesterEmail: ticket.requester.email,
    responderName: ticket.responder_name,
    notes: extractFAQNotes(ticket),
    tags: ticket.tags,
    agentReplyCount: ticket.reports_data.agent_reply_count,
    customerReplyCount: ticket.reports_data.customer_reply_count
  };
}

/**
 * Processes a single ticket file and extracts FAQ data
 */
function processFAQFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const ticketsData = JSON.parse(fileContent);

    const faqTickets = [];

    for (const wrapper of ticketsData) {
      const ticket = wrapper.helpdesk_ticket;

      if (isSuccessfullyResolved(ticket) && hasMeaningfulContent(ticket)) {
        faqTickets.push(transformToFAQTicket(ticket));
      }
    }

    return faqTickets;
  } catch (error) {
    console.error(`Error processing file ${path.basename(filePath)}:`, error);
    return [];
  }
}

function extractFAQTickets(dataDir, outputFile) {
  printStep(2, 'Extracting FAQ Content');

  const ticketFiles = findTicketFiles(dataDir);

  const allFAQTickets = [];
  const stats = {
    totalTickets: 0,
    resolvedTickets: 0,
    closedTickets: 0,
    extractedTickets: 0,
    filesProcessed: 0
  };

  console.log('Processing files...\n');

  for (const filePath of ticketFiles) {
    const fileName = path.basename(filePath);

    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const ticketsData = JSON.parse(fileContent);

      stats.totalTickets += ticketsData.length;

      for (const wrapper of ticketsData) {
        const ticket = wrapper.helpdesk_ticket;
        if (ticket.status_name === 'Resolved') stats.resolvedTickets++;
        if (ticket.status_name === 'Closed') stats.closedTickets++;
      }

      const faqTickets = processFAQFile(filePath);
      allFAQTickets.push(...faqTickets);
      stats.extractedTickets += faqTickets.length;
      stats.filesProcessed++;

      console.log(`  ✓ ${fileName}: ${faqTickets.length.toLocaleString()} FAQ tickets extracted`);
    } catch (error) {
      console.error(`  ✗ ${fileName}: ERROR - ${error.message}`);
    }
  }

  // Write output file
  console.log('\n💾 Writing FAQ tickets to file...');

  try {
    fs.writeFileSync(outputFile, JSON.stringify(allFAQTickets, null, 2), 'utf8');
    const fileSizeMB = (fs.statSync(outputFile).size / (1024 * 1024)).toFixed(1);
    console.log(`  ✓ Wrote ${allFAQTickets.length.toLocaleString()} tickets to ${path.basename(outputFile)} (${fileSizeMB}MB)`);
  } catch (error) {
    console.error(`  ✗ Error writing file: ${error.message}`);
    return { success: false, stats, tickets: [] };
  }

  const extractionRate = ((stats.extractedTickets / stats.totalTickets) * 100).toFixed(1);

  console.log('\n' + '─'.repeat(60));
  console.log('Extraction Summary:');
  console.log('─'.repeat(60));
  console.log(`  Files processed:    ${stats.filesProcessed}`);
  console.log(`  Total tickets:      ${stats.totalTickets.toLocaleString()}`);
  console.log(`  Resolved:           ${stats.resolvedTickets.toLocaleString()}`);
  console.log(`  Closed:             ${stats.closedTickets.toLocaleString()}`);
  console.log(`  Extracted for FAQ:  ${stats.extractedTickets.toLocaleString()}`);
  console.log(`  Extraction rate:    ${extractionRate}%`);
  console.log('─'.repeat(60));

  return { success: true, stats, tickets: allFAQTickets };
}

// ============================================================
// STEP 3: ANALYZE FAQ TICKETS
// ============================================================

function analyzeTickets(faqTickets) {
  printStep(3, 'Analyzing FAQ Data');

  console.log(`📊 Analyzing ${faqTickets.length.toLocaleString()} FAQ tickets...\n`);

  // Basic statistics
  const withNotes = faqTickets.filter(t => t.notes.length > 0);
  const withAgentReplies = faqTickets.filter(t => t.agentReplyCount > 0);
  const complexIssues = faqTickets.filter(t => t.agentReplyCount >= 3);

  console.log('Basic Statistics:');
  console.log('─'.repeat(60));
  console.log(`  Tickets with notes:         ${withNotes.length.toLocaleString()}`);
  console.log(`  Tickets with agent replies: ${withAgentReplies.length.toLocaleString()}`);
  console.log(`  Complex issues (3+ replies): ${complexIssues.length.toLocaleString()}`);

  // Distribution by type
  console.log('\nDistribution by Type:');
  console.log('─'.repeat(60));
  const byType = {};
  faqTickets.forEach(t => {
    const type = t.ticketType || 'Unknown';
    byType[type] = (byType[type] || 0) + 1;
  });

  Object.entries(byType)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .forEach(([type, count]) => {
      const percentage = ((count / faqTickets.length) * 100).toFixed(1);
      const bar = '█'.repeat(Math.floor(percentage / 2));
      console.log(`  ${type.padEnd(20)} ${bar} ${count.toLocaleString()} (${percentage}%)`);
    });

  // Top keywords
  console.log('\nTop 15 Keywords in Subjects:');
  console.log('─'.repeat(60));
  const keywordCounts = {};
  faqTickets.forEach(t => {
    const keywords = extractKeywords(t.subject);
    keywords.forEach(keyword => {
      keywordCounts[keyword] = (keywordCounts[keyword] || 0) + 1;
    });
  });

  Object.entries(keywordCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .forEach(([keyword, count], idx) => {
      console.log(`  ${(idx + 1).toString().padStart(2)}. ${keyword.padEnd(20)} ${count.toLocaleString()}`);
    });

  // Top support agents
  console.log('\nTop 5 Support Agents:');
  console.log('─'.repeat(60));
  const responderCounts = {};
  faqTickets.forEach(t => {
    if (t.responderName && t.responderName !== 'No Agent') {
      responderCounts[t.responderName] = (responderCounts[t.responderName] || 0) + 1;
    }
  });

  Object.entries(responderCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .forEach(([name, count], idx) => {
      console.log(`  ${(idx + 1).toString().padStart(2)}. ${name.padEnd(30)} ${count.toLocaleString()} tickets`);
    });

  // Recommended FAQ candidates
  console.log('\nTop 10 FAQ Candidates (Most Interactive):');
  console.log('─'.repeat(60));

  const candidates = faqTickets
    .filter(t => t.agentReplyCount > 0 && t.notes.length > 0)
    .sort((a, b) => {
      const scoreA = (a.agentReplyCount || 0) + (a.customerReplyCount || 0);
      const scoreB = (b.agentReplyCount || 0) + (b.customerReplyCount || 0);
      return scoreB - scoreA;
    })
    .slice(0, 10);

  candidates.forEach((ticket, idx) => {
    const subject = ticket.subject.length > 50
      ? ticket.subject.substring(0, 50) + '...'
      : ticket.subject;
    console.log(`\n  ${idx + 1}. [#${ticket.displayId}] ${subject}`);
    console.log(`     Type: ${ticket.ticketType || 'Unknown'} | Replies: ${ticket.agentReplyCount} | Notes: ${ticket.notes.length}`);
  });

  console.log('\n' + '─'.repeat(60));
}

// ============================================================
// STEP 4: KEYWORD FILTERING & TOKEN CALCULATION
// ============================================================

/**
 * Estimates token count for text (rough approximation)
 * Uses ~1.3 tokens per word as approximation for English text
 */
function estimateTokens(text) {
  if (!text) return 0;
  // Count words and multiply by 1.3 (average tokens per word)
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words * 1.3);
}

/**
 * Calculate total tokens for a ticket (for LLM context estimation)
 */
function calculateTicketTokens(ticket) {
  let totalTokens = 0;

  // Subject
  totalTokens += estimateTokens(ticket.subject);

  // Description
  totalTokens += estimateTokens(ticket.description);

  // All notes
  ticket.notes.forEach(note => {
    totalTokens += estimateTokens(note.body);
  });

  return totalTokens;
}

/**
 * Check if ticket matches any of the keywords
 */
function matchesKeywords(ticket, keywords) {
  const searchText = `${ticket.subject} ${ticket.description}`.toLowerCase();

  return keywords.some(keyword =>
    searchText.includes(keyword.toLowerCase())
  );
}

/**
 * Filter tickets by keywords and save to separate files
 */
function filterByKeywords(allTickets, outputDir) {
  printStep(4, 'Filtering by Keywords & Calculating Tokens');

  const keywords = ['zelcore', 'wallet', 'swap'];

  console.log(`Filtering for keywords: ${keywords.join(', ')}\n`);

  const filtered = {
    zelcore: [],
    wallet: [],
    swap: [],
    combined: []
  };

  // Track which tickets match which keywords
  const matchedAny = new Set();

  // Filter for each keyword
  keywords.forEach(keyword => {
    const matches = allTickets.filter(t =>
      matchesKeywords(t, [keyword])
    );

    filtered[keyword] = matches;
    matches.forEach(t => matchedAny.add(t.ticketId));

    console.log(`  ${keyword.padEnd(10)} ${matches.length.toLocaleString()} tickets`);
  });

  // Combined: any ticket matching any keyword
  filtered.combined = allTickets.filter(t => matchedAny.has(t.ticketId));

  console.log(`  ${'combined'.padEnd(10)} ${filtered.combined.length.toLocaleString()} tickets (unique)\n`);

  // Calculate token statistics
  console.log('Token Statistics (for LLM context):');
  console.log('─'.repeat(60));

  const calculateStats = (tickets, label) => {
    if (tickets.length === 0) {
      console.log(`\n${label}:`);
      console.log(`  No tickets found`);
      return;
    }

    const tokenCounts = tickets.map(calculateTicketTokens);
    const totalTokens = tokenCounts.reduce((sum, count) => sum + count, 0);
    const avgTokens = Math.floor(totalTokens / tickets.length);
    const maxTokens = Math.max(...tokenCounts);
    const minTokens = Math.min(...tokenCounts);

    console.log(`\n${label}:`);
    console.log(`  Tickets:      ${tickets.length.toLocaleString()}`);
    console.log(`  Total tokens: ${totalTokens.toLocaleString()}`);
    console.log(`  Avg tokens:   ${avgTokens.toLocaleString()} per ticket`);
    console.log(`  Min tokens:   ${minTokens.toLocaleString()}`);
    console.log(`  Max tokens:   ${maxTokens.toLocaleString()}`);

    // Context window info
    const contexts = [
      { name: 'GPT-3.5', size: 16000 },
      { name: 'GPT-4', size: 8000 },
      { name: 'Claude 3', size: 200000 }
    ];

    console.log(`  Fits in context:`);
    contexts.forEach(ctx => {
      const fitsCount = tokenCounts.filter(t => t <= ctx.size).length;
      const percentage = ((fitsCount / tickets.length) * 100).toFixed(1);
      console.log(`    ${ctx.name.padEnd(12)} ${fitsCount}/${tickets.length} (${percentage}%)`);
    });
  };

  calculateStats(filtered.zelcore, 'Zelcore tickets');
  calculateStats(filtered.wallet, 'Wallet tickets');
  calculateStats(filtered.swap, 'Swap tickets');
  calculateStats(filtered.combined, 'Combined (all keywords)');

  console.log('\n' + '─'.repeat(60));

  // Save filtered files
  console.log('\n💾 Writing filtered ticket files...\n');

  const files = [
    { name: 'faq_tickets_zelcore.json', data: filtered.zelcore },
    { name: 'faq_tickets_wallet.json', data: filtered.wallet },
    { name: 'faq_tickets_swap.json', data: filtered.swap },
    { name: 'faq_tickets_combined.json', data: filtered.combined }
  ];

  files.forEach(({ name, data }) => {
    const filePath = path.join(outputDir, name);
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      const fileSizeMB = (fs.statSync(filePath).size / (1024 * 1024)).toFixed(1);
      const totalTokens = data.reduce((sum, t) => sum + calculateTicketTokens(t), 0);
      console.log(`  ✓ ${name}`);
      console.log(`    ${data.length} tickets, ${fileSizeMB}MB, ~${totalTokens.toLocaleString()} tokens`);
    } catch (error) {
      console.error(`  ✗ Error writing ${name}: ${error.message}`);
    }
  });

  console.log('\n' + '─'.repeat(60));

  return filtered;
}

// ============================================================
// STEP 5: AI-POWERED ISSUE MERGING
// ============================================================

/**
 * Merge tickets into common issues using OpenAI
 */
async function mergeTicketsToIssues(allTickets, outputDir) {
  printStep(5, 'AI-Powered Issue Merging (OpenAI)');

  // Check if OpenAI is configured
  if (!openaiClient.isConfigured()) {
    console.log('⚠️  OpenAI API key not found - skipping AI issue merging');
    console.log('   To enable this feature:');
    console.log('   1. Get an API key from: https://platform.openai.com/');
    console.log('   2. Set environment variable: export OPENAI_API_KEY=your_key');
    console.log('   3. Re-run this script\n');
    return { skipped: true };
  }

  try {
    const config = openaiClient.getConfig();
    console.log(`🤖 AI Model: ${config.model}`);
    console.log(`📦 Max tokens per batch: ${config.maxTokensPerBatch.toLocaleString()}\n`);

    // Initialize OpenAI
    console.log('🔑 Initializing OpenAI client...');
    openaiClient.initializeOpenAI();
    console.log('   ✅ OpenAI client initialized\n');

    // Create batches
    console.log('📦 Creating batches...');
    const batches = openaiClient.createBatches(allTickets);
    console.log(`   ✅ Created ${batches.length} batch(es)`);

    batches.forEach((batch, idx) => {
      console.log(`      Batch ${idx + 1}: ${batch.tickets.length} tickets (~${batch.estimatedTokens.toLocaleString()} tokens)`);
    });

    console.log('');

    // Process batches with progress callback
    console.log('🚀 Processing batches with OpenAI...\n');

    const progressCallback = (progress) => {
      if (progress.type === 'batch_start') {
        console.log(`📤 Batch ${progress.batchNumber}/${progress.totalBatches}`);
        console.log(`   Tickets: ${progress.ticketCount}`);
        console.log(`   Est. tokens: ${progress.estimatedTokens.toLocaleString()}`);
      } else if (progress.type === 'batch_complete') {
        if (progress.success) {
          console.log(`   ✅ Success! Found ${progress.issuesFound} issues`);
          console.log(`   Tokens used: ${progress.tokensUsed.toLocaleString()}`);
          console.log(`   Cost: ~$${(progress.tokensUsed * 0.00001).toFixed(4)}\n`);
        } else {
          console.log(`   ❌ Error: ${progress.error}\n`);
        }
      }
    };

    const batchResults = await openaiClient.processAllBatches(batches, progressCallback);

    console.log('📊 Batch Processing Summary:');
    console.log(`   Total batches: ${batches.length}`);
    console.log(`   Successful: ${batchResults.successCount}`);
    console.log(`   Failed: ${batchResults.failureCount}`);
    console.log(`   Total tokens used: ${batchResults.totalTokensUsed.toLocaleString()}`);
    console.log(`   Estimated cost: ~$${(batchResults.totalTokensUsed * 0.00001).toFixed(4)}\n`);

    // Merge results
    console.log('🔄 Merging results from all batches...');
    const mergedIssues = openaiClient.mergeBatchResults(batchResults.results);
    console.log(`   ✅ Merged into ${mergedIssues.length} unique issues\n`);

    // Generate output
    console.log('💾 Generating issue output...');
    const issueOutput = openaiClient.generateIssueOutput(allTickets, mergedIssues);

    // Save to file
    const issuesFile = path.join(outputDir, 'ticket_issues.json');
    fs.writeFileSync(issuesFile, JSON.stringify(issueOutput, null, 2), 'utf8');

    const fileSizeMB = (fs.statSync(issuesFile).size / (1024 * 1024)).toFixed(2);
    console.log(`   ✅ Saved to: ticket_issues.json (${fileSizeMB}MB)\n`);

    // Display statistics
    console.log('📊 Issue Statistics:');
    console.log('─'.repeat(60));
    console.log(`  Total issues identified: ${issueOutput.metadata.totalIssues}`);
    console.log(`  Tickets categorized: ${issueOutput.metadata.categorizedTickets} (${((issueOutput.metadata.categorizedTickets / issueOutput.metadata.totalTickets) * 100).toFixed(1)}%)`);
    console.log(`  Tickets uncategorized: ${issueOutput.metadata.uncategorizedTickets}`);
    console.log('');
    console.log('  By Severity:');
    console.log(`    High:   ${issueOutput.statistics.issuesBySeverity.high}`);
    console.log(`    Medium: ${issueOutput.statistics.issuesBySeverity.medium}`);
    console.log(`    Low:    ${issueOutput.statistics.issuesBySeverity.low}`);
    console.log('');
    console.log('  By Category:');
    console.log(`    Bugs:          ${issueOutput.statistics.issuesByCategory.bug}`);
    console.log(`    Features:      ${issueOutput.statistics.issuesByCategory.feature}`);
    console.log(`    Questions:     ${issueOutput.statistics.issuesByCategory.question}`);
    console.log(`    Documentation: ${issueOutput.statistics.issuesByCategory.documentation}`);
    console.log('');

    // Top 10 issues
    console.log('🏆 Top 10 Issues (by ticket count):\n');
    issueOutput.statistics.topIssues.forEach((issue, idx) => {
      console.log(`  ${idx + 1}. [${issue.issueId}] ${issue.title}`);
      console.log(`     ${issue.ticketCount} tickets`);
    });

    console.log('\n' + '─'.repeat(60));

    return {
      success: true,
      issues: mergedIssues,
      output: issueOutput,
      tokensUsed: batchResults.totalTokensUsed,
      cost: (batchResults.totalTokensUsed * 0.00001).toFixed(4),
    };

  } catch (error) {
    console.error(`\n❌ Error during AI issue merging: ${error.message}`);

    if (error.message.includes('OPENAI_API_KEY')) {
      console.error('\n💡 Tip: Set your OpenAI API key:');
      console.error('   export OPENAI_API_KEY=your_api_key_here\n');
    }

    return {
      success: false,
      error: error.message,
    };
  }
}

// ============================================================
// MAIN FUNCTION
// ============================================================

async function main() {
  const startTime = Date.now();

  printHeader('Unified Ticket Processing Pipeline', '🚀');

  console.log('This script will:');
  console.log('  1. Count all tickets in the data folder');
  console.log('  2. Extract FAQ-relevant content from resolved tickets');
  console.log('  3. Analyze the extracted FAQ data');
  console.log('  4. Filter by keywords (zelcore, wallet, swap) & calculate tokens');
  console.log('  5. Merge tickets into issues using AI (if OpenAI API key is set)\n');

  const dataDir = path.join(__dirname, '..', 'data');
  const outputDir = path.join(dataDir, 'output');
  const outputFile = path.join(outputDir, 'faq_tickets.json');

  // Check if data directory exists
  if (!fs.existsSync(dataDir)) {
    console.error(`❌ Error: Data directory not found at ${dataDir}`);
    process.exit(1);
  }

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Configuration:');
  console.log(`  Data directory:   ${dataDir}`);
  console.log(`  Output directory: ${outputDir}`);

  // Step 1: Count tickets
  const countResult = countTickets(dataDir);
  if (!countResult.success) {
    console.error('\n❌ Failed to count tickets. Exiting.');
    process.exit(1);
  }

  // Step 2: Extract FAQ tickets
  const extractResult = extractFAQTickets(dataDir, outputFile);
  if (!extractResult.success) {
    console.error('\n❌ Failed to extract FAQ tickets. Exiting.');
    process.exit(1);
  }

  // Step 3: Analyze tickets
  analyzeTickets(extractResult.tickets);

  // Step 4: Filter by keywords and calculate tokens
  const filteredResults = filterByKeywords(extractResult.tickets, outputDir);

  // Step 5: AI-powered issue merging (optional, requires OpenAI API key)
  // Only process the combined filtered tickets (zelcore, wallet, swap keywords)
  console.log(`\n📋 Using ${filteredResults.combined.length} combined tickets for AI issue merging...\n`);
  const issueResult = await mergeTicketsToIssues(filteredResults.combined, outputDir);

  // Final summary
  const endTime = Date.now();
  const durationSeconds = ((endTime - startTime) / 1000).toFixed(1);

  printHeader('Processing Complete!', '✅');

  console.log('Summary:');
  console.log('─'.repeat(60));
  console.log(`  Total tickets processed:  ${countResult.total.toLocaleString()}`);
  console.log(`  FAQ tickets extracted:    ${extractResult.stats.extractedTickets.toLocaleString()}`);
  console.log(`  Main output file:         ${path.basename(outputFile)}`);
  console.log('');
  console.log('  Filtered outputs:');
  console.log(`    Zelcore:                ${filteredResults.zelcore.length.toLocaleString()} tickets`);
  console.log(`    Wallet:                 ${filteredResults.wallet.length.toLocaleString()} tickets`);
  console.log(`    Swap:                   ${filteredResults.swap.length.toLocaleString()} tickets`);
  console.log(`    Combined:               ${filteredResults.combined.length.toLocaleString()} tickets`);
  console.log('');

  if (issueResult && issueResult.success) {
    console.log('  AI Issue Merging:');
    console.log(`    Issues identified:      ${issueResult.output.metadata.totalIssues}`);
    console.log(`    Tickets categorized:    ${issueResult.output.metadata.categorizedTickets} (${((issueResult.output.metadata.categorizedTickets / issueResult.output.metadata.totalTickets) * 100).toFixed(1)}%)`);
    console.log(`    Tokens used:            ${issueResult.tokensUsed.toLocaleString()}`);
    console.log(`    Estimated cost:         ~$${issueResult.cost}`);
    console.log('');
  } else if (issueResult && issueResult.skipped) {
    console.log('  AI Issue Merging:');
    console.log(`    Status:                 Skipped (OpenAI API key not set)`);
    console.log('');
  }

  console.log(`  Processing time:          ${durationSeconds}s`);
  console.log('─'.repeat(60));
  console.log('\n✨ All steps completed successfully!\n');

  console.log(`Next steps:`);
  console.log(`  - Review faq_tickets_*.json files for keyword-specific FAQs`);
  console.log(`  - Use token counts to plan LLM context usage`);

  if (issueResult && issueResult.success) {
    console.log(`  - Review ticket_issues.json for identified issues`);
    console.log(`  - Use issue IDs to track and resolve common problems`);
    console.log(`  - Run: node scripts/analyzeIssues.js for detailed reports`);
  } else if (issueResult && issueResult.skipped) {
    console.log(`  - Set OPENAI_API_KEY to enable AI issue merging`);
  }

  console.log(`  - Create topic-specific documentation from filtered tickets\n`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  countTickets,
  extractFAQTickets,
  analyzeTickets,
  filterByKeywords,
  findTicketFiles,
  extractKeywords,
  estimateTokens,
  calculateTicketTokens,
  isSuccessfullyResolved,
  transformToFAQTicket
};
