# Video to Guide Generator

Generate a markdown documentation guide with screenshots from a video file.

## Input
$ARGUMENTS

## Instructions

Read the skill file at `.claude/skills/video-to-guide/SKILL.md` for the full methodology.

Execute the following workflow:

### 1. Parse Arguments
Extract from $ARGUMENTS:
- Video file path (required, first positional arg)
- `--output` name (optional, default: derive from video filename)
- `--interval` seconds between frames (optional, default: 5)
- `--format` md or mdx (optional, default: md)

### 2. Validate Video
```bash
file "<video-path>"
ffprobe -v quiet -print_format json -show_format "<video-path>"
```

### 3. Calculate Frame Interval
Based on video duration:
- Under 2 minutes: use 3-5 second intervals
- 2-10 minutes: use 5-10 second intervals
- Over 10 minutes: use 10-15 second intervals

### 4. Extract Frames
```bash
mkdir -p ./tmp-frames
ffmpeg -i "<video-path>" -vf "fps=1/<interval>" -q:v 2 ./tmp-frames/frame_%03d.jpg
```

### 5. Analyze Content
View each frame sequentially using the `view` tool. Identify:
- The application or interface being demonstrated
- Each distinct step or action
- Important UI elements and interactions
- Logical groupings of frames into sections

### 6. Select Key Frames
Choose representative frames for each step. Not every frame is needed—select those showing:
- Starting states
- Key interactions
- Configuration/input screens
- Results or confirmations

### 7. Generate Output
Create output structure:
```
docs/walkthroughs/<output-name>/
├── index.md (or index.mdx)
└── images/
    ├── 01-descriptive-name.jpg
    ├── 02-descriptive-name.jpg
    └── ...
```

Copy selected frames with descriptive names to the images folder.

Generate markdown with:
- Docusaurus frontmatter (sidebar_position, title, description)
- Introduction section
- Step-by-step sections with screenshots
- Tables for options/settings where appropriate
- Summary section

### 8. Cleanup
```bash
rm -rf ./tmp-frames
```

### 9. Present Output
Use `present_files` to share the generated guide and confirm the images directory location.

## Output Format

The guide should follow this structure:

```markdown
---
sidebar_position: 1
title: [Descriptive Title]
description: [SEO description]
---

# [Guide Title]

[Introduction paragraph]

---

## [Step Name]

[Step description]

![Alt text](./images/01-name.jpg)

[Additional context]

---

## Summary

[Recap of what was covered]
```