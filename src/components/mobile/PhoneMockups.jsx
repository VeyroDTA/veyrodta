import Icon from "../Icon";

// ─────────────────────────────────────────────
// MOBİL UYGULAMA MOCKUP'LARI
//
// NEDEN FOTOĞRAF DEĞİL
// Bu ekranlar hiçbir müşteriye ait değil; UGR Studio'nun bir mobil uygulama
// projesinde tasarlayabileceği arayüzleri gösteren KONSEPT çizimlerdir. Bu
// yüzden "KONSEPT UI" etiketi görselin üstünde her zaman görünür durumdadır.
// /projeler sayfasındaki konsept fotoğraflar da aynı nedenle etiketlidir.
//
// Ek olarak 0 KB: gerçek bir müşteri uygulaması olmadığı için uydurma ekran
// görüntüsü koymak dürüst olmazdı; kodla çizmek hem dürüst hem de 0 ağırlık.
// LCP yine hero metninde kalır.
//
// TASARIM KURALI — KONTRAST
// Turuncu CTA yüzeyi her zaman `flame-700` (#bb5500). `flame-500` (#ff8a00)
// beyaz metinle 2.36:1 verir ve WCAG AA'yı GEÇMEZ; ana sitede de bu yüzden
// CTA yüzeyi flame-700'tir. Koyu zeminde turuncu yalnızca dekoratif öğe olarak
// kullanılabilir.
//
// TASARIM KURALI — TAŞMA
// Telefonlar sabit genişlik/yükseklik sınıflarıyla ölçülür (satır içi stil
// yok), bu yüzden dar ekranda küçülürler. Döndürme açısı 5°'yi geçmez ve
// telefonlar arası boşluk, dönme payını karşılayacak kadar bırakılmıştır.
const PHONE_W = "w-[80px] sm:w-[108px] lg:w-[128px]";
const PHONE_H = "h-[150px] sm:h-[196px] lg:h-[228px]";

// ── Telefon kasası ───────────────────────────────────────────────
// Dışa açık: "Dijital Deneyim" bölümü tek bir telefonu kendi
// yerleşiminde göstermek için kasayı ve ekranları tek tek de kullanır.
export function PhoneFrame({ children, className = "" }) {
  return (
    <div
      className={`relative flex-none rounded-[16px] border-[3px] border-navy-800 bg-white p-1 shadow-[0_18px_34px_-20px_rgba(15,23,42,0.6)] sm:rounded-[20px] ${PHONE_W} ${className}`}
    >
      {/* Hoparler çubuğu */}
      <span className="mx-auto mb-1 block h-1 w-5 rounded-full bg-navy-800 sm:w-7" />
      <div
        className={`overflow-hidden rounded-[9px] bg-white sm:rounded-[12px] ${PHONE_H}`}
      >
        {children}
      </div>
    </div>
  );
}

// ── Ekran içi ortay parçalar ────────────────────────────────────
// `title` verilmezse marka alanı (logo + "Markanız") + zil gösterilir;
// verilirse geri oku + ekran başlığı gösterilir. Ana ekranda marka, alt
// ekranlarda başlık kullanılır — gerçek uygulamalarda da öyle olur.
function ScreenTop({ title }) {
  return (
    <div className="flex items-center justify-between gap-1 border-b border-line px-1.5 py-1.5">
      {title ? (
        <>
          <Icon name="arrowLeft" className="h-2.5 w-2.5 flex-none text-navy-400" />
          <span className="min-w-0 flex-1 truncate text-center text-[6.5px] font-extrabold text-navy-800 sm:text-[8px]">
            {title}
          </span>
          <span className="h-2.5 w-2.5 flex-none" aria-hidden="true" />
        </>
      ) : (
        <>
          <span className="flex min-w-0 items-center gap-1">
            <span className="grid h-2.5 w-2.5 flex-none place-items-center rounded-[3px] bg-navy-800">
              <span className="h-1 w-1 rounded-full bg-flame-500" />
            </span>
            <span className="truncate text-[6px] font-extrabold tracking-[0.06em] text-navy-800 uppercase sm:text-[7px]">
              Markanız
            </span>
          </span>
          <span className="relative flex-none">
            <Icon name="bell" className="h-2.5 w-2.5 text-navy-400" />
            <span className="absolute -top-0.5 -right-0.5 h-1 w-1 rounded-full bg-flame-500" />
          </span>
        </>
      )}
    </div>
  );
}

function ListRow({ icon, label }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-line px-1.5 py-1.5 last:border-0">
      <span className="grid h-3.5 w-3.5 flex-none place-items-center rounded-[4px] bg-ugr-50 text-ugr-600">
        <Icon name={icon} className="h-2 w-2" />
      </span>
      <span className="truncate text-[5.5px] font-bold text-navy-700 sm:text-[6.5px]">
        {label}
      </span>
    </div>
  );
}

// ── Ekran 1 — uygulama ana ekranı ───────────────────────────────
export function HomeScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <ScreenTop />

      <div className="p-1.5">
        {/* Koyu lacivert kart — turuncu CTA */}
        <div className="rounded-[6px] bg-navy-800 p-1.5">
          <span className="block text-[4.5px] font-extrabold tracking-[0.14em] text-ugr-300 uppercase sm:text-[5.5px]">
            Yeni Koleksiyon
          </span>
          <span className="mt-1 block text-[7px] leading-[1.15] font-extrabold text-white sm:text-[9px]">
            Ürünlerinizi
            <br />
            cebinizde görün.
          </span>
          <span className="mt-1.5 block w-fit rounded-[3px] bg-flame-700 px-1.5 py-0.5 text-[4.5px] font-extrabold text-white sm:text-[5.5px]">
            İncele
          </span>
        </div>
      </div>

      <div className="border-t border-line">
        <ListRow icon="layers" label="Tüm Kategoriler" />
        <ListRow icon="gift" label="Kampanyalar" />
        <ListRow icon="mapPin" label="Yakınımdakiler" />
      </div>
    </div>
  );
}

// ── Ekran 2 — kullanıcı profili ─────────────────────────────────
export function ProfileScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <ScreenTop title="Profil" />

      <div className="flex items-center gap-1.5 px-1.5 py-2">
        <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-ugr-50 text-ugr-600 sm:h-8 sm:w-8">
          <Icon name="user" className="h-3 w-3 sm:h-4 sm:w-4" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[6px] font-extrabold text-navy-800 sm:text-[7.5px]">
            Profilim
          </span>
          <span className="block truncate text-[5px] font-semibold text-navy-400 sm:text-[6px]">
            Üyelik durumu: Aktif
          </span>
        </span>
      </div>

      <div className="border-t border-line">
        <ListRow icon="bag" label="Siparişlerim" />
        <ListRow icon="heart" label="Favorilerim" />
        <ListRow icon="mapPin" label="Adreslerim" />
        <ListRow icon="star" label="Puan ve Ödüller" />
        <ListRow icon="cog" label="Bildirim Tercihleri" />
      </div>
    </div>
  );
}

// ── Ekran 3 — bildirim / sipariş / randevu ───────────────────────
export function OrderScreen() {
  const steps = ["Onaylandı", "Hazırlanıyor", "Yolda"];

  return (
    <div className="flex h-full flex-col bg-white">
      <ScreenTop title="Sipariş" />

      <p className="px-1.5 pt-2 text-[6px] font-extrabold text-navy-800 sm:text-[7.5px]">
        Sipariş Durumu
      </p>

      {/* Zaman çizelgesi */}
      <ul className="mt-1.5 px-1.5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-1.5 py-[3px]">
            <span
              className={`h-1.5 w-1.5 flex-none rounded-full ${
                i === 0 ? "bg-ugr-500" : "border border-navy-200 bg-white"
              }`}
            />
            <span
              className={`truncate text-[5.5px] font-bold sm:text-[6.5px] ${
                i === 0 ? "text-navy-800" : "text-navy-400"
              }`}
            >
              {s}
            </span>
          </li>
        ))}
      </ul>

      {/* Randevu kartı */}
      <div className="mt-auto p-1.5">
        <div className="rounded-[6px] bg-navy-800 p-1.5">
          <span className="block text-[4.5px] font-extrabold tracking-[0.12em] text-ugr-300 uppercase sm:text-[5.5px]">
            Yaklaşan Randevu
          </span>
          <span className="mt-1 block text-[6.5px] font-extrabold text-white sm:text-[8px]">
            Randevu · 14:30
          </span>
          <span className="mt-1 block w-fit rounded-[3px] bg-flame-700 px-1.5 py-0.5 text-[4.5px] font-extrabold text-white sm:text-[5.5px]">
            Detaylar
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Üçlü telefon kümesi ─────────────────────────────────────────
const screens = [
  { key: "home", node: <HomeScreen />, rotate: "-rotate-[5deg]", lift: "translate-y-1" },
  { key: "profile", node: <ProfileScreen />, rotate: "", lift: "-translate-y-1" },
  { key: "order", node: <OrderScreen />, rotate: "rotate-[5deg]", lift: "translate-y-2" },
];

export default function PhoneCluster({ className = "" }) {
  return (
    <div
      role="img"
      aria-label="UGR Studio için tasarlanmış konsept bir mobil uygulamanın ana ekran, kullanıcı profil ve sipariş takip ekranlarını gösteren üç telefon çizimi"
      className={`relative mx-auto flex w-full max-w-[420px] items-center justify-center gap-2 select-none sm:gap-3 ${className}`}
    >
      {screens.map((s) => (
        <div
          key={s.key}
          className={`floaty-slow ${s.rotate} ${s.lift} transition-transform duration-200`}
        >
          <PhoneFrame>{s.node}</PhoneFrame>
        </div>
      ))}

      {/* Konsept etiketi — bu ekranlar gerçek bir müşteri uygulaması değil */}
      <span className="absolute -top-1 right-0 z-10 inline-flex items-center gap-1 rounded-full border border-line bg-white/95 px-2.5 py-1 text-[9px] font-extrabold tracking-[0.12em] text-navy-600 uppercase shadow-[0_10px_22px_-12px_rgba(15,23,42,0.4)] backdrop-blur sm:-top-2 sm:text-[10px]">
        <Icon name="sparkle" className="h-2.5 w-2.5 text-flame-600" />
        Konsept UI
      </span>
    </div>
  );
}
