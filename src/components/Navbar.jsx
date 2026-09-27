import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_ITEMS, whatsappHref } from "../config";
import { trackEvent } from "../analytics";
import Logo from "./Logo";
import Icon from "./Icon";
import { Container } from "./Section";

// ─────────────────────────────────────────────
// HEADER
// · Sticky, kısa ve sade (yükseklik 72px)
// · Sayfa aşağı kaydırıldığında hafif gölge + blur belirir
// · Mobilde hamburger menü, açılışta kademeli animasyon
// ─────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Scroll gölgesi
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil menü açık/kapalı durumu.
  // Rota değişince menüyü kapatmak için effect içinde setState çağırmak yerine
  // render sırasında "değişen değeri sıfırla" deseni kullanılır — React'in
  // önerdiği yaklaşım ve gereksiz bir ek render turunu da önler.
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Mobil menü açıkken arka planın kaymasını engelle
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Esc ile menüyü kapat
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const navLinkClass = ({ isActive }) =>
    `relative py-1.5 text-[14px] font-bold transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:rounded-full after:bg-ugr-500 after:transition-all ${
      isActive
        ? "text-ugr-600 after:w-full"
        : "text-navy-600 after:w-0 hover:text-ugr-600 hover:after:w-full"
    }`;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-xl focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        İçeriğe geç
      </a>

      <header
        className={`sticky top-0 z-50 border-b bg-white/85 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "border-line shadow-[0_6px_24px_-14px_rgba(15,23,42,0.4)]" : "border-transparent"
        }`}
      >
        <Container className="flex h-[4.5rem] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="rounded-xl py-1 transition-opacity hover:opacity-80"
          >
            <Logo />
          </Link>

          {/* Masaüstü menü */}
          <nav aria-label="Ana menü" className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Masaüstü CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { from: "header" })}
              aria-label="WhatsApp üzerinden yazın"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-white text-navy-700 transition-colors hover:border-emerald-300 hover:text-emerald-600"
            >
              <Icon name="whatsapp" filled className="h-5 w-5" />
            </a>

            <Link
              to="/iletisim"
              onClick={() => trackEvent("generate_lead", { method: "iletisim_sayfasi", from: "header" })}
              className="inline-flex h-11 items-center rounded-2xl bg-flame-700 px-5 text-sm font-extrabold text-white shadow-[0_8px_20px_-8px_rgba(187,85,0,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-flame-800"
            >
              Ücretsiz Teklif Al
              <Icon name="arrowRight" className="ml-1.5 h-4 w-4" />
            </Link>
          </div>

          {/* Mobil hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-line text-navy-800 transition-colors hover:bg-surface lg:hidden"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </Container>
      </header>

      {/* Mobil menü paneli */}
      {open && (
        <div
          id="mobile-menu"
          className="menu-in fixed inset-x-0 top-[4.5rem] bottom-0 z-50 overflow-y-auto overscroll-contain border-t border-line bg-white lg:hidden"
        >
          <nav aria-label="Mobil menü" className="px-5 py-6 sm:px-6">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.to} className="menu-item" style={{ animationDelay: `${i * 35}ms` }}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-bold transition-colors ${
                        isActive
                          ? "bg-ugr-50 text-ugr-600"
                          : "text-navy-700 active:bg-surface"
                      }`
                    }
                  >
                    {item.label}
                    <Icon name="arrowRight" className="h-4 w-4 opacity-40" />
                  </NavLink>
                </li>
              ))}
            </ul>

            <div
              className="menu-item mt-6 space-y-3 border-t border-line pt-6"
              style={{ animationDelay: `${NAV_ITEMS.length * 35}ms` }}
            >
              <Link
                to="/iletisim"
                onClick={() =>
                  trackEvent("generate_lead", { method: "iletisim_sayfasi", from: "mobile_menu" })
                }
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-flame-700 px-6 py-4 text-[15px] font-extrabold text-white shadow-[0_10px_24px_-10px_rgba(187,85,0,0.55)]"
              >
                Ücretsiz Teklif Al
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>

              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { from: "mobile_menu" })}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-line bg-white px-6 py-4 text-[15px] font-extrabold text-navy-800"
              >
                <Icon name="whatsapp" filled className="h-5 w-5 text-emerald-500" />
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
