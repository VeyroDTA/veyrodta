import { Link } from "react-router-dom";
import Seo from "./Seo";
import Reveal from "./Reveal";

// ─────────────────────────────────────────────
// YASAL SAYFA ŞABLONU
//
// Bu blok site üzerinde GÖRÜNMEZ, sadece kodu okuyanlar içindir.
//
// Sayfalarda bir zamanlar turuncu bir "bu metin bir taslaktır" kutusu
// vardı; 28 Eylül 2026'da kaldırıldı (karar: kullanıcı). Geri getirme.
//
// Metinler UGR Studio tarafından hazırlandı, bağımsız bir hukuk uzmanı
// tarafından incelenmedi. İçerik bu durumda değişmedi — yalnızca taslak
// uyarısı kaldırıldı. İçerikle ilgili şunlar hâlâ açık:
//
//   · Veri sorumlusunun kimliği (LEGAL_CONTROLLER_NAME / _TAX boşsa
//     sayfa marka adını gösterir; tüzel kişilik + vergi dairesi/VKN şart)
//   · Yurt dışına veri aktarımı ve uygun güvenlik tedbirleri (KVKK 11. madde)
//   · Aydınlatma metninin eksiksizliği
//
// Bu maddeleri bir hukuk uzmanına yazılı olarak doğrulat.
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
              <p className="mt-4 text-[13px] text-muted">
                Son güncelleme: {LEGAL_UPDATED_AT}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
          <div className="space-y-9 text-[14px] leading-relaxed text-muted">{children}</div>

          <Reveal className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
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
