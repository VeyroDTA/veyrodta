import { Reveal } from "../Reveal";
import PhoneCluster from "./PhoneMockups";
import QuoteCta from "./QuoteCta";

// ─────────────────────────────────────────────
// MOBİL UYGULAMA SAYFASI — HERO
// Ana sayfanın hero yapısıyla birebir aynı ritim: sol tarafta mesaj + iki
// CTA, sağda kodla çizilmiş telefon kümesi.
//
// DÜRÜSTLÜK: Sağdaki telefonlar gerçek bir müşteri uygulaması DEĞİLDİR.
// Mockup'ın üstünde "KONSEPT UI" etiketi bulunur (bkz. PhoneMockups.jsx).
//
// Ana dönüşüm hedefi: "Ücretsiz Teklif Al" (turuncu) → mailto.
// İkincil: "Nasıl Çalışıyoruz?" → sayfadaki süreç bölümüne atlar.
// ─────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Dekoratif arka plan — ana sayfa hero'su ile aynı hafif doku */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-ugr-50 blur-3xl" />
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-flame-50 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.5]">
          <pattern id="mobileHeroDots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#DCE3EE" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mobileHeroDots)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-16 lg:grid-cols-2 lg:gap-10 lg:pt-20 lg:pb-24">
        {/* Sol — mesaj + CTA */}
        <div className="max-w-xl">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-ugr-100 bg-white px-4 py-2 text-[11px] font-extrabold tracking-[0.16em] text-ugr-600 uppercase">
              <span className="ping-dot pulse-dot relative h-2 w-2 flex-none text-flame-500">
                <span className="absolute inset-0 rounded-full bg-flame-500" />
              </span>
              Mobil Uygulama Geliştirme
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="text-[27px] leading-[1.15] font-extrabold tracking-tight text-navy-800 sm:text-[33px] lg:text-[40px]">
              İşletmenizi
              <br />
              <span className="text-ugr-600">Müşterilerinizin Cebine Taşıyoruz.</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted sm:text-[17px]">
              İşletmenizin ihtiyaçlarına özel, modern ve kullanıcı odaklı mobil uygulamalar
              geliştiriyoruz. Fikrinizi tasarımdan geliştirmeye, testten yayına kadar uçtan uca
              hayata geçiriyoruz.
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <QuoteCta size="lg" className="w-full sm:w-auto">
              Ücretsiz Teklif Al
            </QuoteCta>
            <a
              href="#surec"
              className="inline-flex h-[52px] w-full items-center justify-center rounded-2xl border border-line bg-white px-7 text-[15px] font-extrabold text-navy-800 transition-[transform,box-shadow,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-navy-300 hover:bg-surface hover:shadow-[0_8px_20px_-12px_rgba(15,23,42,0.4)] active:scale-[0.985] sm:w-auto"
            >
              Nasıl Çalışıyoruz?
            </a>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12.5px] font-semibold text-navy-400">
              <span>Android</span>
              <span className="h-1 w-1 rounded-full bg-navy-300" />
              <span>iOS</span>
              <span className="h-1 w-1 rounded-full bg-navy-300" />
              <span>Yönetim Paneli</span>
              <span className="h-1 w-1 rounded-full bg-navy-300" />
              <span>Özel Entegrasyon</span>
            </p>
          </Reveal>
        </div>

        {/* Sağ — üç telefon mockup'ı */}
        <Reveal delay={120} className="min-w-0 lg:pl-6">
          <PhoneCluster />
        </Reveal>
      </div>
    </section>
  );
}
