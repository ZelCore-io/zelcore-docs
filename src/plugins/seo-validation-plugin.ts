import type { LoadContext, Plugin } from '@docusaurus/types';
import * as fs from 'fs';
import * as path from 'path';

export default function seoValidationPlugin(context: LoadContext): Plugin {
  return {
    name: 'seo-validation-plugin',

    async contentLoaded() {
      const docsDir = path.join(context.siteDir, 'docs');
      const warnings: string[] = [];

      function walkDir(dir: string) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            if (entry.name === 'plans') continue;
            walkDir(fullPath);
          } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
            validateFile(fullPath);
          }
        }
      }

      function validateFile(filePath: string) {
        const content = fs.readFileSync(filePath, 'utf8');
        const relativePath = path.relative(context.siteDir, filePath);

        const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
        if (!fmMatch) {
          warnings.push(`[SEO] ${relativePath}: No frontmatter found`);
          return;
        }

        const fmContent = fmMatch[1];
        const hasDescription = /^description:/m.test(fmContent);
        const hasKeywords = /^keywords:/m.test(fmContent);
        const hasTitle = /^title:/m.test(fmContent);

        if (!hasDescription) {
          warnings.push(`[SEO] ${relativePath}: Missing 'description' in frontmatter`);
        }

        if (!hasKeywords) {
          warnings.push(`[SEO] ${relativePath}: Missing 'keywords' in frontmatter`);
        }

        if (hasDescription) {
          const descMatch = fmContent.match(/^description:\s*['"]?(.+?)['"]?\s*$/m);
          if (descMatch) {
            const desc = descMatch[1];
            if (desc.length > 160) {
              warnings.push(
                `[SEO] ${relativePath}: Description too long (${desc.length} chars, max 160)`,
              );
            }
            if (desc.length < 50) {
              warnings.push(
                `[SEO] ${relativePath}: Description too short (${desc.length} chars, min 50)`,
              );
            }
          }
        }

        if (hasTitle) {
          const titleMatch = fmContent.match(/^title:\s*['"]?(.+?)['"]?\s*$/m);
          if (titleMatch) {
            const title = titleMatch[1];
            if (title.length > 60) {
              warnings.push(
                `[SEO] ${relativePath}: Title too long (${title.length} chars, max 60)`,
              );
            }
          }
        }
      }

      walkDir(docsDir);

      if (warnings.length > 0) {
        console.warn('\n\u26a0\ufe0f  SEO Validation Warnings:');
        warnings.forEach((w) => console.warn(`  ${w}`));
        console.warn(`\n  Total: ${warnings.length} SEO warning(s)\n`);
      }
    },
  };
}
