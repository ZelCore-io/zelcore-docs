import path from 'node:path';
import yaml from 'js-yaml';

// Pure helpers for /llms.txt, /llms-full.txt and per-doc Markdown copies.
export function docUrlFromPath(rel, slug) {
  if (slug && slug.startsWith('/')) return `/docs${slug.replace(/\/$/, '')}/`;
  const parts = rel.replace(/\.(md|mdx)$/, '').split('/');
  const last = parts[parts.length - 1];
  if (parts.length > 1 && (last === 'index' || last === 'README' || last === parts[parts.length - 2])) parts.pop();
  return `/docs/${parts.join('/')}/`;
}

export function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: src };
  const parsed = yaml.load(m[1]);
  const data = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  return { data, body: src.slice(m[0].length) };
}

const SCHEME = /^[a-z][a-z0-9+.-]*:/i;

function absolutizeHref(href, pageUrl) {
  if (!pageUrl || !href || href.startsWith('#') || href.startsWith('//') || SCHEME.test(href)) return href;
  const isDocFile = /\.mdx?(?=[#?]|$)/.test(href);
  const cleaned = href.replace(/\.mdx?(?=[#?]|$)/, '');
  // A .md link is relative to the source file (a sibling of the page folder);
  // any other link is relative to the page URL itself.
  const base = isDocFile ? pageUrl.replace(/\/$/, '') : pageUrl;
  const url = new URL(cleaned, base);
  const last = url.pathname.split('/').pop();
  if (last && !last.includes('.')) url.pathname += '/';
  return url.href;
}

function rewriteLinks(line, pageUrl) {
  return line.replace(/(\]\()([^)\s]+)((?:\s+"[^"]*")?\))/g, (_, open, href, close) => `${open}${absolutizeHref(href, pageUrl)}${close}`);
}

function convertAdmonitions(lines) {
  const out = [];
  let inFence = false;
  let open = false;
  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (!inFence) {
      const start = line.match(/^:::(tip|note|info|warning|danger|caution)\s*(?:\[(.*)\]|(.*))?$/);
      if (start && !open) {
        const kind = start[1][0].toUpperCase() + start[1].slice(1);
        const title = (start[2] ?? start[3] ?? '').trim();
        out.push(`> **${kind}${title ? ` \u2014 ${title}` : ''}:**`);
        open = true;
        continue;
      }
      if (open && line.trim() === ':::') {
        open = false;
        continue;
      }
      if (open) {
        out.push(line.trim() ? `> ${line}` : '>');
        continue;
      }
    }
    out.push(line);
  }
  return out;
}

export function mdxToMarkdown(body, pageUrl) {
  const kept = body
    .split('\n')
    .filter((l) => !/^(import|export)\s/.test(l))
    .filter((l) => !/^\s*<[A-Z][\w.]*(\s[^>]*)?\/>\s*$/.test(l));
  let inFence = false;
  const rewritten = convertAdmonitions(kept).map((line) => {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence || /^\s*(```|~~~)/.test(line)) return line;
    return rewriteLinks(line.replace(/!\[([^\]]*)\]\([^)]*\)/g, (_, alt) => `[Screenshot: ${alt}]`), pageUrl);
  });
  return rewritten.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

export function safeOutPath(outDir, mdPath) {
  const root = path.resolve(outDir);
  const target = path.resolve(root, `.${mdPath.startsWith('/') ? '' : '/'}${mdPath}`);
  if (target !== root && !target.startsWith(root + path.sep)) throw new Error(`Markdown copy path escapes outDir (outside): ${mdPath}`);
  return target;
}

export function buildDocPage(d) {
  const md = d.markdown.replace(/^\s+/, '');
  const h1 = md.match(/^#\s[^\n]*\n?/);
  const heading = h1 ? h1[0].trimEnd() : `# ${d.title}`;
  const rest = h1 ? md.slice(h1[0].length).replace(/^\s+/, '') : md;
  return `${heading}\n\n${d.description ? `> ${d.description}\n\n` : ''}Source: ${d.url}\n\n${rest}\n`;
}

export function buildFullTxt(docs) {
  return docs.map((d) => `<!-- doc: ${d.url} -->\n${buildDocPage(d)}`).join('\n');
}

export function buildLlmsTxt(docs, sections) {
  const out = [
    '# Zelcore Docs',
    '',
    '> Step-by-step manual for the Zelcore multi-chain, self-custodial wallet (desktop, mobile and browser extension): setup, restore, swaps, staking, troubleshooting and FAQs. Concepts and news: https://zelcore.io/academy. Product overview: https://zelcore.io.',
    '',
  ];
  for (const { key, label } of sections) {
    const inSection = docs.filter((d) => d.section === key);
    if (!inSection.length) continue;
    out.push(`## ${label}`, '');
    for (const d of inSection) out.push(`- [${d.title}](${d.mdUrl})${d.description ? `: ${d.description}` : ''}`);
    out.push('');
  }
  return out.join('\n');
}
