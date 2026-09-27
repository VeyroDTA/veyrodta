import { useRef, useState } from "react";
import { solutions } from "../data/solutions";
import { quoteMailtoHref } from "../config";
import { trackEvent } from "../analytics";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import Button from "./Button";
import Icon from "./Icon";

// ─────────────────────────────────────────────
// İŞLETMENİZ İÇİN DOĞRU DİJİTAL ÇÖZÜMÜ SEÇİN
// Kullanıcı üç kategoriden birine tıklayınca açıklama, örnek hizmetler,
// tahmini kapsam ve teklif CTA'sı değişir. Erişilebilirlik için standart
// tab / tabpanel deseni ve ok tuşlarıyla gezinme kullanıldı.
// ─────────────────────────────────────────────

function SolutionPhone({ solution }) {
  return (
    <div className="w-[150px] flex-shrink-0 rounded-[26px] border-[5px] border-navy-800 bg-white p-1.5 shadow-[0_22px_44px_-20px_rgba(15,23,42,0.55)] sm:w-[168px]">
      <div className="mb-1.5 flex justify-center">
        <span className="h-1.5 w-9 rounded-full bg-navy-800" />
      </div>

      {/* Arama satırı */}
      <div className="mb-2 flex items-center gap-1.5 rounded-full border border-line bg-surface px-2 py-1.5">
        <Icon name="search" className="h-3 w-3 flex-shrink-0 text-navy-400" />
        <span className="truncate text-[11px] font-semibold text-navy-700">
          {solution.searchQuery}
        </span>
      </div>

      <div className="space-y-2">
        {/* Arama sonucu */}
        <div className="rounded-xl border border-line p-2.5">
          <span className="block text-[11px] font-bold text-ugr-600">sizinsiteniz.com</span>
          <span className="mt-1 block h-1.5 w-4/5 rounded-full bg-navy-800/80" />
          <span className="mt-1 block h-1 w-full rounded-full bg-navy-200" />
          <span className="mt-1 block h-1 w-3/5 rounded-full bg-navy-200" />
          <span className="mt-2 block h-4 w-12 rounded-md bg-flame-500" />
        </div>

        {/* İkinci kart */}
        <div className="rounded-xl border border-line p-2.5">
          <span className="block h-1.5 w-3/5 rounded-full bg-navy-800/60" />
          <span className="mt-1 block h-1 w-full rounded-full bg-navy-200" />
          <span className="mt-1 block h-1 w-1/2 rounded-full bg-navy-200" />
        </div>
      </div>
    </div>
  );
}

export default function SolutionPicker() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const tabRefs = useRef([]);

  const active = solutions.find((s) => s.id === activeId) ?? solutions[0];
  const activeIndex = solutions.findIndex((s) => s.id === activeId);

  const onKeyDown = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowRight" && e.key !== "ArrowLeft")
      return;

    e.preventDefault();
    const forward = e.key === "ArrowDown" || e.key === "ArrowRight";
    const next = (activeIndex + (forward ? 1 : -1) + solutions.length) % solutions.length;

    setActiveId(solutions[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <Section id="cozumler" tone="surface" bordered>
      <SectionHeading
        eyebrow="DİJİTAL ÇÖZÜM SEÇİMİ"
        title="İşletmeniz İçin Doğru"
        highlight="Dijital Çözümü Seçin"
        description="İhtiyacınızı seçin, size uygun çözümün nasıl şekillendiğini keşfedin."
      />

      <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
        {/* Kategori seçimi */}
        <div
          role="tablist"
          aria-label="Dijital çözüm kategorileri"
          onKeyDown={onKeyDown}
          className="space-y-3"
        >
          {solutions.map((s, i) => {
            const isActive = s.id === activeId;
            return (
              <Reveal key={s.id} delay={i * 70}>
                <button
                  ref={(el) => (tabRefs.current[i] = el)}
                  role="tab"
                  id={`solution-tab-${s.id}`}
                  aria-selected={isActive}
                  aria-controls="solution-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(s.id)}
                  className={`flex w-full cursor-pointer items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ${
                    isActive
                      ? "border-ugr-300 bg-white shadow-[0_12px_28px_-18px_rgba(21,94,239,0.5)]"
                      : "border-line bg-white/70 hover:border-ugr-200 hover:bg-white"
                  }`}
                >
                  <span
                    className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl transition-colors ${
                      isActive ? "bg-ugr-500 text-white" : "bg-white text-navy-400 ring-1 ring-line"
                    }`}
                  >
                    <Icon name={s.icon} className="h-[22px] w-[22px]" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-extrabold tracking-[0.16em] text-ugr-600">
                      {s.order}
                    </span>
                    <span className="mt-0.5 block text-[15px] font-extrabold text-navy-800">
                      {s.title}
                    </span>
                  </span>

                  <Icon
                    name="chevronDown"
                    className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
                      isActive ? "rotate-180 text-ugr-500" : "-rotate-90 text-navy-300"
                    }`}
                  />
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Detay paneli */}
        <div
          role="tabpanel"
          id="solution-panel"
          aria-labelledby={`solution-tab-${active.id}`}
          className="rounded-3xl border border-line bg-white p-6 shadow-[0_24px_50px_-32px_rgba(15,23,42,0.45)] sm:p-8"
        >
          <div className="flex flex-col gap-7 sm:flex-row sm:gap-8">
            <div className="hidden justify-center sm:flex">
              <SolutionPhone solution={active} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-extrabold text-navy-800 sm:text-xl">
                {active.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{active.desc}</p>

              <div className="mt-6">
                <span className="text-[11px] font-extrabold tracking-[0.14em] text-navy-400 uppercase">
                  Örnek hizmetler
                </span>
                <ul className="mt-3 space-y-2.5">
                  {active.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2.5 text-[13.5px] text-navy-600">
                      <span className="mt-0.5 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-ugr-50 text-ugr-600">
                        <Icon name="check" className="h-2.5 w-2.5" />
                      </span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[12px] font-bold text-navy-700">
                  {active.scope}
                </span>
                <span className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[12px] font-bold text-navy-700">
                  {active.duration}
                </span>
                <span className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[12px] font-bold text-navy-700">
                  {active.priceFrom}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  href={quoteMailtoHref(active.formType)}
                  withArrow
                  onClick={() =>
                    trackEvent("generate_lead", { method: "email", context: active.formType })
                  }
                >
                  Teklif Al
                </Button>
                <Button to="/fiyatlar" variant="ghost" size="md">
                  Paketleri incele
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
