'use client';

import React, {useEffect, useState} from 'react';

type Props = {
  showFormPopup: boolean;
  setShowFormPopup: (value: boolean) => void;
  selectDate: string;
  room: any;
};

export default function ReservationFormPopup({showFormPopup, setShowFormPopup, selectDate, room}: Props) {
  const [formData, setFormData] = useState({
    productNo: 0,
    companyId: 'chlois',
    reserveDay: '',
    orderStateCode: '예약중',
    orderName: '최재호',
    phoneNo: '01073115111',
    email: '7083620@hanmail.net',
    price: 0,
    addPrice: 0,
    salePrice: 0,
    headCount: 0,
    isHotWater: 'N',
    isPickup: 'N',
    isBBQ: 'N',
    isPet: 'N',
    memo: '',
  });

  useEffect(() => {
    if (showFormPopup) {
      setFormData((prev) => ({
        ...prev,
        reservationDate: selectDate
      }));
      console.log('selectDate:', selectDate);
      console.log('room:', room);
    }
  }, [showFormPopup, selectDate]);

  if (!showFormPopup) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting reservation:', formData);
    // TODO: submit logic
  };

  return (
    <div className="reservation-form-popup">
      <div className="form">
        <form id="formReservation" onSubmit={handleSubmit}>
          <div className="btnClose" onClick={() => setShowFormPopup(false)}>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
          <p className="main-color">1~2시간 이내에 입금하셔야 합니다. 미입금 시 예약이 자동 취소됩니다.</p>

          <table className="order-write-table">
            <tbody>
            <tr>
              <th>객실명</th>
              <td>
                <input
                  type="text"
                  name="reservationDate"
                  value={room.productName}
                  readOnly
                  maxLength={15}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>예약일</th>
              <td>
                <input
                  type="text"
                  name="reservationDate"
                  value={formData.reserveDay}
                  readOnly
                  maxLength={15}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="required">예약자명</th>
              <td>
                <input
                  type="text"
                  name="memberName"
                  value={formData.orderName}
                  onChange={handleChange}
                  maxLength={15}
                  minLength={2}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="required">예약자 휴대폰번호</th>
              <td>
                <input
                  type="text"
                  name="memberPhone"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  maxLength={13}
                  required
                />
              </td>
            </tr>
            <tr>
              <th className="required">예약자 이메일</th>
              <td>
                <input
                  type="text"
                  name="memberEmail"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={30}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>인원</th>
              <td>
                <select name="headCount" value={formData.headCount} onChange={handleChange}>
                  <option value={0}>인원을 선택해주세요.</option>
                  {[...Array(8)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}명
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <th>미온수 추가</th>
              <td>
                <div style={{height: '5px', width: '100%'}}></div>
                <select name="isHotWater" value={formData.isHotWater} onChange={handleChange}>
                  <option value="N">추가안함</option>
                  <option value="Y">추가</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>금액</th>
              <td>
                <p className="text1">
                  국민은행 : <b className="main-color">807502-04-127894</b><br/>예금주 : 최원호
                </p>
                <p><b className="price1">{formData.price}</b> 원</p>
              </td>
            </tr>
            <tr>
              <th>기타 요청사항</th>
              <td>
                <textarea
                  name="description"
                  maxLength={80}
                  value={formData.memo}
                  onChange={handleChange}
                ></textarea>
                <br/>
                {formData.memo?.length} / 80 자
              </td>
            </tr>
            </tbody>
          </table>

          <div className="button-wrapper">
            <button type="submit">확인</button>
            <button type="button" onClick={() => setShowFormPopup(false)}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
}
