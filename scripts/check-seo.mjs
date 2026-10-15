#!/usr/bin/env node
// Post-build SEO checks. Usage: npm run build && npm run check:seo [-- --external]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { sitemapProblems, sitemapWarnings, shallowCloneProblem, pageProblems, faqParityProblems, decodeEntities } from './lib/seo-checks.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = path.join(root, 'build');
if (!fs.existsSync(buildDir)) {
  console.error('build/ not found. Run `npm run build` first.');
  process.exit(2);
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const problems = [];
const sitemapXml = fs.readFileSync(path.join(buildDir, 'sitemap.xml'), 'utf8');
problems.push(...sitemapProblems(sitemapXml));
for (const w of sitemapWarnings(sitemapXml)) console.warn(`warning: ${w}`);
let shallowOutput = null;
try {
  shallowOutput = execFileSync('git', ['rev-parse', '--is-shallow-repository'], { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
} catch {
  // git is not available or this is not a repository: skip silently
}
const shallow = shallowCloneProblem(shallowOutput);
if (shallow) problems.push(shallow);
const pages = walk(buildDir);
for (const file of pages) {
  problems.push(...pageProblems(fs.readFileSync(file, 'utf8'), path.relative(buildDir, file)));
}

let faqChecked = 0;
const faqDir = path.join(root, 'docs', 'faq');
for (const f of fs.readdirSync(faqDir).filter((n) => n.endsWith('.mdx'))) {
  const mdx = fs.readFileSync(path.join(faqDir, f), 'utf8');
  const imp = mdx.match(/from '@site\/src\/components\/FAQ\/schema-items\/([\w-]+)'/);
  if (!imp) {
    console.warn(`warning: docs/faq/${f} has no schema-items import, FAQ parity not checked`);
    continue;
  }
  faqChecked += 1;
  const ts = fs.readFileSync(path.join(root, 'src/components/FAQ/schema-items', `${imp[1]}.ts`), 'utf8');
  problems.push(...faqParityProblems(mdx, ts, f));
}

if (process.argv.includes('--external')) {
  const SKIP = /^(https?:\/\/)(www\.)?(twitter\.com|x\.com|linkedin\.com|t\.me|discord\.gg|youtube\.com)/;
  const links = new Set();
  for (const file of pages) {
    for (const m of fs.readFileSync(file, 'utf8').matchAll(/href="(https?:\/\/[^"#]+)/g)) {
      const href = decodeEntities(m[1]);
      if (!href.startsWith('https://docs.zelcore.io') && !SKIP.test(href)) links.add(href);
    }
  }
  for (const link of links) {
    try {
      const res = await fetch(link, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(15000) });
      if (res.status === 403 || res.status === 429) console.warn(`warning: external link ${res.status} (bot-blocked or rate-limited): ${link}`);
      else if (res.status >= 400) problems.push(`external link ${res.status}: ${link}`);
    } catch (err) {
      problems.push(`external link failed (${err.name}): ${link}`);
    }
  }
}

if (problems.length) {
  console.error(`check:seo found ${problems.length} problem(s) (${pages.length} pages, ${faqChecked} FAQ files checked):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log(`check:seo OK (${pages.length} pages, ${faqChecked} FAQ files checked)`);
