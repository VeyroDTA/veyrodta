import { useState } from "react";
import {
  CONTACT_ADDRESS_LINE1,
  CONTACT_ADDRESS_LINE2,
  CONTACT_CITY,
  CONTACT_EMAIL,
  RESPONSE_PROMISE,
  WHATSAPP_NUMBER,
  WORKING_HOURS,
  phoneDisplay,
  phoneHref,
  whatsappHref,
} from "../config";
import { trackEvent } from "../analytics";
import { Section, Container } from "./Section";
import { Reveal } from "./Reveal";
import Icon from "./Icon";
import MailCta from "./MailCta";

// ─────────────────────────────────────────────
// TEKLİF / İLETİŞİM
// Sol tarafta gerçek iletişim bilgileri, sağda e-posta ile teklif kartı.
// Sitede form yok — teklif talepleri kullanıcının e-posta istemcisi
// üzerinden iletilir.
// ─────────────────────────────────────────────

const contactItems = [
  {
    icon: "phone",
    label: "Telefon",
    value: phoneDisplay(),
    sub: WORKING_HOURS,
    href: phoneHref(),
    onClick: () => trackEvent("call_click", { from: "contact_section" }),
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
    href: whatsappHref(),
    external: true,
    onClick: () => trackEvent("whatsapp_click", { from: "contact_section" }),
  },
];

export default function ContactBlock({ withSection = true, showHeading = true, className = "" }) {
  const [copied, setCopied] = useState(false);

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(`+${WHATSAPP_NUMBER}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* pano erişimi yoksa sessizce geç */
    }
  };

  const body = (
    <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
      {/* min-w-0: grid öğelerinin varsayılan min-width'i "auto" olduğu için
          uzun bir dize (e-posta adresi) track'i kabın genişliğinden
          daha geniş hâle getirip içeriği 320px'de kırpıyordu. */}
      <div className="min-w-0 lg:col-span-5">
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-ugr-100 bg-ugr-50 px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.18em] text-ugr-600 uppercase">
            <Icon name="send" className="h-3.5 w-3.5" />
            Ücretsiz Teklif
          </span>

          <h2 className="text-[23px] leading-[1.2] font-extrabold tracking-tight text-navy-800 sm:text-[28px] lg:text-[31px]">
            {showHeading ? (
              <>
                Projenizi Birlikte
                <br className="hidden sm:block" />{" "}
                <span className="text-ugr-600">Konuşalım.</span>
              </>
            ) : (
              <>
                Size nasıl
                <br className="hidden sm:block" />{" "}
                <span className="text-ugr-600">yardımcı oluruz?</span>
              </>
            )}
          </h2>

          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            {showHeading
              ? "Nasıl bir web sitesine ihtiyacınız olduğunu anlatın, size uygun çözümü birlikte planlayalım."
              : "Size en uygun kapsamı birlikte belirlemek için önce sizi dinleyelim. Bize e-posta yazın ya da doğrudan telefonla arayın."}
          </p>

          <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-3.5 py-2 text-[12.5px] font-bold text-navy-600">
            <Icon name="clock" className="h-4 w-4 text-ugr-500" />
            {RESPONSE_PROMISE}
          </p>
        </Reveal>

        <ul className="mt-7 space-y-3">
          {contactItems.map((item, i) => {
            const inner = (
              <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-all duration-200 hover:border-ugr-200 hover:shadow-[0_14px_30px_-24px_rgba(15,23,42,0.5)]">
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-ugr-50 text-ugr-600">
                  <Icon name={item.icon} filled={item.icon === "whatsapp"} className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-extrabold tracking-wide text-navy-400 uppercase">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-[14.5px] leading-snug font-extrabold text-navy-800 [overflow-wrap:anywhere]">
                    {item.value}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-navy-400">{item.sub}</span>
                </span>
                <Icon name="arrowRight" className="h-4 w-4 flex-shrink-0 text-navy-300" />
              </div>
            );

            return (
              <Reveal as="li" key={item.label} delay={i * 70}>
                <a
                  href={item.href}
                  onClick={item.onClick}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block cursor-pointer"
                >
                  {inner}
                </a>
              </Reveal>
            );
          })}
        </ul>

        {/* Numara kopyalama küçük kolaylık */}
        <Reveal className="mt-3">
          <button
            onClick={copyPhone}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-[12.5px] font-bold text-navy-400 transition-colors hover:bg-surface hover:text-ugr-600"
          >
            <Icon name={copied ? "check" : "document"} className="h-3.5 w-3.5" />
            {copied ? "Numara kopyalandı" : "Telefon numarasını kopyala"}
          </button>
        </Reveal>

        <Reveal className="mt-6 rounded-2xl border border-line bg-surface p-5">
          <div className="flex items-start gap-3">
            <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-white text-ugr-600 ring-1 ring-line">
              <Icon name="mapPin" className="h-[18px] w-[18px]" />
            </span>
            <div className="text-[13px] leading-relaxed">
              <span className="block font-extrabold text-navy-800">UGR Studio</span>
              <span className="mt-0.5 block text-muted">
                {CONTACT_ADDRESS_LINE1}
                <br />
                {CONTACT_ADDRESS_LINE2}
              </span>
              <span className="mt-2 block text-[12px] text-navy-400">
                {CONTACT_CITY} · İstanbul ve tüm Türkiye&apos;ye uzaktan hizmet
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Sağ — e-posta ile teklif */}
      <Reveal delay={120} className="min-w-0 lg:col-span-7">
        <MailCta />
      </Reveal>
    </div>
  );

  if (!withSection) {
    return (
      <Container className={className}>
        <div id="iletisim">{body}</div>
      </Container>
    );
  }

  return (
    <Section id="iletisim" tone="surface" bordered className={className}>
      {body}
    </Section>
  );
}
