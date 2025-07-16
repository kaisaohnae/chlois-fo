'use client';

import React, {useState, useEffect} from 'react';
import {ReactElement} from 'react';

export default function Page(): ReactElement {

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="qna">

    </div>
  );
}
