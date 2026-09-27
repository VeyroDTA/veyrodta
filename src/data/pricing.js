// ─────────────────────────────────────────────
// FİYATLANDIRMA
// Fiyatları buradan değiştir — hem ana sayfa hem /fiyatlar sayfası
// otomatik olarak güncellenir. Örnek: price: "12.500 ₺"
// Fiyatı henüz belli değilse price alanına "Fiyat için teklif alın" yazabilirsin.
// ─────────────────────────────────────────────

export const PRICING_NOTE =
  "Fiyatlar proje kapsamına göre değişiklik gösterebilir. Net teklif, keşif görüşmesinden sonra yazılı olarak paylaşılır.";

export const packages = [
  {
    id: "starter",
    name: "BAŞLANGIÇ",
    audience: "Küçük işletmeler, yeni girişimler ve kişisel markalar için.",
    price: "5.999 ₺",
    priceSuffix: "başlayan fiyat",
    featured: false,
    cta: "Paketi İncele →",
    features: [
      "5-7 sayfa",
      "Özgün tasarım",
      "Mobil uyumlu tasarım",
      "WhatsApp entegrasyonu",
      "İletişim formu",
      "Google Maps",
      "Temel SEO altyapısı",
      "SSL",
      "Yayına alma",
    ],
  },
  {
    id: "business",
    name: "İŞLETME",
    audience: "KOBİ'ler ve profesyonel işletmeler için.",
    price: "8.999 ₺",
    priceSuffix: "başlayan fiyat",
    featured: true,
    badge: "EN ÇOK TERCİH EDİLEN",
    cta: "Paketi İncele →",
    features: [
      "10+ sayfa",
      "Özel UI/UX tasarımı",
      "Mobil uyum",
      "Gelişmiş SEO altyapısı",
      "WhatsApp entegrasyonu",
      "Google Maps",
      "İletişim formları",
      "Google Analytics",
      "Search Console kurulumu",
      "Yönetim paneli",
      "Güvenlik yapılandırması",
      "Yayına alma",
      "Yayın sonrası teknik destek",
    ],
  },
  {
    id: "custom",
    name: "ÖZEL",
    audience: "Özel ihtiyaçları olan işletmeler için.",
    price: "Teklif Al",
    priceSuffix: "kapsama göre belirlenir",
    featured: false,
    cta: "Projemi Anlat →",
    features: [
      "Özel web uygulamaları",
      "Özel yönetim panelleri",
      "API entegrasyonları",
      "Rezervasyon sistemleri",
      "Üyelik sistemleri",
      "Özel otomasyonlar",
      "Gelişmiş e-ticaret",
      "Harici servis entegrasyonları",
      "Projeye özel geliştirme",
    ],
  },
];
