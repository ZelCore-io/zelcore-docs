import type {LoadContext, Plugin} from '@docusaurus/types';
import * as fs from 'fs';
import * as path from 'path';

// The self-hosted font files get content-hashed names at build time, so a
// static headTags entry cannot point at them. After the build, find the
// latin subsets and add a preload for each to every page, so the browser
// fetches them in parallel with the stylesheet instead of after it.
const PRELOAD = [/^inter-latin-wght-normal-.+\.woff2$/, /^space-grotesk-latin-wght-normal-.+\.woff2$/];

function walkHtml(dir: string, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

export default function fontPreloadPlugin(context: LoadContext): Plugin {
  return {
    name: 'font-preload-plugin',
    async postBuild({outDir}) {
      const fontsDir = path.join(outDir, 'assets', 'fonts');
      if (!fs.existsSync(fontsDir)) return;
      const files = fs.readdirSync(fontsDir);
      const tags = PRELOAD.flatMap((re) => files.filter((f) => re.test(f))).map(
        (f) =>
          `<link rel="preload" href="${context.baseUrl}assets/fonts/${f}" as="font" type="font/woff2" crossorigin>`,
      );
      if (tags.length !== PRELOAD.length) {
        throw new Error(`font-preload-plugin: expected ${PRELOAD.length} latin font files, found ${tags.length}`);
      }
      const block = tags.join('');
      for (const file of walkHtml(outDir)) {
        const html = fs.readFileSync(file, 'utf8');
        if (!html.includes('</head>') || html.includes('rel="preload" href="' + context.baseUrl + 'assets/fonts/')) continue;
        fs.writeFileSync(file, html.replace('</head>', `${block}</head>`));
      }
    },
  };
}
