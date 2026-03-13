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
- `--audio` flag (optional, default: off) — extract and transcribe audio narration to enhance the guide

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

### 4b. Extract and Transcribe Audio (only if `--audio` flag is set)

**Extract audio:**
```bash
mkdir -p ./tmp-audio
ffmpeg -i "<video-path>" -vn -acodec pcm_s16le -ar 16000 -ac 1 ./tmp-audio/audio.wav
```

**Transcribe** (try local whisper first, then API fallback):
```bash
# Option 1: Local whisper CLI
which whisper && whisper ./tmp-audio/audio.wav --model small --output_format json --output_dir ./tmp-audio/

# Option 2: OpenAI Whisper API (ask user before making API call)
curl -s https://api.openai.com/v1/audio/transcriptions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F file=@./tmp-audio/audio.wav \
  -F model=whisper-1 \
  -F response_format=verbose_json \
  -F "timestamp_granularities[]=segment" \
  > ./tmp-audio/audio.json
```

Parse the JSON to get timestamped transcript segments. Align each segment with the corresponding frame based on timestamps (frame N corresponds to time `(N-1) * interval` seconds).

See the SKILL.md "Audio Transcription" and "Using Transcript in Guide Writing" sections for full methodology.

### 5. Analyze Content
View each frame sequentially using the `view` tool. Identify:
- The application or interface being demonstrated
- Each distinct step or action
- Important UI elements and interactions
- Logical groupings of frames into sections

**If audio transcription is available:** Cross-reference each frame with its aligned transcript segments. The narrator's words provide context for what's happening on screen, correct terminology, and explanations of *why* each action is performed.

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
rm -rf ./tmp-frames ./tmp-audio
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