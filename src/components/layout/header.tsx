import React, {} from 'react';
import Link from 'next/link';
import Menu from '@/components/layout/menu';

export default function Header() {

  return (
    <header id="header">
      <h1>
        <Link href="/"><img src={'/img/common/logo.png'} height={120} alt=''/></Link>
      </h1>
      <Menu/>
    </header>
  );
}
