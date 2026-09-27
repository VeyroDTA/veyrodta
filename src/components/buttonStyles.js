// ─────────────────────────────────────────────
// BUTON STİLİ — TEK KAYNAK
//
// Sınıflar burada toplanır, bileşen değil. İki nedenle ayrı dosyada:
//
//  1) React Fast Refresh, bir dosyada yalnızca bileşen export etmeye izin
//     verir. Stili de aynı dosyada export etmek lint hatası verir.
//  2) `Button` kullanmadan da aynı görünüme ihtiyaç duyan yerler var. En
//     önemlisi mailto: / tel: bağlantıları: `Button` her external href'e
//     target="_blank" ekler, ama mailto'da bu yanlıştır (boş sekme açar).
//     Bu yüzden mobil uygulama sayfasındaki CTA'lar düz <a> + buttonClasses
//     olarak yazılır — görünüm kopyalanmaz, davranış doğru olur.
//
// Varyantlar:
//   primary   — turuncu (ANA DÖNÜŞÜM butonu)
//   secondary — beyaz zemin + lacivert kenarlık (outline)
//   navy      — koyu lacivert dolu
//   ghost     — şeffaf, alt çizgili
// ─────────────────────────────────────────────

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-extrabold " +
  "transition-[transform,box-shadow,background-color,border-color,color] duration-200 " +
  "cursor-pointer select-none active:scale-[0.985] whitespace-nowrap";

const variants = {
  primary:
    "bg-flame-700 text-white shadow-[0_10px_24px_-8px_rgba(187,85,0,0.5)] " +
    "hover:bg-flame-800 hover:shadow-[0_14px_30px_-10px_rgba(187,85,0,0.55)] hover:-translate-y-0.5",
  secondary:
    "bg-white text-navy-800 border border-line hover:border-navy-300 hover:bg-surface " +
    "hover:shadow-[0_8px_20px_-12px_rgba(15,23,42,0.4)]",
  navy: "bg-navy-800 text-white hover:bg-navy-700 hover:-translate-y-0.5 hover:shadow-lg",
  ghost: "bg-transparent text-ugr-600 hover:text-ugr-700 px-1",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3.5 text-sm",
  lg: "px-7 py-4 text-[15px]",
};

export function buttonClasses({ variant = "primary", size = "md", className = "" } = {}) {
  return `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;
}
