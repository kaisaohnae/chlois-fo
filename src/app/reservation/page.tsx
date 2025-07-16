'use client';

import React, {useState, useEffect} from 'react';
import {ReactElement} from 'react';
import ReservationCalendar from './reservation-calendar';
import Sns from "@/components/common/sns";
import Map from "@/components/common/map";
import Bank from "@/components/common/bank";
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
      <Sns/>
      <Map/>
      <Bank/>
    </div>
  );
}

