import { MetadataRoute } from 'next';

const BASE = 'https://www.contractorscoo.com';

// Use static dates to prevent unnecessary crawls on every deploy
// Update these dates only when page content meaningfully changes
const LAUNCH = new Date('2026-02-22');
const SEO_UPDATE = new Date('2026-02-27');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: SEO_UPDATE,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/offer`,
      lastModified: LAUNCH,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/proof`,
      lastModified: LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/about`,
      lastModified: LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/contact`,
      lastModified: LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/monday-agenda`,
      lastModified: LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/fractional-coo-contractors`,
      lastModified: LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/contractor-operations-system`,
      lastModified: LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/owner-bottleneck`,
      lastModified: LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/contractor-growing-pains`,
      lastModified: LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/fractional-coo-vs-eos`,
      lastModified: LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
