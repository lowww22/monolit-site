import JsonLd from '@/components/JsonLd';
import type { Faq } from '@/lib/faq';

/**
 * Блок «Вопросы и ответы» + микроразметка FAQPage.
 * Отвечает на длинные запросы («сколько стоит куб бетона в Глазове»)
 * и может попасть в расширенный сниппет поисковой выдачи.
 */
export default function FaqSection({
  items,
  title = 'Частые вопросы',
  className = 'bg-panel',
}: {
  items: Faq[];
  title?: string;
  className?: string;
}) {
  if (!items.length) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section className={`section-pad ${className}`} id="faq">
      <JsonLd data={jsonLd} />
      <div className="container-x">
        <p className="eyebrow">Вопрос — ответ</p>
        <h2 className="display mt-3 text-3xl text-ink sm:text-4xl">{title}</h2>

        <div className="mt-8 divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="faq-item group">
              <summary>
                <h3 className="faq-item__q">{item.q}</h3>
                <span className="faq-item__icon" aria-hidden>
                  +
                </span>
              </summary>
              <p className="faq-item__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
