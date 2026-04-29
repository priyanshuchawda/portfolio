import type { FAQItem } from '@/data/faqs';

export function FAQSection({
  title = 'Frequently Asked Questions',
  description,
  items,
}: {
  title?: string;
  description?: string;
  items: FAQItem[];
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="space-y-8" aria-labelledby="faq-heading">
      <div className="space-y-3">
        <h2 id="faq-heading" className="scroll-mt-24 text-3xl font-bold">
          {title}
        </h2>
        {description ? (
          <p className="text-muted-foreground max-w-2xl text-pretty">
            {description}
          </p>
        ) : null}
      </div>
      <dl className="divide-border divide-y">
        {items.map((item) => (
          <div key={item.question} className="grid gap-3 py-6 md:grid-cols-3">
            <dt className="text-foreground font-semibold text-pretty">
              {item.question}
            </dt>
            <dd className="text-muted-foreground leading-relaxed text-pretty md:col-span-2">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
