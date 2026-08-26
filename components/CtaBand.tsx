import Link from 'next/link';
import { Phone } from 'lucide-react';
import { site } from '@/lib/site';

/** Полоса с призывом позвонить — ставится в конце смысловых блоков. */
export default function CtaBand({
  text = 'Подберём марку, рассчитаем объём и доставим на объект.',
  compact = false,
}: {
  text?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-4 border border-line bg-bg-deep text-white ${
        compact ? 'p-5' : 'p-6 sm:p-8'
      }`}
    >
      <p className="flex-1 min-w-[220px] text-white/75">{text}</p>
      <div className="flex flex-wrap gap-3">
        <a href={site.contacts.phoneHref} className="btn btn-primary">
          <Phone size={16} className="mr-2" aria-hidden />
          {site.contacts.phoneDisplay}
        </a>
        <Link href="/kontakty#zayavka" className="btn btn-ghost">
          Заявка на звонок
        </Link>
      </div>
    </div>
  );
}
