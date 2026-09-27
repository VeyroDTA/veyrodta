// ─────────────────────────────────────────────
// MOBİL UYGULAMA GELİŞTİRME SAYFASI — İÇERİK
//
// /mobil-uygulama-gelistirme sayfasının bütün metni burada toplanmış
// durumda. Bileşenler yalnızca bu dizileri okur, metin bileşenlerin
// içine gömülmez. Böylece içerik değişikliği için tek dosya yeterlidir.
//
// ⚠ DÜRÜSTLÜK KURALLARI (sitenin geri kalanıyla aynı)
//   · Sahte indirme / kullanıcı / başarı oranı sayısı YOK
//   · Sahte müşteri yorumu YOK
//   · "Garantiyi başarı", "satışlarınızı artırır" gibi kanıtsız vaat YOK
//   · Native / çapraz platform gibi teknik vaat YOK (Android ve iOS
//     deneyimleri proje ihtiyacına göre planlanır)
//   · Uygulama ekranları çizimdir; "KONSEPT UI" etiketi her yerde görünür
//   · Fiyat yerine "proje kapsamına göre" + teklif — tek sabit rakam yok
// ─────────────────────────────────────────────

// 2) HERO ALTINDA HIZLI GÜVEN ALANI
export const mobileTrust = [
  {
    icon: "pen",
    title: "Özgün Tasarım",
    desc: "Uygulamanız markanıza özel tasarlanır.",
  },
  {
    icon: "users",
    title: "Kullanıcı Odaklı",
    desc: "Basit ve anlaşılır kullanım deneyimi.",
  },
  {
    icon: "bolt",
    title: "Modern Altyapı",
    desc: "Güncel teknolojilerle ölçeklenebilir yapı.",
  },
  {
    icon: "send",
    title: "Yayına Hazır",
    desc: "Test, optimizasyon ve mağaza yayın sürecine destek.",
  },
];

// 3) ANA TANITIM BÖLÜMÜ — "DİJİTAL DENEYİM"
export const mobileIntro = {
  paragraphs: [
    "Mobil uygulamanız yalnızca telefonlarda çalışan bir yazılım olmamalı. Markanızı yansıtmalı, müşterilerinizin ihtiyaçlarına cevap vermeli ve işletmenizin dijital süreçlerini kolaylaştırmalı.",
    "UGR Studio olarak uygulamanın tasarımından kullanıcı deneyimine, geliştirme sürecinden yayına kadar projenin farklı aşamalarını birlikte planlıyoruz.",
  ],
  facts: [
    { label: "Kapsam", value: "Önce ihtiyaç, sonra özellik" },
    { label: "Yaklaşım", value: "Kullanıcı deneyimi önce" },
    { label: "Teslim", value: "Mağazaya hazır hâlde" },
  ],
};

// 4) HANGİ İŞLETMELER İÇİN? — 6 kart
export const mobileUseCases = [
  {
    order: "01",
    icon: "cart",
    title: "E-Ticaret & Mağaza",
    desc: "Müşterilerinizin ürünlerinize mobil cihazlarından kolayca ulaşmasını sağlayan uygulamalar.",
  },
  {
    order: "02",
    icon: "calendar",
    title: "Rezervasyon & Randevu",
    desc: "Restoran, güzellik merkezi, danışmanlık ve hizmet işletmeleri için rezervasyon ve randevu çözümleri.",
  },
  {
    order: "03",
    icon: "bag",
    title: "Sipariş Uygulamaları",
    desc: "Müşterilerinizin ürün veya hizmet siparişlerini mobil üzerinden verebilmesini sağlayan sistemler.",
  },
  {
    order: "04",
    icon: "star",
    title: "Üyelik & Sadakat",
    desc: "Üyelik, puan, kampanya ve müşteri sadakat sistemlerini mobil uygulamanıza taşıyın.",
  },
  {
    order: "05",
    icon: "cog",
    title: "İşletme Uygulamaları",
    desc: "Çalışanlarınız veya işletme süreçleriniz için özel mobil uygulamalar.",
  },
  {
    order: "06",
    icon: "lightbulb",
    title: "Özel Fikirler",
    desc: "Standart kategorilere girmeyen mobil uygulama fikirleri için projeye özel çözümler.",
  },
];

// 5) GELİŞTİRİLEBİLECEK ÖZELLİKLER — 21 madde
export const mobileFeatures = [
  { icon: "user", label: "Kullanıcı kayıt ve giriş sistemi" },
  { icon: "cog", label: "Profil yönetimi" },
  { icon: "layers", label: "Ürün / hizmet listeleme" },
  { icon: "filter", label: "Arama ve filtreleme" },
  { icon: "cart", label: "Sepet sistemi" },
  { icon: "bag", label: "Sipariş sistemi" },
  { icon: "calendar", label: "Randevu sistemi" },
  { icon: "clock", label: "Rezervasyon sistemi" },
  { icon: "bell", label: "Bildirimler" },
  { icon: "heart", label: "Favoriler" },
  { icon: "gift", label: "Kampanya ve kuponlar" },
  { icon: "users", label: "Üyelik sistemi" },
  { icon: "star", label: "Puan / sadakat sistemi" },
  { icon: "mapPin", label: "Harita ve konum" },
  { icon: "card", label: "Ödeme entegrasyonları" },
  { icon: "link", label: "API entegrasyonları" },
  { icon: "layout", label: "Yönetim paneli" },
  { icon: "document", label: "İçerik yönetimi" },
  { icon: "users", label: "Kullanıcı yönetimi" },
  { icon: "chart", label: "İstatistik ve raporlama" },
  { icon: "shield", label: "Ödeme ve güvenlik kontrolleri" },
];

// 6) WEB + MOBİL + YÖNETİM PANELİ — 3 kart
export const ecosystem = [
  {
    icon: "mobile",
    title: "Mobil Uygulama",
    desc: "Müşterilerinizin kullandığı mobil deneyim.",
  },
  {
    icon: "desktop",
    title: "Web Sitesi",
    desc: "Markanızın ve hizmetlerinizin web üzerindeki merkezi.",
  },
  {
    icon: "layout",
    title: "Yönetim Paneli",
    desc: "Sipariş, kullanıcı, içerik veya işletme süreçlerinizi yönetebileceğiniz panel.",
  },
];

// 7) TASARIM SÜRECİ — 4 aşama
export const designStages = [
  {
    n: "01",
    title: "Kullanıcı Deneyimi",
    desc: "Uygulamanın kullanıcı tarafından nasıl kullanılacağını planlıyoruz.",
  },
  {
    n: "02",
    title: "UI Tasarımı",
    desc: "Markanıza uygun modern ve anlaşılır arayüzler tasarlıyoruz.",
  },
  {
    n: "03",
    title: "Prototip",
    desc: "Temel ekranlar ve kullanıcı akışları geliştirilmeden önce görselleştiriliyor.",
  },
  {
    n: "04",
    title: "Geliştirme",
    desc: "Onaylanan tasarım çalışan mobil uygulamaya dönüştürülüyor.",
  },
];

// 8) GELİŞTİRME SÜRECİ — 5 aşama
export const devSteps = [
  {
    n: "01",
    title: "Keşif",
    desc: "İhtiyaçlarınızı, hedef kitlenizi ve uygulamanın amacını belirliyoruz.",
  },
  {
    n: "02",
    title: "Planlama",
    desc: "Uygulamanın özelliklerini, kullanıcı akışlarını ve teknik yapısını planlıyoruz.",
  },
  {
    n: "03",
    title: "Tasarım",
    desc: "Uygulamanın arayüzünü ve kullanıcı deneyimini hazırlıyoruz.",
  },
  {
    n: "04",
    title: "Geliştirme & Test",
    desc: "Uygulamayı geliştiriyor, farklı cihaz ve senaryolarda test ediyoruz.",
  },
  {
    n: "05",
    title: "Yayın",
    desc: "Gerekli hazırlıkları tamamlayarak uygulamanın mağaza yayın sürecine hazırlanmasına destek oluyoruz.",
  },
];

// 9) ANDROID & iOS — 2 kart
export const platforms = [
  {
    label: "ANDROID",
    title: "Android",
    desc: "Android kullanıcıları için mobil uygulama deneyimi.",
  },
  {
    label: "iOS",
    title: "iOS",
    desc: "Apple cihazları için mobil uygulama deneyimi.",
  },
];

// 10) UYGULAMA MAĞAZALARINA YAYIN — 2 kart
export const stores = [
  {
    label: "GOOGLE PLAY",
    title: "Google Play",
    desc: "Android uygulamanız için yayın hazırlıkları.",
  },
  {
    label: "APP STORE",
    title: "App Store",
    desc: "iOS uygulamanız için yayın hazırlıkları.",
  },
];

// 11) ÖDEME & ENTEGRASYONLAR
export const integrations = [
  { icon: "card", label: "Online ödeme" },
  { icon: "map", label: "Harita servisleri" },
  { icon: "bell", label: "Bildirim servisleri" },
  { icon: "send", label: "SMS" },
  { icon: "mail", label: "E-posta" },
  { icon: "users", label: "CRM" },
  { icon: "layers", label: "ERP" },
  { icon: "link", label: "API" },
  { icon: "package", label: "Kargo sistemleri" },
  { icon: "calendar", label: "Rezervasyon sistemleri" },
  { icon: "lock", label: "Sosyal giriş sistemleri" },
];

// 12) YÖNETİM PANELİ ÖZELLİKLERİ
export const adminFeatures = [
  { icon: "users", label: "Kullanıcı yönetimi" },
  { icon: "layers", label: "Ürün / hizmet yönetimi" },
  { icon: "bag", label: "Sipariş yönetimi" },
  { icon: "calendar", label: "Randevu yönetimi" },
  { icon: "gift", label: "Kampanya yönetimi" },
  { icon: "bell", label: "Bildirim gönderimi" },
  { icon: "document", label: "İçerik yönetimi" },
  { icon: "chart", label: "İstatistikler" },
  { icon: "document", label: "Raporlama" },
];

// 13) FİYAT NASIL BELİRLENİR? — 4 faktör
export const priceFactors = [
  {
    n: "01",
    title: "Özellik Sayısı",
    desc: "Uygulamada bulunacak özelliklerin kapsamı.",
  },
  {
    n: "02",
    title: "Platform",
    desc: "Android, iOS veya her iki platform.",
  },
  {
    n: "03",
    title: "Yönetim Paneli",
    desc: "Uygulamanın arkasında özel bir yönetim sistemi gerekip gerekmediği.",
  },
  {
    n: "04",
    title: "Entegrasyonlar",
    desc: "Ödeme, API, CRM, ERP ve diğer üçüncü taraf sistemler.",
  },
];

// 14) MOBİL UYGULAMA PAKETLERİ — 3 seviye
// Fiyat yerine "Teklif Al" yazılır: mobil uygulamada tek bir sabit fiyat
// vermek doğru olmaz, kapsam projeden projeye değişir.
export const packages = [
  {
    id: "baslangic",
    title: "Başlangıç",
    kicker: "MVP",
    desc: "Fikrinizi test etmek için temel sürüm.",
    points: [
      "Temel UI/UX",
      "Temel kullanıcı sistemi",
      "Temel uygulama özellikleri",
      "Mobil uygulama",
      "Temel backend",
      "Test",
      "Yayına hazırlık",
    ],
    cta: "Teklif Al",
  },
  {
    id: "isletme",
    title: "İşletme",
    kicker: "Kapsamlı",
    desc: "İşletmeler için kapsamlı mobil uygulama.",
    badge: "İŞLETMELER İÇİN",
    points: [
      "Özel UI/UX",
      "Kullanıcı sistemi",
      "Bildirimler",
      "API",
      "Yönetim paneli",
      "İşletme özellikleri",
      "Test",
      "Yayın hazırlığı",
    ],
    cta: "Teklif Al",
  },
  {
    id: "ozel",
    title: "Özel",
    kicker: "Gelişmiş",
    desc: "Özel ihtiyaçlar ve gelişmiş sistemler.",
    points: [
      "Gelişmiş mobil uygulama",
      "Özel backend",
      "Yönetim paneli",
      "API entegrasyonları",
      "Ödeme sistemleri",
      "Özel otomasyonlar",
      "Gelişmiş raporlama",
      "Projeye özel geliştirme",
    ],
    cta: "Özel Teklif",
  },
];

export const packagesNote =
  "Bu paketler örnek kapsamları gösterir. Gerçek kapsam ve fiyat, proje analizinden sonra netleşir.";

// 15) NEDEN UGR STUDIO? — 4 kart
export const mobileWhyUs = [
  {
    n: "01",
    icon: "pen",
    title: "Özgün Tasarım",
    desc: "Uygulamanız markanızın kimliğine göre tasarlanır.",
  },
  {
    n: "02",
    icon: "eye",
    title: "Şeffaf Süreç",
    desc: "Projenin hangi aşamasında olduğunuzu bilirsiniz.",
  },
  {
    n: "03",
    icon: "handshake",
    title: "Doğrudan İletişim",
    desc: "Proje hakkında doğrudan iletişim kurabilirsiniz.",
  },
  {
    n: "04",
    icon: "headset",
    title: "Yayın Sonrası Destek",
    desc: "Uygulama yayına alındıktan sonra da ihtiyaçlarınıza göre destek sunuyoruz.",
  },
];

// 16) MOBİL UYGULAMA İŞLETMEYE NE KATABİLİR? — 4 kart
// Bilinçli olarak "artırır" gibi garanti veren ifadeler kullanılmadı;
// her kart "yapılabilir" dilinde yazıldı.
export const mobileBenefits = [
  {
    n: "01",
    icon: "bolt",
    title: "Müşteri Deneyimi",
    desc: "Müşterileriniz hizmetlerinize daha hızlı ulaşabilir.",
  },
  {
    n: "02",
    icon: "star",
    title: "Sadakat",
    desc: "Kampanya, puan ve üyelik sistemleriyle müşteri etkileşimi artırılabilir.",
  },
  {
    n: "03",
    icon: "cog",
    title: "Operasyon",
    desc: "Bazı işletme süreçleri mobil uygulama üzerinden yönetilebilir.",
  },
  {
    n: "04",
    icon: "sparkle",
    title: "Marka",
    desc: "Kendi mobil uygulamanız markanızın dijital görünürlüğünü güçlendirebilir.",
  },
];

// 17) KONSEPT UI ÇALIŞMALARI — 3 konsept
// Gerçek müşteri uygulama projesi olmadığı için sahte müşteri üretilmedi.
// Bunlar sektöre yönelik konsept arayüz kurgularıdır; hepsi "KONSEPT UI"
// etiketiyle gösterilir ve kodla çizilir (görsel dosyası yoktur).
export const mobileConcepts = [
  {
    id: "restoran",
    title: "Restoran Sipariş Uygulaması",
    category: "Sipariş & Teslimat",
    summary:
      "Menü, sepet ve sipariş takibini tek akışta toplayan, restoranların kendi mutfağından yönettiği bir mobil sipariş arayüzü.",
    variant: "restaurant",
    points: ["Menü & kategori", "Sepet ve sipariş", "Sipariş durumu takibi"],
  },
  {
    id: "guzellik",
    title: "Güzellik Merkezi Randevu Uygulaması",
    category: "Randevu & Üyelik",
    summary:
      "Hizmetleri, uygulama randevu saatlerini ve üyelik bilgisini aynı ekranda gösteren bir randevu ve sadakat arayüzü.",
    variant: "beauty",
    points: ["Hizmet listesi", "Randevu saatleri", "Üyelik & puan"],
  },
  {
    id: "eticaret",
    title: "E-Ticaret Mobil Uygulaması",
    category: "Ürün & Kampanya",
    summary:
      "Ürün kategorileri, favoriler, kampanyalar ve sipariş takibi sunan; markanın web sitesiyle aynı dilde çalışan bir alışveriş arayüzü.",
    variant: "shop",
    points: ["Kategori & arama", "Favoriler & kampanya", "Sipariş takibi"],
  },
];

// 18) SIKÇA SORULAN SORULAR
// Aynı zamanda schema.org FAQPage verisi olarak kullanılır (bkz. sayfa).
export const mobileFaqs = [
  {
    q: "Mobil uygulama geliştirme ne kadar sürer?",
    a: "Projenin kapsamına göre değişir. Özellik sayısı, tasarım, platformlar, backend ve entegrasyonlar süreyi etkiler. Proje analizinden sonra tahmini geliştirme takvimi paylaşılır.",
  },
  {
    q: "Android ve iOS uygulaması geliştirebilir misiniz?",
    a: "Projenin ihtiyaçlarına göre Android ve iOS platformları için mobil uygulama çözümleri planlanabilir.",
  },
  {
    q: "Uygulamam için yönetim paneli yapılabilir mi?",
    a: "Evet. İhtiyaca göre uygulamanın içerik, kullanıcı, sipariş veya diğer süreçlerini yönetebileceğiniz özel bir yönetim paneli geliştirilebilir.",
  },
  {
    q: "Uygulamama ödeme sistemi eklenebilir mi?",
    a: "Uygun ödeme sağlayıcıları ve teknik altyapılarla entegrasyon proje kapsamında planlanabilir.",
  },
  {
    q: "Uygulamam Google Play'de yayınlanabilir mi?",
    a: "Gerekli teknik ve mağaza hazırlıkları konusunda destek sağlanabilir.",
  },
  {
    q: "App Store'da yayınlayabilir misiniz?",
    a: "iOS uygulamalarının App Store yayın hazırlıkları konusunda destek sağlanabilir.",
  },
  {
    q: "Uygulama sonrasında destek veriyor musunuz?",
    a: "Evet. Proje kapsamına ve seçilen destek modeline göre yayın sonrası bakım ve teknik destek sunulabilir.",
  },
  {
    q: "Mobil uygulama fiyatları ne kadar?",
    a: "Mobil uygulamalarda fiyat; özellikler, platformlar, yönetim paneli, backend ve entegrasyonlara göre değişir. Bu nedenle projenize özel teklif hazırlanır.",
  },
  {
    q: "Mevcut web sitem mobil uygulamaya bağlanabilir mi?",
    a: "Mevcut altyapının teknik durumuna göre API ve diğer entegrasyon yöntemleriyle bağlantı kurulabilir.",
  },
  {
    q: "Kendi uygulama fikrimi getirebilir miyim?",
    a: "Elbette. Uygulama fikrinizi bizimle paylaşabilir, ihtiyaçlarınızı birlikte değerlendirerek uygun teknik yapıyı planlayabiliriz.",
  },
];
