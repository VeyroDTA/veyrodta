import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Button from "../components/Button";
import Icon from "../components/Icon";
import HeroMockup from "../components/HeroMockup";
import QuickTrust from "../components/QuickTrust";
import SolutionPicker from "../components/SolutionPicker";
import ServicesGrid from "../components/ServicesGrid";
import ProjectsGrid from "../components/ProjectsGrid";
import PricingSection from "../components/PricingSection";
import ProcessSteps from "../components/ProcessSteps";
import WhyUs from "../components/WhyUs";
import AboutBlock from "../components/AboutBlock";
import FaqAccordion from "../components/FaqAccordion";
import ContactBlock from "../components/ContactBlock";
import { Section, SectionHeading, Container } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { faqs } from "../data/faqs";

// ─────────────────────────────────────────────
// ANA SAYFA — SATIŞ AKIŞI
//   1  Hero
//   2  Hızlı güven alanı
//   3  Dijital çözüm seçimi (interaktif)
//   4  Hizmetlerimiz
//   5  Projelerimiz
//   6  Fiyatlandırma
//   7  Proje süreci
//   8  Neden UGR Studio?
//   9  Hakkımızda
//   10 SSS
//   11 Teklif / İletişim
//   (Footer global)
// ─────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Dekoratif arka plan — çok hafif, düz beyazlığı kırmak için */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-ugr-50 blur-3xl" />
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-flame-50 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.5]">
          <pattern id="heroDots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#DCE3EE" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#heroDots)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
      </div>

      <Container className="grid items-center gap-12 pt-12 pb-14 sm:pt-16 sm:pb-16 lg:grid-cols-2 lg:gap-10 lg:pt-20 lg:pb-24">
        {/* Sol — mesaj + CTA */}
        <div className="max-w-xl">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-ugr-100 bg-white px-4 py-2 text-[11px] font-extrabold tracking-[0.16em] text-ugr-600 uppercase">
              <span className="ping-dot pulse-dot relative h-2 w-2 flex-none text-flame-500">
                <span className="absolute inset-0 rounded-full bg-flame-500" />
              </span>
              Prestijli Dijital Çözümler &amp; Özgün Tasarım
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="text-[27px] leading-[1.15] font-extrabold tracking-tight text-navy-800 sm:text-[33px] lg:text-[40px]">
              Web Sitenizi Değil,
              <br />
              <span className="text-ugr-600">İşinizi Tasarlıyoruz.</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted sm:text-[17px]">
              Markanızın dijital dünyadaki görünümünü güçlendiren, hızlı, modern ve kullanıcı
              odaklı web çözümleri geliştiriyoruz.
            </p>
          </Reveal>

          <Reveal delay={180} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/iletisim" size="lg" withArrow className="w-full sm:w-auto">
              Projeni Anlat
            </Button>
            <Button to="/fiyatlar" variant="secondary" size="lg" className="w-full sm:w-auto">
              Paketleri İncele
            </Button>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12.5px] font-semibold text-navy-400">
              <span>Kurumsal Web</span>
              <span className="h-1 w-1 rounded-full bg-navy-300" />
              <span>E-Ticaret</span>
              <span className="h-1 w-1 rounded-full bg-navy-300" />
              <span>Özel Web Çözümleri</span>
            </p>
          </Reveal>
        </div>

        {/* Sağ — web sitesi mockup'ı */}
        <Reveal delay={120} className="lg:pl-6">
          <HeroMockup />
        </Reveal>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="UGR Studio | Web Tasarım & Dijital Çözümler"
        description="UGR Studio; kurumsal web sitesi, e-ticaret, özel web çözümleri ve modern dijital deneyimler geliştirir."
        path="/"
      />

      <main id="main">
        <Hero />
        <QuickTrust />
        <SolutionPicker />
        <ServicesGrid />
        <ProjectsGrid layout="carousel" limit={4} />
        <PricingSection />
        <ProcessSteps />
        <WhyUs />
        <AboutBlock />

        {/* SSS */}
        <Section id="sss">
          <SectionHeading
            eyebrow="S.S.S."
            title="Sıkça Sorulan"
            highlight="Sorular"
            description="En çok merak edilenler, kısa ve net cevaplarla."
          />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion limit={6} />
            <Reveal className="mt-8 text-center">
              <Link
                to="/sss"
                className="inline-flex items-center gap-1.5 text-[14px] font-extrabold text-ugr-600 underline-offset-4 hover:underline"
              >
                Tüm soruları gör ({faqs.length})
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </Section>

        <ContactBlock />
      </main>
    </>
  );
}
