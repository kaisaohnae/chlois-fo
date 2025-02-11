'use client';

import React, {useState, useEffect} from 'react';
import Title from '@/components/layout/title';
import {ReactElement} from 'react';

import RoomInfo from './room-info';

export default function Page(): ReactElement {
  const title = '';
  useEffect(() => {
  }, []);
  return (
    <>
      <Title title={title}/>
      <RoomInfo/>
    </>
  );
}

