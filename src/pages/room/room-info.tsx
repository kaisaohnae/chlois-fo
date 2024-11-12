import React, {useState, useEffect} from 'react';
import RootLayout from '@/components/root-layout';
import {ReactElement} from 'react';

export default function Page(): ReactElement {

  const roomList1 = [
    {url : '/img/room/a1.png'},
    {url : '/img/room/a2.png'},
    {url : '/img/room/a3.png'},
    {url : '/img/room/ac4.png'},
    {url : '/img/room/a5.png'},
    {url : '/img/room/a6.png'},
    {url : '/img/room/i2.png'},
    {url : '/img/room/i3.png'},
    {url : '/img/room/i4.png'},
    {url : '/img/room/i5.png'},
    {url : '/img/room/i7.png'},
    {url : '/img/room/i13.png'},
    {url : '/img/room/i6.png'},
    {url : '/img/room/i14.png'}
  ];
  const roomList2 = [
    {url : '/img/room/b1.png'},
    {url : '/img/room/b2.png'},
    {url : '/img/room/b3.png'},
    {url : '/img/room/b4.png'},
    {url : '/img/room/b5.png'},
    {url : '/img/room/i2.png'},
    {url : '/img/room/b7.png'},
    {url : '/img/room/i3.png'},
    {url : '/img/room/i4.png'},
    {url : '/img/room/i13.png'},
    {url : '/img/room/i16.png'},
    {url : '/img/room/b6.png'}
  ];
  const roomList3 = [
    {url : '/img/room/c1.png'},
    {url : '/img/room/c2.png'},
    {url : '/img/room/c3.png'},
    {url : '/img/room/ac4.png'},
    {url : '/img/room/c5.png'},
    {url : '/img/room/i1.png'},
    {url : '/img/room/i3.png'},
    {url : '/img/room/i4.png'},
    {url : '/img/room/i13.png'},
    {url : '/img/room/i6.png'},
    {url : '/img/room/i14.png'}
  ];

  useEffect(() => {
  }, []);

  return (
    <div id="room" className="wrapper-common">
      <div className="tabWrap">
        <div className="tab" data-ng-class="{fixed : window.scrollTop > 200}">
          <ul>
            <li className="on">풀빌라A동</li>
            <li>풀빌라B동</li>
            <li>풀빌라C동</li>
          </ul>
        </div>
      </div>
      <div data-ng-show="tab.idx == 0">
        <div id="visualRoom">
          <ul>
            {
              roomList1.map((o: any, idx: number) => (
                <li className="swiper-slide" key={idx}><img src={o.url} alt=''/></li>
              ))
            }
          </ul>
        </div>
      </div>
      <div data-ng-show="tab.idx == 1">
        <div id="visualRoom">
          <ul>
            {
              roomList2.map((o: any, idx: number) => (
                <li className="swiper-slide" key={idx}><img src={o.url} alt=''/></li>
              ))
            }
          </ul>
          {/*<iframe src="https://my.matterport.com/show/?m=KHZDkS6PgHQ" style="width:100%; height:75vh"></iframe>*/}
        </div>
      </div>
      <div data-ng-show="tab.idx == 2">
        <div id="visualRoom">
          <ul>
            {
              roomList3.map((o: any, idx: number) => (
                <li className="swiper-slide" key={idx}><img src={o.url} alt=''/></li>
              ))
            }
          </ul>
        </div>
      </div>
      <h3>객실정보<span>(전객실 동일 독채 50평형)</span></h3>
      <p>
        1층:거실1,욕실1,개별실내수영장1(3m*7m 수심1.2M),개별 실내 테라스 바베큐장1<br/>
        2층:분리형객실2,욕실1,TEA 테라스룸<br/>
        <br/>
        입실안내:오후15시 이후 입실 / 오전 11시 이전 퇴실
      </p>
      <h3>#EQUIPMENT :</h3>
      <p>
        수영장:라탄 썬베드&테이블,천장형 제습닥트<br/>
        욕실:비데,어메니티set(샴푸,컨디셔너,바디워시) 1층,2층 동일<br/>
        거실 :55인치 TV,침대형 쇼파,4인 식탁,냉장고,한샘싱크대 및 인덕션,각종 조리도구 및 식기류(유아용포함)<br/>

        침실A :55인치 TV,라지킹 붙박이 침대,호텔식 침구set<br/>
        침실B :라지킹 붙박이 침대,호텔식 침구set,화장대,드라이기<br/>
        Tea 테라스 및 Bar 테이블set<br/>
        바베큐장:6인 바베큐 로스터 테이블,밥솥,전자레인지<br/>
        기타: 빌트인 시스템 캐리어,삼성 냉,난방기(거실 45평형/침실A 9평형/침실B 9평형)<br/>
      </p>
      <div data-kaisa-room-info></div>

    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
