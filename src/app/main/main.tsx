'use client';

import React, {ReactElement, useEffect, useState } from 'react';
import MainPopup from "@/app/main/main-popup";
import MainLayer from "@/app/main/main-layer";
import MainVisual from "@/app/main/main-visual";
import MainVisualSub from "@/app/main/main-visual-sub";
import Youtube from "@/components/common/youtube";

export default function Main(): ReactElement {

  return (
    <>
      <div className="main">
        {/*<div className="main-banner">
          <img src={process.env.NEXT_PUBLIC_IMG_HOST + '/img/visual/banner-2025-10-22.png'} />
          <img src={'/img/visual/banner-2025-10-22.png'} />
        </div>*/}
        <MainPopup/>
        <MainLayer/>
        <MainVisual/>
        <MainVisualSub/>
        <Youtube/>
      </div>
    </>
  );
}
