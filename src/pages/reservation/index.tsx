import React, {useState, useEffect} from 'react';
import Title from '@/components/layout/title';
import RootLayout from '@/components/root-layout';
import {ReactElement} from 'react';
import ReservationCalendar from './reservation-calendar';

export default function Page(): ReactElement {
  const title = '';

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Title title={title}/>
      <ReservationCalendar/>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
