import { useEffect } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import FaqAccordion from "../components/FaqAccordion";
import ContactBlock from "../components/ContactBlock";
import { Section, SrHeading } from "../components/Section";
import { faqs } from "../data/faqs";

export default function Faq() {
  // Google'ın arama sonuçlarında SSS'yi açılır-kapanır liste olarak göstermesi
  // için schema.org FAQPage verisi. Metinler src/data/faqs.js'ten gelir.
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.faqSchema = "true";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);

    return () => {
      document.querySelectorAll('script[data-faq-schema="true"]').forEach((s) => s.remove());
    };
  }, []);

  return (
    <>
      <Seo
        title="Sıkça Sorulan Sorular | Web Tasarım SSS — UGR Studio"
        description="Web sitesi hazırlama süresi, fiyatlandırma, domain ve hosting, mobil uyumluluk, SEO, revizyon hakkı ve e-ticaret hakkında sık sorulan sorular."
        path="/sss"
      />

      <main id="main">
        <PageHero
          eyebrow="S.S.S."
          title="Sıkça Sorulan"
          highlight="Sorular"
          description="Web sitesi yaptırma sürecinde en çok merak edilenler, kısa ve net cevaplarla."
        />

        <Section>
          <SrHeading>Tüm Sorular</SrHeading>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion withCta />
          </div>
        </Section>

        <ContactBlock />
      </main>
    </>
  );
}
