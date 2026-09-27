import { packages, PRICING_NOTE } from "../data/pricing";
import { quoteMailtoHref } from "../config";
import { trackEvent } from "../analytics";
import { Section, SectionHeading, SrHeading, Container } from "./Section";
import { Reveal } from "./Reveal";
import Button from "./Button";
import Icon from "./Icon";

// ─────────────────────────────────────────────
// FİYATLANDIRMA
// Mobilde yatay kaydırmalı (snap), masaüstünde 3 kolon.
// Fiyat metinleri src/data/pricing.js dosyasından gelir; oradan değiştirilir.
// ─────────────────────────────────────────────

function PackageCard({ pkg, index }) {
  const featured = pkg.featured;

  return (
    <Reveal
      delay={index * 80}
      className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 sm:p-7 ${
        featured
          ? "border-flame-300 shadow-[0_28px_60px_-32px_rgba(255,138,0,0.55)] ring-1 ring-flame-200"
          : "border-line shadow-[0_18px_40px_-32px_rgba(15,23,42,0.4)]"
      }`}
    >
      {pkg.badge && (
        <span className="absolute -top-3 left-6 rounded-full bg-flame-700 px-3 py-1 text-[11px] font-extrabold tracking-[0.1em] text-white uppercase">
          {pkg.badge}
        </span>
      )}

      <div className="mb-5">
        <h3 className="text-lg font-extrabold tracking-[0.04em] text-navy-800">{pkg.name}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-muted">{pkg.audience}</p>
      </div>

      <div className="mb-5 border-y border-line py-5">
        <span
          className={`block text-[26px] leading-none font-extrabold tracking-tight ${
            featured ? "text-flame-600" : "text-navy-800"
          }`}
        >
          {pkg.price}
        </span>
        <span className="mt-2 block text-[11px] font-semibold text-muted">
          {pkg.priceSuffix}
        </span>
      </div>

      <ul className="mb-7 flex-1 space-y-2.5">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[13px] text-navy-600">
            <span
              className={`mt-0.5 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full ${
                featured ? "bg-flame-50 text-flame-600" : "bg-ugr-50 text-ugr-600"
              }`}
            >
              <Icon name="check" className="h-2.5 w-2.5" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Button
        href={quoteMailtoHref(`${pkg.name} Paketi`)}
        variant={featured ? "primary" : "navy"}
        className="w-full"
        onClick={() => trackEvent("generate_lead", { method: "email", context: pkg.name })}
      >
        {pkg.cta}
      </Button>
    </Reveal>
  );
}

export default function PricingSection({ withSection = true, withHeading = true }) {
  const cards = (
    <>
      {/* Mobil: yatay kaydırma · Masaüstü: 3 kolon */}
      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
        {packages.map((pkg, i) => (
          <div
            key={pkg.id}
            className="w-[85%] flex-shrink-0 snap-center sm:w-[62%] md:w-auto md:flex-1"
          >
            <PackageCard pkg={pkg} index={i} />
          </div>
        ))}
      </div>

      <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-2 text-center">
        <Icon name="document" className="h-4 w-4 flex-shrink-0 text-muted" />
        <p className="text-[13px] text-muted">{PRICING_NOTE}</p>
      </Reveal>
    </>
  );

  if (!withSection) {
    return (
      <>
        <SrHeading>Paketler ve Fiyatlandırma</SrHeading>
        <Container>{cards}</Container>
      </>
    );
  }

  return (
    <Section id="fiyatlar">
      {withHeading && (
        <SectionHeading
          eyebrow="FİYATLANDIRMA"
          title="Şeffaf Paketler,"
          highlight="Gizli Maliyet Yok"
          description="Hangi pakete ihtiyacınız olduğunu görün, kapsamı karşılaştırın ve teklif isteyin."
        />
      )}
      {cards}
    </Section>
  );
}
