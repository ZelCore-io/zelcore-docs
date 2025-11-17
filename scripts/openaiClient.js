/**
 * OpenAI Client Module
 *
 * Handles all communication with OpenAI API for ticket analysis
 * and issue merging functionality.
 */

const OpenAI = require('openai').default;

// ============================================================
// CONFIGURATION
// ============================================================

const CONFIG = {
  apiKey: process.env.OPENAI_API_KEY,
  model: process.env.OPENAI_MODEL || 'gpt-5-mini',
  maxTokensPerBatch: parseInt(process.env.MAX_TOKENS_PER_BATCH || '100000'),
  tokensPerWord: 1.3,
};

// ============================================================
// OPENAI CLIENT
// ============================================================

let openaiInstance = null;

/**
 * Initialize OpenAI client
 */
function initializeOpenAI() {
  if (!CONFIG.apiKey) {
    throw new Error(
      'OPENAI_API_KEY environment variable is required.\n' +
      'Set it with: export OPENAI_API_KEY=your_api_key\n' +
      'Or create a .env file with: OPENAI_API_KEY=your_api_key'
    );
  }

  if (!openaiInstance) {
    openaiInstance = new OpenAI({ apiKey: CONFIG.apiKey });
  }

  return openaiInstance;
}

/**
 * Check if OpenAI is configured
 */
function isConfigured() {
  return !!CONFIG.apiKey;
}

// ============================================================
// TOKEN ESTIMATION
// ============================================================

/**
 * Estimate token count for text
 */
function estimateTokens(text) {
  if (!text) return 0;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words * CONFIG.tokensPerWord);
}

/**
 * Calculate total tokens for a simplified ticket
 */
function calculateTicketTokens(ticket) {
  let total = 0;
  total += estimateTokens(ticket.subject);
  total += estimateTokens(ticket.description);

  if (ticket.notes && ticket.notes.length > 0) {
    const firstNotes = ticket.notes.slice(0, 3);
    firstNotes.forEach(note => {
      total += estimateTokens(note.body);
    });
  }

  return total;
}

// ============================================================
// TICKET SIMPLIFICATION
// ============================================================

/**
 * Simplify ticket data for OpenAI processing
 * Only include essential fields to minimize tokens
 */
function simplifyTicket(ticket) {
  const simplified = {
    id: ticket.displayId || ticket.ticketId,
    subject: ticket.subject || '',
    description: (ticket.description || '').substring(0, 500),
    type: ticket.ticketType,
    status: ticket.status,
    tags: ticket.tags || [],
    created: ticket.createdAt,
  };

  // Include first agent reply if available
  if (ticket.notes && ticket.notes.length > 0) {
    const agentReply = ticket.notes.find(note => note.isAgentReply);
    if (agentReply) {
      simplified.resolution = agentReply.body.substring(0, 300);
    }
  }

  return simplified;
}

// ============================================================
// BATCH CREATION
// ============================================================

/**
 * Create batches of tickets based on token limits
 */
function createBatches(tickets) {
  const batches = [];
  let currentBatch = [];
  let currentTokens = 0;

  const simplifiedTickets = tickets.map(simplifyTicket);

  simplifiedTickets.forEach((ticket) => {
    const ticketTokens = calculateTicketTokens(ticket);

    if (currentTokens + ticketTokens > CONFIG.maxTokensPerBatch && currentBatch.length > 0) {
      batches.push({
        tickets: currentBatch,
        estimatedTokens: currentTokens,
      });

      currentBatch = [ticket];
      currentTokens = ticketTokens;
    } else {
      currentBatch.push(ticket);
      currentTokens += ticketTokens;
    }
  });

  if (currentBatch.length > 0) {
    batches.push({
      tickets: currentBatch,
      estimatedTokens: currentTokens,
    });
  }

  return batches;
}

// ============================================================
// OPENAI PROMPTS
// ============================================================

/**
 * Create the system prompt for issue identification
 */
function createSystemPrompt() {
  return `You are an expert support ticket analyst specializing in cryptocurrency wallet and blockchain infrastructure support.

Your task is to analyze support tickets and group them into common underlying issues.

Guidelines:
1. Identify common problems, bugs, or topics across multiple tickets
2. Group tickets that address the same underlying issue
3. Create clear, descriptive issue titles
4. Focus on: Flux nodes, ZelCore wallet, swaps, blockchain synchronization, installation issues

Rules:
- Each issue should represent a distinct problem or topic
- Multiple tickets can belong to the same issue if they describe the same problem
- Issue titles should be clear and actionable (e.g., "Node Installation Fails on Ubuntu 22.04")
- Avoid creating too many granular issues - group related problems together
- Prioritize high-impact issues that affect many users

Output Format (JSON):
{
  "issues": [
    {
      "issueId": "ISS-001",
      "title": "Brief descriptive title",
      "description": "Detailed description of the common issue",
      "severity": "high|medium|low",
      "category": "bug|feature|question|documentation",
      "ticketIds": [1, 2, 3],
      "commonKeywords": ["keyword1", "keyword2"],
      "affectedComponents": ["component1", "component2"]
    }
  ],
  "summary": {
    "totalIssues": 0,
    "totalTickets": 0
  }
}`;
}

/**
 * Create user prompt for a batch of tickets
 */
function createUserPrompt(tickets, batchNumber) {
  const ticketList = tickets.map((t) => {
    return `Ticket #${t.id}:
  Subject: ${t.subject}
  Type: ${t.type || 'Unknown'}
  Tags: ${t.tags.join(', ') || 'None'}
  Description: ${t.description}
  ${t.resolution ? `Resolution: ${t.resolution}` : ''}`;
  }).join('\n\n');

  return `Analyze the following ${tickets.length} support tickets (Batch ${batchNumber}) and identify common issues.

Focus on grouping tickets that represent the same underlying problem or question.

${ticketList}

Please group these tickets into common issues and return the result as JSON following the specified format.`;
}

// ============================================================
// API CALLS
// ============================================================

/**
 * Process a batch of tickets with OpenAI
 */
async function processBatchWithOpenAI(tickets, batchNumber, totalBatches) {
  const openai = initializeOpenAI();

  const estimatedTokens = tickets.reduce((sum, t) => sum + calculateTicketTokens(t), 0);

  try {
    // Combine system and user prompts for GPT-5
    const fullPrompt = `${createSystemPrompt()}

${createUserPrompt(tickets, batchNumber)}

IMPORTANT: Return ONLY valid JSON in the exact format specified above. No additional text or markdown.`;

    // Use responses API for GPT-5
    const response = await openai.responses.create({
      model: CONFIG.model,
      input: fullPrompt,
    });

    // Parse the JSON response
    let content = response.output_text.trim();

    // Remove markdown code blocks if present
    if (content.startsWith('```json')) {
      content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    } else if (content.startsWith('```')) {
      content = content.replace(/```\n?/g, '');
    }

    const result = JSON.parse(content);

    // Estimate token usage (GPT-5 doesn't return usage in same format)
    const estimatedUsage = {
      total_tokens: estimatedTokens + Math.ceil(content.length / 4),
      prompt_tokens: estimatedTokens,
      completion_tokens: Math.ceil(content.length / 4),
    };

    return {
      success: true,
      batchNumber,
      result,
      usage: estimatedUsage,
      estimatedTokens,
    };
  } catch (error) {
    return {
      success: false,
      batchNumber,
      error: error.message,
      estimatedTokens,
    };
  }
}

/**
 * Process all batches with OpenAI
 */
async function processAllBatches(batches, progressCallback) {
  const results = [];
  let totalTokensUsed = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];

    if (progressCallback) {
      progressCallback({
        type: 'batch_start',
        batchNumber: i + 1,
        totalBatches: batches.length,
        ticketCount: batch.tickets.length,
        estimatedTokens: batch.estimatedTokens,
      });
    }

    const result = await processBatchWithOpenAI(
      batch.tickets,
      i + 1,
      batches.length
    );

    results.push(result);

    if (result.success && result.usage) {
      totalTokensUsed += result.usage.total_tokens;
    }

    if (progressCallback) {
      progressCallback({
        type: 'batch_complete',
        batchNumber: i + 1,
        success: result.success,
        issuesFound: result.result?.issues?.length || 0,
        tokensUsed: result.usage?.total_tokens || 0,
        error: result.error,
      });
    }

    // Rate limiting: wait 1 second between requests
    if (i < batches.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return {
    results,
    totalTokensUsed,
    successCount: results.filter(r => r.success).length,
    failureCount: results.filter(r => !r.success).length,
  };
}

// ============================================================
// RESULT MERGING
// ============================================================

/**
 * Merge results from multiple batches
 */
function mergeBatchResults(batchResults) {
  const allIssues = [];
  let issueCounter = 1;
  const issueMap = new Map();

  batchResults.forEach(batch => {
    if (!batch.success || !batch.result?.issues) return;

    batch.result.issues.forEach(issue => {
      const normalizedTitle = issue.title.toLowerCase().trim();

      // Check if similar issue exists
      let existingIssue = null;
      for (const [key, value] of issueMap.entries()) {
        if (key.includes(normalizedTitle) || normalizedTitle.includes(key)) {
          existingIssue = value;
          break;
        }
      }

      if (existingIssue) {
        // Merge with existing issue
        existingIssue.ticketIds.push(...issue.ticketIds);
        existingIssue.ticketIds = [...new Set(existingIssue.ticketIds)];

        if (issue.commonKeywords) {
          existingIssue.commonKeywords = [
            ...new Set([...existingIssue.commonKeywords, ...issue.commonKeywords])
          ];
        }

        if (issue.affectedComponents) {
          existingIssue.affectedComponents = [
            ...new Set([...(existingIssue.affectedComponents || []), ...issue.affectedComponents])
          ];
        }
      } else {
        // Add as new issue
        const mergedIssue = {
          ...issue,
          issueId: `ISS-${String(issueCounter).padStart(3, '0')}`,
        };

        allIssues.push(mergedIssue);
        issueMap.set(normalizedTitle, mergedIssue);
        issueCounter++;
      }
    });
  });

  // Sort by number of tickets (most common issues first)
  allIssues.sort((a, b) => b.ticketIds.length - a.ticketIds.length);

  return allIssues;
}

/**
 * Generate final issue output structure
 */
function generateIssueOutput(allTickets, mergedIssues) {
  const ticketToIssueMap = {};
  const uncategorizedTickets = new Set(allTickets.map(t => t.displayId || t.ticketId));

  // Create ticket-to-issue mapping
  mergedIssues.forEach(issue => {
    issue.ticketIds.forEach(ticketId => {
      if (!ticketToIssueMap[ticketId]) {
        ticketToIssueMap[ticketId] = [];
      }
      ticketToIssueMap[ticketId].push(issue.issueId);
      uncategorizedTickets.delete(ticketId);
    });
  });

  return {
    metadata: {
      generatedAt: new Date().toISOString(),
      model: CONFIG.model,
      totalTickets: allTickets.length,
      totalIssues: mergedIssues.length,
      categorizedTickets: Object.keys(ticketToIssueMap).length,
      uncategorizedTickets: uncategorizedTickets.size,
    },
    issues: mergedIssues,
    ticketToIssueMap,
    statistics: {
      issuesBySeverity: {
        high: mergedIssues.filter(i => i.severity === 'high').length,
        medium: mergedIssues.filter(i => i.severity === 'medium').length,
        low: mergedIssues.filter(i => i.severity === 'low').length,
      },
      issuesByCategory: {
        bug: mergedIssues.filter(i => i.category === 'bug').length,
        feature: mergedIssues.filter(i => i.category === 'feature').length,
        question: mergedIssues.filter(i => i.category === 'question').length,
        documentation: mergedIssues.filter(i => i.category === 'documentation').length,
      },
      topIssues: mergedIssues.slice(0, 10).map(i => ({
        issueId: i.issueId,
        title: i.title,
        ticketCount: i.ticketIds.length,
      })),
    },
  };
}

// ============================================================
// EXPORTS
// ============================================================

module.exports = {
  // Configuration
  isConfigured,
  initializeOpenAI,

  // Token estimation
  estimateTokens,
  calculateTicketTokens,

  // Ticket processing
  simplifyTicket,
  createBatches,

  // OpenAI API
  processBatchWithOpenAI,
  processAllBatches,

  // Result processing
  mergeBatchResults,
  generateIssueOutput,

  // Config access
  getConfig: () => ({ ...CONFIG }),
};
