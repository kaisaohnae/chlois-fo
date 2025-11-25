'use client';

import React, {useEffect, useRef, useState} from 'react';
import useAlertStore from '@/store/use-alert-store';
import OrderService from "@/service/od/order-service";
import ReCAPTCHA from 'react-google-recaptcha';
import {isValidPhoneNumber} from '@/utils/valid-util';

type Props = {
  showFormPopup: boolean;
  setShowFormPopup: (value: boolean) => void;
  selectDate: string;
  room: any;
};

export default function ReservationFormPopup({showFormPopup, setShowFormPopup, selectDate, room}: Props) {
  const {showAlert, hideAlert} = useAlertStore();

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const initFormData = {
    productNo: 0,
    companyId: 'chlois',
    reserveDay: '',
    orderStateCode: '예약중',
    orderName: '',
    phoneNo: '',
    email: '',
    price: 0,
    addPrice: 0,
    salePrice: 0,
    headCount: 0,
    isHotWater: 'N',
    isPickup: 'N',
    isBBQ: 'N',
    isPet: 'N',
    memo: '',
  };

  const [formData, setFormData] = useState(initFormData);

  // Hook들은 항상 실행되어야 함 (조건문 안 X)
  useEffect(() => {
    if (showFormPopup && room) {
      setFormData(prev => ({
        ...prev,
        productNo: room.productNo,
        reserveDay: selectDate,
        price: room.price,
      }));
    } else {
      setFormData(initFormData);
    }
  }, [showFormPopup, selectDate, room]);

  const calculatePrice = (basePrice: number, headCount: number, isHotWater: string) => {
    let total = basePrice;
    const basePeople = 4;
    const extraPeople = headCount > basePeople ? headCount - basePeople : 0;
    total += extraPeople * 30000;
    if (isHotWater === 'Y') total += 50000;
    return total;
  };

  useEffect(() => {
    if (room && room.price) {
      console.log(room);
      const newPrice = calculatePrice(
        Number(room.price),
        Number(formData.headCount),
        formData.isHotWater
      );
      setFormData(prev => ({...prev, price: newPrice}));
    }
  }, [formData.headCount, formData.isHotWater, room]);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.headCount || formData.headCount == 0) {
      showAlert({message: '인원을 선택해주세요.'});
      return;
    }

    /*if (!formData.phoneNo) {
      showAlert({message: '전화번호를 입력해주세요.'});
      return;
    }*/

    if (!captchaValue) {
      showAlert({message: '로봇이 아님을 확인해주세요.'});
      return;
    }

    const res = await OrderService.saveOrder(formData);
    showAlert({
      message: res.message,
      buttons: [{
        type: 'on',
        text: '확인',
        callback: () => {
          hideAlert();
          if(res.success) {
            window.location.reload();
          }
        }
      }]
    });
  };

  // 조건부 렌더링
  if (!showFormPopup) return null;

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
                  name="productName"
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
                  name="reserveDay"
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
                  name="orderName"
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
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  maxLength={11}
                  required
                />
              </td>
            </tr>
            {/*<tr>
              <th>예약자 이메일</th>
              <td>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={30}
                />
              </td>
            </tr>*/}
            <tr>
              <th className="required">인원</th>
              <td>
                <select name="headCount" value={formData.headCount} onChange={handleChange} required>
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
                <p className="totalPrice">{formData.price} 원</p>
              </td>
            </tr>
            <tr>
              <th>기타 요청사항</th>
              <td>
                <textarea
                  name="memo"
                  maxLength={80}
                  value={formData.memo}
                  onChange={handleChange}
                ></textarea>
                <br/>
                {formData.memo?.length} / 80 자
              </td>
            </tr>
            <tr>
              <th className="required">로봇방지</th>
              <td>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LdtLfQrAAAAAB0hn015g6AG6oDkMR4e7RhywpMv"
                  onChange={handleCaptchaChange}
                />
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
