const steps = [
  {
    n: '01',
    title: 'Keşif',
    desc: 'İşinizi, hedef kitlenizi ve rakiplerinizi konuşuyoruz. Hangi paketin size uygun olduğuna birlikte karar veriyoruz.',
    duration: '1-2 gün',
  },
  {
    n: '02',
    title: 'Tasarım',
    desc: 'Markanıza özel arayüz taslağını hazırlıyor, onayınızı alana kadar birlikte netleştiriyoruz.',
    duration: '3-5 gün',
  },
  {
    n: '03',
    title: 'Geliştirme',
    desc: 'Onaylanan tasarımı hızlı, mobil uyumlu ve SEO altyapısı sağlam bir web sitesine dönüştürüyoruz.',
    duration: '5-10 gün',
  },
  {
    n: '04',
    title: 'Teslim',
    desc: 'Siteniz yayına alınır, domain/hosting kurulur ve kullanımını size gösteririz. Sonrasında da yanınızdayız.',
    duration: '1 gün',
  },
];

export default function ProcessSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-cyan-500/20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-cyan-400 font-extrabold text-xs uppercase tracking-[0.2em] block mb-3">SÜRECİMİZ</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Paranızı Verdikten Sonra Ne Olur?</h2>
        <p className="text-slate-300 text-sm">Her aşamada nerede olduğunuzu bilirsiniz — sürpriz yok, belirsizlik yok.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step, i) => (
          <div key={step.n} className="relative">
            <div className="bg-gradient-to-br from-[#0D1736] to-[#070E24] border border-cyan-500/20 rounded-2xl p-6 h-full">
              <span className="text-4xl font-black text-cyan-500/25">{step.n}</span>
              <h3 className="text-lg font-bold text-white mt-2 mb-2">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{step.desc}</p>
              <span className="inline-block text-[11px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                {step.duration}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-cyan-500/40 text-xl" aria-hidden="true">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
