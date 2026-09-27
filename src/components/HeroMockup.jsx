import Icon from "./Icon";

// ─────────────────────────────────────────────
// HERO MOCKUP
// Hazır görsel/stok fotoğraf yerine, saf CSS ile kurulmuş bir "web sitesi
// önizlemesi". Ziyaretçi sağ tarafa baktığında UGR Studio'nun gerçekten web
// sitesi tasarladığını ilk saniyede anlar: laptop + telefon + çalışan site.
//
// NEDEN FOTOĞRAF DEĞİL
// /projeler sayfasındaki görsellerin tamamı konsept çalışma. Onlardan birini
// buraya koysaydık ya "KONSEPT ÇALIŞMA" etiketi hero'nun en görünür yerine
// düşecek ya da etiketsiz kullanılmış olacaktı. İkisi de bu mockup'tan kötü.
// Bunun yerine içeriği UGR Studio'nun GERÇEK hizmet adlarından kuruyoruz:
// marka alanına "MARKANIZ", adres çubuğuna "sizinsiteniz.com". Yani ekran
// "sizin siteniz böyle görünecek" diyor — uydurma müşteri iddiası yok.
// Ayrıca 0 KB: LCP yine h1 metni olarak kalır, "hızlı performans" iddiası
// gerçekten doğru olur.
//
// Erişilebilirlik: dekoratif bir görsel olduğu için role="img" + açıklayıcı
// aria-label ile tek bir bütün olarak okunur. İçindeki metinler dekoratif
// doku olduğu için okuyucular tarafından atlanır.
// ─────────────────────────────────────────────

// Gerçek hizmet adları (src/data/services.js ile aynı)
// — uydurma hizmet veya uydurma sayı yazılmadı.
const navLinks = ["Kurumsal", "E-Ticaret", "Hizmetler"];

// Kartlar, üstteki menüden farklı olacak şekilde seçildi ki aynı kelime
// iki yerde görünmesin.
const miniCards = [
  { icon: "target", title: "Landing Page" },
  { icon: "search", title: "SEO" },
  { icon: "headset", title: "Bakım" },
];

function BrowserBar() {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-surface px-3 py-2.5">
      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-navy-200" />
      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-navy-200" />
      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-navy-200" />
      <span className="ml-1.5 flex-1 truncate rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-navy-400 ring-1 ring-line">
        sizinsiteniz.com
      </span>
      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-ugr-200" />
    </div>
  );
}

function MiniSite() {
  return (
    <div className="space-y-3 bg-white p-4">
      {/* Mini navigasyon — gerçek hizmet adları */}
      <div className="flex items-center justify-between gap-3">
        <span className="flex min-w-0 items-center gap-1.5">
          <span className="grid h-4 w-4 flex-none place-items-center rounded-[5px] bg-navy-800">
            <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
          </span>
          <span className="truncate text-[10px] font-extrabold tracking-[0.05em] text-navy-800 uppercase">
            Markanız
          </span>
        </span>
        <span className="flex flex-none items-center gap-2.5">
          {navLinks.map((l, i) => (
            <span
              key={l}
              className={`text-[9.5px] font-semibold whitespace-nowrap text-navy-400 ${
                i === 2 ? "hidden sm:inline" : ""
              }`}
            >
              {l}
            </span>
          ))}
        </span>
      </div>

      {/* Mini hero — düz lacivert zemin, turuncu CTA */}
      <div className="rounded-xl bg-navy-800 px-3.5 py-3">
        <span className="block text-[8px] font-extrabold tracking-[0.16em] text-ugr-300 uppercase">
          Kurumsal Web Sitesi
        </span>
        <p className="mt-1.5 text-[14px] leading-[1.18] font-extrabold tracking-tight text-white">
          İşletmenizin
          <br />
          Dijital Vitrini
        </p>
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="rounded-md bg-flame-700 px-2 py-1 text-[9px] font-extrabold text-white">
            Teklif Al
          </span>
          <span className="rounded-md border border-white/30 px-2 py-1 text-[9px] font-extrabold text-white/85">
            Projeler
          </span>
        </div>
      </div>

      {/* Mini kartlar */}
      <div className="grid grid-cols-3 gap-2">
        {miniCards.map((c) => (
          <div key={c.title} className="rounded-lg border border-line p-2">
            <span className="mb-1.5 grid h-4 w-4 place-items-center rounded-[5px] bg-ugr-50 text-ugr-600">
              <Icon name={c.icon} className="h-2.5 w-2.5" />
            </span>
            <span className="block text-[9.5px] leading-tight font-extrabold text-navy-800">
              {c.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="absolute -right-1 -bottom-7 w-[112px] rounded-[22px] border-[5px] border-navy-800 bg-white p-1.5 shadow-[0_20px_40px_-16px_rgba(15,23,42,0.55)] sm:-right-4 sm:w-[132px] sm:rounded-[26px] lg:-right-8 lg:w-[146px]">
      <div className="mb-1.5 flex justify-center">
        <span className="h-1.5 w-8 rounded-full bg-navy-800" />
      </div>
      <div className="space-y-1.5 rounded-lg bg-white p-1.5">
        {/* Mini marka satırı */}
        <span className="flex items-center gap-1">
          <span className="grid h-2.5 w-2.5 flex-none place-items-center rounded-[3px] bg-navy-800">
            <span className="h-1 w-1 rounded-full bg-flame-500" />
          </span>
          <span className="truncate text-[7px] font-extrabold tracking-[0.05em] text-navy-800 uppercase">
            Markanız
          </span>
        </span>

        <div className="rounded-md bg-navy-800 p-2">
          <span className="block text-[6.5px] font-extrabold tracking-[0.14em] text-ugr-300 uppercase">
            E-Ticaret
          </span>
          <span className="mt-1 block text-[10px] leading-[1.2] font-extrabold text-white">
            Sepetinize
            <br />
            kolaylık.
          </span>
          <span className="mt-1.5 block w-fit rounded-[4px] bg-flame-700 px-1.5 py-0.5 text-[7px] font-extrabold text-white">
            Teklif Al
          </span>
        </div>

        {miniCards.slice(0, 2).map((c) => (
          <div key={c.title} className="flex items-center gap-1.5 rounded-md border border-line p-1.5">
            <span className="grid h-3.5 w-3.5 flex-none place-items-center rounded-[4px] bg-ugr-50 text-ugr-600">
              <Icon name={c.icon} className="h-2 w-2" />
            </span>
            <span className="truncate text-[7.5px] font-extrabold text-navy-800">{c.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FloatingTag({ icon, label, className = "", delay = "0s" }) {
  return (
    <span
      className={`floaty absolute z-10 flex items-center gap-2 rounded-2xl border border-line bg-white/95 px-3 py-2 shadow-[0_12px_28px_-14px_rgba(15,23,42,0.4)] backdrop-blur ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="grid h-6 w-6 place-items-center rounded-lg bg-ugr-50 text-ugr-600">
        <Icon name={icon} className="h-3.5 w-3.5" />
      </span>
      <span className="text-[11px] font-extrabold whitespace-nowrap text-navy-800">
        {label}
      </span>
    </span>
  );
}

export default function HeroMockup() {
  return (
    <div
      role="img"
      aria-label="UGR Studio tarafından tasarlanmış, masaüstü ve mobil görünümü yan yana gösteren bir web sitesi önizlemesi"
      className="relative mx-auto w-full max-w-[480px] select-none lg:max-w-none"
    >
      {/* Arka plan lekesi — çok hafif, dekoratif */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-ugr-50 via-white to-flame-50 blur-2xl"
      />

      {/* Laptop */}
      <div className="rounded-[20px] border border-line bg-white p-2 shadow-[0_28px_60px_-28px_rgba(15,23,42,0.45)] sm:p-2.5">
        <div className="overflow-hidden rounded-[14px] border border-line">
          <BrowserBar />
          <MiniSite />
        </div>
      </div>

      {/* Laptop tabanı */}
      <div
        aria-hidden="true"
        className="mx-auto h-2 w-[86%] rounded-b-xl bg-gradient-to-b from-navy-100 to-navy-200"
      />

      {/* Telefon */}
      <PhoneMockup />

      {/* Yüzen bilgi etiketleri */}
      <FloatingTag icon="mobile" label="Mobil Uyumlu" className="-top-4 -left-2 sm:top-2 sm:left-0" />
      <FloatingTag
        icon="search"
        label="SEO Altyapısı"
        className="top-1/3 -right-3 hidden sm:flex"
        delay="1.2s"
      />
      <FloatingTag
        icon="bolt"
        label="Hızlı Performans"
        className="-bottom-2 left-2 hidden md:flex sm:-bottom-4 sm:left-6"
        delay="2.4s"
      />
    </div>
  );
}
