# Generate Documentation from Support Issues

You are tasked with creating comprehensive documentation for ZelCore wallet and Flux ecosystem based on identified support issues from customer tickets.

## Context

You have access to `data/output/ticket_issues.json` which contains:
- Identified issues from support tickets
- Issue categorization (bug, feature, question, documentation)
- Severity levels (high, medium, low)
- Affected components
- Related ticket IDs

## Your Task

Process each issue systematically and create appropriate documentation based on the issue type and category:

### 1. Documentation Type Decision Matrix

For each issue, determine the appropriate documentation type:

**FAQs** - Create for:
- Questions category with medium/high severity
- Common user confusion or repeated questions
- Issues with 5+ related tickets
- Quick answers to specific problems

**Guides** - Create for:
- Complex workflows requiring step-by-step instructions
- Feature requests that are already implemented
- Issues involving multiple components
- Processes that need detailed explanation

**Get Started** - Create for:
- Installation/setup related issues
- Onboarding problems
- First-time user confusion
- Initial configuration issues

**Features** - Create for:
- Feature requests (document if exists, create feature proposal if not)
- Capability questions (e.g., "Can ZelCore do X?")
- Integration documentation
- Advanced functionality

**Bug Documentation** - Create for:
- Known issues and workarounds
- Troubleshooting guides
- Error message explanations
- Platform-specific problems

### 2. Documentation Structure Guidelines

#### For FAQs (`docs/faq/*.md`):
```markdown
---
sidebar_position: [auto-increment]
---

# [Category Name] FAQ

## [Question from issue title]

**Answer:**

[Clear, concise answer addressing the core issue]

**Related:**
- [Link to relevant guide if applicable]
- [Link to feature documentation if applicable]

---

## [Next question...]
```

#### For Guides (`docs/guides/*.md`):
```markdown
---
sidebar_position: [logical order]
---

# [Guide Title - Action-Oriented]

## Overview

[Brief description of what this guide covers and why it's needed]

## Prerequisites

- [List any requirements]
- [Tools or access needed]

## Step-by-Step Instructions

### Step 1: [Action]

[Detailed explanation with screenshots if needed]

### Step 2: [Action]

[Continue with clear steps]

## Common Issues

[Address problems mentioned in related tickets]

## Related Documentation

- [Links to related guides]
- [Links to FAQs]
```

#### For Get Started (`docs/get-started/*.md`):
```markdown
---
sidebar_position: [order in onboarding flow]
---

# [Getting Started Topic]

## Introduction

[Welcome message and what users will accomplish]

## Installation/Setup

### [Platform/Option 1]

[Clear instructions]

### [Platform/Option 2]

[Clear instructions]

## First Steps

1. [Initial action]
2. [Next action]

## Verification

[How to confirm successful setup]

## Next Steps

- [Link to next getting started topic]
- [Link to relevant guides]

## Troubleshooting

[Common setup issues from tickets]
```

#### For Features (`docs/features/*.md`):
```markdown
---
sidebar_position: [logical grouping]
---

# [Feature Name]

## Overview

[What this feature does and why it's useful]

## Availability

- **Platforms:** [Desktop/Mobile/Both]
- **Requirements:** [Any prerequisites]

## How to Use

[Clear instructions with examples]

## Advanced Usage

[Complex scenarios or configurations]

## Limitations

[Known limitations from tickets]

## FAQs

[Quick answers to common questions about this feature]

## Related Features

- [Links to related functionality]
```

### 3. Processing Workflow

For each issue in `ticket_issues.json`:

1. **Read the issue details:**
   - Title, description, severity, category
   - Affected components
   - Number of tickets (indicates commonality)
   - Related ticket IDs

2. **Review related tickets** (in `data/output/faq_tickets_combined.json`):
   - Read actual ticket content for context
   - Identify specific user problems
   - Note common patterns or confusion points
   - Extract technical details

3. **Determine documentation approach:**
   - Use the decision matrix above
   - Consider if documentation already exists (check existing docs)
   - Decide if this needs new documentation or updates to existing

4. **Create or update documentation:**
   - Follow the appropriate template
   - Use clear, user-friendly language
   - Include specific examples from tickets
   - Add troubleshooting for common problems
   - Cross-reference related documentation

5. **Track your progress:**
   - Mark issues as processed
   - Note any issues that need developer input
   - List documentation created/updated

### 4. Content Guidelines

**Writing Style:**
- Use active voice
- Write for non-technical users first
- Explain technical terms
- Provide context before detailed steps
- Use examples from actual tickets

**Structure:**
- Start with the problem/question
- Provide the solution/answer clearly
- Add details for those who need them
- Include troubleshooting at the end

**Technical Accuracy:**
- Verify feature availability before documenting
- Don't document bugs as features
- Mark known issues clearly
- Update if information is outdated

**User Focus:**
- Address actual user pain points from tickets
- Use language from tickets (then clarify technical terms)
- Provide multiple paths for different user levels
- Include visual aids where helpful

### 5. Prioritization

Process issues in this order:

1. **High severity + many tickets** (>10) - These affect most users
2. **Documentation category issues** - Clear gaps in existing docs
3. **Feature questions with many tickets** - Common capabilities
4. **Bug category with workarounds** - Help users immediately
5. **Medium severity questions** - General knowledge gaps
6. **Low severity / few tickets** - Complete coverage

### 6. Output Requirements

After processing all issues, provide:

1. **Summary Report:**
   - Total issues processed
   - Documentation files created (with paths)
   - Documentation files updated (with paths)
   - Issues requiring developer input
   - Issues skipped (with reasons)

2. **Documentation Map:**
   - List all new documentation with brief descriptions
   - Suggest sidebar organization
   - Recommend cross-links to add

3. **Gaps Identified:**
   - Topics that need documentation but lack enough info
   - Features mentioned in tickets but not verified
   - Areas needing technical review

## Example Workflow

```
Issue: "Node installation fails on Ubuntu 22.04"
- Category: bug, Severity: high, Tickets: 23
- Decision: Create troubleshooting guide

1. Read related tickets to understand specific errors
2. Identify common patterns (e.g., dependency issues, port conflicts)
3. Create: docs/guides/troubleshooting-node-installation.md
4. Include: Step-by-step diagnosis, solutions for each error
5. Cross-reference: Link from get-started/node-setup.md
6. Add FAQ: "Why won't my node install on Ubuntu 22.04?"
```

## Getting Started

1. Read `data/output/ticket_issues.json` to see all identified issues
2. Review the top 10 issues by ticket count (in the file)
3. Start with the highest priority issues
4. For each issue:
   - Read issue details
   - Review related tickets
   - Determine documentation type
   - Create/update documentation
   - Track progress

5. Maintain consistency with existing documentation style in `docs/`

## Notes

- The Docusaurus site uses MDX format
- Images should be placed in `static/img/`
- Use relative links for internal documentation
- Check `docusaurus.config.js` for site structure
- Test that all links work after creating documentation

## Questions to Consider

For each issue, ask yourself:
- Would this documentation prevent these support tickets?
- Is this explaining the "why" not just the "how"?
- Can a beginner understand this?
- Are there edge cases from tickets I should cover?
- What would I want to know if I encountered this issue?

---

Begin processing issues now. Start with a summary of the issue landscape, then proceed systematically through high-priority issues.
