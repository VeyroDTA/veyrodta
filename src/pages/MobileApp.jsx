import { useEffect } from "react";
import Seo from "../components/Seo";
import FaqAccordion from "../components/FaqAccordion";
import { Section, SectionHeading } from "../components/Section";
import { mobileFaqs } from "../data/mobileApp";

import Hero from "../components/mobile/Hero";
import {
  Ecosystem,
  Features,
  Intro,
  MobileTrust,
  UseCases,
} from "../components/mobile/Overview";
import { DesignStages, DevTimeline } from "../components/mobile/Process";
import {
  AdminPanel,
  Integrations,
  Platforms,
  Stores,
} from "../components/mobile/Platform";
import { Packages, PriceFactors } from "../components/mobile/Commercial";
import { Benefits, Concepts, Cta, WhyUs } from "../components/mobile/Value";
import QuoteSection from "../components/mobile/QuoteSection";

// ─────────────────────────────────────────────
// MOBİL UYGULAMA GELİŞTİRME SAYFASI — /mobil-uygulama-gelistirme
//
//   01 Header                         (global, App.jsx)
//   02 Hero                           MOBİL UYGULAMA GELİŞTİRME
//   03 Hızlı güven (4)
//   04 Dijital Deneyim
//   05 İşletmeniz İçin (6)
//   06 Uygulamanızda Neler Olabilir? (21)
//   07 Web + Mobil + Yönetim Paneli
//   08 Kullanıcı Ne Görecek? (4)
//   09 Fikirden Mağazaya (5)
//   10 Android ve iOS
//   11 Mağazaya Yayın
//   12 Entegrasyonlar
//   13 Yönetim Paneli
//   14 Fiyat Nasıl Belirlenir? (4 faktör)
//   15 Paketler (Başlangıç / İşletme / Özel)  ← brief'te "isteğe bağlı"
//   16 Neden UGR Studio? (4)
//   17 İşletmenize Ne Katabilir? (4)
//   18 Konsept UI Çalışmaları (3)
//   19 SSS (10)
//   20 Teklif & İletişim
//      Son CTA (lacivert)
//   21 Footer                         (global, App.jsx)
//
// NOT — Sıra 15: Brief'in son bölüm akışında paket bloğu yok, 14. maddedeki
// "İstenirse… 3 seviyeli yapı kullanılabilir" ifadesine dayanıyor. Bu yüzden
// paketler, fiyatlandırma ile "Neden UGR Studio?" arasına — yani akıştaki
// hiçbir kalemi yer değiştirmeden — yerleştirildi.
// ─────────────────────────────────────────────

export default function MobileApp() {
  // Mobil uygulamaya özel 10 soru için FAQPage schema. Metinler
  // src/data/mobileApp.js'ten gelir; /sss sayfasındaki genel SSS ile aynı
  // teknik yaklaşım, farklı veri kaynağı.
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.faqSchema = "mobile";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: mobileFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);

    return () => {
      document
        .querySelectorAll('script[data-faq-schema="mobile"]')
        .forEach((s) => s.remove());
    };
  }, []);

  return (
    <>
      {/* ogImage: bu sayfaya özel paylaşım görseli (1200×630).
          Site geneli og-image.jpg yerine mobil sayfasının görseli kullanılır. */}
      <Seo
        title="Mobil Uygulama Geliştirme | Android & iOS | UGR Studio"
        description="UGR Studio, işletmelere özel mobil uygulamalar geliştirir. Android ve iOS uygulamaları, UI/UX tasarım, yönetim paneli, API ve özel entegrasyon çözümleri."
        path="/mobil-uygulama-gelistirme"
        ogImage="og-mobil-uygulama.jpg"
      />

      <main id="main">
        <Hero />
        <MobileTrust />

        <Intro />
        <UseCases />
        <Features />
        <Ecosystem />

        <DesignStages />
        <DevTimeline />

        <Platforms />
        <Stores />
        <Integrations />
        <AdminPanel />

        <PriceFactors />
        <Packages />

        <WhyUs />
        <Benefits />
        <Concepts />

        <Section id="sss" tone="surface" bordered>
          <SectionHeading
            eyebrow="S.S.S."
            title="Mobil Uygulama"
            highlight="Hakkında Sıkça Sorulanlar"
            description="Mobil uygulama projeleri en çok merak edilenler, kısa ve net cevaplarla."
          />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={mobileFaqs} />
          </div>
        </Section>

        <Cta />
        <QuoteSection />
      </main>
    </>
  );
}
