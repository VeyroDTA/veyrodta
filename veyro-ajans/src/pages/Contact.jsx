import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FORM_ENDPOINT } from '../config';
import { trackEvent } from '../analytics';

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
      <div className="bg-gradient-to-br from-[#112048] to-[#040814] border border-cyan-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">İLETİŞİM</span>
          <h2 className="text-3xl font-black mb-3">Projenizi Hayata Geçirelim</h2>
        </div>

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
