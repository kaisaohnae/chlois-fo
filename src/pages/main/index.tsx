import React, {ReactElement, useEffect, useRef} from 'react';
import Title from '@/components/layout/title';
import RootLayout from '@/components/root-layout';
import MainVisual from './main-visual';
import MainVisualSub from './main-visual-sub';
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
      <MainVisual />
      <MainVisualSub />
      <Youtube />
      {/*마트 무료픽업안내
      가평역 도착후 택시로 조은마트로 이동하기
      픽업접수처에서 끌로이스풀빌라 픽업신청하기
      1인당 20000원 이상 장보신 후 계산시 택시요금 영수증 제출하면 택시요금 3000원환급받기
      픽업접수처에서 대기후 마트차량으로 끌로이스풀빌라 이동하기
      숙박후 퇴실시 마트픽업차량타고 가평역 이동하기
      마트전화클릭 : 010-8556-5009*/}
    </>
  );
}
Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
