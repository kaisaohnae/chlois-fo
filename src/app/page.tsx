'use client';

import React, {ReactElement, useEffect, useRef} from 'react';
import Title from '@/components/layout/title';
import MainPopup from '@/app/main/main-popup';
import MainLayer from '@/app/main/main-layer';
import MainVisual from '@/app/main/main-visual';
import MainVisualSub from '@/app/main/main-visual-sub';
import Youtube from "@/components/common/youtube";
import SwiperCore from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Page(): ReactElement {
  const title = 'main';
  useEffect(() => {

  }, []);
  return (
    <>
      <Title title={title}/>
      <MainPopup/>
      <MainLayer/>
      <MainVisual/>
      <MainVisualSub/>
      <div className="visual-test">
        <p className="en">
          Comfortable rest in your imagination, Pleasure meeting.<br/>
          It{'\''}s an auxiliary facility prepared for you.
        </p>
        <p className="big">
          <strong>Private Room For Comfort</strong>
        </p>
      </div>
      <Youtube/>
    </>
  );
}
