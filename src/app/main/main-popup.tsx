'use client';

import React, {ReactElement, useEffect, useState} from 'react';

export default function Page(): ReactElement {
  const [isPopupVisible, setPopupVisible] = useState(false); // 사용할거면 true
  useEffect(() => {
    const isPopupClosedToday = localStorage.getItem('popupClosedToday');
    if (isPopupClosedToday === new Date().toLocaleDateString()) {
      setPopupVisible(false);
    }
  }, []);
  const closePopup = () => {
    setPopupVisible(false);
  };
  const doNotOpenToday = () => {
    localStorage.setItem('popupClosedToday', new Date().toLocaleDateString());
    setPopupVisible(false);
  };
  if (!isPopupVisible) {
    return (<></>);
  }
  return (
    <div className="main-popup">
      <div>
        <img src={'/img/popup/btn-close.png'} className="close" onClick={closePopup} alt=''/>
        <img src={'/img/popup/popup-241101.png'} className="content" alt=''/>
        <ul>
          <li onClick={doNotOpenToday}>오늘 하루 보지 않기</li>
          <li onClick={closePopup}>닫기</li>
        </ul>
      </div>
    </div>
  );
}
