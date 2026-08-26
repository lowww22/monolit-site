import { site } from '@/lib/site';
import type { Product, ProductKind } from '@/lib/catalog';

/** Таблица технических характеристик марки — по ГОСТ. */
export default function SpecTable({
  product,
  kind,
}: {
  product: Product;
  kind: ProductKind;
}) {
  const rows: Array<[string, string]> = [
    ['Марка по прочности', product.mark],
    ...((kind === 'beton'
      ? [['Класс по прочности', product.cls]]
      : []) as Array<[string, string]>),
    ['Прочность на сжатие', product.strength],
    ['Морозостойкость', product.frost],
    ...((kind === 'beton'
      ? [['Водонепроницаемость', product.water]]
      : []) as Array<[string, string]>),
    ['Подвижность', product.mobility],
    ['Расход цемента ПЦ400', `≈ ${product.cement} кг на 1 м³`],
    [
      'Стандарт',
      kind === 'beton' ? 'ГОСТ 26633-2015' : 'ГОСТ 28013-98',
    ],
    ['Единица отгрузки', 'кубический метр (м³)'],
    [
      'Цена',
      site.showPrices
        ? `от ${product.price} ₽ за м³ без доставки`
        : 'уточняйте по телефону',
    ],
  ];

  return (
    <div className="overflow-x-auto">
      <table className="spec-table">
        <caption className="sr-only">
          Технические характеристики {product.mark}
        </caption>
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k}>
              <th scope="row">{k}</th>
              <td>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
