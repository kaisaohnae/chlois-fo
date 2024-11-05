import React, {ReactElement, useEffect} from 'react';
import {NextRouter, useRouter} from 'next/router';
import {usePathname} from 'next/navigation';

export default function Index() {
  const router: NextRouter = useRouter();
  let pathname = usePathname();
  useEffect(() => {
    if (!pathname || pathname === '/' || pathname === '/main/') {
      router.push('/main/');
    }
  }, []);
  return <></>;
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
