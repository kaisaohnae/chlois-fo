'use client';

import SwiperCore from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import Main from '@/app/main/main';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function HomePageClient() {
  return (
    <div className="container">
      <Main />
    </div>
  );
}
