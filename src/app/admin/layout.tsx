import {buildPageMetadata} from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Admin',
  description: 'Chlois admin redirect.',
  path: '/admin/',
  index: false,
});

export default function AdminLayout({children}: {children: React.ReactNode}) {
  return children;
}
