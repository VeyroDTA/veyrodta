// ─────────────────────────────────────────────
// DİJİTAL ÇÖZÜM SEÇİMİ
// Ana sayfadaki interaktif "İşletmeniz İçin Doğru Dijital Çözümü Seçin"
// bölümü ve /hizmetler sayfasındaki çözüm seçimi bu veriden beslenir.
// Süre bilgileri SSS ve fiyatlandırma ile tutarlı tutulmalıdır:
// toplam teslim süresi 2-6 hafta aralığındadır.
// ─────────────────────────────────────────────

export const solutions = [
  {
    id: "kurumsal",
    order: "01",
    title: "Kurumsal Web Sitesi",
    // Telefon mockup'ındaki sahte arama satırı
    searchQuery: "kurumsal web sitesi fiyatları",
    desc: "Markanızı profesyonel şekilde temsil eden modern ve hızlı web siteleri.",
    examples: [
      "Şirketinizi anlatan kurumsal sayfa yapısı",
      "Hizmet ve sektör sayfaları",
      "Referanslar ve ekip anlatımı",
      "İletişim formu, harita ve WhatsApp butonu",
    ],
    scope: "5-10+ sayfa",
    duration: "Yaklaşık 2-3 hafta",
    priceFrom: "5.999 ₺'den başlayan fiyatlar",
    formType: "Kurumsal Web Sitesi",
    icon: "building",
  },
  {
    id: "eticaret",
    order: "02",
    title: "E-Ticaret & Dijital Satış",
    searchQuery: "e-ticaret sitesi yaptırmak",
    desc: "Ürünlerinizi sergileyebileceğiniz ve online satış süreçlerinizi destekleyen çözümler.",
    examples: [
      "Ürün, kategori ve varyasyon yönetimi",
      "Sepet, sipariş ve ödeme altyapısı",
      "Kargo ve ödeme kuruluşu entegrasyonu",
      "Stok takibi ve sipariş yönetim paneli",
    ],
    scope: "Ürün sayısına göre değişir",
    duration: "Yaklaşık 3-4 hafta",
    priceFrom: "Kapsama göre teklif",
    formType: "E-Ticaret",
    icon: "cart",
  },
  {
    id: "mobil",
    order: "03",
    title: "Mobil Uygulama",
    // Telefon mockup'ındaki sahte arama satırı
    searchQuery: "mobil uygulama geliştirme",
    desc: "İşletmenizi müşterilerinizin cebine taşıyan, Android ve iOS için özel mobil uygulamalar.",
    examples: [
      "Marka kimliğinize özel arayüz ve kullanıcı deneyimi",
      "Sipariş, randevu, rezervasyon veya üyelik akışları",
      "Ödeme ve üçüncü taraf servis entegrasyonları",
      "Uygulamanın arkasında web tabanlı yönetim paneli",
    ],
    scope: "Özellik kapsamına göre değişir",
    duration: "Analiz sonrası belirlenir",
    priceFrom: "Kapsama göre teklif",
    formType: "Mobil Uygulama Geliştirme",
    icon: "mobile",
    // Bu kategorinin kendi detay sayfası var; panelde bağlantı gösterilir.
    to: "/mobil-uygulama-gelistirme",
  },
  {
    id: "ozel",
    order: "04",
    title: "Özel Web ÇöZümleri",
    searchQuery: "özel web uygulaması geliştirme",
    desc: "Standart paketlerin dışında kalan özel ihtiyaçlarınız için size özel web uygulamaları.",
    examples: [
      "Rezervasyon ve randevu yönetim sistemi",
      "Üyelik, giriş ve yetkilendirme altyapısı",
      "Kendi panelinize bağlanan yönetim ekranı",
      "Harici servisler için API entegrasyonu",
    ],
    scope: "İhtiyaca göre tasarlanır",
    duration: "Yaklaşık 4-6 hafta",
    priceFrom: "Teklif alın",
    formType: "Özel Web Uygulaması",
    icon: "code",
  },
];
