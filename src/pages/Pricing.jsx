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
    features: ['10+ sayfa & Özel tasarım', 'Randevu & Üyelik sistemi', 'Gelişmiş SEO & Performans', 'Domain + Hosting (1. yıl dahil)'],
    highlight: true,
    cta: 'Hemen Başla →',
  },
  {
    name: 'E-Ticaret Pro',
    desc: 'Online satış yapmak isteyenler.',
    price: '49.900 TL',
    features: ['Ürün & Kategori yönetimi', 'Sanal Pos ödeme', 'Kargo entegrasyonu & SSL', 'Domain + Hosting (1. yıl dahil)'],
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
    <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70 -z-10" aria-hidden="true"></div>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-blue-700 font-bold text-xs uppercase tracking-widest block mb-2">ŞEFFAF FİYATLANDIRMA</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">İhtiyacınıza Uygun Paketi Seçin</h2>
        <p className="text-slate-500 text-sm">Gizli maliyet yok, sürpriz yok. İşletmenizi büyütmek için en net çözümler.</p>
        <span className="inline-block mt-4 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
          Tüm fiyatlarımıza KDV dahildir
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={
              pkg.highlight
                ? 'bg-gradient-to-b from-amber-50 to-white border-2 border-amber-400 rounded-2xl p-6 flex flex-col justify-between relative shadow-xl lg:scale-105 lg:-translate-y-2 z-10'
                : 'bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm'
            }
          >
            {pkg.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-900 text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 1.5l2.472 5.01 5.528.803-4 3.899.944 5.507L10 14.14l-4.944 2.6.944-5.508-4-3.898 5.528-.803L10 1.5z" />
                </svg>
                En Çok Tercih Edilen
              </div>
            )}
            <div>
              <h3 className={`text-lg font-bold text-slate-900 mb-1 ${pkg.highlight ? 'mt-2' : ''}`}>{pkg.name}</h3>
              <p className="text-xs text-slate-500 mb-4">{pkg.desc}</p>
              <div className={`text-2xl font-black mb-6 ${pkg.highlight ? 'text-amber-600' : 'text-blue-700'}`}>{pkg.price}</div>
              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                {pkg.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
            </div>
            <Link
              to="/iletisim"
              className={
                pkg.highlight
                  ? 'w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-extrabold py-3.5 rounded-xl text-sm shadow-md hover:scale-105 transition-all cursor-pointer'
                  : 'w-full text-center bg-slate-900 hover:bg-blue-800 text-white font-bold py-3 rounded-xl text-sm transition-all cursor-pointer'
              }
            >
              {pkg.cta}
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-slate-500 mb-20 -mt-14">
        * Domain + Hosting bedeli 1. yıl pakete dahildir. 2. yıldan itibaren yenileme bedeli,
        o yılın güncel domain/hosting fiyatına göre ayrıca faturalandırılır ve teklif
        aşamasında netleştirilir; dilerseniz kendi domain/hosting sağlayıcınızı da kullanabilirsiniz.
      </p>

      <div className="pt-16 border-t border-slate-200">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-blue-700 font-bold text-xs uppercase tracking-widest block mb-2">EK HİZMETLER</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">Paketinizi Güçlendirin</h3>
          <p className="text-slate-500 text-sm">Ek modüllerle web sitenizin yeteneklerini hemen artırın.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon) => (
            <div key={addon.title} className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    {addon.icon}
                  </svg>
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">{addon.title}</h4>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">{addon.desc}</p>
              </div>
              <div>
                <div className="text-xl font-black text-blue-700 mb-4">{addon.price}</div>
                <Link to="/iletisim" className="block w-full text-center bg-slate-900 hover:bg-blue-800 text-white font-bold py-2.5 rounded-xl text-xs cursor-pointer">
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
