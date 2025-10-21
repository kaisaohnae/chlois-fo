'use client';

import React, { ReactElement, useEffect, useRef } from 'react';
import mainVisualList from '@/data/main-visual-list';
import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function MainVisual(): ReactElement {
  const ready = useRef(false);
  const swiperContainerRef = useRef<HTMLElement | null>(null);
  const swiperInstance = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (!ready.current) {
      ready.current = true;
      swiperInstance.current = new SwiperCore(swiperContainerRef.current as HTMLElement, {
        loop: true,
        slidesPerView: 1,
        autoplay: { delay: 5500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination1', clickable: true },
        navigation: { nextEl: '.swiper-next-1', prevEl: '.swiper-prev-1' },
      });
    }
  }, []);

  return (
    <div className="slide-wrap">
      <article ref={swiperContainerRef} className="preview-slide">
        <ul className="swiper-wrapper">
          {mainVisualList.map((o: any, idx: number) => (
            <li className="swiper-slide" key={idx}>
              <div className="visual-image">
                <img src={o.url} alt="" />
              </div>
            </li>
          ))}
        </ul>
        <div className="swiper-pagination swiper-pagination1"></div>
        <div className="swiper-button swiper-prev swiper-prev-1">&#10094;</div>
        <div className="swiper-button swiper-next swiper-next-1">&#10095;</div>
      </article>
    </div>
  );
}
