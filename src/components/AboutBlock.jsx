import { Section, SectionHeading, SrHeading, Container } from "./Section";
import { Reveal } from "./Reveal";
import Icon from "./Icon";
import Button from "./Button";

// ─────────────────────────────────────────────
// HAKKIMIZDA
// İstatistikler bilinçli olarak sadece DOĞRULANABİLİR olanlardan seçildi.
// "∞ Kodlanan Projeler" gibi anlamsız ya da gerçeği yansıtmayan rakamlar yok.
// ─────────────────────────────────────────────

const stats = [
  { value: "5+", label: "Yıllık Deneyim" },
  { value: "100%", label: "Özgün Tasarım" },
  { value: "0", label: "Ajans Katmanı" },
  { value: "6", label: "Hizmet Alanı" },
];

// Bağımsız stüdyo olmanın avantajları — "büyük ajans" taklidi yapmadan
// güven kuran, gerçek farklılıklar.
const advantages = [
  { icon: "users", text: "Doğrudan iletişim — aracı katman yok, her soruyu doğrudan yanıtlıyoruz." },
  { icon: "gauge", text: "Hızlı geri dönüş — teklif talepleri aynı gün içinde değerlendirilir." },
  { icon: "target", text: "Projeye özel yaklaşım — paket değil, ihtiyacınıza göre kapsam belirlenir." },
  { icon: "document", text: "Şeffaf süreç — her aşamada ne yapıldığını ve sıradaki adımı biliyorsunuz." },
  { icon: "handshake", text: "Doğrudan geliştiriciyle çalışma — projenizi teslim eden kişiyle konuşuyorsunuz." },
];

export default function AboutBlock({ withSection = true, withCta = true }) {
  const body = (
    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
      {/* Sol — metin + istatistikler */}
      <div className="lg:col-span-7">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              as="li"
              delay={i * 60}
              className="rounded-2xl border border-line bg-white p-4 text-center"
            >
              <span className="block text-[22px] leading-none font-extrabold text-ugr-600">
                {s.value}
              </span>
              <span className="mt-2 block text-[11px] font-semibold text-navy-400">
                {s.label}
              </span>
            </Reveal>
          ))}
        </ul>

        <div className="mt-8 space-y-4 text-[14.5px] leading-relaxed text-muted">
          <p>
            UGR Studio; modern web tasarımı, geliştirme ve dijital çözümler üzerine çalışan
            bağımsız bir stüdyodur.
          </p>
          <p>
            Her projede hazır şablonları tekrar etmek yerine, markanın ihtiyaçlarını ve
            hedeflerini anlayarak özgün çözümler geliştirmeye odaklanıyoruz.
          </p>
          <p>
            Bizim için iyi bir web sitesi yalnızca güzel görünmemeli; hızlı çalışmalı, güven
            vermeli, mobil cihazlarda kusursuz çalışmalı ve işletmeye gerçek bir değer katmalı.
          </p>
          <p>
            Basit bir kurumsal web sitesinden özel web uygulamalarına kadar farklı ihtiyaçlara
            göre çözümler geliştiriyoruz.
          </p>
        </div>
      </div>

      {/* Sağ — bağımsız stüdyo avantajları */}
      <Reveal className="lg:col-span-5">
        <div className="rounded-3xl border border-line bg-surface p-7">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-ugr-100 bg-white px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.16em] text-ugr-600 uppercase">
            Bağımsız Stüdyo
          </span>
          <h3 className="text-[17px] font-extrabold text-navy-800">
            Ajans değil, doğrudan çalışan bir ekip
          </h3>

          <ul className="mt-5 space-y-3.5">
            {advantages.map((a) => (
              <li key={a.text} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-white text-ugr-600 ring-1 ring-line">
                  <Icon name={a.icon} className="h-4 w-4" />
                </span>
                <span className="text-[13px] leading-relaxed text-navy-600">{a.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );

  if (!withSection) {
    return (
      <>
        <SrHeading>UGR Studio Hakkında</SrHeading>
        <Container>{body}</Container>
      </>
    );
  }

  return (
    <Section id="hakkimizda" tone="surface" bordered>
      <SectionHeading
        eyebrow="HAKKIMIZDA"
        align="left"
        title="Fikirleri Dijital Deneyimlere"
        highlight="Dönüştürüyoruz."
        description="Marka, tasarım ve teknolojiyi tek bir ekipte bir araya getiriyoruz."
      />

      {body}

      {withCta && (
        <Reveal className="mt-10">
          <Button to="/iletisim" withArrow>
            Birlikte çalışalım
          </Button>
        </Reveal>
      )}
    </Section>
  );
}
