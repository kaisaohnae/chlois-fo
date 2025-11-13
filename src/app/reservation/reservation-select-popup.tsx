'use client';

import React, { useEffect, useState } from 'react';

type Room = {
  productName: string;
  price: string;
  productNo: string | number;
  orderStateCode: string;
  [key: string]: any;
};

type Props = {
  showSelectPopup: boolean;
  setShowSelectPopup: (show: boolean) => void;
  onSelectComplete: (room: Room) => void;
  rooms: Room[];
};

export default function ReservationSelectPopup({
                                                 showSelectPopup,
                                                 setShowSelectPopup,
                                                 rooms,
                                                 onSelectComplete,
                                               }: Props) {
  const [selectedProductNo, setSelectedProductNo] = useState<string | number | null>(null);

  const getClassForOrderState = (orderStateCode: string) => {
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

  const handleSelect = () => {
    const selectedRoom = rooms.find((r) => r.productNo === selectedProductNo);
    if (!selectedRoom) {
      alert('객실을 선택해주세요.');
      return;
    }
    onSelectComplete(selectedRoom);
    setShowSelectPopup(false);
  };

  useEffect(() => {
  }, [rooms]);

  if (!showSelectPopup) return null;

  return (
    <div className="reservation-select-popup">
      <div className="form">
        <h2>예약하실 객실을 선택해주세요.</h2>

        <div className="room-list">
          {rooms.map((room, index) => {
            const isDisabled = room.orderStateCode !== '예약가능';
            const inputId = `room-radio-${index}`;
            return (
              <label
                key={room.productNo || index}
                htmlFor={inputId}
                className={`room-option ${getClassForOrderState(room.orderStateCode)} ${isDisabled ? 'disabled' : ''}`}
              >
                <input
                  id={inputId}
                  type="radio"
                  name="room"
                  value={room.productNo}
                  disabled={isDisabled}
                  checked={selectedProductNo === room.productNo}
                  onChange={() => setSelectedProductNo(room.productNo)}
                />
                <span className="productName">{room.productName}</span>
                <span className="price">{room.price}</span>
                <span className="orderStateCode">{room.orderStateCode === '결제완료' ? '예약마감' : room.orderStateCode}</span>
              </label>
            );
          })}
        </div>

        <div className="button-wrapper">
          <button type="button" className="send" onClick={handleSelect}>
            예약하기
          </button>
          <button type="button" className="cancel" onClick={() => setShowSelectPopup(false)}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
