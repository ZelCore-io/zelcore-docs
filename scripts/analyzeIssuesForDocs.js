#!/usr/bin/env node

/**
 * Analyze Issues for Documentation Generation
 *
 * This script analyzes the ticket_issues.json file and provides:
 * - Prioritized list of issues for documentation
 * - Suggested documentation types for each issue
 * - Related ticket details for context
 * - Documentation coverage gaps
 */

const fs = require('fs');
const path = require('path');

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function printHeader(text, emoji = '📋') {
  console.log('\n' + '═'.repeat(60));
  console.log(`${emoji} ${text}`);
  console.log('═'.repeat(60) + '\n');
}

function printSection(text) {
  console.log('\n' + '─'.repeat(60));
  console.log(text);
  console.log('─'.repeat(60) + '\n');
}

// ============================================================
// DOCUMENTATION TYPE DECISION
// ============================================================

/**
 * Determine the best documentation type for an issue
 */
function determineDocType(issue) {
  const types = [];
  const ticketCount = issue.ticketIds.length;

  // FAQ criteria
  if (issue.category === 'question' || ticketCount >= 5) {
    types.push('FAQ');
  }

  // Guide criteria
  if (issue.affectedComponents && issue.affectedComponents.length > 1) {
    types.push('Guide');
  }

  if (issue.category === 'feature') {
    types.push('Guide');
  }

  // Get Started criteria
  const setupKeywords = ['install', 'setup', 'getting started', 'first time', 'onboarding', 'configure'];
  if (setupKeywords.some(kw => issue.title.toLowerCase().includes(kw))) {
    types.push('Get Started');
  }

  // Feature documentation
  if (issue.category === 'feature' || issue.commonKeywords.some(kw =>
    ['feature', 'capability', 'integration', 'support'].includes(kw.toLowerCase())
  )) {
    types.push('Feature');
  }

  // Bug/Troubleshooting
  if (issue.category === 'bug' && issue.severity === 'high') {
    types.push('Troubleshooting');
  }

  // Default to FAQ if nothing else matches
  if (types.length === 0) {
    types.push('FAQ');
  }

  return [...new Set(types)]; // Remove duplicates
}

/**
 * Calculate priority score for an issue
 */
function calculatePriority(issue) {
  let score = 0;

  // Ticket count (primary factor)
  score += issue.ticketIds.length * 10;

  // Severity
  if (issue.severity === 'high') score += 50;
  else if (issue.severity === 'medium') score += 25;
  else if (issue.severity === 'low') score += 10;

  // Category
  if (issue.category === 'documentation') score += 30;
  else if (issue.category === 'bug') score += 20;
  else if (issue.category === 'question') score += 15;

  return score;
}

// ============================================================
// ANALYSIS FUNCTIONS
// ============================================================

/**
 * Analyze all issues and provide recommendations
 */
function analyzeIssues(issuesData, ticketsData) {
  printHeader('Issue Analysis for Documentation', '📊');

  const issues = issuesData.issues;
  const metadata = issuesData.metadata;

  console.log('Overview:');
  console.log(`  Total issues: ${issues.length}`);
  console.log(`  Total tickets: ${metadata.totalTickets}`);
  console.log(`  Categorized tickets: ${metadata.categorizedTickets} (${((metadata.categorizedTickets / metadata.totalTickets) * 100).toFixed(1)}%)`);
  console.log(`  Uncategorized tickets: ${metadata.uncategorizedTickets}`);

  // Add priority scores
  issues.forEach(issue => {
    issue.priority = calculatePriority(issue);
    issue.suggestedDocTypes = determineDocType(issue);
  });

  // Sort by priority
  const prioritizedIssues = [...issues].sort((a, b) => b.priority - a.priority);

  // Group by documentation type
  const byDocType = {
    'FAQ': [],
    'Guide': [],
    'Get Started': [],
    'Feature': [],
    'Troubleshooting': []
  };

  prioritizedIssues.forEach(issue => {
    issue.suggestedDocTypes.forEach(type => {
      byDocType[type].push(issue);
    });
  });

  // Print statistics by category
  printSection('Issues by Category');
  console.log(`  Bugs:          ${issuesData.statistics.issuesByCategory.bug || 0}`);
  console.log(`  Features:      ${issuesData.statistics.issuesByCategory.feature || 0}`);
  console.log(`  Questions:     ${issuesData.statistics.issuesByCategory.question || 0}`);
  console.log(`  Documentation: ${issuesData.statistics.issuesByCategory.documentation || 0}`);

  // Print statistics by severity
  printSection('Issues by Severity');
  console.log(`  High:   ${issuesData.statistics.issuesBySeverity.high || 0}`);
  console.log(`  Medium: ${issuesData.statistics.issuesBySeverity.medium || 0}`);
  console.log(`  Low:    ${issuesData.statistics.issuesBySeverity.low || 0}`);

  // Print suggested documentation types
  printSection('Suggested Documentation Distribution');
  Object.entries(byDocType).forEach(([type, issues]) => {
    console.log(`  ${type.padEnd(20)} ${issues.length} issues`);
  });

  return {
    prioritizedIssues,
    byDocType,
    metadata: issuesData.metadata,
    statistics: issuesData.statistics
  };
}

/**
 * Print top priority issues
 */
function printTopIssues(prioritizedIssues, limit = 20) {
  printHeader(`Top ${limit} Priority Issues for Documentation`, '🏆');

  prioritizedIssues.slice(0, limit).forEach((issue, idx) => {
    console.log(`${(idx + 1).toString().padStart(2)}. [${issue.issueId}] ${issue.title}`);
    console.log(`    Priority: ${issue.priority} | Severity: ${issue.severity} | Category: ${issue.category}`);
    console.log(`    Tickets: ${issue.ticketIds.length} | Components: ${issue.affectedComponents?.join(', ') || 'N/A'}`);
    console.log(`    Suggested docs: ${issue.suggestedDocTypes.join(', ')}`);
    console.log('');
  });
}

/**
 * Print issues by documentation type
 */
function printByDocType(byDocType) {
  Object.entries(byDocType).forEach(([type, issues]) => {
    if (issues.length === 0) return;

    printHeader(`${type} Candidates (${issues.length})`, '📝');

    // Sort by ticket count
    const sorted = [...issues].sort((a, b) => b.ticketIds.length - a.ticketIds.length);

    sorted.slice(0, 10).forEach((issue, idx) => {
      console.log(`${(idx + 1).toString().padStart(2)}. [${issue.issueId}] ${issue.title}`);
      console.log(`    ${issue.ticketIds.length} tickets | ${issue.severity} severity | ${issue.category}`);

      // Show some keywords
      if (issue.commonKeywords && issue.commonKeywords.length > 0) {
        console.log(`    Keywords: ${issue.commonKeywords.slice(0, 5).join(', ')}`);
      }
      console.log('');
    });

    if (sorted.length > 10) {
      console.log(`  ... and ${sorted.length - 10} more\n`);
    }
  });
}

/**
 * Generate a detailed report for Claude
 */
function generateClaudeReport(analysis, outputDir) {
  printHeader('Generating Claude Report', '🤖');

  const report = {
    summary: {
      totalIssues: analysis.prioritizedIssues.length,
      totalTickets: analysis.metadata.totalTickets,
      categorizedTickets: analysis.metadata.categorizedTickets,
      generatedAt: new Date().toISOString()
    },
    prioritizedIssues: analysis.prioritizedIssues.map(issue => ({
      issueId: issue.issueId,
      title: issue.title,
      description: issue.description,
      priority: issue.priority,
      severity: issue.severity,
      category: issue.category,
      ticketCount: issue.ticketIds.length,
      ticketIds: issue.ticketIds,
      suggestedDocTypes: issue.suggestedDocTypes,
      affectedComponents: issue.affectedComponents || [],
      commonKeywords: issue.commonKeywords || []
    })),
    byDocumentationType: Object.entries(analysis.byDocType).map(([type, issues]) => ({
      type,
      count: issues.length,
      topIssues: issues.slice(0, 5).map(i => ({
        issueId: i.issueId,
        title: i.title,
        ticketCount: i.ticketIds.length,
        severity: i.severity
      }))
    }))
  };

  const reportPath = path.join(outputDir, 'documentation_plan.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');

  const sizeMB = (fs.statSync(reportPath).size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Claude report saved to: documentation_plan.json (${sizeMB}MB)`);

  // Also create a markdown version
  const mdReport = generateMarkdownReport(analysis);
  const mdPath = path.join(outputDir, 'documentation_plan.md');
  fs.writeFileSync(mdPath, mdReport, 'utf8');
  console.log(`✅ Markdown report saved to: documentation_plan.md\n`);

  return report;
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(analysis) {
  let md = '# Documentation Generation Plan\n\n';
  md += `Generated: ${new Date().toISOString()}\n\n`;
  md += '## Overview\n\n';
  md += `- **Total Issues:** ${analysis.prioritizedIssues.length}\n`;
  md += `- **Total Tickets:** ${analysis.metadata.totalTickets}\n`;
  md += `- **Categorized:** ${analysis.metadata.categorizedTickets}\n\n`;

  md += '## Priority Matrix\n\n';
  md += '| Rank | Issue ID | Title | Priority | Tickets | Severity | Suggested Docs |\n';
  md += '|------|----------|-------|----------|---------|----------|----------------|\n';

  analysis.prioritizedIssues.slice(0, 20).forEach((issue, idx) => {
    md += `| ${idx + 1} | ${issue.issueId} | ${issue.title} | ${issue.priority} | ${issue.ticketIds.length} | ${issue.severity} | ${issue.suggestedDocTypes.join(', ')} |\n`;
  });

  md += '\n## Documentation Type Breakdown\n\n';

  Object.entries(analysis.byDocType).forEach(([type, issues]) => {
    if (issues.length === 0) return;

    md += `### ${type} (${issues.length} issues)\n\n`;

    const sorted = [...issues].sort((a, b) => b.ticketIds.length - a.ticketIds.length);
    sorted.slice(0, 10).forEach(issue => {
      md += `- **[${issue.issueId}]** ${issue.title}\n`;
      md += `  - ${issue.ticketIds.length} tickets | ${issue.severity} severity\n`;
      if (issue.commonKeywords && issue.commonKeywords.length > 0) {
        md += `  - Keywords: ${issue.commonKeywords.slice(0, 5).join(', ')}\n`;
      }
      md += '\n';
    });
  });

  md += '## Next Steps\n\n';
  md += '1. Review the prioritized issues above\n';
  md += '2. Start with high-priority issues (top 10-20)\n';
  md += '3. For each issue:\n';
  md += '   - Read the related tickets in `faq_tickets_combined.json`\n';
  md += '   - Determine the best documentation type\n';
  md += '   - Create or update documentation\n';
  md += '4. Use the `.claude/prompts/generate-docs-from-issues.md` prompt as a guide\n\n';

  return md;
}

// ============================================================
// MAIN FUNCTION
// ============================================================

function main() {
  printHeader('Documentation Analysis Tool', '🚀');

  const dataDir = path.join(__dirname, '..', 'data', 'output');

  // Load issues
  const issuesPath = path.join(dataDir, 'ticket_issues.json');
  if (!fs.existsSync(issuesPath)) {
    console.error(`❌ Error: ticket_issues.json not found at ${issuesPath}`);
    console.error('   Run "npm run tickets:process" first to generate issues.\n');
    process.exit(1);
  }

  console.log(`📂 Loading issues from: ${issuesPath}`);
  const issuesData = JSON.parse(fs.readFileSync(issuesPath, 'utf8'));

  // Load tickets for context
  const ticketsPath = path.join(dataDir, 'faq_tickets_combined.json');
  let ticketsData = null;
  if (fs.existsSync(ticketsPath)) {
    console.log(`📂 Loading tickets from: ${ticketsPath}\n`);
    ticketsData = JSON.parse(fs.readFileSync(ticketsPath, 'utf8'));
  }

  // Analyze
  const analysis = analyzeIssues(issuesData, ticketsData);

  // Print reports
  printTopIssues(analysis.prioritizedIssues, 20);
  printByDocType(analysis.byDocType);

  // Generate Claude report
  const report = generateClaudeReport(analysis, dataDir);

  // Final summary
  printHeader('Summary', '✅');
  console.log('Files generated:');
  console.log(`  📄 data/output/documentation_plan.json - Structured data for Claude`);
  console.log(`  📄 data/output/documentation_plan.md - Human-readable plan\n`);

  console.log('Next steps:');
  console.log('  1. Review documentation_plan.md for prioritized issues');
  console.log('  2. Use the Claude prompt: .claude/prompts/generate-docs-from-issues.md');
  console.log('  3. Start with top 10-20 priority issues');
  console.log('  4. Create documentation following the templates in the prompt\n');

  console.log('Quick start with Claude:');
  console.log('  "Using the documentation plan and the generate-docs-from-issues prompt,');
  console.log('   please create documentation for the top 5 priority issues."\n');
}

// Run
if (require.main === module) {
  main();
}

module.exports = {
  analyzeIssues,
  calculatePriority,
  determineDocType,
  generateClaudeReport
};
