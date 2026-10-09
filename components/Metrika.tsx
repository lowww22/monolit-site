'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { METRIKA_ID } from '@/lib/seo';

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
  }
}

/**
 * Отметить цель в Яндекс Метрике. Если счётчик не подключён — ничего
 * не делает, поэтому вызывать можно из любого места сайта.
 *
 * Цели (создаются в Метрике: Настройки → Цели → «JavaScript-событие»):
 * phone_click — нажали на телефон, email_click — на почту,
 * messenger_click — на мессенджер, lead_form — отправили форму заявки.
 */
export function reachGoal(goal: string) {
  if (!METRIKA_ID || typeof window === 'undefined' || !window.ym) return;
  window.ym(Number(METRIKA_ID), 'reachGoal', goal);
}

/**
 * Счётчик Яндекс Метрики. Номер задаётся в lib/seo.ts (METRIKA_ID).
 * Метрика показывает, откуда приходят люди и что они делают на сайте,
 * а Вебвизор — запись их действий. Клики по телефону и почте
 * отмечаются как цели — это главные «заявки» сайта.
 */
export default function Metrika() {
  useEffect(() => {
    if (!METRIKA_ID) return;

    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const link = target?.closest ? target.closest('a') : null;
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('tel:')) reachGoal('phone_click');
      else if (href.startsWith('mailto:')) reachGoal('email_click');
      else if (/wa\.me|t\.me/.test(href)) reachGoal('messenger_click');
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!METRIKA_ID) return null;

  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(${METRIKA_ID}, "init", {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true});`}
      </Script>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
