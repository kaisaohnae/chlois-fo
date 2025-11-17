'use client';

import React, {ReactElement, useEffect, useState} from 'react';

export default function Page(): ReactElement {
  const [isEvent, setEvent] = useState(true);
  const [isPickup, setPickup] = useState(true);
  useEffect(() => {
  }, []);
  const closeEvent = () => {
    setEvent(false);
  };
  const closePickup = () => {
    setPickup(false);
  };
  return (
    <div>
      <div className="layerMain openEvent" style={{display: isEvent ? 'block' : 'none'}}>
        <div className="box">
          <img src={'/img/popup/btn-close.png'} className="close" onClick={closeEvent} alt=''/>
          <h5>끌로이스 전화예약 할인이벤트</h5>
          <p>
            전화예약 할인이벤트<br/>
            전화예약시 온라인최저가 예약 할인이벤트진행중!!!<br/>
            <a href="tel:01071902632">펜션전화클릭 : <b>010-7190-2632</b></a><br/>
            ☆오픈이벤트로 진행되던 샌드위치 or 빵 제공 이벤트가 24년12월 1일부로 종료됩니다.<br/>
            기존 바베큐장 무료이용 이벤트는 계속 진행됩니다.
          </p>
        </div>
      </div>
      <div className="layerMain martPickup" style={{display: isPickup ? 'block' : 'none'}}>
        <div className="box">
          <img src={'/img/popup/btn-close.png'} className="close" onClick={closePickup} alt=''/>
          <h5>마트 무료픽업안내</h5>
          <ol>
            <li>가평역 도착후 택시로 <b>조은마트</b>로 이동하기</li>
            <li>픽업접수처에서 끌로이스풀빌라 픽업신청하기</li>
            <li>1인당 20000원 이상 장보신 후 계산시 택시요금 영수증 제출하면 <b>택시요금 3000원환급받기</b></li>
            <li>픽업접수처에서 대기후 마트차량으로 끌로이스풀빌라 이동하기</li>
            <li>숙박후 퇴실시 마트픽업차량타고 가평역 이동하기</li>
          </ol>
          <p><a href="tel:01085565009">마트전화클릭 : <strong>010-8556-5009</strong></a></p>
        </div>
      </div>
    </div>
  );
}
