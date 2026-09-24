import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sectorData } from '../data/sectors';
import TrustSection from '../components/TrustSection';
import ProcessSection from '../components/ProcessSection';
import AboutSection from '../components/AboutSection';

export default function Home() {
  const [activeSector, setActiveSector] = useState('kurumsal');
  const sectorKeys = ['kurumsal', 'eticaret', 'danismanlik'];

  const sectorIcons = {
    kurumsal: (
      <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    eticaret: (
      <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    danismanlik: (
      <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2.5 bg-blue-50 border border-blue-100 px-5 py-2.5 rounded-full text-blue-700 text-xs font-bold mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
            <span>PRESTİJLİ DİJİTAL ÇÖZÜMLER & ÖZGÜN TASARIM</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.15] mb-6 flex flex-col gap-y-2">
            <span>WEB SİTENİZİ DEĞİL</span>
            <span className="text-blue-700">İŞİNİZİ TASARLIYORUZ</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl font-normal">
            Markanızın gücünü dijitale taşıyor, güçlü bir tasarım ve kullanıcı deneyimiyle ziyaretçilerinizi müşterilerinize dönüştürüyoruz.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/fiyatlar"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-extrabold px-8 py-4 rounded-xl shadow-md shadow-amber-500/20 hover:scale-105 transition-all cursor-pointer"
            >
              Paketleri ve Fiyatları İncele →
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[520px]">
          <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-lg">
            <div className="bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 aspect-video flex items-center justify-center">
              {/*
                Not: Bu 30 saniyelik gerçek bir tanıtım filmi. 30 saniyelik bir video
                her ziyaretçide otomatik oynuyor (autoPlay+loop), bu hem mobilde
                veri/pil tüketir hem de bazı tarayıcılarda otomatik oynatma
                engellenip boş kutu görünmesine yol açabilir. Alternatif: poster
                görseli + tıklayınca oynayan bir yapı — istersen kodlarım.
              */}
              <video
                src="/Tanitim.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label="UGR Studio tanıtım videosu"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-extrabold text-xs uppercase tracking-[0.2em] block mb-3">İNTERAKTİF DENEYİM</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">UGR Studio ile Markanızı Öne Çıkarın</h2>
          <p className="text-slate-500 text-sm">Sol menüden hedef alanınızı seçin, müşterilerinizin size nasıl akıllıca ulaştığını canlı deneyimleyin.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 bg-slate-50 border border-slate-200 p-8 sm:p-12 rounded-[32px]">
          <div className="w-full lg:w-1/2 space-y-4">
            {sectorKeys.map((key) => {
              const sector = sectorData[key];
              const active = activeSector === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSector(key)}
                  aria-pressed={active}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    active
                      ? 'bg-blue-50 border-blue-300 shadow-sm scale-[1.02]'
                      : 'bg-white border-slate-200 hover:border-blue-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                        active
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-400'
                      }`}
                    >
                      {sectorIcons[key]}
                    </div>
                    <div>
                      <span className="text-xs text-blue-700 font-bold uppercase tracking-wider block mb-1">
                        {sector.order}. Segment
                      </span>
                      <span className="text-lg font-black text-slate-900">{sector.title}</span>
                    </div>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center ${
                      active ? 'border-blue-600 bg-blue-600 text-white font-black text-xs' : 'border-slate-300'
                    }`}
                  >
                    {active && '✓'}
                  </div>
                </button>
              );
            })}

            <div className="bg-blue-700 p-6 rounded-2xl text-white shadow-md flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <div className="font-black text-base mb-1">UGR Studio Standartları</div>
                <p className="text-xs text-blue-50 leading-relaxed font-medium">
                  Tamamen size özgü tasarım, kesintisiz mobil deneyim ve profesyonel dönüşüm araçlarıyla işinizi zirveye taşıyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-[320px] bg-white border-[10px] border-slate-900 rounded-[44px] p-4 shadow-xl relative">
              <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto mb-4"></div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 mb-4 text-xs">
                <span className="text-[10px] text-slate-400 block mb-1 font-bold uppercase tracking-widest">Google Araması:</span>
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span className="truncate">{sectorData[activeSector].searchQuery}</span>
                  <span className="text-blue-600">🔍</span>
                </div>
              </div>
              <div className="space-y-3 min-h-[230px]">
                {sectorData[activeSector].messages.map((msg, index) => (
                  <div key={index} className="bg-white text-slate-900 p-4 rounded-2xl shadow-sm border-l-4 border-emerald-500 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">✓</div>
                      <span className="text-[11px] font-extrabold text-emerald-600">{msg.time}</span>
                    </div>
                    <p className="text-xs font-medium leading-relaxed text-slate-600">{msg.text}</p>
                  </div>
                ))}
              </div>
              <div className="w-28 h-1 bg-slate-200 rounded-full mx-auto mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
      <TrustSection />
      <AboutSection />
    </div>
  );
}
