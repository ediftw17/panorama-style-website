import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://panorama-style-hwox.vercel.app', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://panorama-style-hwox.vercel.app/events', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://panorama-style-hwox.vercel.app/gallery', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://panorama-style-hwox.vercel.app/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
  ]
}
