'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Menu() {
    let pathname = usePathname();
    if (pathname && pathname.match('/blog')) {
        pathname = '/blog';
    }
    const [mounted, setMounted] = useState<boolean>(false);
    const [isFixed, setFixed] = useState(false);
    useEffect(() => {
        setMounted(true);
        const handleFixed = () => {
            if (window.scrollY >= 109) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        };
        window.addEventListener("scroll", handleFixed, true);
        return window.removeEventListener("scroll", handleFixed);
    }, []);
    return (
        mounted &&
        <div id="menu" className={isFixed ? 'fixed' : ''}>
            <ul>
                <li className={pathname === '/' ? 'on' : ''}><Link href="/">홈</Link></li>
                <li className={pathname === '/room/' ? 'on' : ''}><Link href="/room/">객실정보</Link></li>
                <li className={pathname === '/reservation/' ? 'on' : ''}><Link href="/reservation/">예약</Link></li>
                <li className={pathname === '/qna/' ? 'on' : ''}><Link href="/qna/">문의</Link></li>
                {/*<li className={pathname === '/blog/' ? 'on' : ''}><Link href="/blog/">Blog</Link></li>*/}
            </ul>
        </div>
    )
}
