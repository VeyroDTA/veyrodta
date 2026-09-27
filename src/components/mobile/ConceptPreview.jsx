import Icon from "../Icon";

// ─────────────────────────────────────────────
// KONSEPT UI ÖNİZLEME
// /mobil-uygulama-gelistirme sayfasındaki "Konsept UI Çalışmaları" için
// küçük uygulama arayüzü çizimleri.
//
// Bunlar fotoğraf değil, kodla çizilmiş arayüz kurgularıdır. Gerçek bir
// mobil uygulama müşteri projesi olmadığı için sahte ekran görüntüsü
// kurgulamak yerine, "böyle bir uygulama nasıl görünür" sorusunu dürüstçe
// yanıtlıyoruz. Kart etiketleri "KONSEPT UI" olarak açıkça belirtilir.
// ─────────────────────────────────────────────

const variants = {
  restaurant: {
    tab: "Menü",
    strip: "Bugünün Menüsü",
    stripNote: "Sipariş & Teslimat",
    rows: [
      { icon: "bag", label: "Sepete Ekle" },
      { icon: "clock", label: "Sipariş Takibi" },
    ],
  },
  beauty: {
    tab: "Randevu",
    strip: "Randevu Saatleri",
    stripNote: "Üyelik & Puan",
    rows: [
      { icon: "calendar", label: "Randevu Al" },
      { icon: "star", label: "Sadakat Programı" },
    ],
  },
  shop: {
    tab: "Ürünler",
    strip: "Kampanyalar",
    stripNote: "Favoriler & Sipariş",
    rows: [
      { icon: "cart", label: "Sepete Ekle" },
      { icon: "heart", label: "Favorilerim" },
    ],
  },
};

export default function ConceptPreview({ variant, label = "Konsept arayüz önizlemesi" }) {
  const v = variants[variant] || variants.shop;

  return (
    <div
      role="img"
      aria-label={`${label} — tasarlanmış konsept mobil uygulama arayüzü çizimi`}
      className="relative aspect-[16/10] w-full overflow-hidden bg-surface"
    >
      <div className="absolute inset-0 p-2.5 sm:p-3">
        {/* Üst çubuk */}
        <div className="flex items-center justify-between gap-2">
          <span className="flex min-w-0 items-center gap-1.5">
            <span className="grid h-4 w-4 flex-none place-items-center rounded-[5px] bg-navy-800">
              <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
            </span>
            <span className="truncate text-[9px] font-extrabold tracking-[0.06em] text-navy-800 uppercase sm:text-[10px]">
              Markanız
            </span>
          </span>
          <span className="flex flex-none items-center gap-1.5">
            <span className="rounded-full bg-navy-800 px-2 py-0.5 text-[7px] font-extrabold text-white sm:text-[8px]">
              {v.tab}
            </span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-ugr-200 sm:block" />
          </span>
        </div>

        {/* Şerit */}
        <div className="mt-2 flex items-end justify-between gap-2 rounded-lg bg-navy-800 px-2.5 py-2 sm:mt-2.5 sm:px-3 sm:py-2.5">
          <span className="min-w-0">
            <span className="block text-[7px] font-extrabold tracking-[0.14em] text-ugr-300 uppercase sm:text-[8px]">
              {v.stripNote}
            </span>
            <span className="mt-1 block truncate text-[11px] font-extrabold text-white sm:text-[13px]">
              {v.strip}
            </span>
          </span>
          <span className="flex-none rounded-md bg-flame-700 px-2 py-1 text-[7px] font-extrabold text-white sm:text-[8px]">
            Gör
          </span>
        </div>

        {/* Satırlar */}
        <div className="mt-2 grid gap-1.5 sm:mt-2.5 sm:grid-cols-2 sm:gap-2">
          {v.rows.map((r) => (
            <div
              key={r.label}
              className="flex min-w-0 items-center gap-1.5 rounded-md border border-line bg-white px-1.5 py-1.5 sm:px-2 sm:py-2"
            >
              <span className="grid h-4 w-4 flex-none place-items-center rounded-[5px] bg-ugr-50 text-ugr-600">
                <Icon name={r.icon} className="h-2.5 w-2.5" />
              </span>
              <span className="truncate text-[8px] font-bold text-navy-700 sm:text-[9px]">
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Konsept etiketi */}
      <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 rounded-full border border-line bg-white/95 px-2 py-0.5 text-[9px] font-extrabold tracking-[0.1em] text-navy-600 uppercase backdrop-blur sm:top-3 sm:left-3 sm:text-[10px]">
        <Icon name="sparkle" className="h-2.5 w-2.5 text-flame-600" />
        Konsept UI
      </span>
    </div>
  );
}
