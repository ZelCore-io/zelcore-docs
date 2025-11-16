# ZelCore Documentation

Official documentation and knowledgebase for ZelCore, built with [Docusaurus](https://docusaurus.io/).

## About

This repository contains the source code for the ZelCore documentation website. It provides guides, tutorials, and reference materials for ZelCore users and developers.

## Installation

Install dependencies:

```bash
npm install
```

## Local Development

Start the local development server:

```bash
npm start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

## Build

Generate static content for production:

```bash
npm run build
```

This command generates static content into the `build` directory that can be served using any static content hosting service.

## Deployment

Deploy to GitHub Pages using SSH:

```bash
USE_SSH=true npm run deploy
```

Or without SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

## Contributing

Contributions to improve the documentation are welcome. Please ensure your changes are accurate and follow the existing documentation style.

## Technology Stack

- **Framework**: Docusaurus 3.9.2
- **Language**: TypeScript
- **Node Version**: ≥20.0

## License

See the LICENSE file for details.