'use client';

import React, {ReactElement, useEffect, useState} from 'react';
import ReservationCalendar from './reservation-calendar';

export default function Page(): ReactElement {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <ReservationCalendar/>
    </>
  );
}

