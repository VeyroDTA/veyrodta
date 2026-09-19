// Sahte "müşteri yorumu" kullanmıyoruz (Türkiye'de aldatıcı reklam sayılabilir ve
// site henüz yayında olmadığı için gerçek bir yorum da yok). Onun yerine somut,
// kanıtlanabilir sözlerle güven inşa ediyoruz.
//
// Gerçek müşterilerin olunca bu bölümü kolayca yorumlara çevirebilirsin:
// aşağıdaki `guarantees` dizisini `{ quote, name, role }` alanlarına sahip bir
// diziyle değiştirip kartların içeriğini ona göre güncellemen yeterli.
const guarantees = [
  {
    icon: '⚡',
    title: '2-4 Hafta Teslim',
    desc: 'Projenin kapsamına göre net bir teslim takvimiyle çalışırız, sürpriz gecikme olmaz.',
  },
  {
    icon: '💬',
    title: 'Şeffaf Fiyat',
    desc: 'Fiyatlar sitede açık, gizli maliyet yok. Ne göreceksen onu ödersin.',
  },
  {
    icon: '🔁',
    title: 'Revizyon Hakkı',
    desc: 'Süreç boyunca belirli aşamalarda onayını alıyor, içine sinmeyen noktaları düzeltiyoruz.',
  },
  {
    icon: '🛠️',
    title: 'Yayın Sonrası Destek',
    desc: 'Site yayına girdikten sonra da teknik destek ve güvenlik güncellemeleriyle yanındayız.',
  },
];

export default function TrustSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-cyan-500/20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-cyan-400 font-extrabold text-xs uppercase tracking-[0.2em] block mb-3">NEDEN VEYRO DTA?</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Sözümüzü Tutarız</h2>
        <p className="text-slate-300 text-sm">
          Henüz yayında olmadığımız için elimizde müşteri yorumu yok — ama sana verdiğimiz sözler net.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees.map((g) => (
          <div
            key={g.title}
            className="bg-gradient-to-br from-[#0D1736] to-[#070E24] border border-cyan-500/20 rounded-2xl p-6 shadow-xl"
          >
            <div className="text-3xl mb-4" aria-hidden="true">{g.icon}</div>
            <h3 className="text-base font-bold text-white mb-2">{g.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
