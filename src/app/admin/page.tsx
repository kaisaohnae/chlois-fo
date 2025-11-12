'use client';

import React, {ReactElement, useEffect} from 'react';
import SwiperCore from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Page(): ReactElement {
  useEffect(() => {
    useEffect(() => {
      window.location.href = "https://bo.kaisa.co.kr";
    }, []);
  }, []);
  return (
    <>
    </>
  );
}
