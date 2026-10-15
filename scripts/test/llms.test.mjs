import { test } from 'node:test';
import assert from 'node:assert/strict';
import { docUrlFromPath, parseFrontmatter, mdxToMarkdown, buildLlmsTxt } from '../lib/llms.mjs';

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
