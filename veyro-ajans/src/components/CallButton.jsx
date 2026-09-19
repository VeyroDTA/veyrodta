import { phoneHref } from '../config';

export default function CallButton() {
  return (
    <a
      href={phoneHref()}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm pl-3.5 pr-5 py-3.5 rounded-full shadow-[0_0_18px_rgba(245,158,11,0.3)] transition-all hover:scale-105 border border-amber-300/40"
      aria-label="Hemen Ara"
    >
      <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" />
      </svg>
      <span>Hemen Ara</span>
    </a>
  );
}
