'use client';

import React, {useState, useEffect, useRef, ReactElement} from 'react';
import dateUtil from '@/utils/date-util';
import MainService from '@/service/main-service';

export default function Page(): ReactElement {

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
      const res = await MainService.calendar({ year, month });
      const data = res.data;
      const daysArray = [] as any[];

      const firstDayOfMonth = getFirstDay(targetDate);
      const totalDaysInMonth = new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, 0).getDate();

      for (let i = 0; i < firstDayOfMonth; i++) {
        daysArray.push({ day: 0, reservations: [] });
      }

      for (let i = 1; i <= totalDaysInMonth; i++) {
        const dayStr = `${year}-${month}-${i.toString().padStart(2, '0')}`;
        const dayData = data.find((item: any) => item.day === dayStr);

        daysArray.push({
          day: i,
          reservations: dayData ? dayData.reservations.map((r: any) => ({
            price: r.price,
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

  const move = (direction: 'prev' | 'next') => {
    const newDate = new Date(calendar.date);
    newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    getList(newDate);
  };

  useEffect(() => {
    getList(new Date());
  }, []);

  return (
    <div id="calendar" className="wrapper-common">
      <div className="calendar-controls">
        <h2>
          <span className="icon" onClick={() => move('prev')}>&#xe046;</span>
          <span className="calendar-nav">
            {calendar.year} 년 {calendar.month} 월
          </span>
          <span className="icon" onClick={() => move('next')}>&#xe048;</span>
        </h2>
      </div>
      <div className="calendar-grid">
        {calendar.days.map((o: any, index) => (
          <div className="calendar-day" key={index}>
            <div className="day-number">{o.day > 0 ? o.day : ''}</div>
            {o.reservations.length > 0 && (
              <div>
                {o.reservations.map((rsv: any, rsvIndex: number) => (
                  <div key={rsvIndex} className="product">
                    <p className={getClassForOrderState(rsv.orderStateCode)}>
                      <span className="productName">{rsv.productName}</span>
                      <span className="price">{rsv.price}</span>
                      <span className="orderStateCode">{rsv.orderStateCode}</span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
