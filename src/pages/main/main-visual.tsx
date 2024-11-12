import React, {ReactElement, useEffect, useRef} from 'react';
import mainVisualList from '@/data/mainVisualList';
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
        initialSlide: 1,
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
          delay: 2500, // 자동 슬라이드 간의 지연 시간 (밀리초)
          disableOnInteraction: true, // 사용자가 슬라이드를 조작할 때 자동 재생 중지
        },
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.swiper-next-1',
          prevEl: '.swiper-prev-1',
        },
        breakpoints: {
          500: {
            slidesPerView: 1,
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
      <article ref={swiperContainerRef} className="preview-slide">
        <ul className="swiper-wrapper">
          {
            mainVisualList.map((o: any, idx: number) => (
              <li className="swiper-slide" key={idx}><img src={o.url} alt=''/></li>
            ))
          }
        </ul>
        <div className="swiper-pagination swiper-pagination1 swiper-pagination-bullets swiper-pagination-horizontal"></div>
        <div className="swiper-button swiper-prev swiper-prev-1">
          <i className="icon">&#xf104;</i>
        </div>
        <div className="swiper-button swiper-next swiper-next-1">
          <i className="icon">&#xf105;</i>
        </div>
      </article>
    </div>
  );
}
