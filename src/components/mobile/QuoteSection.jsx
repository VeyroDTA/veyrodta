import {
  CONTACT_ADDRESS_LINE1,
  CONTACT_ADDRESS_LINE2,
  CONTACT_EMAIL,
  MOBILE_WHATSAPP_MESSAGE,
  RESPONSE_PROMISE,
  WORKING_HOURS,
  mobileAppMailtoHref,
  phoneDisplay,
  phoneHref,
  whatsappHref,
} from "../../config";
import { trackEvent } from "../../analytics";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";
import Icon from "../Icon";
import MailCta from "../MailCta";

// ─────────────────────────────────────────────
// MOBİL UYGULAMA — TEKLİF / İLETİŞİM BÖLÜMÜ
//
// NEDEN BURADA AYRI BİR BİLEŞEN VAR
// Sitenin genel kuralı: form yok, teklif `mailto:` ile iletilir. Brief'te
// 21. madde bir form alan listesi istiyordu; aynı işlev, üçüncü taraf bir
// form hizmetine veri gönderilmeden ve kullanıcıdan ek bir doldurma adımı
// istemeden şu şekilde karşılanıyor:
//
//   · Sol sütun  → gerçek iletişim kanalları (telefon, e-posta, WhatsApp,
//     adres, çalışma saatleri)
//   · Sağ sütun → MailCta. Buton, config.js içindeki
//     MOBILE_MAIL_BODY_TEMPLATE'i açar; o taslakta Uygulama Türü, Platform,
//     Yönetim Paneli, Ödeme, Bütçe Aralığı ve Proje Anlatımı satırları
//     HAZIR BAŞLIK olarak yazılıdır. Yani formun toplayacağı her alan
//     kullanıcının karşısına hazır gelir, boş gelmez.
//
// Kullanıcının e-posta uygulamasının `mailto:` desteklememesi ihtimaline
// karşı aynı bilgiler telefon ve WhatsApp ile de iki kez verilir.
// ─────────────────────────────────────────────

const items = [
  {
    icon: "phone",
    label: "Telefon",
    value: phoneDisplay(),
    sub: WORKING_HOURS,
    href: phoneHref(),
    onClick: () => trackEvent("call_click", { from: "mobile_quote_section" }),
  },
  {
    icon: "mail",
    label: "E-posta",
    value: CONTACT_EMAIL,
    sub: "Resmî e-posta adresi",
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: "Hızlı Mesaj",
    sub: "En kısa sürede dönüş",
    href: whatsappHref(MOBILE_WHATSAPP_MESSAGE),
    external: true,
    onClick: () => trackEvent("whatsapp_click", { from: "mobile_quote_section" }),
  },
];

// MailCta'nın kontrol listesi = mailto taslağındaki hazır başlıklar.
// Kartta "E-postanızda şunlar olsun" başlığıyla gösterilir; kullanıcı
// taslağı açtığında aynı satırları doldurur.
const checklist = [
  "Uygulamanın adı ve kısaca ne yaptığı",
  "Hangi platformda çalışmasını istediğiniz (Android, iOS veya ikisi)",
  "Yönetim paneli ve ödeme sistemi ihtiyacınız",
  "Düşündüğünüz bütçe aralığı",
  "Varsa hedef yayın tarihi",
];

export default function QuoteSection() {
  return (
    <Section id="teklif" tone="surface" bordered>
      <SectionHeading
        eyebrow="TEKLİF & İLETİŞİM"
        title="Mobil Uygulama Fikrinizi"
        highlight="Bizimle Paylaşın"
        description="Fikrinizi ve ihtiyaçlarınızı anlatın; projenizi inceleyip yazılı ve net bir teklifle dönüş yapalım."
      />

      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Sol — gerçek iletişim bilgileri */}
        <div className="min-w-0 lg:col-span-5">
          <Reveal>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={item.onClick}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex min-w-0 cursor-pointer items-center gap-3.5 rounded-2xl border border-line bg-white p-4 transition-all duration-200 hover:border-ugr-200 hover:shadow-[0_14px_30px_-24px_rgba(15,23,42,0.4)]"
                  >
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-ugr-50 text-ugr-600">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-extrabold tracking-[0.14em] text-muted uppercase">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[15px] font-extrabold text-navy-800">
                        {item.value}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-muted">
                        {item.sub}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-2xl border border-line bg-white p-4">
              <span className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
                <Icon name="mapPin" className="mt-0.5 h-4 w-4 flex-none text-muted" />
                <span>
                  {CONTACT_ADDRESS_LINE1}
                  <br />
                  {CONTACT_ADDRESS_LINE2}
                </span>
              </span>
            </div>

            <p className="mt-4 flex items-center gap-2 text-[13px] font-semibold text-muted">
              <Icon name="clock" className="h-4 w-4 flex-none text-muted" />
              {RESPONSE_PROMISE}
            </p>
          </Reveal>
        </div>

        {/* Sağ — hazır e-posta taslağı */}
        <Reveal delay={120} className="min-w-0 lg:col-span-7">
          <MailCta
            href={mobileAppMailtoHref()}
            heading="Mobil uygulama projenizi anlatın"
            description="Aşağıdaki buton e-posta uygulamanızı, mobil uygulama formunun yerine geçen hazır bir taslakla açar. Taslağı doldurup gönderdiğinizde projenizi inceleyip yazılı ve net bir teklifle dönüş yapıyoruz."
            items={checklist}
            buttonLabel="Teklif Talebi Oluştur"
            trackContext="mobil-uygulama: teklif bölümü"
          />
        </Reveal>
      </div>
    </Section>
  );
}
