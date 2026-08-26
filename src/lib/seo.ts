import type {Metadata} from 'next';
import {absoluteUrl, SITE_DESCRIPTION, SITE_NAME} from '@/config/site';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const isSiteRoot = title === SITE_NAME;

  return {
    title: isSiteRoot ? {absolute: SITE_NAME} : title,
    description,
    alternates: {canonical: url},
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: isSiteRoot ? SITE_NAME : `${title} · ${SITE_NAME}`,
      description,
      url,
      locale: 'ko_KR',
    },
    twitter: {
      card: 'summary',
      title: isSiteRoot ? SITE_NAME : `${title} · ${SITE_NAME}`,
      description,
    },
    robots: index ? {index: true, follow: true} : {index: false, follow: false},
  };
}

export function homePageMetadata(): Metadata {
  return buildPageMetadata({title: SITE_NAME, description: SITE_DESCRIPTION, path: '/'});
}

export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: absoluteUrl('/'),
  };
}

export function pageJsonLd(title: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${title} · ${SITE_NAME}`,
    description,
    url: absoluteUrl(path),
    isPartOf: {'@type': 'WebSite', name: SITE_NAME, url: absoluteUrl('/')},
  };
}
