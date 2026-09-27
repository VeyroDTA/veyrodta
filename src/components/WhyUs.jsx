import { Section, SectionHeading, Container } from "./Section";
import { Reveal } from "./Reveal";
import Icon from "./Icon";

// ─────────────────────────────────────────────
// NEDEN UGR STUDIO?
// Burada sahte müşteri yorumu veya "henüz yayında değiliz" tarzı ifadeler
// KULLANILMAZ. Güven, somut çalışma prensipleriyle inşa edilir.
// ─────────────────────────────────────────────

const reasons = [
  {
    n: "01",
    icon: "pen",
    title: "Özgün Tasarım",
    desc: "Hazır şablonlara bağlı kalmadan markanıza özel tasarımlar geliştiriyoruz.",
  },
  {
    n: "02",
    icon: "eye",
    title: "Şeffaf Süreç",
    desc: "Projenin her aşamasında ne yapıldığını ve sıradaki adımı net şekilde bilirsiniz.",
  },
  {
    n: "03",
    icon: "refresh",
    title: "Revizyon & Onay",
    desc: "Tasarım sürecinde belirlenen aşamalarda geri bildiriminizi alıyor ve gerekli düzenlemeleri yapıyoruz.",
  },
  {
    n: "04",
    icon: "headset",
    title: "Yayın Sonrası Destek",
    desc: "Proje yayına girdikten sonra da teknik destek ve bakım süreçlerinde yanınızdayız.",
  },
];

export default function WhyUs({ withSection = true }) {
  const body = (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {reasons.map((r, i) => (
        <Reveal
          key={r.n}
          as="li"
          delay={i * 70}
          className="min-w-0 rounded-2xl border border-line bg-white p-6 transition-all duration-200 hover:border-ugr-200 hover:shadow-[0_18px_38px_-28px_rgba(15,23,42,0.4)]"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-ugr-50 text-ugr-600">
              <Icon name={r.icon} className="h-5 w-5" />
            </span>
            <span className="text-[11px] font-extrabold tracking-[0.18em] text-muted">
              {r.n}
            </span>
          </div>
          <h3 className="text-[15px] font-extrabold text-navy-800">{r.title}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">{r.desc}</p>
        </Reveal>
      ))}
    </ul>
  );

  if (!withSection) return <Container>{body}</Container>;

  return (
    <Section id="neden">
      <SectionHeading
        eyebrow="NEDEN UGR STUDIO?"
        title="Neden UGR Studio?"
        description="Her projede tasarım, performans ve kullanıcı deneyimini birlikte düşünüyoruz."
      />
      {body}
    </Section>
  );
}
