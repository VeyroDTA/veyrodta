// ─────────────────────────────────────────────
// HİZMETLER
// Yeni hizmet eklemek için bu diziye bir obje daha ekle —
// ana sayfa ve /hizmetler sayfası otomatik güncellenir.
//
// SIRA (marka kapsamına göre)
//   01 Kurumsal Web Sitesi
//   02 E-Ticaret
//   03 Mobil Uygulama          → kendi sayfası var: /mobil-uygulama-gelistirme
//   04 Landing Page
//   05 Özel Web Çözümleri
//   06 Bakım & Teknik Destek
//
// 6 hizmet ve 6'dan fazlası değil. Kartın okunabilirliği ve "hangi hizmet
// bana uygun?" sorusunun 3 saniyede cevaplanması, uzun listelerden daha
// önemli. SEO & Teknik Optimizasyon bu listeden çıkarıldı; teknik SEO,
// "Özel Web Çözümleri" ve "Bakım & Teknik Destek" kapsamında kalıyor ve
// /hizmetler sayfasında anlatılmaya devam ediyor.
//
// `formType` alanı, bu hizmetin kartından "Teklif Al" butonuna basıldığında
// açılan e-posta taslağının konu satırına yazılacak hizmet adıdır
// (bkz. config.js → quoteMailtoHref).
//
// `to` alanı (isteğe bağlı) — yalnızca hizmetin kendi detay sayfası
// varsa kullanılır. Şu an sadece Mobil Uygulama için dolu. Bu alan dolu
// olan kartın başlığı tıklanabilir olur (bkz. ServicesGrid.jsx).
// ─────────────────────────────────────────────

export const services = [
  {
    id: "kurumsal",
    order: "01",
    title: "Kurumsal Web Sitesi",
    short: "Modern, hızlı ve profesyonel kurumsal web siteleri.",
    formType: "Kurumsal Web Sitesi",
    icon: "building",
    points: [
      "Markanıza özel arayüz ve tasarım",
      "Kurumsal içerik yapısı ve hizmet sayfaları",
      "Hızlı yüklenen, mobil uyumlu altyapı",
    ],
  },
  {
    id: "eticaret",
    order: "02",
    title: "E-Ticaret",
    short: "Online satışa uygun modern e-ticaret çözümleri.",
    formType: "E-Ticaret",
    icon: "cart",
    points: [
      "Ürün, kategori ve stok yönetimi",
      "Sepet, ödeme ve kargo entegrasyonu",
      "Mobilde hızlı satış deneyimi",
    ],
  },
  {
    id: "mobil-uygulama",
    order: "03",
    title: "Mobil Uygulama",
    short: "İşletmenize özel Android ve iOS mobil uygulamaları.",
    formType: "Mobil Uygulama Geliştirme",
    icon: "mobile",
    to: "/mobil-uygulama-gelistirme",
    points: [
      "Kullanıcı odaklı arayüz ve akış tasarımı",
      "Sepet, randevu, bildirim ve üyelik özellikleri",
      "Ödeme, API ve yönetim paneli entegrasyonları",
    ],
  },
  {
    id: "landing",
    order: "04",
    title: "Landing Page",
    short: "Reklam, kampanya ve ürünleriniz için yüksek dönüşüm odaklı sayfalar.",
    formType: "Landing Page",
    icon: "target",
    points: [
      "Tek ekran, net teklif odaklı yapı",
      "Reklam ve kampanya performansına uygun",
      "A/B test ve dönüşüm takibi altyapısı",
    ],
  },
  {
    id: "cozum",
    order: "05",
    title: "Özel Web Çözümleri",
    short: "İşletmenizin ihtiyacına göre geliştirilen özel sistemler.",
    formType: "Özel Web Çözümü",
    icon: "code",
    points: [
      "İş akışınıza uygun özel panel",
      "Rezervasyon, üyelik, randevu modülleri",
      "Harici servis ve API entegrasyonları",
    ],
  },
  {
    id: "destek",
    order: "06",
    title: "Bakım & Teknik Destek",
    short: "Yayın sonrası güncelleme, bakım, SEO ve teknik destek.",
    formType: "Bakım & Teknik Destek",
    icon: "shield",
    points: [
      "Güncelleme, yedekleme ve güvenlik takibi",
      "Performans, SEO ve içerik desteği",
      "Yeni sayfa ve özellik ekleme",
    ],
  },
];
