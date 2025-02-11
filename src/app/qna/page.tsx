'use client';

import React, {useState, useEffect} from 'react';
import Title from '@/components/layout/title';
import {ReactElement} from 'react';

export default function Page(): ReactElement {
  const title = '';

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Title title={title}/>
      <div className="works">

      </div>
    </div>
  );
}
