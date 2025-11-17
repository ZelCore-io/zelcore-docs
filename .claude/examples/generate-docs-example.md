# Example: Generating Documentation with Claude Code

This file shows a real example of how to use Claude Code to generate documentation from the identified issues.

## Prerequisites

Before starting, ensure you've completed:

```bash
✅ npm run tickets:process    # Generated ticket_issues.json
✅ npm run docs:plan           # Generated documentation_plan.md
```

## Example Session

### Step 1: Review the Documentation Plan

First, look at what issues were identified:

```bash
cat data/output/documentation_plan.md | head -50
```

You'll see output like:

```
# Documentation Generation Plan

Generated: 2025-11-17T...

## Overview

- **Total Issues:** 38
- **Total Tickets:** 2,489
- **Categorized:** 651

## Priority Matrix

| Rank | Issue ID | Title | Priority | Tickets | Severity | Suggested Docs |
|------|----------|-------|----------|---------|----------|----------------|
| 1 | ISS-003 | Balances Not Displaying / Wallet Sync Problems | 840 | 77 | high | FAQ, Guide, Troubleshooting |
| 2 | ISS-002 | Fusion / Swap Orders Stuck | 810 | 74 | high | FAQ, Guide, Troubleshooting |
| 3 | ISS-001 | Multiple Zelcore Accounts Compromised | 700 | 65 | high | FAQ, Guide |
...
```

### Step 2: Start with Claude Code

Open Claude Code and enter:

```
I want to generate documentation for ZelCore based on the identified
support issues. I have:

1. data/output/ticket_issues.json - AI-identified common issues
2. data/output/documentation_plan.md - Prioritized documentation plan
3. data/output/faq_tickets_combined.json - Related ticket details
4. .claude/prompts/generate-docs-from-issues.md - Documentation prompt

Let's start by creating documentation for the top 3 priority issues:
- ISS-003: Balances Not Displaying / Wallet Sync Problems (77 tickets)
- ISS-002: Fusion / Swap Orders Stuck (74 tickets)
- ISS-001: Multiple Zelcore Accounts Compromised (65 tickets)

For each issue, please:
1. Read the issue details from ticket_issues.json
2. Review related tickets from faq_tickets_combined.json
3. Determine the appropriate documentation type(s)
4. Create documentation following the templates in the prompt
5. Add cross-references between related docs

Use the .claude/prompts/generate-docs-from-issues.md prompt as your guide.
```

### Step 3: Claude's Response

Claude will then:

1. **Read the issue data:**
   ```
   Let me first read the issue details and documentation plan...
   [Reads ticket_issues.json, documentation_plan.md]
   ```

2. **Analyze the issues:**
   ```
   I'll create documentation for these three high-priority issues:

   ISS-003: Balances Not Displaying
   - 77 related tickets
   - Affects: Zelcore UI, Backend, Smartify
   - Documentation needed: FAQ + Troubleshooting Guide

   ISS-002: Fusion/Swap Orders Stuck
   - 74 related tickets
   - Affects: Fusion app, Swap providers
   - Documentation needed: FAQ + Guide

   ISS-001: Account Security
   - 65 related tickets
   - Critical security topic
   - Documentation needed: Guide + FAQ
   ```

3. **Create documentation files:**

   Claude will create files like:

   **docs/faq/wallet-sync-issues.md:**
   ```markdown
   ---
   sidebar_position: 1
   ---

   # Wallet Balance and Sync Issues FAQ

   ## Why aren't my balances showing in ZelCore?

   **Quick Answer:**
   This is usually related to backend sync issues or Smartify
   connectivity. Try these steps:

   1. Close and reopen ZelCore
   2. Refresh your portfolio (pull down to refresh on mobile)
   3. Check if Smartify is enabled (Settings > Smartify)
   4. Wait 2-3 minutes for sync to complete

   **If that doesn't work:**
   - See our [Troubleshooting Sync Guide](../guides/troubleshooting-sync.md)
   - Check [Backend Status](https://status.zel.network)

   ## Why does it say "Smartify required" for my balance?

   [Detailed answer based on tickets...]

   ---

   ## Related Documentation
   - [Troubleshooting Sync Issues](../guides/troubleshooting-sync.md)
   - [Understanding Smartify](../features/smartify.md)
   ```

   **docs/guides/troubleshooting-sync.md:**
   ```markdown
   ---
   sidebar_position: 5
   ---

   # Troubleshooting Wallet Sync Issues

   ## Overview

   This guide helps you resolve issues where ZelCore wallet
   balances don't display correctly or take a long time to sync.

   ## Common Symptoms

   Based on user reports:
   - Balances showing as 0 or blank
   - "Smartify required" messages
   - Old balances not updating
   - Some coins sync, others don't

   ## Step-by-Step Diagnosis

   ### Step 1: Check Smartify Status

   [Detailed steps from tickets...]

   ### Step 2: Verify Network Connection

   [Detailed steps...]

   [etc.]
   ```

4. **Provide a summary:**
   ```
   Documentation Created:

   📄 docs/faq/wallet-sync-issues.md
      - 5 FAQ entries covering balance display issues
      - Links to troubleshooting guide

   📄 docs/guides/troubleshooting-sync.md
      - Complete troubleshooting workflow
      - 6 diagnostic steps
      - Platform-specific solutions

   📄 docs/faq/swap-issues.md
      - 4 FAQ entries for stuck swaps
      - Links to Fusion guide

   📄 docs/guides/fusion-troubleshooting.md
      - Guide for resolving stuck swap orders
      - Instructions for each provider

   📄 docs/guides/account-security.md
      - Security best practices
      - What to do if compromised
      - Prevention tips

   📄 docs/faq/security-faq.md
      - 3 security-related FAQs
      - Links to security guide

   Next steps:
   1. Review the generated documentation for accuracy
   2. Test all steps in the guides
   3. Add screenshots if needed
   4. Preview with: npm run start
   ```

### Step 4: Review and Iterate

After Claude generates the documentation:

```bash
# Start the dev server
npm run start

# Browse to http://localhost:3000
# Check the new documentation pages
```

If you need changes:

```
The sync troubleshooting guide looks good, but can you add a section
about firewall/antivirus issues? I see several tickets mentioning
that in the related tickets for ISS-003.
```

### Step 5: Continue with More Issues

Once satisfied with the first batch:

```
Great! Now let's document the next 5 priority issues:
- ISS-004: Flux Node Offline/Benchmark Failures (50 tickets)
- ISS-010: UTXO Insufficient Spendables (40 tickets)
- ISS-021: Portfolio Balance Display Issues (37 tickets)
- ISS-005: Lost Wallet / Recovery Issues (32 tickets)
- ISS-007: Withdrawal Pending Forever (30 tickets)

Follow the same process as before.
```

## Tips for Best Results

### 1. Be Specific About Context
```
✅ Good:
"Create documentation for ISS-003 which has 77 tickets about balance
sync issues. Focus on Smartify-related problems which appear in 45
of these tickets."

❌ Less effective:
"Document the sync issues."
```

### 2. Reference the Prompt
```
✅ Good:
"Using the templates in .claude/prompts/generate-docs-from-issues.md,
create a troubleshooting guide for ISS-004."

❌ Less effective:
"Write documentation for node issues."
```

### 3. Provide Feedback
```
✅ Good:
"The FAQ is great, but can you make the answers more beginner-friendly?
Explain what Smartify is before telling users to enable it."

❌ Less effective:
"Make it better."
```

### 4. Batch Similar Issues
```
✅ Good:
"Create documentation for all three swap-related issues (ISS-002,
ISS-007, ISS-015) together, since they're related."

❌ Less effective:
"Do ISS-002, then ISS-007, then ISS-015" (in separate requests)
```

## Example: Processing All FAQs

If you want to focus on creating all FAQ entries first:

```
I want to create FAQ documentation for all high-severity issues
with 10+ tickets. Based on documentation_plan.md, this includes:

1. ISS-003: Balances Not Displaying (77 tickets)
2. ISS-002: Swap Orders Stuck (74 tickets)
3. ISS-001: Accounts Compromised (65 tickets)
4. ISS-004: Flux Node Issues (50 tickets)
5. ISS-010: UTXO Issues (40 tickets)
6. ISS-021: Portfolio Display (37 tickets)

For each, create a focused FAQ entry following the FAQ template
in the generate-docs-from-issues prompt. Group related questions
together in the same file when it makes sense (e.g., all wallet
sync FAQs in one file).
```

## Example: Creating Get Started Documentation

For onboarding documentation:

```
Looking at documentation_plan.md, I see 4 issues tagged for
"Get Started" documentation. Let's create onboarding guides:

Review the issues tagged "Get Started" and create:
1. Initial wallet setup guide
2. First-time node installation guide
3. Account recovery guide

Use the "Get Started" template from the prompt, and ensure each
guide flows logically to the next step in the user journey.
```

## Verifying Documentation Quality

After generation, check:

```bash
# Build the site (catches broken links)
npm run build

# If successful, preview
npm run serve

# Check for:
# ✅ No broken internal links
# ✅ All images load
# ✅ Sidebar navigation works
# ✅ Search works (if enabled)
# ✅ Mobile responsive
```

## Final Workflow Summary

```bash
# 1. Process tickets (once)
npm run tickets:process

# 2. Create plan (once)
npm run docs:plan

# 3. Review plan
cat data/output/documentation_plan.md

# 4. Use Claude iteratively
# First iteration: Top 3-5 issues
# Second iteration: Next 5-10 issues
# Third iteration: Remaining issues
# Fourth iteration: Refinement and cross-linking

# 5. Build and review
npm run build
npm run serve

# 6. Deploy
npm run deploy
```

## Expected Timeline

For a dataset of 2,489 tickets with 38 identified issues:

- **Initial review** (you): 15-30 minutes
- **First batch** (5 issues): 20-30 minutes with Claude
- **Review and refine**: 15-20 minutes
- **Second batch** (10 issues): 30-45 minutes
- **Third batch** (remaining): 45-60 minutes
- **Final review and polish**: 30-45 minutes

**Total: 3-4 hours** to create comprehensive documentation for all issues.

## Advanced: Customizing the Process

You can modify the prompt for specific needs:

```
I want to modify the approach from the generate-docs-from-issues
prompt. Instead of creating separate FAQ files, let's create ONE
comprehensive FAQ organized by topic:

- Wallet & Balance Issues
- Swap & Exchange Issues
- Node & Infrastructure Issues
- Security & Recovery Issues

For each section, include the relevant questions from the top
priority issues, sorted by frequency (most tickets first).
```

---

This example workflow should give you a complete picture of how to use Claude Code effectively for documentation generation. Start small, iterate, and build up comprehensive documentation systematically.
