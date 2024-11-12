import React, {ReactElement, useEffect, useRef} from 'react';
import mainVisualSubList from '@/data/mainVisualSubList';
import SwiperCore from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Page(): ReactElement {

  const ready = useRef(false);
  const swiperContainerRef = useRef(null);
  const swiperInstance = useRef<SwiperCore | null>(null);

  useEffect(() => {
    if (!ready.current) {
      ready.current = true;
      swiperInstance.current = new SwiperCore(swiperContainerRef.current, {
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
    <div className="slide-wrap wrapper-common">
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
  );
}