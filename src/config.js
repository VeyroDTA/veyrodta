// ─────────────────────────────────────────────
// TEK YERDEN AYARLAR
// Bu dosyadaki değerleri kendi bilgilerinle değiştir, site genelinde otomatik kullanılır.
// ─────────────────────────────────────────────

// 1) WhatsApp / telefon numarası (başında ülke kodu, boşluksuz): 90 + alan kodu + numara
export const WHATSAPP_NUMBER = "905394500402";

export const WHATSAPP_MESSAGE =
  "Merhaba, UGR Studio web tasarım hizmetleriniz hakkında bilgi almak istiyorum.";

// 2) Site yayına girince gerçek alan adı (canonical, OG etiketleri, sitemap)
export const SITE_URL = "https://www.ugrstudio.com.tr";

// 4) Google Analytics 4 ölçüm kimliği
export const GA_MEASUREMENT_ID = "G-REY1DWBF4C";

// 5) İletişim bilgileri
export const CONTACT_EMAIL = "iletisim@ugrstudio.com.tr";
export const CONTACT_ADDRESS_LINE1 = "Mimar Sinan 3. Etap";
export const CONTACT_ADDRESS_LINE2 = "34570 Silivri / İstanbul";
export const CONTACT_CITY = "Silivri / İstanbul";
export const WORKING_HOURS = "Hafta içi 09:00 – 18:00";
export const RESPONSE_PROMISE = "İş saatleri içinde en geç aynı gün dönüş";

// ─────────────────────────────────────────────
// YASAL / KVKK — DİKKAT
// Aşağıdaki alanlar hukuki metinlerde kullanılır. Şahıs firmasıysan buraya
// kendi adını soyadını ve vergi dairen / vergi numaranı yazmalısın.
// Yayına almadan önce KVKK ve Gizlilik metinlerini bir hukuk uzmanına
// kontrol ettir — bu metinler hukuki danışmanlık yerine geçmez.
// ─────────────────────────────────────────────
export const LEGAL_CONTROLLER_NAME = "[Ad Soyad]"; // TODO: gerçek adını soyadını yaz
export const LEGAL_CONTROLLER_TAX = "[Vergi Dairesi / VKN]"; // TODO: vergi dairesi ve numarası

// ─────────────────────────────────────────────
// NAVİGASYON — Üst menü
// Blog bilinçli olarak burada yok; içerikler footer'da "Kaynaklar" başlığı altında.
// ─────────────────────────────────────────────
export const NAV_ITEMS = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/projeler", label: "Projeler" },
  { to: "/fiyatlar", label: "Fiyatlar" },
  { to: "/surec", label: "Süreç" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/sss", label: "SSS" },
  { to: "/iletisim", label: "İletişim" },
];

// ─────────────────────────────────────────────
// TEKLİF E-POSTASI
// Sitede form yok; teklif talebi kullanıcının kendi e-posta istemcisi
// üzerinden iletilir. Böylece üçüncü taraf bir form hizmetine (Formspree
// vb.) veri gönderilmez, KVKK yükümlülüğü de sadeleşir.
//
// Hazırlanan e-posta taslağı, kullanıcının doldurması gereken alanları
// hazır başlıklar olarak içerir. Kullanıcı istemediği satırları silebilir.
// ─────────────────────────────────────────────
export const MAIL_SUBJECT_DEFAULT = "Web Sitesi Teklif Talebi";

export const MAIL_BODY_TEMPLATE = `Merhaba,

Web sitesi projem için teklif almak istiyorum.

Proje türü:
Mevcut web sitem (varsa):
Bütçe aralığı:
Hedef teslim tarihi:
Kısaca anlatmak istediklerim:


Teşekkürler.`;

export const mailtoHref = ({ subject, body } = {}) =>
  `mailto:${CONTACT_EMAIL}` +
  `?subject=${encodeURIComponent(subject || MAIL_SUBJECT_DEFAULT)}` +
  `&body=${encodeURIComponent(body || MAIL_BODY_TEMPLATE)}`;

// Paket ya da çözüm kartından gelen teklif butonları için:
// konu satırına ilgili paket/çözüm adını yazar.
export const quoteMailtoHref = (context) =>
  context
    ? mailtoHref({
        subject: `${MAIL_SUBJECT_DEFAULT} — ${context}`,
        body: `İlgilendiğim hizmet / paket: ${context}\n\n${MAIL_BODY_TEMPLATE}`,
      })
    : mailtoHref();

// ─────────────────────────────────────────────
// MOBİL UYGULAMA TEKLİF E-POSTASI
// /mobil-uygulama-gelistirme sayfasındaki tüm "Teklif Al" butonları
// bu taslağı kullanır. Sitede form olmadığı için, formun toplayacağı
// alanlar hazır başlık olarak e-posta gövdesine yazılır: kullanıcı
// yalnızca doldurması gereken satırları tamamlayıp gönderir.
//
// (Seçenek listeleri parantez içinde ipucu olarak bırakılır; kullanıcı
//  istemediği satırları silebilir.)
// ─────────────────────────────────────────────
export const MOBILE_MAIL_SUBJECT = "Mobil Uygulama Projesi Teklif Talebi";

export const MOBILE_MAIL_BODY_TEMPLATE = `Merhaba,

Mobil uygulama projem için teklif almak istiyorum.

Uygulama adı (varsa):
Uygulama türü (E-Ticaret / Sipariş / Randevu-Rezervasyon / Üyelik / İşletme uygulaması / Sosyal-Topluluk / Eğitim / Finans / Diğer):
Platform (Android / iOS / Android + iOS / Kararsızım):
Yönetim paneli (Evet / Hayır / Emin değilim):
Ödeme sistemi (Gerekli / Gerekli değil / Emin değilim):
Bütçe aralığı (25.000 TL altı / 25.000 – 50.000 TL / 50.000 – 100.000 TL / 100.000 TL+ / Henüz bilmiyorum):
Projenizi anlatın:


Teşekkürler.`;

export const mobileAppMailtoHref = (context) =>
  mailtoHref({
    subject: context ? `${MOBILE_MAIL_SUBJECT} — ${context}` : MOBILE_MAIL_SUBJECT,
    body: `İlgilendiğim kapsam: ${context || "Mobil Uygulama Geliştirme"}\n\n${MOBILE_MAIL_BODY_TEMPLATE}`,
  });

// Sayfanın özel WhatsApp metni — kullanıcı "Nasıl Çalışıyoruz?" veya
// son CTA'dan yazdığında mobil uygulama konuşulduğu belli olsun.
export const MOBILE_WHATSAPP_MESSAGE =
  "Merhaba, mobil uygulama geliştirme hizmetiniz hakkında bilgi almak istiyorum.";

// ─────────────────────────────────────────────
// Yardımcılar
// ─────────────────────────────────────────────
export const whatsappHref = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Aynı numarayı doğrudan arama linkine çevirir (mobilde tıklayınca telefon uygulaması açılır)
export const phoneHref = () => `tel:+${WHATSAPP_NUMBER}`;

export const phoneDisplay = () => {
  // 905394500402 -> 0539 450 04 02
  const local = "0" + WHATSAPP_NUMBER.slice(2);
  return local.replace(/(\d{4})(\d{3})(\d{2})(\d{2})$/, "$1 $2 $3 $4");
};
