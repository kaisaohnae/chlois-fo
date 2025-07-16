'use client';

import React, {useState, useEffect} from 'react';
import {ReactElement} from 'react';
import Sns from "@/components/common/sns";
import Map from "@/components/common/map";
import Bank from "@/components/common/bank";

export default function Page(): ReactElement {

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="qna">
      <Sns/>
      <Map/>
      <Bank/>
    </div>
  );
}
