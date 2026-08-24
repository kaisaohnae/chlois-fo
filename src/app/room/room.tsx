import React, {useState, useEffect} from 'react';
import {ReactElement} from 'react';
import RoomInfo from "@/app/room/room-info";
import ReservationInfo from "@/app/reservation/reservation-info";

export default function Room(): ReactElement {

  const roomList1 = [
    {url: '/img/room/a1.png'},
    {url: '/img/room/a2.png'},
    {url: '/img/room/a3.png'},
    {url: '/img/room/ac4.png'},
    {url: '/img/room/a5.png'},
    {url: '/img/room/a6.png'},
    {url: '/img/room/i3.png'},
    {url: '/img/room/i4.png'},
    {url: '/img/room/i5.png'},
    {url: '/img/room/i7.png'},
    {url: '/img/room/i13.png'},
    {url: '/img/room/i6.png'},
    {url: '/img/room/i14.png'}
  ];
  const roomList2 = [
    {url: '/img/room/b1.png'},
    {url: '/img/room/b2.png'},
    {url: '/img/room/b3.png'},
    {url: '/img/room/b4.png'},
    {url: '/img/room/b5.png'},
    {url: '/img/room/b7.png'},
    {url: '/img/room/i3.png'},
    {url: '/img/room/i4.png'},
    {url: '/img/room/i13.png'},
    {url: '/img/room/i16.png'},
    {url: '/img/room/b6.png'}
  ];
  const roomList3 = [
    {url: '/img/room/c1.png'},
    {url: '/img/room/c2.png'},
    {url: '/img/room/c3.png'},
    {url: '/img/room/ac4.png'},
    {url: '/img/room/c5.png'},
    {url: '/img/room/i1.png'},
    {url: '/img/room/i3.png'},
    {url: '/img/room/i4.png'},
    {url: '/img/room/i13.png'},
    {url: '/img/room/i6.png'},
    {url: '/img/room/i14.png'}
  ];

  const [tabIdx, setTabIdx] = useState(1);
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    const handleFixed = () => {
      if (window.scrollY >= 200) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    window.addEventListener("scroll", handleFixed, true);
    return window.removeEventListener("scroll", handleFixed);
  }, []);

  return (
    <div id="room">
      <div className="tabWrap">
        <div className={isFixed ? 'tab fixed' : 'tab'}>
          <ul>
            <li className={tabIdx === 1 ? 'on' : ''} onClick={() => {
              setTabIdx(1)
            }}>풀빌라A동
            </li>
            <li className={tabIdx === 2 ? 'on' : ''} onClick={() => {
              setTabIdx(2)
            }}>풀빌라B동
            </li>
            <li className={tabIdx === 3 ? 'on' : ''} onClick={() => {
              setTabIdx(3)
            }}>풀빌라C동
            </li>
          </ul>
        </div>
      </div>
      <div style={{display: tabIdx === 1 ? 'block' : 'none'}}>
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
      <div style={{display: tabIdx === 2 ? 'block' : 'none'}}>
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
      <div style={{display: tabIdx === 3 ? 'block' : 'none'}}>
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

      <RoomInfo/>
      <ReservationInfo/>

    </div>
  );
}
