const stats = [
  { value: '05+', label: 'Yıllık Deneyim' },
  { value: '∞', label: 'Kodlanan Projeler' },
  { value: '100%', label: 'Özgün Tasarım' },
  { value: '24/7', label: 'Dijital Çözüm' },
];

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-cyan-500/20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/*
            TODO: Gerçek fotoğrafını /public/founder.jpg olarak eklediğinde
            aşağıdaki div'i şu satırla değiştir:
            <img src="/founder.jpg" alt="Veyro DTA kurucusu" className="w-32 h-32 rounded-2xl object-cover" />
          */}
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/40 flex items-center justify-center text-5xl font-black text-cyan-300 mb-5">
            V
          </div>
          <h3 className="text-lg font-bold text-white">Kurucu</h3>
          <p className="text-sm text-cyan-400 font-semibold mb-6">Veyro DTA</p>

          <div className="grid grid-cols-2 gap-4 w-full">
            {stats.map((s) => (
              <div key={s.label} className="bg-gradient-to-br from-[#0D1736] to-[#070E24] border border-cyan-500/20 rounded-xl p-4 text-center lg:text-left">
                <div className="text-2xl font-black text-amber-300">{s.value}</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <span className="text-cyan-400 font-extrabold text-xs uppercase tracking-[0.2em] block mb-3">HAKKIMDA</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
            5 yıldır kodluyor, geliştiriyor ve dijital fikirleri gerçeğe dönüştürüyorum.
          </h2>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              Veyro DTA, arkasında büyük bir ajans ekibi değil; yazılım ve web geliştirme alanında
              5 yıllık deneyime sahip, işini titizlikle yapan bağımsız bir geliştirici tarafından
              yürütülüyor.
            </p>
            <p>
              Modern, hızlı ve kullanıcı odaklı web siteleri tasarlıyor; markaların dijital dünyada
              güçlü ve profesyonel bir şekilde yer almasına yardımcı oluyorum.
            </p>
            <p>
              Her projede hazır şablonlar yerine, markanın ihtiyaçlarına ve hedeflerine uygun özgün
              tasarımlar geliştirmeye odaklanıyorum.
            </p>
            <p>
              Benim için iyi bir web sitesi sadece güzel görünmek değil; hızlı çalışmalı, güven
              vermeli ve işinize değer katmalı.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
