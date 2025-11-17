import Head from 'next/head';

export default function Title({title}: { title?: string }) {
  // let pageTitle = `${title ? title + ' | ' : ''} chlois-fo`;
  let pageTitle = `Chlois`;
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
}
