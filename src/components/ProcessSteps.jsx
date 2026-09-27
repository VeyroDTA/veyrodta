import { Section, SectionHeading, SrHeading, Container } from "./Section";
import { Reveal } from "./Reveal";
import Button from "./Button";

// ─────────────────────────────────────────────
// PROJENİZ NASIL İLERLİYOR?
// Süre bilgisi: Aşamaların tek tek süresi "proje kapsamına göre" değişir.
// Bu yüzden kartlara uydurma gün sayısı yazılmadı; toplam süre (2-6 hafta)
// başlık altında açıkça belirtildi. SSS ve fiyatlandırma ile aynı rakamlar kullanılır.
// ─────────────────────────────────────────────

const steps = [
  {
    n: "01",
    title: "Keşif",
    desc: "İşinizi, hedeflerinizi ve ihtiyaçlarınızı analiz ediyoruz.",
  },
  {
    n: "02",
    title: "Tasarım",
    desc: "Markanıza uygun arayüzü hazırlıyor ve onayınızı alıyoruz.",
  },
  {
    n: "03",
    title: "Geliştirme",
    desc: "Onaylanan tasarımı hızlı, mobil uyumlu ve performanslı bir web sitesine dönüştürüyoruz.",
  },
  {
    n: "04",
    title: "Yayın",
    desc: "Sitenizi yayına alıyor, gerekli teknik kurulumları tamamlıyor ve size teslim ediyoruz.",
  },
];

export default function ProcessSteps({ withSection = true, withCta = true }) {
  const body = (
    <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal
          key={step.n}
          as="li"
          delay={i * 80}
          className="relative min-w-0 rounded-2xl border border-line bg-white p-6 transition-colors duration-200 hover:border-ugr-200"
        >
          <span className="text-[13px] font-extrabold tracking-[0.18em] text-ugr-500">
            {step.n}
          </span>
          <span
            aria-hidden="true"
            className="mt-3 mb-3 block h-px w-10 rounded-full rule-orange"
          />
          <h3 className="text-[16px] font-extrabold text-navy-800">{step.title}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">{step.desc}</p>
        </Reveal>
      ))}
    </ol>
  );

  if (!withSection) {
    return (
      <>
        <SrHeading>Proje Aşamaları</SrHeading>
        <Container>{body}</Container>
      </>
    );
  }

  return (
    <Section id="surec" tone="surface" bordered>
      <SectionHeading
        eyebrow="SÜREÇ"
        title="Projeniz"
        highlight="Nasıl İlerliyor?"
        description="Fikirden yayına kadar tüm süreci birlikte yönetiyoruz."
      />

      {body}

      <Reveal className="mt-8 text-center">
        <p className="text-[13px] text-muted">
          Aşamaların süresi proje kapsamına göre değişir. Toplam teslim süresi paket seçimine
          göre <strong className="font-extrabold text-navy-600">2-6 hafta</strong> aralığındadır.
        </p>
      </Reveal>

      {withCta && (
        <Reveal className="mt-8 flex justify-center">
          <Button to="/iletisim" withArrow>
            Projeni Anlat
          </Button>
        </Reveal>
      )}
    </Section>
  );
}
