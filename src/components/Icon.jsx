// ─────────────────────────────────────────────
// İKON SETİ
// Her ikon tek bir yerden yönetilir. Yeni ikon eklemek için `paths` sözlüğüne
// bir giriş ekle — istenen yerde <Icon name="building" /> kullanılabilir.
// ─────────────────────────────────────────────

const paths = {
  building: (
    <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" />
  ),
  cart: (
    <path d="M16 11V7a4 4 0 0 0-8 0v4M5 9h14l1 12H4L5 9z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.5" />
    </>
  ),
  code: (
    <>
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6M13.5 4l-3 16" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  shield: <path d="M12 3l7.5 3v5.5c0 4.5-3.1 8.3-7.5 9.5-4.4-1.2-7.5-5-7.5-9.5V6L12 3z" />,
  check: <path d="M5 12.5 9.5 17 19 7.5" />,
  arrowRight: <path d="M4 12h15m0 0-6-6m6 6-6 6" />,
  arrowLeft: <path d="M20 12H5m0 0 6-6m-6 6 6 6" />,
  arrowUp: <path d="M12 19V5m0 0-6 6m6-6 6 6" />,
  phone: (
    <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h2.2a1 1 0 0 1 .96.74l1.2 3.6a1 1 0 0 1-.46 1.14l-1.9 1.14a13.5 13.5 0 0 0 5.44 5.44l1.14-1.9a1 1 0 0 1 1.14-.46l3.6 1.2A1 1 0 0 1 19 14.5v2A2.5 2.5 0 0 1 16.5 19h-9A4.5 4.5 0 0 1 3 14.5v-9z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20h4l10-10-4-4L4 16v4z" />
      <path d="m13.5 6.5 4 4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  refresh: (
    <path d="M20 12a8 8 0 1 1-2.6-5.9M20 4v4.5h-4.5" />
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2zm16 0a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2z" />
      <path d="M18 18v.5a3 3 0 0 1-3 3h-2" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="m12 14 4-4" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10" rx="2" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3.5 3.5 0 0 1 0 6.5M18 20a5.5 5.5 0 0 0-3-4.9" />
    </>
  ),
  sparkle: (
    <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5z" />
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z" />,
  mobile: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 5.5h3M11 18.5h2" />
    </>
  ),
  desktop: (
    <>
      <rect x="2.5" y="4" width="19" height="12" rx="2" />
      <path d="M9 20h6M12 16v4" />
    </>
  ),
  send: <path d="M21 3 10.5 13.5M21 3l-6.5 18-4-8.5L2 8.5 21 3z" />,
  lightbulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2h5c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2 3-3 3 3 3-3-6-6-3 3-2-2-3 3z" />
      <path d="M2 9h4l5 5M22 9h-4" />
    </>
  ),
  whatsapp: (
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.55 3.75 1.5 5.3L2 22l4.98-1.66a9.8 9.8 0 0 0 5.06 1.4h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.47 2 12.04 2zm5.76 14.03c-.24.68-1.42 1.3-1.96 1.34-.5.05-.98.23-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.13-.14-.19-1.12-1.49-1.12-2.84 0-1.35.71-2.01.96-2.29.25-.27.55-.34.73-.34.18 0 .37 0 .53.01.17.01.4-.07.62.48.24.57.8 1.97.87 2.11.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.16-.31.36-.44.49-.15.14-.3.3-.13.6.17.29.77 1.27 1.65 2.06 1.13 1.01 2.09 1.32 2.39 1.47.3.14.47.12.65-.07.17-.19.74-.86.94-1.16.2-.3.39-.24.65-.14.27.09 1.7.8 2 .94.29.15.49.22.56.34.07.12.07.7-.17 1.38z" />
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),

  // ── Mobil uygulama sayfası için eklenen ikonlar ──
  bell: (
    <>
      <path d="M18 8.5a6 6 0 1 0-12 0c0 4.5-2 5.5-2 5.5h16s-2-1-2-5.5" />
      <path d="M10.2 19.2a2 2 0 0 0 3.6 0" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10.2h17M8 3v4M16 3v4" />
    </>
  ),
  map: "M9 4 3.5 6.3v13.4L9 17.4l6 2.3 5.5-2.3V4.2L15 6.5 9 4zM9 4v13.4M15 6.5v13.2",
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19M6 15h4" />
    </>
  ),
  star: "M12 3.4l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6-4.4-4.2 6-.8L12 3.4z",
  chart: <path d="M3.5 20.5h17M7 20V11.5M12 20V4.5M17 20v-6" />,
  bag: (
    <>
      <path d="M6 8h12l1 12H5L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  gift: (
    <>
      <rect x="3.5" y="8.5" width="17" height="4" rx="1.2" />
      <path d="M5 12.5V20h14v-7.5M12 8.5V20" />
      <path d="M12 8.5S10.8 4 8.4 4a2.2 2.2 0 0 0 0 4.5M12 8.5S13.2 4 15.6 4a2.2 2.2 0 0 1 0 4.5" />
    </>
  ),
  heart: "M12 20.2s-7.6-4.7-7.6-9.7a4.3 4.3 0 0 1 7.6-2.8 4.3 4.3 0 0 1 7.6 2.8c0 5-7.6 9.7-7.6 9.7z",
  filter: "M3.5 5.5h17l-6.6 8v5.6l-3.8 2.4V13.5l-6.6-8z",
  cog: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.4M12 18.8v2.4M4.4 7.4l2.1 1.2M17.5 15.4l2.1 1.2M4.4 16.6l2.1-1.2M17.5 8.6l2.1-1.2" />
    </>
  ),
  link: "M9.6 14.4 14.4 9.6M8 11.2 5.9 13.3a3.4 3.4 0 0 0 4.9 4.8l2.2-2.2M16 12.8l2.1-2.1a3.4 3.4 0 0 0-4.9-4.8l-2.2 2.2",
  user: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20.2a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9.2h18M9.2 20V9.2" />
    </>
  ),
  package: "M12 2.8 20.5 7v10L12 21.2 3.5 17V7L12 2.8zM3.5 7 12 11.3l8.5-4.3M12 11.3v9.9",
};

export default function Icon({ name, className = "w-6 h-6", filled = false, ...rest }) {
  const d = paths[name];
  if (!d) return null;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {d}
    </svg>
  );
}
