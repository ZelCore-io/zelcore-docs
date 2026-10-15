import { test } from 'node:test';
import assert from 'node:assert/strict';
import { docUrlFromPath, isFolderIndex, parseFrontmatter, mdxToMarkdown, buildLlmsTxt, buildDocPage, buildFullTxt, safeOutPath } from '../lib/llms.mjs';

test('docUrlFromPath handles files, folder index docs and slugs', () => {
  assert.equal(docUrlFromPath('intro.md'), '/docs/intro/');
  assert.equal(docUrlFromPath('guides/tron-wallet-guide.md'), '/docs/guides/tron-wallet-guide/');
  assert.equal(docUrlFromPath('walkthroughs/kaspa-wallet/index.md'), '/docs/walkthroughs/kaspa-wallet/');
  assert.equal(docUrlFromPath('faq/wallet-faq.mdx'), '/docs/faq/wallet-faq/');
  assert.equal(docUrlFromPath('walkthroughs/setup/x.md', '/walkthroughs/zelcore-setup-guide'), '/docs/walkthroughs/zelcore-setup-guide/');
});

test('parseFrontmatter reads quoted and bare values', () => {
  const { data, body } = parseFrontmatter('---\ntitle: Wallet FAQ\ndescription: "Balances, sync: and more."\nkeywords: [a, b]\n---\n\n# Hi\n');
  assert.equal(data.title, 'Wallet FAQ');
  assert.equal(data.description, 'Balances, sync: and more.');
  assert.equal(body.trim(), '# Hi');
});

test('mdxToMarkdown drops imports, JSX components and replaces images with alt text', () => {
  const src = [
    "import FAQJsonLd from '@site/src/components/FAQ/FAQJsonLd';",
    "import faqItems from '@site/src/components/FAQ/schema-items/wallet_faq';",
    '',
    '<FAQJsonLd items={faqItems} />',
    '',
    '## Step 1',
    '',
    '![Send form with a .kas name](./images/01-kns.webp)',
    '',
    'Text with <kbd>Ctrl</kbd>.',
  ].join('\n');
  const out = mdxToMarkdown(src);
  assert.ok(!out.includes('import '));
  assert.ok(!out.includes('<FAQJsonLd'));
  assert.ok(out.includes('[Screenshot: Send form with a .kas name]'));
  assert.ok(out.includes('Text with <kbd>Ctrl</kbd>.'));
});

test('buildLlmsTxt groups docs by section and links the Markdown copies', () => {
  const txt = buildLlmsTxt(
    [{ url: 'https://docs.zelcore.io/docs/intro/', mdUrl: 'https://docs.zelcore.io/docs/intro.md', title: 'Welcome', description: 'Start here.', section: '' },
     { url: 'https://docs.zelcore.io/docs/faq/wallet-faq/', mdUrl: 'https://docs.zelcore.io/docs/faq/wallet-faq.md', title: 'Wallet FAQ', description: 'Balances.', section: 'faq' }],
    [{ key: '', label: 'Start' }, { key: 'faq', label: 'FAQ' }],
  );
  assert.ok(txt.startsWith('# Zelcore Docs\n'));
  assert.ok(txt.includes('## FAQ\n\n- [Wallet FAQ](https://docs.zelcore.io/docs/faq/wallet-faq.md): Balances.'));
});

const INTRO = 'https://docs.zelcore.io/docs/intro/';
const GUIDE = 'https://docs.zelcore.io/docs/guides/some-guide/';

test('mdxToMarkdown rewrites relative links to absolute URLs', () => {
  const out = mdxToMarkdown('See [install](../getting-started/installation) and [faq](/docs/faq/wallet-faq/).', INTRO);
  assert.ok(out.includes('[install](https://docs.zelcore.io/docs/getting-started/installation/)'));
  assert.ok(out.includes('[faq](https://docs.zelcore.io/docs/faq/wallet-faq/)'));
  const g = mdxToMarkdown('Next: [Tron](./tron-wallet-guide.md#send) and [Bar](./bar.mdx).', GUIDE);
  assert.ok(g.includes('[Tron](https://docs.zelcore.io/docs/guides/tron-wallet-guide/#send)'));
  assert.ok(g.includes('[Bar](https://docs.zelcore.io/docs/guides/bar/)'));
});

test('mdxToMarkdown leaves absolute, mailto and anchor links alone', () => {
  const out = mdxToMarkdown('[a](#anchor) [b](https://zelcore.io/wallet) [c](mailto:x@y.z) [d](http://e.io/p)', INTRO);
  assert.equal(out, '[a](#anchor) [b](https://zelcore.io/wallet) [c](mailto:x@y.z) [d](http://e.io/p)');
});

test('mdxToMarkdown does not rewrite links inside code fences', () => {
  const out = mdxToMarkdown('```\n[x](../y)\n```', INTRO);
  assert.ok(out.includes('[x](../y)'));
});

test('safeOutPath rejects slugs that escape the output directory', () => {
  assert.equal(safeOutPath('/out', '/docs/a.md'), '/out/docs/a.md');
  assert.throws(() => safeOutPath('/out', '/docs/../../etc/x.md'), /outside/);
});

test('buildDocPage does not duplicate an H1 already in the body', () => {
  const withH1 = buildDocPage({ title: 'T', description: 'D', url: 'u', markdown: '\n# T\n\nbody' });
  assert.equal(withH1.match(/^# /gm).length, 1);
  const without = buildDocPage({ title: 'T', description: '', url: 'u', markdown: '## Sub\n\nbody' });
  assert.ok(without.startsWith('# T\n'));
});

test('buildFullTxt separates docs with a doc comment, not a rule', () => {
  const txt = buildFullTxt([{ title: 'A', description: '', url: 'https://x/a/', markdown: 'one' }, { title: 'B', description: '', url: 'https://x/b/', markdown: 'two' }]);
  assert.ok(txt.includes('<!-- doc: https://x/a/ -->\n# A'));
  assert.ok(txt.includes('<!-- doc: https://x/b/ -->\n# B'));
  assert.ok(!/^---$/m.test(txt));
});

test('parseFrontmatter handles escaped quotes, arrays and booleans via YAML', () => {
  const { data } = parseFrontmatter('---\ntitle: "Say \\"hi\\""\ndescription: \'It\'\'s fine\'\ndraft: true\ntags: [a, b]\n---\nbody');
  assert.equal(data.title, 'Say "hi"');
  assert.equal(data.description, "It's fine");
  assert.equal(data.draft, true);
  assert.deepEqual(data.tags, ['a', 'b']);
});

test('mdxToMarkdown converts admonitions to blockquotes', () => {
  const out = mdxToMarkdown(':::tip Pro Tip\nUse a seed.\n\nSecond para.\n:::\n\n:::warning\nCareful.\n:::', INTRO);
  assert.ok(out.includes('> **Tip \u2014 Pro Tip:**\n> Use a seed.\n>\n> Second para.'));
  assert.ok(out.includes('> **Warning:**\n> Careful.'));
  assert.ok(!out.includes(':::'));
});

test('docUrlFromPath resolves relative slugs against the source folder', () => {
  assert.equal(docUrlFromPath('guides/bar.md', 'foo'), '/docs/guides/foo/');
  assert.equal(docUrlFromPath('guides/bar.md', './foo/'), '/docs/guides/foo/');
  assert.equal(docUrlFromPath('guides/sub/bar.md', '../foo'), '/docs/guides/foo/');
  assert.equal(docUrlFromPath('bar.md', 'foo'), '/docs/foo/');
  assert.equal(docUrlFromPath('walkthroughs/x/index.md', 'foo'), '/docs/walkthroughs/x/foo/');
  assert.equal(docUrlFromPath('guides/bar.md', '/abs/path'), '/docs/abs/path/');
});

test('isFolderIndex recognises index, README and folder-named docs', () => {
  assert.equal(isFolderIndex('walkthroughs/kaspa/index.md'), true);
  assert.equal(isFolderIndex('walkthroughs/kaspa/README.mdx'), true);
  assert.equal(isFolderIndex('walkthroughs/kaspa/kaspa.md'), true);
  assert.equal(isFolderIndex('walkthroughs/kaspa/other.md'), false);
  assert.equal(isFolderIndex('intro.md'), false);
});

test('mdxToMarkdown resolves .md links in folder-index docs against the folder', () => {
  const page = 'https://docs.zelcore.io/docs/walkthroughs/kaspa/';
  const out = mdxToMarkdown('Next: [Send](./send.md) and [Up](../other.md).', page, { folderIndex: true });
  assert.ok(out.includes('[Send](https://docs.zelcore.io/docs/walkthroughs/kaspa/send/)'));
  assert.ok(out.includes('[Up](https://docs.zelcore.io/docs/walkthroughs/other/)'));
  // Non-index docs keep resolving against the source file's folder.
  const g = mdxToMarkdown('[Bar](./bar.md)', 'https://docs.zelcore.io/docs/guides/foo/');
  assert.ok(g.includes('[Bar](https://docs.zelcore.io/docs/guides/bar/)'));
});
