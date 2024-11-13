import React, {useState, useEffect, ReactElement} from 'react';
import RootLayout from '@/components/root-layout';
import dateUtil from '@/utils/dateUtil';
import MainService from '@/service/MainService';

export default function Page(): ReactElement {

  const [calendar, setCalendar] = useState({
    date: new Date(),
    year: dateUtil.format(new Date(), 'YYYY'),
    month: dateUtil.format(new Date(), 'MM'),
    days: [],
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

  const move = (direction: any) => {
    const newDate = new Date(calendar.date);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCalendar({
      ...calendar,
      date: newDate,
      year: dateUtil.format(newDate, 'YYYY'),
      month: dateUtil.format(newDate, 'MM'),
    });
    getList(newDate);
  };

  const getFirstDay = () => {
    return new Date(calendar.date.getFullYear(), calendar.date.getMonth(), 1).getDay();
  };

  const getList = (date = calendar.date) => {
    MainService.calendar({year: calendar.year, month: calendar.month}).then(
      (res) => {
        const data = res.data;
        const daysArray = [];
        const firstDayOfMonth = getFirstDay();
        const totalDaysInMonth = new Date(calendar.date.getFullYear(), calendar.date.getMonth() + 1, 0).getDate();
        for (let i = 0; i < firstDayOfMonth; i++) {
          daysArray.push({day: 0, reservations: []});
        }
        for (let i = 1; i <= totalDaysInMonth; i++) {
          const dayData = data.find((item: any) => item.day === `${calendar.year}-${calendar.month}-${i.toString().padStart(2, '0')}`);
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
        calendar.days = daysArray;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  useEffect(() => {
    getList();
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
        {calendar.days.map((o, index) => (
          <div className="calendar-day" key={index}>
            <div className="day-number">{o.day > 0 ? o.day : ''}</div>
            {o.reservations.length > 0 && (
              <div>
                {o.reservations.map((rsv, rsvIndex) => (
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

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
