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
export const GA_MEASUREMENT_ID = 'G-REY1DWBF4C';

export const whatsappHref = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Aynı numarayı doğrudan arama linkine çevirir (mobilde tıklayınca telefon uygulaması açılır)
export const phoneHref = () => `tel:+${WHATSAPP_NUMBER}`;

export const phoneDisplay = () => {
  // 905394500402 -> 0539 450 04 02
  const local = '0' + WHATSAPP_NUMBER.slice(2);
  return local.replace(/(\d{4})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
};
