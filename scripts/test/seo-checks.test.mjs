import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  sitemapProblems, pageProblems, faqParityProblems, decodeEntities, headingText,
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

test('sitemap: flags identical lastmod on every URL when there are more than 10', () => {
  const urls = Array.from({ length: 12 }, (_, i) => url(`https://docs.zelcore.io/docs/p${i}/`, '2026-10-12'));
  assert.ok(sitemapProblems(sitemap(...urls)).some((m) => m.includes('lastmod')));
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
