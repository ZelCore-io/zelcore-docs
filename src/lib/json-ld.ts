// Serialise JSON-LD for a <script type="application/ld+json"> block. Escaping
// "<" stops a value containing "</script>" from ending the block early; the
// result is still valid JSON because < decodes back to "<".
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
