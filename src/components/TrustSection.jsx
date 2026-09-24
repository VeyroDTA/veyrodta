// Sahte "müşteri yorumu" kullanmıyoruz (Türkiye'de aldatıcı reklam sayılabilir ve
// site henüz yayında olmadığı için gerçek bir yorum da yok). Onun yerine somut,
// kanıtlanabilir sözlerle güven inşa ediyoruz.
//
// Gerçek müşterilerin olunca bu bölümü kolayca yorumlara çevirebilirsin:
// aşağıdaki `guarantees` dizisini `{ quote, name, role }` alanlarına sahip bir
// diziyle değiştirip kartların içeriğini ona göre güncellemen yeterli.
const guarantees = [
  {
    title: '2-4 Hafta Teslim',
    desc: 'Projenin kapsamına göre net bir teslim takvimiyle çalışırız, sürpriz gecikme olmaz.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Şeffaf Fiyat',
    desc: 'Fiyatlar sitede açık, gizli maliyet yok. Ne göreceksen onu ödersin.',
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 12v-2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </>
    ),
  },
  {
    title: 'Revizyon Hakkı',
    desc: 'Süreç boyunca belirli aşamalarda onayını alıyor, içine sinmeyen noktaları düzeltiyoruz.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    ),
  },
  {
    title: 'Yayın Sonrası Destek',
    desc: 'Site yayına girdikten sonra da teknik destek ve güvenlik güncellemeleriyle yanındayız.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-blue-700 font-extrabold text-xs uppercase tracking-[0.2em] block mb-3">NEDEN UGR STUDIO?</span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Sözümüzü Tutarız</h2>
        <p className="text-slate-500 text-sm">
          Henüz yayında olmadığımız için elimizde müşteri yorumu yok — ama sana verdiğimiz sözler net.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees.map((g) => (
          <div
            key={g.title}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-4">
              <svg className="w-6 h-6 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                {g.icon}
              </svg>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{g.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
