import {buildPageMetadata} from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Home',
  description: 'Chlois pool villa in Gapyeong.',
  path: '/main/',
  index: false,
});

export default function MainLayout({children}: {children: React.ReactNode}) {
  return children;
}
