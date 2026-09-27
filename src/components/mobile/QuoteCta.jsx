import { mobileAppMailtoHref } from "../../config";
import { trackEvent } from "../../analytics";
import { buttonClasses } from "../buttonStyles";
import Icon from "../Icon";

// ─────────────────────────────────────────────
// MOBİL UYGULAMA TEKLİF CTA'SI
// Sitede form yok: teklif talebi kullanıcının kendi e-posta istemcisi
// üzerinden iletilir. `Button` href ile kullanılsaydı mailto bağlantılarına
// target="_blank" eklenirdi; bazı tarayıcılarda bu boş bir sekme bırakır.
// Bu yüzden düz <a> + buttonClasses kullanılır (stil kopyalanmaz).
// ─────────────────────────────────────────────

export default function QuoteCta({
  context,
  label = "Ücretsiz Teklif Al",
  variant = "primary",
  size = "md",
  withArrow = true,
  className = "",
}) {
  return (
    <a
      href={mobileAppMailtoHref(context)}
      onClick={() =>
        trackEvent("generate_lead", {
          method: "email",
          context: `mobil-uygulama: ${context || "genel"}`,
        })
      }
      className={buttonClasses({ variant, size, className })}
    >
      {label}
      {withArrow && <Icon name="arrowRight" className="h-4 w-4 flex-shrink-0" />}
    </a>
  );
}
