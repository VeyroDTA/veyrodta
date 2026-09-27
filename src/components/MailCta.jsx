import {
  CONTACT_EMAIL,
  RESPONSE_PROMISE,
  phoneHref,
  quoteMailtoHref,
  whatsappHref,
} from "../config";
import { trackEvent } from "../analytics";
import Icon from "./Icon";

// ─────────────────────────────────────────────
// TEKLİF E-POSTASI KARTI
//
// Sitede form yok. Teklif talebi, kullanıcının kendi e-posta istemcisi
// üzerinden iletilir; böylece üçüncü taraf bir form hizmetine veri
// gönderilmez ve KVKK yükümlülüğü sadeleşir.
//
// Hazırlanan e-posta taslağı boş gelmez: kullanıcının doldurması gereken
// alanlar hazır başlıklar olarak önceden yazılıdır (bkz. config.js).
//
// `heading`, `description`, `items`, `href` ve `buttonLabel` verilerek bu kart
// farklı hizmet sayfalarının kendi diliyle kullanılabilir. Varsayılanlar web
// sitesi teklifine aittir; mobil uygulama sayfası kendi başlıklarını ve
// mobileAppMailtoHref adresini geçirir.
// ─────────────────────────────────────────────

const checklist = [
  "Ne tür bir siteye ihtiyacınız olduğunu bir iki cümleyle özetleyin",
  "Mevcut bir web siteniz varsa adresini yazın",
  "Düşündüğünüz bütçe aralığını belirtin",
  "Hedef teslim tarihiniz varsa onu da yazın",
];

export default function MailCta({
  context,
  className = "",
  heading = "Teklif almak için bize yazın",
  description = "Aşağıdaki buton e-posta uygulamanızı, projeniz için hazırlanmış bir taslakla açar. Taslağı gönderdiğinizde projenizi inceleyip yazılı ve net bir teklifle dönüş yapıyoruz.",
  items = checklist,
  href,
  buttonLabel = "E-posta Gönder",
  trackContext,
}) {
  return (
    <div
      className={`rounded-3xl border border-line bg-white p-6 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.5)] sm:p-9 ${className}`}
    >
      <div className="mb-7">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-ugr-100 bg-ugr-50 px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.18em] text-ugr-600 uppercase">
          <Icon name="mail" className="h-3.5 w-3.5" />
          E-posta ile Teklif
        </span>

        <h3 className="text-[20px] leading-snug font-extrabold text-navy-800 sm:text-[22px]">
          {heading}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted">{description}</p>
      </div>

      <p className="mb-3 text-[13px] font-extrabold tracking-wide text-muted uppercase">
        E-postanızda şunlar olsun
      </p>
      <ul className="mb-8 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-muted">
            <span className="mt-0.5 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-ugr-50 text-ugr-600">
              <Icon name="check" className="h-2.5 w-2.5" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <a
        href={href || quoteMailtoHref(context)}
        onClick={() =>
          trackEvent("generate_lead", {
            method: "email",
            context: trackContext || (context ? `mail_cta: ${context}` : "mail_cta: genel"),
          })
        }
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-flame-700 px-6 py-4 text-[15px] font-extrabold text-white shadow-[0_12px_28px_-10px_rgba(187,85,0,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-flame-800"
      >
        <Icon name="send" className="h-4 w-4 flex-shrink-0" />
        {buttonLabel}
        <Icon name="arrowRight" className="h-4 w-4 flex-shrink-0" />
      </a>

      <p className="mt-3 text-center text-[13px] text-muted">
        {RESPONSE_PROMISE} · {CONTACT_EMAIL}
      </p>

      {/* Alternatif kanallar */}
      <div className="mt-7 flex items-center gap-3">
        <span className="h-px flex-1 bg-line" />
        <span className="text-[11px] font-bold tracking-wide text-muted uppercase">
          ya da
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { from: "mail_cta" })}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-line bg-white px-5 py-3.5 text-[14px] font-extrabold text-navy-800 transition-colors duration-200 hover:border-emerald-300 hover:text-emerald-600"
        >
          <Icon name="whatsapp" filled className="h-[18px] w-[18px] text-emerald-500" />
          WhatsApp
        </a>

        <a
          href={phoneHref()}
          onClick={() => trackEvent("call_click", { from: "mail_cta" })}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-line bg-white px-5 py-3.5 text-[14px] font-extrabold text-navy-800 transition-colors duration-200 hover:border-ugr-200 hover:text-ugr-600"
        >
          <Icon name="phone" className="h-[18px] w-[18px]" />
          Hemen Ara
        </a>
      </div>
    </div>
  );
}
