// Pure checks over built HTML, the sitemap and FAQ sources. No I/O here.
const MAX_TITLE = 60;
const BANNED_SITEMAP = ['/search', '/markdown-page'];

export function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
}

export function headingText(line) {
  return line
    .replace(/^#{1,6}\s+/, '')
    .replace(/\s*\{#[^}]*\}\s*$/, '')
    .replace(/\*\*|__|`/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

export function sitemapProblems(xml) {
  const problems = [];
  const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => m[1]);
  const locs = urls.map((u) => (u.match(/<loc>([^<]*)<\/loc>/) || [])[1] || '');
  for (const loc of locs) {
    let pathname;
    try {
      pathname = new URL(loc).pathname;
    } catch {
      problems.push(`sitemap has an invalid <loc>: ${loc}`);
      continue;
    }
    for (const bad of BANNED_SITEMAP) {
      if (pathname === bad || pathname.startsWith(`${bad}/`)) problems.push(`sitemap lists ${bad}/`);
    }
  }
  const lastmods = urls.map((u) => (u.match(/<lastmod>([^<]*)<\/lastmod>/) || [])[1]).filter(Boolean);
  if (urls.length > 10 && lastmods.length === 0) problems.push('sitemap has no lastmod');
  return problems;
}

// Identical lastmod everywhere is legitimate after a sitewide edit, so it only warns.
// A shallow clone is detected directly by shallowCloneProblem().
export function sitemapWarnings(xml) {
  const urls = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
  const lastmods = urls.map((u) => (u.match(/<lastmod>([^<]*)<\/lastmod>/) || [])[1]).filter(Boolean);
  if (lastmods.length > 10 && new Set(lastmods).size === 1) {
    return [`sitemap lastmod is ${lastmods[0]} on all ${lastmods.length} URLs (fine after a sitewide edit)`];
  }
  return [];
}

// gitOutput is the stdout of `git rev-parse --is-shallow-repository`, or null when git is unavailable.
export function shallowCloneProblem(gitOutput) {
  if (gitOutput && gitOutput.trim() === 'true') {
    return 'build ran in a shallow clone; lastmod would be wrong (use fetch-depth: 0)';
  }
  return null;
}

function jsonLdBlocks(html) {
  return [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
}

function nodes(obj) {
  if (Array.isArray(obj)) return obj.flatMap(nodes);
  if (obj && Array.isArray(obj['@graph'])) return obj['@graph'].flatMap(nodes);
  return obj ? [obj] : [];
}

// Text inside <code> and <pre> is exempt: it quotes literal file paths and identifiers (for example ~/Library/Caches/ZelCore).
// "ZelCore-io" is the GitHub org and may appear as visible text; any other "ZelCore" is a misspelled brand.
const BAD_BRAND = /\bZelCore\b(?!-io)/;
const BRAND_KEYS = new Set(['name', 'headline', 'text', 'description', 'alternateName']);

function brandInJsonLd(value, key = '') {
  if (Array.isArray(value)) return value.some((v) => brandInJsonLd(v, key));
  if (value && typeof value === 'object') return Object.entries(value).some(([k, v]) => brandInJsonLd(v, k));
  return typeof value === 'string' && BRAND_KEYS.has(key) && BAD_BRAND.test(value);
}

export function pageProblems(html, relPath) {
  const problems = [];
  const at = (msg) => problems.push(`${relPath}: ${msg}`);

  // The search plugin hard-codes an extra property="robots" tag; it is harmless once a real name="robots" tag exists.
  const hasNameRobots = /<meta[^>]*\sname="robots"/.test(html);
  if (!hasNameRobots && /<meta[^>]*\sproperty="robots"/.test(html)) at('uses property="robots" (search engines ignore it); use name="robots"');
  const hasNoindex = (html.match(/<meta\b[^>]*>/g) || []).some((tag) => /\bname="robots"/.test(tag) && /\bcontent="noindex/.test(tag));
  if (relPath === 'search/index.html' && !hasNoindex) {
    at('search page lacks <meta name="robots" content="noindex, ...">');
  }

  if (/href=["']https?:\/\/(?:www\.)?zelcore\.io\/support(?:[\/?#"'])/i.test(html)) at('links to zelcore.io/support (404); use https://support.zelcore.io');

  for (const raw of jsonLdBlocks(html)) {
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      at('JSON-LD does not parse');
      continue;
    }
    if (brandInJsonLd(parsed)) at('JSON-LD says "ZelCore"; brand is "Zelcore"');
    for (const node of nodes(parsed)) {
      if (node['@type'] !== 'BreadcrumbList') continue;
      const items = node.itemListElement || [];
      if (items.length < 2) at(`BreadcrumbList needs at least 2 items, has ${items.length}`);
      for (const it of items) {
        if (typeof it?.item === 'string' && !it.item.endsWith('/')) at(`breadcrumb item without trailing slash: ${it.item}`);
      }
    }
  }

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/);
  if (title) {
    const text = decodeEntities(title[1]).trim();
    if ([...text].length > MAX_TITLE) at(`title is ${[...text].length} chars (max ${MAX_TITLE}): ${text}`);
  }

  const visibleText = decodeEntities(
    html.replace(/<(script|style|pre|code)\b[\s\S]*?<\/\1>/g, '').replace(/<[^>]*>/g, ' '),
  );
  if (BAD_BRAND.test(visibleText)) at('visible text says "ZelCore"; brand is "Zelcore"');
  for (const tag of html.match(/<meta\b[^>]*>/g) || []) {
    const m = tag.match(/\b(?:name|property)="(description|keywords|og:title|og:description|twitter:title|twitter:description)"/);
    const c = tag.match(/\bcontent="([^"]*)"/);
    if (m && c && BAD_BRAND.test(decodeEntities(c[1]))) at(`meta ${m[1]} says "ZelCore"; brand is "Zelcore"`);
  }

  const ogTypes = html.match(/<meta[^>]*property="og:type"/g) || [];
  if (ogTypes.length > 1) at(`has ${ogTypes.length} og:type tags`);

  return problems;
}

export function faqParityProblems(mdx, schemaTs, name) {
  const problems = [];
  const headings = mdx
    .replace(/^```[\s\S]*?^```/gm, '')
    .split('\n')
    .filter((l) => /^#{2,3}\s/.test(l))
    .map(headingText);
  const headingSet = new Set(headings);
  const questions = [...schemaTs.matchAll(/question:\s*(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g)]
    .map((m) => m[1].slice(1, -1).replace(/\\([`"'\\])/g, '$1').replace(/\s+/g, ' ').trim());
  const questionSet = new Set(questions);
  for (const q of questions) if (!headingSet.has(q)) problems.push(`${name}: schema question not a heading on the page: "${q}"`);
  for (const h of headings) if (h.endsWith('?') && !questionSet.has(h)) problems.push(`${name}: question heading missing from schema: "${h}"`);
  return problems;
}
