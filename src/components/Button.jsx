import { Link } from "react-router-dom";
import Icon from "./Icon";
import { buttonClasses } from "./buttonStyles";

// ─────────────────────────────────────────────
// BUTON SİSTEMİ
// Tüm CTA'lar bu bileşenden geçer; böylece renk, yuvarlaklık ve odak
// (focus) davranışı site genelinde tutarlı kalır.
//
// Sınıfların kendisi bkz. ./buttonStyles.js — `Button` kullanmadan da aynı
// stile ihtiyaç duyan yerler oradan alır.
// ─────────────────────────────────────────────

// Yeni sekme yalnızca gerçekten dış bir web adresi için açılır.
// mailto: ve tel: yeni sekme açmamalı — tarayıcının kendi uygulamasına
// yönlendirir, boş bir sekme bırakmak kullanıcıyı şaşırır.
const isWebUrl = (href) => /^https?:\/\//i.test(href);

export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...rest
}) {
  const cls = buttonClasses({ variant, size, className });
  const content = (
    <>
      {children}
      {withArrow && <Icon name="arrowRight" className="h-4 w-4 flex-shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(isWebUrl(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  );
}
