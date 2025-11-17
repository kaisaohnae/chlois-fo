'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    window.location.replace("https://bo.kaisa.co.kr");
  }, []);

  return null;
}