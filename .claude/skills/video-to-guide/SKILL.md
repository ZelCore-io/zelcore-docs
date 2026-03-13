# Video to Guide Skill

Transform video tutorials and screen recordings into structured markdown documentation with screenshots.

## Overview

This skill extracts frames from videos, analyzes the content, and generates step-by-step documentation guides suitable for Docusaurus or any markdown-based documentation system. Optionally, it can extract and transcribe audio narration to produce richer, more accurate guides.

## Requirements

- `ffmpeg` - For frame extraction and audio extraction
- `ffprobe` - For video metadata (included with ffmpeg)

**For audio transcription (optional, only when `--audio` is used):**
- `whisper` CLI (preferred) - Local transcription via OpenAI's open-source Whisper model
  - Install: `pip install openai-whisper` or `pipx install openai-whisper`
- OR `OPENAI_API_KEY` env var set - Falls back to OpenAI Whisper API ($0.006/minute)

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

### Audio Transcription (Optional — only when `--audio` flag is used)

When the user requests audio transcription, extract and transcribe the audio track to provide narrator context for each step. This dramatically improves guide quality for videos with spoken narration.

**Step 1: Extract Audio**

```bash
mkdir -p ./tmp-audio
ffmpeg -i "<input>" -vn -acodec pcm_s16le -ar 16000 -ac 1 ./tmp-audio/audio.wav
```

**Step 2: Check for Audio Content**

Verify the extracted audio isn't silent (some screen recordings have no audio):
```bash
ffprobe -v quiet -print_format json -show_streams -select_streams a "<input>"
```
If no audio stream exists, inform the user and proceed with visual-only analysis.

**Step 3: Transcribe**

Try transcription tools in this priority order:

**Priority 1 — Local `whisper` CLI (preferred, no API cost):**
```bash
which whisper && whisper ./tmp-audio/audio.wav --model small --output_format json --output_dir ./tmp-audio/
```
- Use `small` model for good balance of speed and accuracy
- Use `medium` or `large` for longer or complex audio (ask user if unsure)
- Output: `./tmp-audio/audio.json` with timestamped segments

**Priority 2 — OpenAI Whisper API (fallback, requires `OPENAI_API_KEY`):**
```bash
curl -s https://api.openai.com/v1/audio/transcriptions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F file=@./tmp-audio/audio.wav \
  -F model=whisper-1 \
  -F response_format=verbose_json \
  -F "timestamp_granularities[]=segment" \
  > ./tmp-audio/audio.json
```
- Cost: ~$0.006 per minute of audio
- Ask user for confirmation before making API call
- If audio file exceeds 25MB, split it first:
  ```bash
  ffmpeg -i ./tmp-audio/audio.wav -f segment -segment_time 600 -c copy ./tmp-audio/chunk_%03d.wav
  ```
  Then transcribe each chunk and merge results.

**If neither is available:** Inform the user that no transcription tool was found. Offer to proceed with visual-only analysis or suggest installing whisper (`pip install openai-whisper`).

**Step 4: Parse Transcript**

The JSON output contains timestamped segments:
```json
{
  "text": "full transcript text...",
  "segments": [
    { "start": 0.0, "end": 4.5, "text": "Welcome to this tutorial..." },
    { "start": 4.5, "end": 9.2, "text": "First, click on the settings icon..." }
  ]
}
```

**Step 5: Align Transcript with Frames**

Each extracted frame has an implicit timestamp:
- `frame_001.jpg` → timestamp = `0 * interval` seconds
- `frame_002.jpg` → timestamp = `1 * interval` seconds
- `frame_NNN.jpg` → timestamp = `(NNN-1) * interval` seconds

For each frame, collect all transcript segments that overlap with the frame's time window:
- Frame at time `T` covers the window `[T, T + interval)`
- Include any segment where `segment.start < T + interval AND segment.end > T`

### Using Transcript in Guide Writing

When audio transcription is available, use it to enhance the guide:

1. **Step titles** — Use the narrator's own words for step names when they describe actions clearly
2. **Step descriptions** — Incorporate verbal explanations as written context. The narrator often explains *why* something is done, not just *what*
3. **Exact terminology** — Use the same terms the narrator uses for features, buttons, and concepts
4. **Tips and warnings** — Verbal asides like "make sure you..." or "be careful not to..." become admonitions
5. **Transitions** — The narrator's flow between topics helps identify where to split or merge steps
6. **Missing visual context** — Sometimes the narrator explains something not visible on screen (e.g., "behind the scenes, this is doing X")

**Do NOT** simply dump transcript text into the guide. Rewrite narration into concise documentation style following the Writing Style Guidelines below.

**Transcript-enhanced step example:**
```markdown
## Step 3: Configure the Network Settings

The network configuration determines how your node communicates with the blockchain.

![Network settings panel](./images/03-network-settings.jpg)

Select **Mainnet** from the **Network** dropdown. As noted in the walkthrough, using Testnet is recommended for first-time setup to avoid risking real assets.

:::tip
You can switch between networks later without losing your configuration.
:::
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