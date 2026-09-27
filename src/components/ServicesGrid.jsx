import { Link } from "react-router-dom";
import { services } from "../data/services";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import Icon from "./Icon";

// ─────────────────────────────────────────────
// HİZMETLERİMİZ
// 6 hizmet — fazlası değil. Kartlar bilinçli olarak küçük tutuldu ki
// ziyaretçi "hangi hizmet benim işime uyuyor?" sorusunu 3 saniyede çözebilsin.
//
// `to` alanı (isteğe bağlı)
// Yalnızca bir hizmetin kendi detay sayfası varsa kullanılır. Şu an sadece
// "Mobil Uygulama" böyle bir sayfaya sahip (/mobil-uygulama-gelistirme).
// Bu kartın başlığı ve altındaki "Detaylar →" satırı tıklanabilir olur; diğer
// beş kart bilinçli olarak dokunulmaz kalır, çünkü onların /hizmetler
// sayfasındaki kartları zaten yeterli.
//
// DİKKAT: Başlığın tıklanabilir olması, kartın tamamının tıklanabilir
// olduğu anlamına gelmez. Erişilebilirlik için yalnızca gerçek bir <Link>
// kullanılır ve odak halkası görünür kalır (focus-visible, index.css).
// ─────────────────────────────────────────────

export default function ServicesGrid({ withCta = true }) {
  return (
    <Section id="hizmetler">
      <SectionHeading
        eyebrow="HİZMETLERİMİZ"
        title="İhtiyacınıza Uygun"
        highlight="Dijital Çözümler"
        description="Markanızın ihtiyacına göre tasarlıyor, geliştiriyor ve yayına alıyoruz."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal
            key={s.id}
            as="li"
            delay={(i % 3) * 70}
            className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-200 hover:border-ugr-200 hover:shadow-[0_18px_38px_-26px_rgba(15,23,42,0.4)]"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ugr-50 text-ugr-600 transition-colors group-hover:bg-ugr-500 group-hover:text-white">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <span className="text-[11px] font-extrabold tracking-[0.18em] text-navy-300">
                {s.order}
              </span>
            </div>

            {s.to ? (
              <h3>
                <Link
                  to={s.to}
                  className="inline-flex items-center gap-1.5 text-[15.5px] font-extrabold text-navy-800 underline-offset-4 hover:text-ugr-600 hover:underline"
                >
                  {s.title}
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 text-ugr-500 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              </h3>
            ) : (
              <h3 className="text-[15.5px] font-extrabold text-navy-800">{s.title}</h3>
            )}

            <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{s.short}</p>

            <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[12.5px] text-navy-500">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-ugr-300" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>

      {withCta && (
        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#iletisim"
            className="text-[14px] font-extrabold text-ugr-600 underline-offset-4 hover:underline"
          >
            Bu hizmetlerden hangisi size uygun? Teklif isteyin →
          </a>
        </Reveal>
      )}
    </Section>
  );
}
