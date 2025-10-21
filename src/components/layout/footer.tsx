'use client';

import React, {useState} from 'react';
import Bank from "@/components/common/bank";
import Sns from "@/components/common/sns";
import Map from "@/components/common/map";

const Footer = () => {

  return (
    <>
      <Sns/>
      <Map/>
      <Bank/>
      <footer id="footer">
        <div className="copy">
          <p>
            {/*상호 : 가평 끌로이스 풀빌라 독채 펜션<br/>*/}
            사업자 등록번호 : 601-11-92541, 대표자 : 최원호, 전화 : 010-7190-2632<br/>
            통신판매신고번호 : 제 2022-경기가평-184 호<br/>
            주소 : 경기 가평군 가평읍 물안산길 25-15 끌로이스 풀빌라<br/>
            Copyright © 2024 kaisa.co.kr All Rights Reserved.<br/>
            Email : 7083620@hanmail.net
          </p>
        </div>
      </footer>

      <div className="flower-container">
        <img src="/img/main/flower.png" alt="flower" className="flower" style={{ zIndex: -1, rotate: '120deg', opacity: 0.5, marginLeft: -600, width: 150, height: 150, top: 200, animationDuration: '8s', animationDelay: '2s' }} />
        <img src="/img/main/flower.png" alt="flower" className="flower" style={{ zIndex: -1, rotate: '120deg', opacity: 0.8, marginLeft: -450, width: 200, height: 200, top: 50, animationDuration: '10s', animationDelay: '12s' }} />
        <img src="/img/main/flower.png" alt="flower" className="flower" style={{ zIndex: -1, rotate: '120deg', opacity: 0.3, marginLeft: -570, width: 60, height: 60, top: 140, animationDuration: '7s', animationDelay: '4s' }} />
        <img src="/img/main/flower.png" alt="flower" className="flower" style={{ zIndex: -1, rotate: '0deg', opacity: 0.8, marginLeft: 400, width: 200, height: 200, top: 150, animationDuration: '5s', animationDelay: '7s' }} />
        <img src="/img/main/flower.png" alt="flower" className="flower" style={{ zIndex: -2, rotate: '40deg', opacity: 0.6, marginLeft: 350, width: 100, height: 100, top: 90, animationDuration: '6s', animationDelay: '3s' }} />
      </div>
    </>
);
};

export default Footer;
