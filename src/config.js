// ─────────────────────────────────────────────
// TEK YERDEN AYARLAR
// Bu dosyadaki 3 değeri kendi bilgilerinle değiştir, site genelinde otomatik kullanılır.
// ─────────────────────────────────────────────

// 1) WhatsApp numaran (başında ülke kodu, boşluksuz): 90 + alan kodu + numara
export const WHATSAPP_NUMBER = '905394500402';

export const WHATSAPP_MESSAGE =
  'Merhaba, Veyro DTA web tasarım hizmetleriniz hakkında bilgi almak istiyorum.';

// 2) İletişim formunun gönderileceği adres.
export const FORM_ENDPOINT = 'https://formspree.io/f/xjykklyo';

// 3) Site yayına girince gerçek alan adını buraya yaz (SEO/OG etiketleri için kullanılır)
export const SITE_URL = 'https://www.veyrodta.com'; // TODO: gerçek domainin

// 4) Google Analytics 4 ölçüm kimliği (aşağıdaki "Analytics" bölümüne bak)
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: kendi GA4 Ölçüm Kimliğini gir

export const whatsappHref = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
