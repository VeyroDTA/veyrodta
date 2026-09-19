import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/', label: 'Anasayfa' },
  { to: '/fiyatlar', label: 'Fiyatlar' },
  { to: '/projelerimiz', label: 'Projelerimiz' },
  { to: '/blog', label: 'Blog' },
  { to: '/sss', label: 'SSS' },
  { to: '/iletisim', label: 'İletişim' },
];

const linkClass = ({ isActive }) =>
  `hover:text-cyan-400 transition-colors cursor-pointer ${isActive ? 'text-cyan-400' : ''}`;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between sticky top-0 bg-[#040814]/85 backdrop-blur-2xl z-40 border-b border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <Link to="/" className="flex items-center gap-3.5 group text-left cursor-pointer">
          <img
            src="/logo-icon.png"
            alt="Veyro DTA"
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform flex-shrink-0"
          />
          <div className="flex flex-col justify-center">
            <div className="text-xl font-black tracking-[0.15em] text-white leading-none">
              VEYRO
            </div>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <span className="text-cyan-400 font-bold text-xs tracking-widest leading-none">D T A</span>
              <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-indigo-400"></div>
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-300">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/iletisim"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-sm font-extrabold px-7 py-3.5 rounded-xl transition-all shadow-[0_0_16px_rgba(245,158,11,0.35)] hover:scale-105 cursor-pointer"
          >
            Ücretsiz Teklif Al →
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden text-white p-2"
          aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080E24]/98 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 space-y-4 fixed top-24 left-0 w-full z-40 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 py-2.5 w-full text-left font-bold text-base"
            >
              {item.label}
            </NavLink>
          ))}
          <div className="pt-3">
            <Link
              to="/iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold py-4 rounded-xl shadow-lg"
            >
              Ücretsiz Teklif Al →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
