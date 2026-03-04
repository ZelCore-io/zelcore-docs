# Video to Guide Skill

Transform video tutorials and screen recordings into structured markdown documentation with screenshots.

## Overview

This skill extracts frames from videos, analyzes the content, and generates step-by-step documentation guides suitable for Docusaurus or any markdown-based documentation system.

## Requirements

- `ffmpeg` - For frame extraction
- `ffprobe` - For video metadata (included with ffmpeg)

## Workflow

### Frame Extraction Strategy

**Interval Selection by Duration:**

| Video Length | Recommended Interval | Expected Frames |
|--------------|---------------------|-----------------|
| < 1 min      | 2-3 seconds         | 20-30 frames    |
| 1-2 min      | 3-5 seconds         | 20-40 frames    |
| 2-5 min      | 5-7 seconds         | 25-60 frames    |
| 5-10 min     | 8-10 seconds        | 40-75 frames    |
| > 10 min     | 10-15 seconds       | Varies          |

**Extraction Command:**
```bash
ffmpeg -i "<input>" -vf "fps=1/<interval>" -q:v 2 ./frames/frame_%03d.jpg
```

### Frame Analysis

When viewing frames, identify:

1. **Application Context**
   - What software/website is shown?
   - What version or environment?

2. **User Actions**
   - Button clicks
   - Form inputs
   - Navigation changes
   - Menu interactions

3. **State Changes**
   - Before/after states
   - Loading → Complete transitions
   - Error states or validations

4. **Key Information**
   - Settings or configurations shown
   - Important text or messages
   - Data being entered or displayed

### Frame Selection Criteria

**Include frames showing:**
- Initial/welcome screens
- Navigation to new sections
- Form/input fields being filled
- Dropdown or modal interactions
- Confirmation dialogs
- Success/completion states
- Error messages (if relevant)
- Final results

**Skip frames showing:**
- Minimal changes from previous frame
- Loading spinners (unless documenting load times)
- Cursor movement without action
- Repeated similar states

### Guide Structure

```markdown
---
sidebar_position: N
title: Descriptive Title
description: One-line description for SEO and previews
keywords: [keyword1, keyword2]
---

# Main Title

Brief introduction (2-3 sentences) explaining:
- What this guide covers
- Who it's for
- What they'll accomplish

---

## Prerequisites (if applicable)

- Requirement 1
- Requirement 2

---

## Step 1: Step Title

Context for what we're doing and why.

![Descriptive alt text](./images/01-step-name.jpg)

Explanation of what's shown and any important details.

---

## Step 2: Next Step

Continue pattern...

---

## Summary

Recap of what was accomplished. Optional next steps or related guides.
```

### Image Naming Convention

```
XX-descriptive-name.jpg
```

Where:
- `XX` = Two-digit sequence number (01, 02, 03...)
- `descriptive-name` = Lowercase, hyphenated description

**Examples:**
- `01-welcome-screen.jpg`
- `02-click-get-started.jpg`
- `03-enter-credentials.jpg`
- `04-dashboard-overview.jpg`

### Output Directory Structure

For this Docusaurus project, visual walkthroughs go in the `walkthroughs` folder:

```
docs/
└── walkthroughs/
    └── <guide-name>/
        ├── index.md
        └── images/
            ├── 01-first-step.jpg
            ├── 02-second-step.jpg
            └── ...
```

Or flat structure:

```
docs/
└── walkthroughs/
    ├── <guide-name>.md
    └── images/
        └── <guide-name>/
            └── *.jpg
```

**Note:** Text-based guides without screenshots go in `docs/guides/`. Video-generated walkthroughs with screenshots go in `docs/walkthroughs/`.

## Writing Style Guidelines

1. **Be concise** - One action per step when possible
2. **Use active voice** - "Click the button" not "The button should be clicked"
3. **Highlight UI elements** - Use **bold** for buttons, menus, fields
4. **Include context** - Explain why, not just what
5. **Add tips** - Use blockquotes or admonitions for helpful hints

**Admonition syntax for Docusaurus:**
```markdown
:::tip
Helpful tip here
:::

:::warning
Important warning here
:::

:::info
Additional context here
:::
```

## Tables for Settings/Options

When the video shows configuration options:

```markdown
| Setting | Value | Description |
|---------|-------|-------------|
| Option A | Value | What it does |
| Option B | Value | What it does |
```

## Handling Different Video Types

**Software Tutorials:**
- Focus on UI element identification
- Note keyboard shortcuts shown
- Document menu paths

**Configuration Walkthroughs:**
- Capture all settings shown
- Use tables for option documentation
- Note default vs. changed values

**Installation Guides:**
- Document each installation step
- Note system requirements shown
- Capture version numbers

**Feature Demos:**
- Highlight key features
- Show before/after states
- Document use cases demonstrated