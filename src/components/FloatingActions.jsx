import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { phoneHref, quoteMailtoHref, whatsappHref } from "../config";
import { trackEvent } from "../analytics";
import Icon from "./Icon";

// ─────────────────────────────────────────────
// SABİT BUTONLAR
// Masaüstü : sol altta "Hemen Ara" rozeti, sağ altta e-posta + WhatsApp + yukarı çık
// Mobil    : sağ altta "Ara" / "E-posta" / "WhatsApp" butonları yan yana
// Legal sayfalarda (KVKK vb.) gizlenir — metin okunurken kapatmamalı.
// ─────────────────────────────────────────────

const HIDE_ON = ["/kvkk", "/gizlilik-politikasi", "/cerez-politikasi", "/kullanim-kosullari"];

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || HIDE_ON.includes(pathname)) return null;

  return (
    <>
      {/* ── Masaüstü: Hemen Ara (sol alt) ── */}
      <a
        href={phoneHref()}
        onClick={() => trackEvent("call_click", { from: "floating_desktop" })}
        aria-label="Hemen Ara"
        className="fixed bottom-6 left-6 z-40 hidden items-center gap-2.5 rounded-full bg-flame-700 py-3.5 pr-6 pl-4 text-sm font-extrabold text-white shadow-[0_14px_32px_-12px_rgba(187,85,0,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-flame-800 lg:inline-flex"
      >
        <Icon name="phone" filled className="h-5 w-5" />
        Hemen Ara
      </a>

      {/* ── Masaüstü: E-posta + WhatsApp + yukarı çık (sağ alt) ── */}
      <div className="fixed right-6 bottom-6 z-40 hidden flex-col items-end gap-3 lg:flex">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Sayfanın başına dön"
          title="Sayfanın başına dön"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-navy-600 shadow-[0_10px_26px_-14px_rgba(15,23,42,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:text-ugr-600"
        >
          <Icon name="arrowUp" className="h-[18px] w-[18px]" />
        </button>

        <a
          href={quoteMailtoHref()}
          onClick={() => trackEvent("generate_lead", { method: "email", from: "floating_desktop" })}
          aria-label="E-posta ile teklif talep edin"
          title="E-posta ile teklif talep edin"
          className="grid h-14 w-14 place-items-center rounded-full bg-navy-800 text-white shadow-[0_14px_32px_-12px_rgba(15,23,42,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-700"
        >
          <Icon name="mail" className="h-6 w-6" />
        </a>

        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { from: "floating_desktop" })}
          aria-label="WhatsApp üzerinden yazın"
          title="WhatsApp üzerinden yazın"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_-12px_rgba(37,211,102,0.7)] transition-all duration-200 hover:-translate-y-0.5"
        >
          <Icon name="whatsapp" filled className="h-7 w-7" />
        </a>
      </div>

      {/* ── Mobil: Ara + E-posta + WhatsApp (küçük, yan yana) ── */}
      <div className="fixed right-4 bottom-4 z-40 flex items-center gap-2.5 lg:hidden">
        <a
          href={phoneHref()}
          onClick={() => trackEvent("call_click", { from: "floating_mobile" })}
          aria-label="Hemen Ara"
          className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white text-navy-700 shadow-[0_10px_26px_-12px_rgba(15,23,42,0.45)]"
        >
          <Icon name="phone" filled className="h-5 w-5" />
        </a>

        <a
          href={quoteMailtoHref()}
          onClick={() => trackEvent("generate_lead", { method: "email", from: "floating_mobile" })}
          aria-label="E-posta ile teklif talep edin"
          className="grid h-12 w-12 place-items-center rounded-full bg-navy-800 text-white shadow-[0_12px_28px_-12px_rgba(15,23,42,0.7)]"
        >
          <Icon name="mail" className="h-5 w-5" />
        </a>

        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { from: "floating_mobile" })}
          aria-label="WhatsApp üzerinden yazın"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-12px_rgba(37,211,102,0.7)]"
        >
          <Icon name="whatsapp" filled className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}
