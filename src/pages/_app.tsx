import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import '@/assets/css/slide.css'
import '@/assets/css/calendar.css'
import '@/assets/css/lib/swiper-bundle.min.css'

import {AppProps} from 'next/app';
import React from 'react';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return getLayout(
    <>
      <Component {...pageProps} />
    </>
  );
}
