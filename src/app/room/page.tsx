'use client';

import React, {useState, useEffect} from 'react';
import Title from '@/components/layout/title';
import {ReactElement} from 'react';

import Room from './room';

export default function Page(): ReactElement {
  useEffect(() => {
  }, []);
  return (
    <div className="room">
      <Room/>
    </div>
  );
}

