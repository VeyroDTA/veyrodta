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
//
// Bu alan dolu olan kart, diğer beş karttan şöyle ayrılır:
//   1. Kartın TAMAMI tıklanabilir olur (gerilmiş link deseni).
//   2. Kartın altında "Detayları incele →" satırı görünür.
//
// İkisi de şart: yalnızca başlığı link yapmak kartın tıklanabilirliğini
// görünmez kılıyordu, ziyaretçi ana sayfadan mobil uygulama sayfasına
// giden yolu bulamıyordu.
//
// DİKKAT: Gerilmiş link, kartın içindeki metinlerin seçilmesini engeller.
// Bu kartlarda başka bir etkileşimli öğe (buton, ikinci link) yoktur.
// Etkileşimli bir öğe eklenecekse overlay yerine gerçek <Link> sarmalayıcı
// kullanılmalı — iki tıklanabilir alan üst üste binmemelidir.
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
            className="group relative flex flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-200 hover:border-ugr-200 hover:shadow-[0_18px_38px_-26px_rgba(15,23,42,0.4)]"
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
              <h3 className="text-[15.5px] font-extrabold text-navy-800 transition-colors group-hover:text-ugr-600">
                {s.title}
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

            {/* Detay sayfası olan hizmetlerde görünür yol: kartın tamamı
                tıklanabilir (aşağıdaki gerilmiş link), ama bu satır olmadan
                ziyaretçi kartın tıklanabilir olduğunu anlayamıyor. */}
            {s.to && (
              <span className="mt-5 inline-flex items-center gap-1.5 border-t border-line pt-4 text-[12.5px] font-extrabold text-ugr-600">
                Detayları incele
                <Icon
                  name="arrowRight"
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </span>
            )}

            {/* Erişilebilirlik: gerçek <Link> kullanılır, odak halkası
                index.css'teki focus-visible kuralıyla görünür kalır. */}
            {s.to && (
              <Link
                to={s.to}
                className="absolute inset-0 z-10 rounded-2xl"
                aria-label={`${s.title} hizmetini incele`}
              />
            )}
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
