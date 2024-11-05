import React, {ReactElement, useEffect, useRef} from 'react';
import mainVisualSubList from '@/data/mainVisualSubList';

export default function Page(): ReactElement {

  useEffect(() => {
  }, []);

  return (
    <article>
      <ul className="main-visual-sub">
        {
          mainVisualSubList.map((o: any, idx: number) => (
            /*${idx === 15 ? 'on' : ''}*/
            <li className={`swiper-slide`} key={idx}>
              <img src={o.url} alt=''/>
            </li>
          ))
        }
      </ul>
    </article>
  );
}
