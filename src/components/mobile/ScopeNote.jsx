import { Reveal } from "../Reveal";

// ─────────────────────────────────────────────
// KAPSAM NOTU
// Bu sayfanın en önemli dürüstlük aracı.
//
// Mobil uygulama projelerinde kapsam o kadar değişkendir ki, "her özellik
// standart pakete dâhildir" izlenimi vermek hem yanlış hem de daha sonra
// maliyet çıkarır. Bu yüzden özellik listeleri, entegrasyonlar, yönetim
// paneli ve mağaza yayını gibi bölümlerin hepsi bu notla kapanır:
// "X proje kapsamına göre belirlenir."
// ─────────────────────────────────────────────

export default function ScopeNote({ children, className = "" }) {
  return (
    <Reveal
      className={`mx-auto mt-8 max-w-2xl rounded-2xl border border-ugr-100 bg-ugr-50 px-5 py-4 text-center ${className}`}
    >
      <p className="text-[13px] leading-relaxed font-semibold text-navy-600">{children}</p>
    </Reveal>
  );
}
