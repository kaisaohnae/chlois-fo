import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import '@/assets/css/lib/swiper-bundle.min.css'

import {AppProps} from 'next/app';

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
