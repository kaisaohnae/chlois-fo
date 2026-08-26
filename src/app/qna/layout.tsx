import {buildPageMetadata} from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Q&A',
  description: 'Frequently asked questions about Chlois pool villa.',
  path: '/qna/',
});

export default function QnaLayout({children}: {children: React.ReactNode}) {
  return children;
}
