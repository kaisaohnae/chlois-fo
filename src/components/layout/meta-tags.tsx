import Head from 'next/head';

export default function MetaTags() {
  return (
    <Head>
          <title>Chlois</title>
          <meta charSet="utf-8"/>
          <meta name="robots" content="index, follow"/>
          <meta name="googlebot" content="index, follow"/>
          <meta name="description" content="Chlois,끌로이스"/>
          <meta name="keywords" content="Chlois,끌로이스,가평펜션,가평풀빌라,풀빌라"/>
          <meta name="author" content="AnySSign"/>
          <meta name="apple-mobile-web-app-title" content="에이나"/>
          <meta property="og:title" content="에이나"/>
          <meta property="og:description" content="Chlois,끌로이스,가평펜션,가평풀빌라,풀빌라"/>
          <meta property="og:image" content="/img/common/logo.png"/>
          <link rel="canonical" href="https://www.anyssign.com/"/>
          <link rel="shortcut icon" href="/img/common/favicon.ico"/>
          <link rel="apple-touch-icon" href="/img/common/favicon.ico"/>
          <meta name="viewport" content="initial-scale=1.0,minimum-scale=0,maximum-scale=1.0,user-scalable=no"/>
          <meta name="format-detection" content="telephone=no, address=no, email=no"/>
          <meta name="application-name" content="Chlois"/>

          {/*<script async src="//www.googletagmanager.com/gtag/js?id=G-QLR7F582RW"/>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              window?.dataLayer?.push(arguments)
            }
            gtag('js', new Date());
            gtag('config', 'G-QLR7F582RW');
        </script>
        <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=3322a4d2abce512425b96866d9844fd1"/>
        <script src="//developers.kakao.com/sdk/js/kakao.min.js"/>*/}
          {/*<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=3322a4d2abce512425b96866d9844fd1"/>
          <script src="//developers.kakao.com/sdk/js/kakao.min.js"/>*/}
    </Head>
  );
}
