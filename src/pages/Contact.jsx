import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FORM_ENDPOINT,
  whatsappHref,
  phoneHref,
  phoneDisplay,
  CONTACT_EMAIL,
  CONTACT_ADDRESS_LINE1,
  CONTACT_ADDRESS_LINE2,
  WORKING_HOURS,
} from '../config';
import { trackEvent } from '../analytics';

const infoCards = [
  {
    label: 'Telefon',
    value: phoneDisplay(),
    sub: WORKING_HOURS,
    href: phoneHref(),
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
  },
  {
    label: 'E-posta',
    value: CONTACT_EMAIL,
    sub: '24 saat içinde yanıt garantisi',
    href: `mailto:${CONTACT_EMAIL}`,
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  },
  {
    label: 'Konum',
    value: 'Silivri / İstanbul',
    sub: 'İstanbul ve tüm Türkiye\'ye uzaktan hizmet',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
];

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Basit bot koruması: gerçek kullanıcılar bu alanı görmez/doldurmaz.
    // Doluysa formu sessizce yok say (bot demektir).
    if (form.elements.honeypot.value) return;

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Gönderim başarısız');
      trackEvent('generate_lead', { form_name: 'iletisim_formu' });
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">İLETİŞİM</span>
        <h2 className="text-3xl font-black text-white mb-3">Projenizi Hayata Geçirelim</h2>
        <p className="text-slate-400 text-sm">Aşağıdan size en kolay gelen yoldan ulaşın.</p>
      </div>

      {/* İletişim bilgi kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {infoCards.map((card) => {
          const content = (
            <div className="bg-gradient-to-br from-[#0D1736] to-[#070E24] border border-cyan-500/20 rounded-2xl p-6 text-center h-full">
              <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-3">
                <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  {card.icon}
                </svg>
              </div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1">{card.label}</div>
              <div className="text-white font-bold text-sm break-words">{card.value}</div>
              <div className="text-[11px] text-slate-500 mt-1">{card.sub}</div>
            </div>
          );
          return card.href ? (
            <a key={card.label} href={card.href} className="hover:-translate-y-1 transition-transform block">
              {content}
            </a>
          ) : (
            <div key={card.label}>{content}</div>
          );
        })}
      </div>

      {/* Birincil yol: WhatsApp */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 border border-emerald-500/30 rounded-3xl p-8 sm:p-10 text-center mb-8">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.35)]">
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Hızlı Yanıt İçin <span className="text-emerald-400">WhatsApp</span>
        </h3>
        <p className="text-sm text-slate-400 mb-6 max-w-md mx-auto">
          WhatsApp üzerinden mesaj gönderin, formla uğraşmadan en kısa sürede size dönüş yapalım.
        </p>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('generate_lead', { form_name: 'whatsapp_iletisim' })}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer"
        >
          WhatsApp ile Yazın →
        </a>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-cyan-500/20"></div>
        <span className="text-xs text-slate-500 font-semibold uppercase tracking-widest">veya formu doldurun</span>
        <div className="flex-1 h-px bg-cyan-500/20"></div>
      </div>

      {/* İkincil yol: form */}
      <div className="bg-gradient-to-br from-[#112048] to-[#040814] border border-cyan-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
        {status === 'sent' ? (
          <div className="bg-cyan-500/10 border border-cyan-500/40 text-cyan-200 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold">Teşekkürler! 🎉</h3>
            <p className="text-sm text-slate-300">Talebiniz alındı, en kısa sürede döneceğiz.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            {/* Honeypot: gerçek kullanıcılara görünmez, botlar genelde doldurur */}
            <input
              type="text"
              name="honeypot"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label htmlFor="adSoyad" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                Adınız Soyadınız
              </label>
              <input
                id="adSoyad"
                name="adSoyad"
                required
                type="text"
                placeholder="Ahmet Yılmaz"
                className="w-full bg-[#040814] border border-cyan-500/30 rounded-xl px-4 py-3.5 text-white text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                E-posta Adresiniz
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="ornek@sirket.com"
                className="w-full bg-[#040814] border border-cyan-500/30 rounded-xl px-4 py-3.5 text-white text-sm"
              />
            </div>

            <div>
              <label htmlFor="telefon" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                Telefon Numaranız
              </label>
              <input
                id="telefon"
                name="telefon"
                required
                type="tel"
                placeholder="0532 000 00 00"
                className="w-full bg-[#040814] border border-cyan-500/30 rounded-xl px-4 py-3.5 text-white text-sm"
              />
            </div>

            <div>
              <label htmlFor="detay" className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                Proje Detayları
              </label>
              <textarea
                id="detay"
                name="detay"
                rows="4"
                placeholder="Hangi paketi istiyorsunuz?"
                className="w-full bg-[#040814] border border-cyan-500/30 rounded-xl px-4 py-3.5 text-white text-sm"
              ></textarea>
            </div>

            <label className="flex items-start gap-2.5 text-xs text-slate-400 cursor-pointer">
              <input
                required
                type="checkbox"
                name="kvkkOnay"
                className="mt-0.5 w-4 h-4 accent-cyan-500 cursor-pointer flex-shrink-0"
              />
              <span>
                <Link to="/kvkk" target="_blank" className="text-cyan-400 underline hover:text-cyan-300">
                  KVKK Aydınlatma Metni
                </Link>
                'ni okudum, kişisel verilerimin bu form kapsamında işlenmesini kabul ediyorum.
              </span>
            </label>

            {status === 'error' && (
              <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                Gönderilemedi, lütfen tekrar deneyin ya da WhatsApp üzerinden yazın.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold py-4 rounded-xl shadow-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Gönderiliyor…' : 'Teklif Al →'}
            </button>

            {FORM_ENDPOINT.includes('YOUR_FORM_ID') && (
              <p className="text-xs text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3">
                ⚠ Geliştirici notu: src/config.js içindeki FORM_ENDPOINT henüz gerçek
                bir Formspree adresi değil, bu form şu an gönderim yapamaz.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
