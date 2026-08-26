import {buildPageMetadata} from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Reservation',
  description: 'Book a stay at Chlois pool villa.',
  path: '/reservation/',
});

export default function ReservationLayout({children}: {children: React.ReactNode}) {
  return children;
}
