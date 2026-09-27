import { Reveal } from "./Reveal";
import { Container } from "./Section";

// ─────────────────────────────────────────────
// İÇ SAYFA BAŞLIĞI
// /hizmetler, /projeler, /fiyatlar, /surec, /hakkimizda, /sss sayfalarının
// ortak üst kısmı. Her sayfanın kendi H1'i burada tanımlanır (SEO).
// ─────────────────────────────────────────────

export default function PageHero({ eyebrow, title, highlight, description, children }) {
  return (
    <div className="border-b border-line bg-surface">
      <Container className="py-12 sm:py-16 lg:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-ugr-100 bg-white px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.18em] text-ugr-600 uppercase">
              {eyebrow}
            </span>
          )}

          <h1 className="text-[25px] leading-[1.2] font-extrabold tracking-tight text-navy-800 sm:text-[29px] lg:text-[33px]">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-ugr-600">{highlight}</span>
              </>
            )}
          </h1>

          {description && (
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
              {description}
            </p>
          )}

          {children}
        </Reveal>
      </Container>
    </div>
  );
}
