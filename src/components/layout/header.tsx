import React, {} from 'react';
import Link from 'next/link';
import Menu from '@/components/layout/menu';

export default function Header() {

  return (
    <header id="header">
      <p className="header__logo">
        <Link href="/"><img src={'/img/common/logo.png'} height={120} alt="Chlois Pool Villa" /></Link>
      </p>
      <Menu/>
    </header>
  );
}
