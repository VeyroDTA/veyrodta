import { MOBILE_WHATSAPP_MESSAGE, whatsappHref } from "../../config";
import { trackEvent } from "../../analytics";
import { mobileBenefits, mobileConcepts, mobileWhyUs } from "../../data/mobileApp";
import { Section, SectionHeading, Container } from "../Section";
import { Reveal } from "../Reveal";
import Icon from "../Icon";
import ConceptPreview from "./ConceptPreview";
import QuoteCta from "./QuoteCta";

// ─────────────────────────────────────────────
// MOBİL UYGULAMA SAYFASI — BÖLÜM 16-18 ve son CTA
//   WhyUs    → "Mobil Projenizde Neden UGR Studio?" (4)
//   Benefits → "Bir Mobil Uygulama İşletmenize Ne Katabilir?" (4)
//   Concepts → "Mobil Uygulama Konseptleri" (3 konsept)
//   Cta      → Lacivert kapanış bandı
//
// DİL KURALI — "fayda" dili vaat dili değildir
// Benefits kartlarında "artırır", "garanti eder" gibi ifadeler bilinçli
// olarak kullanılmadı; her kart "yapılabilir" dilinde yazıldı. Kanıtsız
// satış vaadi, bu sayfanın geri kalanındaki en zedeleyici kuraldır.
// ─────────────────────────────────────────────

// ── NEDEN UGR STUDIO? ───────────────────────────────────────────
export function WhyUs() {
  return (
    <Section id="neden" tone="surface" bordered>
      <SectionHeading
        eyebrow="NEDEN UGR STUDIO?"
        title="Mobil Projenizde"
        highlight="Neden UGR Studio?"
        description="Fikirden yayına kadar süreci anlaşılır, şeffaf ve kontrollü şekilde ilerletiyoruz."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mobileWhyUs.map((r, i) => (
          <Reveal
            key={r.n}
            as="li"
            delay={i * 70}
            className="min-w-0 rounded-2xl border border-line bg-white p-6 transition-all duration-200 hover:border-ugr-200 hover:shadow-[0_18px_38px_-28px_rgba(15,23,42,0.4)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ugr-50 text-ugr-600">
                <Icon name={r.icon} className="h-5 w-5" />
              </span>
              <span className="text-[11px] font-extrabold tracking-[0.18em] text-navy-300">
                {r.n}
              </span>
            </div>
            <h3 className="text-[15.5px] font-extrabold text-navy-800">{r.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{r.desc}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

// ── İŞLETMEYE NE KATABİLİR? ─────────────────────────────────────
export function Benefits() {
  return (
    <Section id="fayda">
      <SectionHeading
        eyebrow="İŞLETMENİZ İÇİN"
        title="Bir Mobil Uygulama"
        highlight="İşletmenize Ne Katabilir?"
        description="Uygulamanın işletme üzerindeki olası etkisi, dört temel başlıkta toplanır."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mobileBenefits.map((b, i) => (
          <Reveal
            key={b.n}
            as="li"
            delay={i * 70}
            className="min-w-0 rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-ugr-200"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-flame-50 text-flame-700">
              <Icon name={b.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-[15.5px] font-extrabold text-navy-800">{b.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{b.desc}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

// ── KONSEPT UI ÇALIŞMALARI ──────────────────────────────────────
export function Concepts() {
  return (
    <Section id="konseptler" tone="surface" bordered>
      <SectionHeading
        eyebrow="KONSEPT UI ÇALIŞMALARI"
        title="Mobil Uygulama"
        highlight="Konseptleri"
        description="Gerçek bir müşteri mobil uygulama projesi paylaşılmadığı için sahte müşteri üretmedik. Aşağıdakiler sektöre yönelik konsept arayüz kurgularıdır."
      />

      <ul className="grid gap-4 lg:grid-cols-3">
        {mobileConcepts.map((c, i) => (
          <Reveal
            key={c.id}
            as="li"
            delay={i * 80}
            className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-200 hover:border-ugr-200 hover:shadow-[0_20px_42px_-28px_rgba(15,23,42,0.45)]"
          >
            <ConceptPreview variant={c.variant} label={c.title} />

            <div className="flex flex-1 flex-col p-6">
              <span className="text-[11px] font-extrabold tracking-[0.16em] text-ugr-600 uppercase">
                {c.category}
              </span>
              <h3 className="mt-2 text-[16px] leading-snug font-extrabold text-navy-800">
                {c.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{c.summary}</p>

              <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[12.5px] text-navy-500">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-ugr-300" />
                    {p}
                  </li>
                ))}
              </ul>

              <QuoteCta
                context={`${c.title} (Konsept)`}
                variant="secondary"
                size="md"
                className="mt-6 w-full"
                label="Benzer Proje İçin Teklif Al"
              />
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

// ── SON CTA ─────────────────────────────────────────────────────
export function Cta() {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      {/* Çok hafif arka plan: nokta ızgarası + iki yumuşak ışık.
          Neon/gradient aşırılığı yasak; bu ikisi de çok düşük opaklıkta. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-ugr-700 opacity-25 blur-3xl" />
        <div className="absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-flame-500 opacity-15 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]">
          <pattern id="mobileCtaGrid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0H0v34" fill="none" stroke="#fff" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mobileCtaGrid)" />
        </svg>
      </div>

      <Container className="relative py-16 text-center sm:py-20 lg:py-24">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.18em] text-ugr-300 uppercase">
            <Icon name="mobile" className="h-3.5 w-3.5" />
            Mobil Uygulama Geliştirme
          </span>

          <h2 className="mx-auto max-w-2xl text-[24px] leading-[1.2] font-extrabold tracking-tight text-white sm:text-[29px] lg:text-[32px]">
            Bir Mobil Uygulama Fikriniz mi Var?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-navy-200 sm:text-base">
            Fikrinizi anlatın. İhtiyaçlarınızı birlikte değerlendirelim ve projeniz için
            uygulanabilir bir yol haritası oluşturalım.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-9 flex flex-col items-center gap-4">
          <QuoteCta size="lg" className="w-full sm:w-auto" label="Ücretsiz Teklif Al" />

          <a
            href={whatsappHref(MOBILE_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { from: "mobile_cta" })}
            className="inline-flex cursor-pointer items-center gap-2 text-[14px] font-extrabold text-ugr-300 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            <Icon name="whatsapp" filled className="h-4 w-4 text-emerald-400" />
            WhatsApp&apos;tan Yaz
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
