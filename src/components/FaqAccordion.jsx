import { useState } from "react";
import { faqs } from "../data/faqs";
import { Reveal } from "./Reveal";
import Icon from "./Icon";

// ─────────────────────────────────────────────
// SSS — ACCORDION
// Erişilebilirlik:
//   · Her soru bir <button> (klavye ile odaklanabilir)
//   · aria-expanded + aria-controls + role="region" bağlantısı
//   · Kapalı panel "inert" → ekran okuyucu içeriği okumaz, sekme sırasına girmez
// ─────────────────────────────────────────────

// `items` verilmezse site geneli SSS listesi kullanılır. Mobil uygulama
// sayfası kendi sorularını `src/data/mobileApp.js` üzerinden geçirir; her iki
// sayfa da aynı accordion bileşenini (ve aynı erişilebilirlik davranışını) paylaşır.
export default function FaqAccordion({ items = faqs, limit, withCta = false }) {
  const [openIndex, setOpenIndex] = useState(0);
  const list = limit ? items.slice(0, limit) : items;

  return (
    <>
      <ul className="space-y-3">
        {list.map((faq, i) => {
          const isOpen = openIndex === i;
          const buttonId = `faq-btn-${i}`;
          const panelId = `faq-panel-${i}`;

          return (
            <Reveal
              key={faq.q}
              as="li"
              delay={Math.min(i, 6) * 50}
              className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-200 ${
                isOpen ? "border-ugr-200" : "border-line hover:border-ugr-200"
              }`}
            >
              <h3>
                <button
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span
                    className={`text-[15px] leading-snug font-extrabold sm:text-[15px] ${
                      isOpen ? "text-ugr-600" : "text-navy-800"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? "bg-ugr-500 text-white" : "bg-surface text-muted"
                    }`}
                    aria-hidden="true"
                  >
                    <Icon name={isOpen ? "minus" : "plus"} className="h-4 w-4" />
                  </span>
                </button>
              </h3>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    inert={!isOpen}
                    className="border-t border-line px-5 py-5 text-[14px] leading-relaxed text-muted sm:px-6"
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>

      {withCta && (
        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <p className="text-[14px] text-muted">Sorunuzun cevabı yok mu?</p>
          <a
            href="/iletisim"
            className="text-[14px] font-extrabold text-ugr-600 underline-offset-4 hover:underline"
          >
            Doğrudan sorun →
          </a>
        </Reveal>
      )}
    </>
  );
}
