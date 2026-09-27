import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import SolutionPicker from "../components/SolutionPicker";
import ServicesGrid from "../components/ServicesGrid";
import FaqAccordion from "../components/FaqAccordion";
import ContactBlock from "../components/ContactBlock";
import { Section, SectionHeading } from "../components/Section";

export default function Services() {
  return (
    <>
      <Seo
        title="Hizmetlerimiz | Kurumsal Web, E-Ticaret & Özel Çözümler — UGR Studio"
        description="Kurumsal web sitesi, e-ticaret, mobil uygulama, landing page, özel web çözümleri ve yayın sonrası bakım hizmetlerimiz."
        path="/hizmetler"
      />

      <main id="main">
        <PageHero
          eyebrow="HİZMETLER"
          title="İhtiyacınıza Uygun"
          highlight="Dijital Çözümler"
          description="Markanızın ihtiyacına göre tasarlıyor, geliştiriyor ve yayına alıyoruz. Her hizmet, tek başına da diğerleriyle birlikte de çalışabilir."
        />

        <ServicesGrid withCta={false} />

        <SolutionPicker />

        <Section tone="surface" bordered>
          <SectionHeading
            eyebrow="SSS"
            title="Hizmetlerle İlgili"
            highlight="Sık Sorulanlar"
            description="Kapsam, süreç ve çalışma şekliyle ilgili en çok merak edilenler."
          />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion withCta />
          </div>
        </Section>

        <ContactBlock />
      </main>
    </>
  );
}
