'use client';

import React, {ReactElement, useEffect, useRef} from 'react';
import mainVisualSubList from '@/data/main-visual-sub-list';
import SwiperCore from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Page(): ReactElement {

  const ready = useRef(false);
  const swiperContainerRef = useRef<HTMLElement | null>(null);  // 타입을 지정
  const swiperInstance = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (!ready.current) {
      ready.current = true;
      swiperInstance.current = new SwiperCore(swiperContainerRef.current as HTMLElement, {  // 타입 단언
        initialSlide: 2,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          slideShadows: false,
        },
        autoplay: {
          delay: 50000, // 자동 슬라이드 간의 지연 시간 (밀리초)
          disableOnInteraction: true, // 사용자가 슬라이드를 조작할 때 자동 재생 중지
        },
        observer: true,
        observeParents: true,
        breakpoints: {
          500: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 2,
          },
        },
        on: {
          slideChange: () => {
            // 슬라이드 변경 시 동작
          },
        },
      });

    }
  }, []);
  return (
    <>
      <div className="slide-wrap">
        <article ref={swiperContainerRef} className="preview-slide main-visual-sub">
          <ul className="swiper-wrapper">
            {
              mainVisualSubList.map((o: any, idx: number) => (
                <li className="swiper-slide" key={idx}><img src={o.url} alt=''/></li>
              ))
            }
          </ul>
          <div className="swiper-pagination swiper-pagination1 swiper-pagination-bullets swiper-pagination-horizontal"></div>
        </article>
      </div>

      <div className="visual-wrapper">
        <p className="en">
          Comfortable rest in your imagination, Pleasure meeting.<br/>
          It{'\''}s an auxiliary facility prepared for you.
        </p>
        <p className="big">
          <strong>Private Room For Comfort</strong>
        </p>
      </div>

    </>
  );
}
