// Docusaurus' default breadcrumb JSON-LD omits the trailing slash and the docs
// home item. The DocBreadcrumbs wrapper emits the canonical list, so suppress
// the built-in one to avoid a duplicate, conflicting BreadcrumbList.
export default function DocBreadcrumbsStructuredData(): null {
  return null;
}
