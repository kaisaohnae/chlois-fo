import React, {useState, useEffect} from 'react';
import {ReactElement} from 'react';

export default function ReservationCalendarInfo(): ReactElement {

  return (
    <div className="info">
      <ul>
        <li><span className="name">예약가능</span><span className="ico available"></span></li>
        <li><span className="name">예약중</span><span className="ico pending"></span></li>
        <li><span className="name">예약마감</span><span className="ico paid"></span></li>
      </ul>
    </div>
  );
}
