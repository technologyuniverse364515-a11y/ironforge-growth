import { text } from "@/config/text";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="section-title">{text.faqTitle}</h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-3">
          {text.faqs.map((faq, i) => (
            <div key={i} className="card-surface !p-0 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left font-semibold transition-colors hover:text-energy"
              >
                {faq.q}
                <svg
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
