import Breadcrumbs, { type Crumb } from '@/components/Breadcrumbs';

/**
 * Шапка внутренней страницы: крошки, H1 и вводный текст.
 * H1 на каждой странице свой и содержит целевой поисковый запрос.
 */
export default function PageHeader({
  crumbs,
  h1,
  lead,
  children,
}: {
  crumbs: Crumb[];
  h1: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-header bg-bg-deep text-white">
      <div className="container-x px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-0">
        <Breadcrumbs items={crumbs} />
        <h1 className="display mt-5 max-w-4xl text-4xl sm:text-5xl md:text-6xl">
          {h1}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
