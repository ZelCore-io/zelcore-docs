import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  sitemapProblems, sitemapWarnings, shallowCloneProblem, pageProblems, faqParityProblems, decodeEntities, headingText,
} from '../lib/seo-checks.mjs';

const url = (loc, lastmod) => `<url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`;
const sitemap = (...urls) => `<?xml version="1.0"?><urlset>${urls.join('')}</urlset>`;
const html = ({ title = 'Fine page | Zelcore Docs', head = '' } = {}) =>
  `<html><head><title>${title}</title>${head}</head><body></body></html>`;
const ld = (obj) => `<script data-rh="true" type="application/ld+json">${JSON.stringify(obj)}</script>`;

test('sitemap: flags search and template pages', () => {
  const xml = sitemap(url('https://docs.zelcore.io/search/'), url('https://docs.zelcore.io/markdown-page/'));
  const p = sitemapProblems(xml);
  assert.ok(p.some((m) => m.includes('/search/')));
  assert.ok(p.some((m) => m.includes('/markdown-page/')));
});

test('sitemap: identical lastmod on every URL is a warning, not a problem', () => {
  const urls = Array.from({ length: 12 }, (_, i) => url(`https://docs.zelcore.io/docs/p${i}/`, '2026-10-12'));
  const xml = sitemap(...urls);
  assert.deepEqual(sitemapProblems(xml), []);
  assert.ok(sitemapWarnings(xml).some((m) => m.includes('2026-10-12')));
});

test('sitemap: varied lastmod gives no warning', () => {
  const urls = Array.from({ length: 12 }, (_, i) => url(`https://docs.zelcore.io/docs/p${i}/`, `2026-0${(i % 3) + 1}-1${i % 9}`));
  assert.deepEqual(sitemapWarnings(sitemap(...urls)), []);
});

test('shallow clone: git output "true" is a problem', () => {
  assert.ok(shallowCloneProblem('true\n').includes('fetch-depth: 0'));
});

test('shallow clone: "false" and unavailable git are silent', () => {
  assert.equal(shallowCloneProblem('false\n'), null);
  assert.equal(shallowCloneProblem(null), null);
});

test('sitemap: accepts varied lastmod', () => {
  const urls = Array.from({ length: 12 }, (_, i) => url(`https://docs.zelcore.io/docs/p${i}/`, `2026-0${(i % 3) + 1}-1${i % 9}`));
  assert.deepEqual(sitemapProblems(sitemap(...urls)), []);
});

test('page: flags property="robots"', () => {
  const p = pageProblems(html({ head: '<meta data-rh="true" property="robots" content="noindex, follow">' }), 'x/index.html');
  assert.ok(p.some((m) => m.includes('property="robots"')));
});

test('page: search page must carry name="robots" noindex', () => {
  assert.ok(pageProblems(html(), 'search/index.html').some((m) => m.includes('noindex')));
  assert.deepEqual(pageProblems(html({ head: '<meta name="robots" content="noindex, follow">' }), 'search/index.html'), []);
});

test('page: flags unparseable JSON-LD', () => {
  const p = pageProblems(html({ head: '<script type="application/ld+json">{"@type": </script>' }), 'a/index.html');
  assert.ok(p.some((m) => m.includes('JSON-LD')));
});

test('page: breadcrumb items need trailing slash and at least 2 items', () => {
  const one = ld({ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'A', item: 'https://docs.zelcore.io/docs/a/' }] });
  assert.ok(pageProblems(html({ head: one }), 'a/index.html').some((m) => m.includes('at least 2')));
  const noSlash = ld({ '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Docs', item: 'https://docs.zelcore.io/' },
    { '@type': 'ListItem', position: 2, name: 'A', item: 'https://docs.zelcore.io/docs/a' }] });
  assert.ok(pageProblems(html({ head: noSlash }), 'a/index.html').some((m) => m.includes('trailing slash')));
});

test('page: title length uses decoded text', () => {
  const t = `${'a'.repeat(41)} &amp; b | Zelcore Docs`; // 41 + 4 + 15 = 60 decoded
  assert.deepEqual(pageProblems(html({ title: t }), 'a/index.html'), []);
  assert.ok(pageProblems(html({ title: `${'a'.repeat(46)} | Zelcore Docs` }), 'a/index.html').some((m) => m.includes('title')));
});

test('page: more than one og:type is flagged', () => {
  const head = '<meta property="og:type" content="website"><meta property="og:type" content="article">';
  assert.ok(pageProblems(html({ head }), 'a/index.html').some((m) => m.includes('og:type')));
});

test('page: client-redirect page without a title is fine', () => {
  const redirect = '<html><head><meta charset="UTF-8"><meta http-equiv="refresh" content="0; url=/docs/intro/"><link rel="canonical" href="/docs/intro/"></head><script>window.location.href="/docs/intro/"</script></html>';
  assert.deepEqual(pageProblems(redirect, 'docs/index.html'), []);
});

test('headingText strips markdown, ids and whitespace', () => {
  assert.equal(headingText('### Is **this** `fixed`?  {#is-fixed}'), 'Is this fixed?');
  assert.equal(decodeEntities('A &amp; B &#x27;c&#39; &quot;d&quot;'), `A & B 'c' "d"`);
});

test('faq parity: matching questions pass, drift fails both ways', () => {
  const mdx = '## Group\n\n### What is X?\n\n**Answer:** X.\n\n## Is **Y** fixed?\n\nYes.\n';
  const ok = 'const items = [\n  { question: `What is X?`, answer: `X.` },\n  { question: "Is Y fixed?", answer: "Yes." },\n];';
  assert.deepEqual(faqParityProblems(mdx, ok, 'demo'), []);
  const missing = 'const items = [\n  { question: `What is X?`, answer: `X.` },\n];';
  assert.ok(faqParityProblems(mdx, missing, 'demo').some((m) => m.includes('Is Y fixed?')));
  const extra = `${ok.slice(0, -2)}\n  { question: 'Gone?', answer: 'x' },\n];`;
  assert.ok(faqParityProblems(mdx, extra, 'demo').some((m) => m.includes('Gone?')));
});

test('page: search noindex check is attribute-order independent', () => {
  const swapped = '<meta content="noindex, follow" name="robots">';
  assert.deepEqual(pageProblems(html({ head: swapped }), 'search/index.html'), []);
  const split = '<meta name="robots" content="index"><meta name="x" content="noindex">';
  assert.ok(pageProblems(html({ head: split }), 'search/index.html').some((m) => m.includes('noindex')));
});

test('sitemap: invalid <loc> is a problem, not a crash', () => {
  const p = sitemapProblems(sitemap(url('not a url')));
  assert.ok(p.some((m) => m.includes('invalid <loc>') && m.includes('not a url')));
});

test('sitemap: banned paths match with or without trailing slash', () => {
  const p = sitemapProblems(sitemap(url('https://docs.zelcore.io/search'), url('https://docs.zelcore.io/markdown-page')));
  assert.ok(p.some((m) => m.includes('/search')));
  assert.ok(p.some((m) => m.includes('/markdown-page')));
  assert.deepEqual(sitemapProblems(sitemap(url('https://docs.zelcore.io/searching/'))), []);
});

test('page: breadcrumb items without a string item are ignored', () => {
  const head = ld({ '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Docs', item: { '@id': 'https://docs.zelcore.io/docs' } },
    { '@type': 'ListItem', position: 2, name: 'A' }] });
  assert.deepEqual(pageProblems(html({ head }), 'a/index.html'), []);
});

test('sitemap: more than 10 URLs and no lastmod is a problem', () => {
  const urls = Array.from({ length: 12 }, (_, i) => url(`https://docs.zelcore.io/docs/p${i}/`));
  assert.ok(sitemapProblems(sitemap(...urls)).some((m) => m.includes('no lastmod')));
  assert.deepEqual(sitemapProblems(sitemap(url('https://docs.zelcore.io/a/'))), []);
});

test('faq parity: headings inside fenced code are ignored; only \\` \\" \\\' \\\\ are unescaped', () => {
  const mdx = '## Real?\n\n```bash\n## not a heading?\n```\n';
  const ts = 'const i = [{ question: `Real?`, answer: `x` }];';
  assert.deepEqual(faqParityProblems(mdx, ts, 'demo'), []);
  const escMdx = '## Use \\n here?\n';
  const escTs = 'const i = [{ question: `Use \\\\n here?`, answer: `x` }];';
  assert.deepEqual(faqParityProblems(escMdx, escTs, 'demo'), []);
  const quote = '## Isn\'t "it" ok?\n';
  const quoteTs = "const i = [{ question: 'Isn\\'t \"it\" ok?', answer: 'x' }];";
  assert.deepEqual(faqParityProblems(quote, quoteTs, 'demo'), []);
});

test('page: property="robots" is accepted when a name="robots" tag is also present', () => {
  const both = '<meta name="robots" content="noindex, follow"><meta property="robots" content="noindex, follow">';
  assert.deepEqual(pageProblems(html({ head: both }), 'search/index.html'), []);
  const only = '<meta property="robots" content="noindex, follow">';
  assert.ok(pageProblems(html({ head: only }), 'x/index.html').some((m) => m.includes('property="robots"')));
});

test('brand: flags ZelCore in visible text but not in URLs or handles', () => {
  const page = (body) => `<html><head><title>T | Zelcore Docs</title></head><body>${body}</body></html>`;
  assert.ok(pageProblems(page('<p>Open ZelCore and…</p>'), 'a/index.html').some((m) => m.includes('ZelCore')));
  assert.deepEqual(pageProblems(page('<a href="https://github.com/ZelCore-io/x">GitHub</a>'), 'a/index.html'), []);
  assert.deepEqual(pageProblems(page('<p>github.com/ZelCore-io and @zelcore_io</p>'), 'a/index.html'), []);
  assert.deepEqual(pageProblems(page('<p>Zelcore is fine</p>'), 'a/index.html'), []);
});

test('brand: flags ZelCore in the title and in JSON-LD name and headline', () => {
  assert.ok(pageProblems(html({ title: 'ZelCore guide | Zelcore Docs' }), 'a/index.html').some((m) => m.includes('ZelCore')));
  const bad = ld({ '@type': 'FAQPage', name: 'About ZelCore', headline: 'ZelCore', mainEntity: [{ '@type': 'Question', name: 'What is ZelCore?', acceptedAnswer: { '@type': 'Answer', text: 'ZelCore is a wallet' } }] });
  assert.ok(pageProblems(html({ head: bad }), 'a/index.html').filter((m) => m.includes('JSON-LD')).length >= 1);
  const ok = ld({ '@type': 'Article', name: 'About Zelcore', headline: 'Zelcore', url: 'https://github.com/ZelCore-io/x' });
  assert.deepEqual(pageProblems(html({ head: ok }), 'a/index.html'), []);
});

test('brand: literal paths inside <code> and <pre> are exempt', () => {
  const page = (body) => `<html><head><title>T | Zelcore Docs</title></head><body>${body}</body></html>`;
  assert.deepEqual(pageProblems(page('<p>Delete <code>~/Library/Caches/ZelCore</code></p><pre><code>rm -rf /Applications/ZelCore.app</code></pre>'), 'a/index.html'), []);
});

test('page: flags links to zelcore.io/support', () => {
  const p = pageProblems(html({ head: '' }).replace('<body>', '<body><a href="https://zelcore.io/support">x</a>'), 'a/index.html');
  assert.ok(p.some((m) => m.includes('zelcore.io/support')));
});

test('page: flags zelcore.io/support sub-paths and single-quoted hrefs', () => {
  for (const a of ["<a href=\"https://zelcore.io/support/solutions\">x</a>", "<a href='https://zelcore.io/support'>x</a>"]) {
    const p = pageProblems(html({ head: '' }).replace('<body>', `<body>${a}`), 'a/index.html');
    assert.ok(p.some((m) => m.includes('zelcore.io/support')), a);
  }
});

test('page: does not flag look-alike zelcore.io/support URLs', () => {
  for (const a of ['<a href="https://zelcore.io/supported-assets">x</a>', '<a href="https://support.zelcore.io">x</a>']) {
    const p = pageProblems(html({ head: '' }).replace('<body>', `<body>${a}`), 'a/index.html');
    assert.ok(!p.some((m) => m.includes('zelcore.io/support')), a);
  }
});

test('page: accepts support.zelcore.io', () => {
  const p = pageProblems(html({ head: '' }).replace('<body>', '<body><a href="https://support.zelcore.io">x</a>'), 'a/index.html');
  assert.ok(!p.some((m) => m.includes('zelcore.io/support')));
});
