import { designStages, devSteps } from "../../data/mobileApp";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";
import Icon from "../Icon";

// ─────────────────────────────────────────────
// MOBİL UYGULAMA SAYFASI — BÖLÜM 8-9
//   DesignStages → "Kullanıcı Uygulamayı Açtığında Ne Görecek?" (4)
//   DevTimeline  → "Fikirden Uygulama Mağazasına" (5)
//
// SÜRE UYARISI
// Ana sitede "2-6 hafta" yazan süre bilgisi WEB projeleri içindir. Mobil
// uygulamada özellik ve entegrasyon kapsamı çok daha değişkendir; bu yüzden
// burada hiçbir rakam yazılmaz, süre teklif aşamasında proje analiziyle
// belirlenir. Bu, SSS'teki 1. maddeyle de aynıdır.
// ─────────────────────────────────────────────

// ── TASARIM SÜRECİ ──────────────────────────────────────────────
export function DesignStages() {
  return (
    <Section tone="surface" bordered>
      <SectionHeading
        eyebrow="TASARIM SÜRECİ"
        title="Kullanıcı Uygulamayı"
        highlight="Açtığında Ne Görecek?"
        description="İyi bir uygulamanın temelinde yalnızca kod değil, iyi düşünülmüş bir kullanıcı deneyimi vardır."
      />

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {designStages.map((s, i) => (
          <Reveal
            key={s.n}
            as="li"
            delay={i * 80}
            className="min-w-0 rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-ugr-200"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ugr-50 text-ugr-600">
                <Icon name={["users", "pen", "layers", "code"][i]} className="h-5 w-5" />
              </span>
              <span className="text-[11px] font-extrabold tracking-[0.18em] text-navy-400">
                {s.n}
              </span>
            </div>
            <h3 className="text-[15.5px] font-extrabold text-navy-800">{s.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{s.desc}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

// ── GELİŞTİRME SÜRECİ ───────────────────────────────────────────
export function DevTimeline() {
  return (
    <Section id="surec">
      <SectionHeading
        eyebrow="GELİŞTİRME SÜRECİ"
        title="Fikirden"
        highlight="Uygulama Mağazasına"
        description="Mobil uygulama projesi beş aşamalı bir süreçle ilerler. Her aşamada ne yapılacağı baştan bellidir."
      />

      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {devSteps.map((s, i) => (
          <Reveal
            key={s.n}
            as="li"
            delay={i * 70}
            className="min-w-0 rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-ugr-200"
          >
            <span className="text-[13px] font-extrabold tracking-[0.18em] text-ugr-500">
              {s.n}
            </span>
            <span
              aria-hidden="true"
              className="mt-3 mb-3 block h-px w-10 rounded-full rule-orange"
            />
            <h3 className="text-[15.5px] font-extrabold text-navy-800">{s.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{s.desc}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-8 text-center">
        <p className="text-[12.5px] text-navy-500">
          Süreçteki süre proje kapsamına göre değişir. Tahmini geliştirme takvimi, proje
          analizinden sonra teklifle birlikte paylaşılır.
        </p>
      </Reveal>
    </Section>
  );
}
