import { getAllSlugs } from '@/lib/markdown'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs()
  const base = 'https://pdflow.pro'

  const featurePages = slugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: slug === 'edit-pdf-iphone' ? 0.9 : 0.8,
  }))

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...featurePages,
  ]
}
