import { packages, packagesNote, priceFactors } from "../../data/mobileApp";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";
import Icon from "../Icon";
import QuoteCta from "./QuoteCta";

// ─────────────────────────────────────────────
// MOBİL UYGULAMA SAYFASI — BÖLÜM 14-15
//   PriceFactors → "Mobil Uygulama Projelerinde Fiyat Nasıl Belirlenir?"
//   Packages     → Başlangıç / İşletme / Özel
//
// FİYAT KURALI (sitenin geri kalanından farklı, bilinçli bir ayrışma)
// Web sitesi projelerinde 5.999 / 8.999 / 11.999 ₺ gibi hazır paket
// fiyatları vardır. Mobil uygulamada bu YANLIŞ olur: aynı isimdeki iki
// uygulama birbirinden çok farklı olabilir. Bu yüzden burada hiçbir rakam
// yoktur; fiyat yerine "Teklif Al" yazılır ve bunun nedeni sayfada açıkça
// anlatılır. Bu, pazarlama değil dürüstlük: kullanıcı teklif alana kadar
// uydurma bir fiyat görmez.
// ─────────────────────────────────────────────

// ── FİYAT NASIL BELİRLENİR? ─────────────────────────────────────
export function PriceFactors() {
  return (
    <Section id="fiyat" tone="surface" bordered>
      <SectionHeading
        eyebrow="FİYATLANDIRMA"
        title="Mobil Uygulama Projelerinde"
        highlight="Fiyat Nasıl Belirlenir?"
        description="Hazır bir fiyat yerine, projenizin kapsamına göre özel teklif hazırlıyoruz. Fiyatı dört temel faktör belirler."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {priceFactors.map((f, i) => (
          <Reveal
            key={f.n}
            as="li"
            delay={i * 80}
            className="min-w-0 rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-ugr-200"
          >
            <span className="text-[13px] font-extrabold tracking-[0.18em] text-ugr-500">
              {f.n}
            </span>
            <span
              aria-hidden="true"
              className="mt-3 mb-3 block h-px w-10 rounded-full rule-orange"
            />
            <h3 className="text-[15.5px] font-extrabold text-navy-800">{f.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{f.desc}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-8 text-center">
        <p className="mx-auto max-w-2xl text-[13.5px] leading-relaxed text-muted">
          Bu nedenle mobil uygulama projelerinde hazır bir fiyat yerine projenizin kapsamına
          göre özel teklif hazırlıyoruz.
        </p>
      </Reveal>

      <Reveal className="mt-8 flex justify-center">
        <QuoteCta context="Fiyat Belirleme Teklifi" size="lg" withArrow>
          Projem İçin Teklif Al
        </QuoteCta>
      </Reveal>
    </Section>
  );
}

// ── PAKETLER ────────────────────────────────────────────────────
export function Packages() {
  return (
    <Section id="paketler">
      <SectionHeading
        eyebrow="PAKETLER"
        title="Mobil Uygulama"
        highlight="Kapsam Örnekleri"
        description="Aşağıdaki üç seviye, mobil uygulama projelerinde sık görülen kapsamları gösterir."
      />

      <ul className="grid gap-4 lg:grid-cols-3">
        {packages.map((p, i) => (
          <Reveal
            key={p.id}
            as="li"
            delay={i * 80}
            className={`flex min-w-0 flex-col rounded-2xl border bg-white p-6 transition-all duration-200 ${
              p.badge
                ? "border-ugr-200 shadow-[0_22px_46px_-30px_rgba(15,23,42,0.5)] lg:-translate-y-2"
                : "border-line hover:border-ugr-200"
            }`}
          >
            {p.badge && (
              <span className="-mt-6 mb-4 w-fit rounded-full border border-line bg-navy-800 px-3 py-1 text-[10px] font-extrabold tracking-[0.14em] text-white uppercase shadow-[0_8px_18px_-10px_rgba(15,23,42,0.6)]">
                {p.badge}
              </span>
            )}

            <span className="text-[11px] font-extrabold tracking-[0.18em] text-ugr-600 uppercase">
              {p.kicker}
            </span>
            <h3 className="mt-2 text-[19px] leading-snug font-extrabold tracking-tight text-navy-800">
              {p.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{p.desc}</p>

            <ul className="mt-5 flex-1 space-y-2 border-t border-line pt-5">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-[13px] text-navy-600">
                  <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-ugr-50 text-ugr-600">
                    <Icon name="check" className="h-2.5 w-2.5" />
                  </span>
                  {pt}
                </li>
              ))}
            </ul>

            {/* Fiyat yerine teklif — bkz. dosya başındaki "FİYAT KURALI" notu */}
            <div className="mt-6 border-t border-line pt-5">
              <p className="text-[11px] font-extrabold tracking-wide text-navy-400 uppercase">
                Fiyat
              </p>
              <p className="mt-1 text-[17px] font-extrabold text-navy-800">{p.cta}</p>
              <QuoteCta
                context={`${p.title} Paketi`}
                size="md"
                className="mt-4 w-full"
                label={p.cta}
              />
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-8 text-center">
        <p className="mx-auto max-w-2xl text-[12.5px] leading-relaxed text-navy-500">
          {packagesNote}
        </p>
      </Reveal>
    </Section>
  );
}
