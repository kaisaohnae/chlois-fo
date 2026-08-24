'use client';

import React, {useState, useEffect, useRef, ReactElement} from 'react';
import dateUtil from '@/utils/date-util';
import ReservationCalendarInfo from "@/app/reservation/reservation-calendar-info";
import RoomPriceInfo from "@/app/room/room-price-info";
import RoomInfo from "@/app/room/room-info";
import ReservationAgreePopup from "@/app/reservation/reservation-agree-popup";
import ReservationSelectPopup from "@/app/reservation/reservation-select-popup";
import ReservationFormPopup from "@/app/reservation/reservation-form-popup";
import OrderService from "@/service/od/order-service";

export default function Page(): ReactElement {

  const [showAgreePopup, setShowAgreePopup] = useState(false);
  const [showSelectPopup, setShowSelectPopup] = useState(false);
  const [showFormPopup, setShowFormPopup] = useState(false);

  const [room, setRoom]: any = useState({});
  const [rooms, setRooms]: any = useState([]);
  const [selectDate, setSelectDate]: any = useState({});

  const [calendar, setCalendar] = useState(() => {
    const date = new Date();
    return {
      date,
      year: dateUtil.format(date, 'YYYY'),
      month: dateUtil.format(date, 'MM'),
      days: [] as any[],
    };
  });

  const getClassForOrderState = (orderStateCode: any) => {
    switch (orderStateCode) {
      case '결제완료':
        return 'paid';
      case '예약중':
        return 'pending';
      case '예약가능':
        return 'available';
      default:
        return 'default';
    }
  };

  const getFirstDay = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getList = async (targetDate: Date) => {
    const year = dateUtil.format(targetDate, 'YYYY');
    const month = dateUtil.format(targetDate, 'MM');

    try {
      const res = await OrderService.calendar({year, month});
      const data = res.data;
      const daysArray = [] as any[];

      const firstDayOfMonth = getFirstDay(targetDate);
      const totalDaysInMonth = new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, 0).getDate();

      for (let i = 0; i < firstDayOfMonth; i++) {
        daysArray.push({day: 0, reservations: []});
      }

      for (let i = 1; i <= totalDaysInMonth; i++) {
        const dayStr = `${year}-${month}-${i.toString().padStart(2, '0')}`;
        const dayData = data.find((item: any) => item.day === dayStr);

        daysArray.push({
          day: i,
          reservations: dayData ? dayData.reservations.map((r: any) => ({
            price: r.price,
            displayPrice: r.displayPrice,
            productNo: r.productNo,
            productName: r.productName,
            orderStateCode: r.orderStateCode,
          })) : [],
        });
      }

      setCalendar({
        date: targetDate,
        year,
        month,
        days: daysArray,
      });

    } catch (err) {
      console.error(err);
    }
  };

  const canMovePrev = () => {
    const now = new Date();
    const prevDate = new Date(calendar.date);
    prevDate.setMonth(prevDate.getMonth() - 1);
    prevDate.setDate(1);

    const nowDate = new Date(now.getFullYear(), now.getMonth(), 1);
    return prevDate >= nowDate;
  };

  const move = (direction: 'prev' | 'next') => {
    const newDate = new Date(calendar.date);
    newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    newDate.setDate(1); // 날짜 비교 안정성을 위해 1일 고정

    const now = new Date();
    const nowDate = new Date(now.getFullYear(), now.getMonth(), 1);

    // 이전 달이 현재보다 과거면 차단
    if (direction === 'prev' && newDate < nowDate) {
      return;
    }
    const maxDate = new Date(nowDate);
    maxDate.setMonth(maxDate.getMonth() + 5);

    // 다음 달 이동 제한
    if (direction === 'next' && newDate > maxDate) {
      alert('5개월이내만 예약이 가능합니다.')
      return;
    }

    getList(newDate);
  };

  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    getList(new Date());
  }, []);

  return (
    <>
      <div id="calendar" className="reservation">

        <div className="calendar-controls">
          <h2>
            <span className={`icon ${!canMovePrev() ? 'disabled' : ''}`} onClick={() => move('prev')}>&#xe046;</span>
            <span className="calendar-nav">
            {calendar.year} 년 {calendar.month} 월
          </span>
            <span className="icon" onClick={() => move('next')}>&#xe048;</span>
          </h2>
        </div>


        <ReservationCalendarInfo/>

        <div className="calendar-grid">
          {calendar.days.map((o: any, index) => {
            const currentDate = new Date(calendar.date);
            const today = new Date();
            const thisDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), o.day);
            const isPastDay = o.day > 0 && thisDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
            return (
              <div
                className={`calendar-day ${isPastDay ? 'past' : ''}`}
                key={index}
              >
                <div className="day-number">{o.day > 0 ? o.day : ''}</div>
                {o.reservations.length > 0 && (
                  <>
                    {(() => {
                      const allReservable = o.reservations.every((rsv: any) => rsv.orderStateCode !== '예약가능');
                      return (
                        <>
                          <div className="mobile">
                            {allReservable ? <div className="soldout">예약<br/>마감</div> : <div className="possible" onClick={() => {
                              if (!allReservable && o.reservations.length > 0) {
                                setSelectDate(`${calendar.year}-${calendar.month}-${o.day.toString().padStart(2, '0')}`);
                                setRooms(o.reservations);
                                setShowSelectPopup(true);
                              }
                            }}>예약<br/>하기</div>}
                          </div>

                          {o.reservations.map((rsv: any, rsvIndex: number) => (
                            <div key={rsvIndex} className="product">
                              <p
                                className={getClassForOrderState(rsv.orderStateCode)}
                                onClick={() => {
                                  if (rsv.orderStateCode === '예약가능' && !isPastDay) {
                                    setSelectDate(`${calendar.year}-${calendar.month}-${o.day.toString().padStart(2, '0')}`);
                                    setRoom(rsv);
                                    setShowAgreePopup(true);
                                  }
                                }}
                              >
                                <span className="productName">{rsv.productName}</span>
                                <span className="price">{rsv.displayPrice}</span>
                              </p>
                            </div>
                          ))}
                        </>
                      );
                    })()}
                  </>
                )}
              </div>
            );
          })}

        </div>

        <ReservationCalendarInfo/>

        <RoomPriceInfo/>
        <RoomInfo/>

      </div>

      <ReservationSelectPopup showSelectPopup={showSelectPopup} setShowSelectPopup={setShowSelectPopup} rooms={rooms} onSelectComplete={(r) => {
        setRoom(r);
        setShowSelectPopup(false)
        setShowAgreePopup(true)
      }}/>

      <ReservationAgreePopup showAgreePopup={showAgreePopup} setShowAgreePopup={setShowAgreePopup} onAgreeComplete={() => {
        setShowAgreePopup(false)
        setShowFormPopup(true)
      }}/>

      <ReservationFormPopup showFormPopup={showFormPopup} setShowFormPopup={setShowFormPopup} selectDate={selectDate} room={room}/>

    </>
  );
}
