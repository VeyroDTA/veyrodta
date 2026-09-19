import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, CONTACT_ADDRESS_LINE1, CONTACT_ADDRESS_LINE2, phoneHref, phoneDisplay } from '../config';

const serviceLinks = [
  { label: 'Kurumsal Web Sitesi', to: '/fiyatlar' },
  { label: 'E-Ticaret Çözümleri', to: '/fiyatlar' },
  { label: 'SEO Hizmeti', to: '/blog/seo-nedir-google-gorunurluk-rehberi' },
  { label: 'SSL Sertifikası', to: '/blog/ssl-sertifikasi-nedir' },
  { label: 'Mobil Uyumlu Tasarım', to: '/blog/mobil-uyumlu-web-sitesi-neden-onemli' },
];

const siteLinks = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Fiyatlar', to: '/fiyatlar' },
  { label: 'Projelerimiz', to: '/projelerimiz' },
  { label: 'Blog', to: '/blog' },
  { label: 'SSS', to: '/sss' },
  { label: 'KVKK', to: '/kvkk' },
];

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/25">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 sm:grid-cols-4 gap-10 text-sm">
        <div className="col-span-2 sm:col-span-1">
          <div className="text-lg font-black tracking-[0.1em] text-white mb-2">VEYRO</div>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Web sitenizi değil işinizi tasarlıyoruz. Modern, hızlı ve dönüşüm odaklı web
            çözümleri.
          </p>
          <span className="text-[11px] text-cyan-400 font-semibold">Veyro DTA · Dijital Tasarım Atölyesi</span>
        </div>

        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Hizmetlerimiz</h3>
          <ul className="space-y-2.5 text-slate-400 text-xs">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-cyan-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Sayfalar</h3>
          <ul className="space-y-2.5 text-slate-400 text-xs">
            {siteLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-cyan-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4">İletişim</h3>
          <ul className="space-y-2.5 text-slate-400 text-xs">
            <li className="font-semibold text-slate-300">Veyro DTA</li>
            <li>{CONTACT_ADDRESS_LINE1}</li>
            <li>{CONTACT_ADDRESS_LINE2}</li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cyan-400 transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a href={phoneHref()} className="hover:text-cyan-400 transition-colors">
                {phoneDisplay()}
              </a>
            </li>
          </ul>
          <p className="text-[11px] text-slate-500 mt-4">
            İstanbul ve tüm Türkiye'ye uzaktan hizmet veriyoruz.
          </p>
        </div>
      </div>

      <div className="text-center text-[11px] text-slate-500 pb-8 pt-6 border-t border-cyan-500/10 mx-6">
        © {new Date().getFullYear()} Veyro DTA. Tüm hakları saklıdır.
      </div>
      {/*
        TODO — hâlâ eksik olan alan: src/pages/Kvkk.jsx içindeki
        [Adın Soyadın] / [vergi dairesi-no] alanlarını doldur (adres artık burada dolu).
      */}
    </footer>
  );
}
