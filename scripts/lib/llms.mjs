// Pure helpers for /llms.txt, /llms-full.txt and per-doc Markdown copies.
export function docUrlFromPath(rel, slug) {
  if (slug && slug.startsWith('/')) return `/docs${slug.replace(/\/$/, '')}/`;
  const parts = rel.replace(/\.(md|mdx)$/, '').split('/');
  const last = parts[parts.length - 1];
  if (parts.length > 1 && (last === 'index' || last === 'README' || last === parts[parts.length - 2])) parts.pop();
  return `/docs/${parts.join('/')}/`;
}

export function parseFrontmatter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, body: src };
  const data = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    data[kv[1]] = v;
  }
  return { data, body: src.slice(m[0].length) };
}

export function mdxToMarkdown(body) {
  return body
    .split('\n')
    .filter((l) => !/^(import|export)\s/.test(l))
    .filter((l) => !/^\s*<[A-Z][\w.]*(\s[^>]*)?\/>\s*$/.test(l))
    .join('\n')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, (_, alt) => `[Screenshot: ${alt}]`)
    .replace(/\n{3,}/g, '\n\n')
    .trim();
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
