import fs from 'node:fs';
import path from 'node:path';
import { docUrlFromPath, parseFrontmatter, mdxToMarkdown, buildLlmsTxt, buildDocPage, buildFullTxt, safeOutPath } from '../../scripts/lib/llms.mjs';

export default function llmsPlugin(context) {
  return {
    name: 'llms-plugin',
    async postBuild({ outDir }) {
      const docsDir = path.join(context.siteDir, 'docs');
      const site = context.siteConfig.url;
      const docs = [];
      const sectionLabels = new Map([['', 'Start here']]);
      const walk = (dir) => {
        for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
          const p = path.join(dir, e.name);
          if (e.isDirectory()) walk(p);
          else if (e.name === '_category_.json') {
            const rel = path.relative(docsDir, dir);
            const cat = JSON.parse(fs.readFileSync(p, 'utf8'));
            sectionLabels.set(rel.split(path.sep)[0], cat.label || rel);
          } else if (/\.(md|mdx)$/.test(e.name) && !e.name.startsWith('_')) {
            const rel = path.relative(docsDir, p).split(path.sep).join('/');
            const { data, body } = parseFrontmatter(fs.readFileSync(p, 'utf8'));
            if (String(data.draft) === 'true' || String(data.unlisted) === 'true') continue;
            const url = docUrlFromPath(rel, data.slug ? String(data.slug) : undefined);
            docs.push({
              rel,
              url: `${site}${url}`,
              mdPath: `${url.replace(/\/$/, '')}.md`,
              mdUrl: `${site}${url.replace(/\/$/, '')}.md`,
              title: String(data.title || rel),
              description: String(data.description || ''),
              section: rel.includes('/') ? rel.split('/')[0] : '',
              markdown: mdxToMarkdown(body, `${site}${url}`),
              position: Number(data.sidebar_position ?? 999),
            });
          }
        }
      };
      walk(docsDir);
      docs.sort((a, b) => a.section.localeCompare(b.section) || a.position - b.position || a.rel.localeCompare(b.rel));
      const order = ['', 'getting-started', 'features', 'security', 'guides', 'walkthroughs', 'faq'];
      const keys = [...new Set([...order, ...docs.map((d) => d.section)])];
      const sections = keys.map((key) => ({ key, label: sectionLabels.get(key) || key }));

      for (const d of docs) {
        const target = safeOutPath(outDir, d.mdPath);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, buildDocPage(d));
      }
      fs.writeFileSync(path.join(outDir, 'llms.txt'), buildLlmsTxt(docs, sections));
      fs.writeFileSync(path.join(outDir, 'llms-full.txt'), buildFullTxt(docs));
    },
  };
}
