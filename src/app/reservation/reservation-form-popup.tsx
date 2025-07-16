'use client';

import React, {useEffect, useState} from 'react';

type Props = {
  showFormPopup: boolean;
  setShowFormPopup: (value: boolean) => void;
  selectDate: string;
};

export default function ReservationFormPopup({showFormPopup, setShowFormPopup, selectDate}: Props) {
  const [formData, setFormData] = useState({
    roomNumber: '',
    statusCode: '',
    reservationDate: '',
    memberName: '',
    memberPhone: '',
    memberEmail: '',
    addCount1: '',
    addCount3: '',
    priceSum: '',
    description: '',
    captchaCode: ''
  });

  useEffect(() => {
    if (showFormPopup) {
      setFormData((prev) => ({
        ...prev,
        reservationDate: selectDate
      }));
      console.log('Reservation Date:', selectDate);
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
          <p className="txtGuide">1~2시간 이내에 입금하셔야 합니다. 미입금 시 예약이 자동 취소됩니다.</p>

          <input type="hidden" name="roomNumber" value={formData.roomNumber} readOnly required/>
          <input type="hidden" name="statusCode" value={formData.statusCode} readOnly required/>

          <table className="readT">
            <tbody>
            <tr>
              <th className="required">객실명</th>
              <td>{formData.roomNumber}</td>
            </tr>
            <tr>
              <th className="required">예약일</th>
              <td>
                <input
                  style={{width: '140px'}}
                  type="text"
                  name="reservationDate"
                  value={formData.reservationDate}
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
                  style={{width: '140px'}}
                  type="text"
                  name="memberName"
                  value={formData.memberName}
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
                  style={{width: '140px'}}
                  type="text"
                  name="memberPhone"
                  value={formData.memberPhone}
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
                  value={formData.memberEmail}
                  onChange={handleChange}
                  maxLength={30}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>인원</th>
              <td>
                <select name="addCount1" value={formData.addCount1} onChange={handleChange}>
                  {/* Populate options here */}
                </select>
              </td>
            </tr>
            <tr>
              <th>미온수 추가</th>
              <td>
                <div style={{height: '5px', width: '100%'}}></div>
                <select name="addCount3" value={formData.addCount3} onChange={handleChange}>
                  {/* Populate options here */}
                </select>
              </td>
            </tr>
            <tr>
              <th>금액</th>
              <td>
                <p className="text1">
                  국민은행 : <b className="font1">807502-04-127894</b><br/>예금주 : 최원호
                </p>
                <p><b className="price1">{formData.priceSum}</b> 원</p>
              </td>
            </tr>
            <tr>
              <th>기타 요청사항</th>
              <td>
                <textarea
                  name="description"
                  maxLength={80}
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
                <br/>
                {formData.description.length} / 80 자
              </td>
            </tr>
            <tr>
              <th className="required">자동등록방지</th>
              <td>
                <div className="captcha"></div>
                <input
                  name="captchaCode"
                  type="text"
                  value={formData.captchaCode}
                  onChange={handleChange}
                  maxLength={6}
                  style={{width: '65px', display: 'inline-block'}}
                  required
                />
                <button type="button" className="normal">새로고침</button>
              </td>
            </tr>
            </tbody>
          </table>

          <div className="btnWrap">
            <button type="submit">확인</button>
            <button type="button" onClick={() => setShowFormPopup(false)}>취소</button>
          </div>
        </form>
      </div>
    </div>
  );
}
