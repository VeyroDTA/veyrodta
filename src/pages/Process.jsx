import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ProcessSteps from "../components/ProcessSteps";
import ContactBlock from "../components/ContactBlock";
import { Section, SectionHeading } from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";

// Ödeme ve iletişim şekli — tek başına "Süreç" sayfasına özgü, dürüst bilgiler.
const extras = [
  {
    icon: "handshake",
    title: "Ödeme Planı",
    desc: "Çoğu projede ön ödeme alınır, kalan tutar teslim sonrası tahsil edilir. Ödeme planı teklif metninde yazılıdır.",
  },
  {
    icon: "mail",
    title: "Tek Noktadan İletişim",
    desc: "Projeniz boyunca tek bir muhatapla çalışırsınız. Sorularınız aracı katman olmadan doğrudan yanıtlanır.",
  },
  {
    icon: "refresh",
    title: "Revizyon ve Onay",
    desc: "Tasarım aşamasında onayınız alınır. Onaylamadığınız tasarıma geliştirme başlamaz; revizyon kapsamı teklifte belirtilir.",
  },
  {
    icon: "headset",
    title: "Yayın Sonrası Destek",
    desc: "Site yayına girdikten sonra da teknik destek sürer. Güncelleme ve küçük içerik değişiklikleri için tek muhatap devam eder.",
  },
];

export default function Process() {
  return (
    <>
      <Seo
        title="Çalışma Sürecimiz | Keşif, Tasarım, Geliştirme, Yayın — UGR Studio"
        description="UGR Studio ile çalışma süreci: keşif, tasarım, geliştirme ve yayın aşamaları. Net takvim, şeffaf iletişim ve revizyon hakkı."
        path="/surec"
      />

      <main id="main">
        <PageHero
          eyebrow="SÜREÇ"
          title="Projeniz"
          highlight="Nasıl İlerliyor?"
          description="Fikirden yayına kadar tüm süreci birlikte yönetiyoruz. Her aşamada nerede olduğunuzu bilirsiniz."
        />

        <ProcessSteps withSection={false} withCta={false} />

        <Section tone="surface" bordered>
          <SectionHeading
            eyebrow="ÇALIŞMA ŞEKLİ"
            title="Süreci"
            highlight="Nasıl Yürütüyoruz?"
            description="Sürecin teknik kısmı kadar, bu sürecin nasıl işlediği de önemlidir."
          />

          <ul className="grid gap-4 sm:grid-cols-2">
            {extras.map((e, i) => (
              <Reveal
                key={e.title}
                as="li"
                delay={(i % 2) * 80}
                className="flex items-start gap-4 rounded-2xl border border-line bg-white p-6"
              >
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-ugr-50 text-ugr-600">
                  <Icon name={e.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[15.5px] font-extrabold text-navy-800">{e.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        <ContactBlock />
      </main>
    </>
  );
}
