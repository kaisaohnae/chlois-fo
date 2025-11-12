'use client';

import React, {useEffect, useState} from 'react';
import { usePathname } from 'next/navigation';
import Bank from "@/components/common/bank";
import Sns from "@/components/common/sns";
import Map from "@/components/common/map";

const Footer = () => {

  const pathname = usePathname();

  const degSets = [
    ["120deg", "140deg", "80deg", "30deg", "40deg"],
    ["40deg", "80deg", "140deg", "90deg", "170deg"],
    ["80deg", "40deg", "0deg", "140deg", "60deg"],
    ["40deg", "140deg", "80deg", "50deg", "80deg"],
  ];

  const [degs, setDegs] = useState(degSets[0]);

  useEffect(() => {
    // 경로별로 다른 배열 선택
    switch (pathname) {
      case "/room/":
        setDegs(degSets[1]);
        break;
      case "/reservation/":
        setDegs(degSets[2]);
        break;
      case "/qna/":
        setDegs(degSets[3]);
        break;
      default:
        setDegs(degSets[0]);
    }
  }, [pathname]);

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
        <img src="/img/main/flower.png" alt="flower" className="flower" style={{ zIndex: -1, rotate: degs[0], opacity: 0.3, marginLeft: -650, width: 150, height: 150, top: 160, animationDuration: '8s', animationDelay: '2s' }} />
        <img src="/img/main/flower.png" alt="flower" className="flower" style={{ zIndex: -1, rotate: degs[1], opacity: 0.5, marginLeft: -500, width: 200, height: 200, top: 10, animationDuration: '10s', animationDelay: '12s' }} />
       {/* <img src="/img/main/flower.png" alt="flower" className="flower" style={{ zIndex: -1, rotate: degs[2], opacity: 0.2, marginLeft: -620, width: 60, height: 60, top: 100, animationDuration: '7s', animationDelay: '4s' }} />
        <img src="/img/main/flower.png" alt="flower" className="flower" style={{ zIndex: -1, rotate: degs[3], opacity: 0.5, marginLeft: 450, width: 200, height: 160, top: 110, animationDuration: '5s', animationDelay: '7s' }} />
        <img src="/img/main/flower.png" alt="flower" className="flower" style={{ zIndex: -2, rotate: degs[4], opacity: 0.4, marginLeft: 400, width: 100, height: 100, top: 50, animationDuration: '6s', animationDelay: '3s' }} />*/}
      </div>
    </>
);
};

export default Footer;
