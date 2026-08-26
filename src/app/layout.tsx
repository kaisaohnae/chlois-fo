import type {Metadata} from 'next';
import '@/assets/css/reset.css';
import '@/assets/css/common.css';
import '@/assets/css/slide.css';
import '@/assets/css/calendar.css';
import '@/assets/css/main.css';
import '@/assets/css/room.css';
import '@/assets/css/reservation.css';
import '@/assets/css/qna.css';
import '@/assets/css/lib/swiper-bundle.min.css';
import GoogleAnalytics from '@/components/layout/google-analytics';
import Alert from '@/components/alert';
import Loading from '@/components/loading';
import LayoutSub from '@/app/layout-sub';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {getSiteUrl, SITE_DESCRIPTION, SITE_NAME} from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {index: true, follow: true},
  other: {
    'naver-site-verification': '462c521e76be63d2770fcbfde01c520476fd4adf',
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ko">
      <body>
        <GoogleAnalytics />
        <Header />
        <LayoutSub>{children}</LayoutSub>
        <Footer />
        <Alert />
        <Loading />
      </body>
    </html>
  );
}
