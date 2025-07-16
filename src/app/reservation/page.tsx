'use client';

import React, {ReactElement, useEffect, useState} from 'react';
import ReservationCalendar from './reservation-calendar';
import RoomPriceInfo from "@/app/room/room-price-info";
import RoomInfo from "@/app/room/room-info";

export default function Page(): ReactElement {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="reservation">
      <ReservationCalendar/>
      <RoomPriceInfo/>
      <RoomInfo/>
    </div>
  );
}

