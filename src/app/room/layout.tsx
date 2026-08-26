import {buildPageMetadata} from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Room',
  description: 'Chlois pool villa rooms and amenities.',
  path: '/room/',
});

export default function RoomLayout({children}: {children: React.ReactNode}) {
  return children;
}
