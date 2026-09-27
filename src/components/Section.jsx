import Reveal from "./Reveal";

// ─────────────────────────────────────────────
// BÖLÜM BAŞLIĞI
// Ana sayfadaki her bölüm aynı ritmi paylaşsın diye tek bir bileşende toplandı.
// align: "left" | "center"
// ─────────────────────────────────────────────

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) {
  const alignment = align === "left" ? "text-left" : "text-center mx-auto";

  return (
    <Reveal
      className={`max-w-2xl ${alignment} mb-12 sm:mb-14 ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-ugr-100 bg-ugr-50 px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.18em] text-ugr-600 uppercase">
          {eyebrow}
        </span>
      )}

      <h2 className="text-[23px] leading-[1.2] font-extrabold tracking-tight text-navy-800 sm:text-[27px] lg:text-[30px]">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-ugr-600">{highlight}</span>
          </>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}

// ─────────────────────────────────────────────
// GÖRÜNMEZ BÖLÜM BAŞLIĞI
// Bir bölümün görsel başlığı yoksa (ör. iç sayfalarda PageHero zaten h1 verir
// ve bölüm kendi başlığını tekrarlamak istemez), ekran okuyucu ve başlık
// sırası (heading-order) için sr-only bir <h2> basar. Tasarar görünmez.
// ─────────────────────────────────────────────

export function SrHeading({ children, as: Tag = "h2" }) {
  return <Tag className="sr-only">{children}</Tag>;
}

// ─────────────────────────────────────────────
// KONTEYNER
// Sitenin tek yatay ritmi. max-width + padding + margin-inline:auto.
// DİKKAT: Bir bölüm <Section> kullanmıyorsa (withSection={false} yolu, iç
// sayfalardaki bloklar) bu konteyneri KENDİSİ sarmalamak ZORUNLUDUR.
// Konteyner olmadan grid/flex içerik ekran kenarına dayanır ve taşma gibi
// görünür. Düzensiz tekrarların (Navbar, Footer, PageHero, QuickTrust, Blog)
// tekrarı bu yüzden burada toplandı.
// ─────────────────────────────────────────────

export const CONTAINER_CLASS = "mx-auto w-full max-w-6xl px-5 sm:px-6";

export function Container({ className = "", children }) {
  return <div className={`${CONTAINER_CLASS} ${className}`}>{children}</div>;
}

// ─────────────────────────────────────────────
// BÖLÜM KAPLAYICI
// tone: "white" | "surface"  →  arka plan rengi
// ─────────────────────────────────────────────

export function Section({ id, tone = "white", bordered = false, className = "", children }) {
  const tones = {
    white: "bg-white",
    surface: "bg-surface",
  };

  return (
    <section
      id={id}
      className={`scroll-mt-24 ${tones[tone]} ${
        bordered ? "border-y border-line" : ""
      } ${className}`}
    >
      <Container className="py-16 sm:py-20 lg:py-24">{children}</Container>
    </section>
  );
}
