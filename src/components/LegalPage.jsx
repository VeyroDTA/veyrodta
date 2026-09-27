import { Link } from "react-router-dom";
import Seo from "./Seo";
import Reveal from "./Reveal";
import Icon from "./Icon";

// ─────────────────────────────────────────────
// YASAL SAYFA ŞABLONU
//
// ⚠ UYARI: Bu metinler bir TASLAKTIR ve hukuki danışmanlık yerine geçmez.
// Yayına almadan önce KVKK, Gizlilik Politikası, Çerez Politikası ve Kullanım
// Koşulları'nı bir hukuk uzmanına kontrol ettir. Özellikle:
//   · Veri sorumlusunun kimliği (şahıs firmasıysa ad soyad + vergi bilgisi)
//   · Yurt dışına veri aktarımı ve uygun güvenlik tedbirleri (KVKK 11. madde)
//   · Aydınlatma metninin eksiksizliği
// yazılı şekilde doğrulanmalıdır.
// ─────────────────────────────────────────────

export const LEGAL_UPDATED_AT = "27 Eylül 2026";

export default function LegalPage({
  seoTitle,
  seoDescription,
  path,
  eyebrow = "YASAL",
  title,
  intro,
  children,
}) {
  return (
    <>
      <Seo title={seoTitle} description={seoDescription} path={path} />

      <main id="main">
        <div className="border-b border-line bg-surface">
          <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
            <Reveal>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-ugr-100 bg-white px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.18em] text-ugr-600 uppercase">
                {eyebrow}
              </span>
              <h1 className="text-[25px] leading-tight font-extrabold tracking-tight text-navy-800 sm:text-[30px]">
                {title}
              </h1>
              {intro && (
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{intro}</p>
              )}
              <p className="mt-4 text-[12.5px] text-navy-400">
                Son güncelleme: {LEGAL_UPDATED_AT}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
          <div className="space-y-9 text-[14px] leading-relaxed text-muted">{children}</div>

          <Reveal className="mt-12 rounded-2xl border border-flame-200 bg-flame-50 p-5">
            <div className="flex items-start gap-3">
              <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-white text-flame-600">
                <Icon name="document" className="h-4 w-4" />
              </span>
              <div className="text-[12.5px] leading-relaxed text-navy-600">
                <strong className="font-extrabold">Bu metin bir taslaktır.</strong> UGR Studio
                tarafından hazırlanmış olsa da hukuki danışmanlık yerine geçmez. Ticari
                kullanım öncesinde bir hukuk uzmanı tarafından kontrol edilmesi gerekir. Bu
                metinde değişiklik yapılırsa güncelleme tarihi yukarıda belirtilir.
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-2 border-t border-line pt-8">
            <Link
              to="/kvkk"
              className="rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] font-bold text-navy-700 transition-colors hover:border-ugr-200 hover:text-ugr-600"
            >
              KVKK Aydınlatma Metni
            </Link>
            <Link
              to="/gizlilik-politikasi"
              className="rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] font-bold text-navy-700 transition-colors hover:border-ugr-200 hover:text-ugr-600"
            >
              Gizlilik Politikası
            </Link>
            <Link
              to="/cerez-politikasi"
              className="rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] font-bold text-navy-700 transition-colors hover:border-ugr-200 hover:text-ugr-600"
            >
              Çerez Politikası
            </Link>
            <Link
              to="/kullanim-kosullari"
              className="rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] font-bold text-navy-700 transition-colors hover:border-ugr-200 hover:text-ugr-600"
            >
              Kullanım Koşulları
            </Link>
          </Reveal>
        </div>
      </main>
    </>
  );
}

// Başlık + paragraf ikilisi
export function LegalSection({ heading, children }) {
  return (
    <section>
      <h2 className="mb-2 text-[16px] font-extrabold text-navy-800">{heading}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
