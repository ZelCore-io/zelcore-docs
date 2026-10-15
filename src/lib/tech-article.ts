export interface TechArticleInput {
  url: string;
  title: string;
  description?: string;
  lastUpdatedAt?: number; // ms since epoch; undefined for files with no git history yet
}

export function buildTechArticle({url, title, description, lastUpdatedAt}: TechArticleInput): Record<string, unknown> {
  const modified = typeof lastUpdatedAt === 'number' && Number.isFinite(lastUpdatedAt)
    ? new Date(lastUpdatedAt).toISOString()
    : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    ...(description ? {description} : {}),
    url,
    mainEntityOfPage: url,
    inLanguage: 'en',
    ...(modified ? {dateModified: modified} : {}),
    publisher: {'@id': 'https://zelcore.io/#organization'},
    about: {
      '@type': 'SoftwareApplication',
      name: 'Zelcore',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Windows, macOS, Linux, Android, iOS',
    },
  };
}
