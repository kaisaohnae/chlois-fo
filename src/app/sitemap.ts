import type {MetadataRoute} from 'next';
import {absoluteUrl} from '@/config/site';

export const dynamic = 'force-static';

const PUBLIC_PAGES = ['/', '/room/', '/reservation/', '/qna/'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PUBLIC_PAGES.map(path => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
