'use client';

import React, {useState, useEffect} from 'react';
import Title from '@/components/layout/title';
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

