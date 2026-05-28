import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://basamudera.or.id"
  const now = new Date()

  return [
    { url: base,                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/tentang`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/visi-misi`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/legalitas`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/kontak`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/dukung-kami`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ]
}
