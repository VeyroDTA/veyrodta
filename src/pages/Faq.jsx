import { useState, useEffect } from 'react';
import { faqs } from '../data/faqs';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  // FAQPage schema.org verisi: Google'ın SSS'ni arama sonucunda
  // doğrudan (açılır kapanır liste olarak) göstermesini sağlar.
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">MERAK EDİLENLER</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Sık Sorulan Sorular</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          const panelId = `faq-panel-${index}`;
          return (
            <div key={index} className="bg-[#0D1736] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-lg">
              <button
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full px-6 py-5 text-left font-bold text-white flex justify-between items-center cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span>{faq.q}</span>
                <span className="text-cyan-400 text-xl" aria-hidden="true">{isOpen ? '-' : '+'}</span>
              </button>
              {isOpen && (
                <div id={panelId} className="px-6 pb-5 text-sm text-slate-300 border-t border-cyan-500/20 pt-4 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
