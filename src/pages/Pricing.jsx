import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Başlangıç Web Sitesi',
    desc: 'Küçük işletmeler, esnaflar için giriş paketi.',
    price: '13.900 TL',
    features: ['1–4 sayfa & Mobil uyum', 'WhatsApp butonu & SSL', 'Domain + Hosting (1. yıl dahil)'],
    highlight: false,
    cta: 'Teklif Al →',
  },
  {
    name: 'Kurumsal Web Sitesi',
    desc: 'Firmalar ve profesyoneller.',
    price: '19.900 TL',
    features: ['5–10 sayfa & Yönetim paneli', 'Blog sistemi & SEO altyapısı', 'Domain + Hosting (1. yıl dahil)'],
    highlight: false,
    cta: 'Teklif Al →',
  },
  {
    name: 'Profesyonel Web Çözümü',
    desc: 'Büyük ve özel ihtiyaçlar.',
    price: '34.900 TL',
    features: ['10+ sayfa & Özel tasarım', 'Randevu & Üyelik sistemi', 'Gelişmiş SEO & Performans'],
    highlight: true,
    cta: 'Hemen Başla →',
  },
  {
    name: 'E-Ticaret Pro',
    desc: 'Online satış yapmak isteyenler.',
    price: '49.900 TL',
    features: ['Ürün & Kategori yönetimi', 'Sanal Pos ödeme', 'Kargo entegrasyonu & SSL'],
    highlight: false,
    cta: 'Teklif Al →',
  },
];

const addons = [
  {
    title: 'AI Müşteri Asistanı',
    desc: '7/24 otomatik müşteri desteği.',
    price: '3.500 TL',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    title: 'Randevu Sistemi',
    desc: 'Online randevu alma modülü.',
    price: '2.500 TL',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    title: 'SEO Optimizasyonu',
    desc: 'Teknik arama motoru optimizasyonu.',
    price: '4.900 TL',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  },
  {
    title: 'Google İşletme Profili',
    desc: 'Harita ve profesyonel görünüm.',
    price: '2.500 TL',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
];

export default function Pricing() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">ŞEFFAF FİYATLANDIRMA</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">İhtiyacınıza Uygun Paketi Seçin</h2>
        <p className="text-slate-300 text-sm">Gizli maliyet yok, sürpriz yok. İşletmenizi büyütmek için en net çözümler.</p>
        <span className="inline-block mt-4 text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full">
          Tüm fiyatlarımıza KDV dahildir
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={
              pkg.highlight
                ? 'bg-gradient-to-br from-[#2E2410] via-[#1A1408] to-[#0D1736] border-2 border-amber-400/80 rounded-2xl p-6 flex flex-col justify-between relative shadow-[0_0_18px_rgba(245,158,11,0.15)]'
                : 'bg-gradient-to-br from-[#0D1736] to-[#070E24] border border-cyan-500/20 rounded-2xl p-6 flex flex-col justify-between shadow-xl'
            }
          >
            {pkg.highlight && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                ⭐ EN ÇOK TERCİH EDİLEN
              </div>
            )}
            <div>
              <h3 className={`text-lg font-bold text-white mb-1 ${pkg.highlight ? 'mt-1' : ''}`}>{pkg.name}</h3>
              <p className="text-xs text-slate-400 mb-4">{pkg.desc}</p>
              <div className={`text-2xl font-black mb-6 ${pkg.highlight ? 'text-amber-300' : 'text-cyan-400'}`}>{pkg.price}</div>
              <ul className="space-y-2 text-sm text-slate-300 mb-6">
                {pkg.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
            </div>
            <Link
              to="/iletisim"
              className={
                pkg.highlight
                  ? 'w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold py-3.5 rounded-xl text-sm shadow-lg hover:scale-105 transition-all cursor-pointer'
                  : 'w-full text-center bg-[#112048] hover:bg-cyan-600 text-white font-bold py-3 rounded-xl text-sm transition-all cursor-pointer'
              }
            >
              {pkg.cta}
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-slate-500 mb-20 -mt-14">
        * Domain + Hosting bedeli 1. yıl pakete dahildir. 2. yıldan itibaren yıllık yenileme bedeli
        {' '}
        <span className="text-amber-300 font-semibold">[TODO: yıllık yenileme fiyatını buraya yaz]</span>
        {' '}
        olarak faturalandırılır, dilerseniz kendi domain/hosting sağlayıcınızı da kullanabilirsiniz.
      </p>

      <div className="pt-16 border-t border-cyan-500/20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">EK HİZMETLER</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Paketinizi Güçlendirin</h3>
          <p className="text-slate-300 text-sm">Ek modüllerle web sitenizin yeteneklerini hemen artırın.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon) => (
            <div key={addon.title} className="bg-gradient-to-br from-[#0D1736] to-[#070E24] border border-cyan-500/20 p-6 rounded-2xl flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-4">
                  <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    {addon.icon}
                  </svg>
                </div>
                <h4 className="text-base font-bold text-white mb-1">{addon.title}</h4>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">{addon.desc}</p>
              </div>
              <div>
                <div className="text-xl font-black text-cyan-400 mb-4">{addon.price}</div>
                <Link to="/iletisim" className="block w-full text-center bg-[#112048] hover:bg-cyan-600 text-white font-bold py-2.5 rounded-xl text-xs cursor-pointer">
                  Ekle →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
