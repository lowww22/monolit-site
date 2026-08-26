/**
 * Вставка микроразметки Schema.org в разметку страницы.
 * Поисковики читают её и строят расширенные сниппеты в выдаче.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Данные формируются на сервере из наших же файлов — не пользовательский ввод
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
