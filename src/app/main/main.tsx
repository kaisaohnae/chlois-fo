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
        <MainPopup/>
        <MainLayer/>
        <MainVisual/>
        <MainVisualSub/>
        <Youtube/>
      </div>
    </>
  );
}
