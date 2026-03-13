# Video to Guide - Claude Code Skill

Generate markdown documentation guides with screenshots from video tutorials.

## Installation

Copy the `.claude` directory to your Docusaurus project root:

```bash
cp -r .claude /path/to/your/docusaurus-project/
```

Your project structure should look like:

```
your-docusaurus-project/
├── .claude/
│   ├── commands/
│   │   └── video-to-guide.md
│   └── skills/
│       └── video-to-guide/
│           └── SKILL.md
├── docs/
├── docusaurus.config.js
└── ...
```

## Requirements

**Required:**

Ensure `ffmpeg` is installed on your system:

```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt install ffmpeg

# Windows (with chocolatey)
choco install ffmpeg
```

**Optional (for audio transcription):**

For the `--audio` flag, you need one of:

```bash
# Option 1: OpenAI Whisper API (recommended)
export OPENAI_API_KEY=sk-...

# Option 2: Local whisper CLI (free, but heavier setup)
pip install openai-whisper
# or
pipx install openai-whisper
```

**Which transcription option should I use?**

| Factor | OpenAI Whisper API | Local `whisper` CLI |
|--------|-------------------|---------------------|
| **Cost** | ~$0.006/min (~$0.03 for a 5-min video) | Free |
| **Setup** | Just set `OPENAI_API_KEY` | Requires Python + PyTorch (~2-5GB) |
| **Speed** | Fast (seconds) | Slow on CPU, decent on GPU |
| **Quality** | Consistently good (`large-v2` model) | Depends on model size chosen |
| **Reliability** | Just works | Can have dependency issues (torch versions, CUDA) |

The API is the recommended option unless you have privacy concerns or process videos frequently enough for costs to matter.

## Usage

In Claude Code, use the slash command:

```
/video-to-guide path/to/video.mov
```

### Options

```
/video-to-guide <video-file> [--output <name>] [--interval <seconds>] [--format <md|mdx>] [--audio]
```

| Option | Default | Description |
|--------|---------|-------------|
| `--output` | Video filename | Output guide name |
| `--interval` | 5 | Seconds between frame extraction |
| `--format` | md | Output format (md or mdx) |
| `--audio` | off | Extract and transcribe audio narration to enhance the guide |

### Examples

Basic usage:
```
/video-to-guide ./recordings/setup-tutorial.mov
```

With custom output name:
```
/video-to-guide ./recordings/setup-tutorial.mov --output getting-started
```

For a longer video with less frequent screenshots:
```
/video-to-guide ./recordings/full-demo.mp4 --interval 10
```

With audio transcription for narrated videos:
```
/video-to-guide ./recordings/setup-tutorial.mov --audio
```

MDX format for Docusaurus with React components:
```
/video-to-guide ./recordings/feature-tour.mov --format mdx
```

## Output

The command generates visual walkthroughs in:

```
docs/walkthroughs/<output-name>/
├── index.md
└── images/
    ├── 01-step-name.jpg
    ├── 02-step-name.jpg
    └── ...
```

**Note:** This repo separates text-based `guides/` from visual `walkthroughs/` with screenshots.

## How It Works

1. **Extracts frames** from the video at regular intervals using ffmpeg
2. **Extracts and transcribes audio** (optional, with `--audio`) using local Whisper or OpenAI API
3. **Analyzes each frame** to understand the UI and actions shown, cross-referencing with transcript when available
4. **Selects key frames** that represent distinct steps
5. **Generates markdown** with proper structure, frontmatter, and image references — enriched with narrator context when audio is used
6. **Organizes output** in a Docusaurus-compatible directory structure

## Customization

### Adjusting the Skill

Edit `.claude/skills/video-to-guide/SKILL.md` to:
- Change default intervals
- Modify output structure
- Update writing style guidelines
- Add project-specific conventions

### Adjusting the Command

Edit `.claude/commands/video-to-guide.md` to:
- Change default options
- Modify output paths
- Add additional processing steps

## Tips

- **Short videos** (< 2 min): Use 3-5 second intervals for more detail
- **Long videos** (> 10 min): Use 10-15 second intervals, or split into multiple guides
- **Complex UIs**: Use shorter intervals to catch subtle changes
- **Simple flows**: Use longer intervals to avoid redundant screenshots

## License

MIT