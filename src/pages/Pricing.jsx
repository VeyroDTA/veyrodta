import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import PricingSection from "../components/PricingSection";
import FaqAccordion from "../components/FaqAccordion";
import ContactBlock from "../components/ContactBlock";
import { Section, SectionHeading } from "../components/Section";

export default function Pricing() {
  return (
    <>
      <Seo
        title="Fiyatlar | Web Sitesi Paketleri — UGR Studio"
        description="Kurumsal web sitesi paketleri ve fiyatları. Başlangıç, İşletme ve Özel seçenekleriyle şeffaf fiyatlandırma."
        path="/fiyatlar"
      />

      <main id="main">
        <PageHero
          eyebrow="FİYATLANDIRMA"
          title="Şeffaf Paketler,"
          highlight="Gizli Maliyet Yok"
          description="Hangi pakete ihtiyacınız olduğunu görün, kapsamı karşılaştırın ve teklif isteyin. Fiyatları siteden okuyun, teklifinizi de yazılı alın."
        />

        <PricingSection withSection={false} withHeading={false} />

        <Section tone="surface" bordered>
          <SectionHeading
            eyebrow="SSS"
            title="Fiyat ve Süreç"
            highlight="Soruları"
            description="Fiyatın neye göre belirlendiğine ve teslim süresine dair en çok merak edilenler."
          />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion limit={8} withCta />
          </div>
        </Section>

        <ContactBlock />
      </main>
    </>
  );
}
