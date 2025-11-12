'use client';

import React, {ReactElement, useEffect, useRef} from 'react';
import mainVisualSubList from '@/data/main-visual-sub-list';
import SwiperCore from 'swiper';
import {Autoplay, Pagination} from 'swiper/modules';

SwiperCore.use([Pagination, Autoplay]);

export default function MainVisualSub(): ReactElement {
  const ready = useRef(false);
  const swiperContainerRef = useRef<HTMLElement | null>(null);
  const swiperInstance = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (!ready.current) {
      ready.current = true;
      swiperInstance.current = new SwiperCore(swiperContainerRef.current as HTMLElement, {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: { delay: 2000 },
        pagination: { el: '.swiper-pagination-sub', clickable: true },
        breakpoints: {
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        },
      });
    }
  }, []);

  return (
    <>
      <div className="slide-wrap sub">
        <article ref={swiperContainerRef} className="preview-slide main-visual-sub">
          <ul className="swiper-wrapper">
            {mainVisualSubList.map((o: any, idx: number) => (
              <li className="swiper-slide" key={idx}>
                <img src={o.url} alt="" />
              </li>
            ))}
          </ul>
          <div className="swiper-pagination swiper-pagination-sub"></div>
        </article>
      </div>

      <div className="visual-caption">
        <h2>Relax &amp; Enjoy</h2>
        <p>Experience a peaceful stay with modern comfort.</p>
      </div>

      <div className="visual-wrapper">
        <p className="en">Calm moments, timeless beauty.<br/>Every stay feels special.</p>
        <p className="big"><strong>Modern Villa for Rest</strong></p>
      </div>
    </>
  );
}
