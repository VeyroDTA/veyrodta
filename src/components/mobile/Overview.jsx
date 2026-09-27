import {
  ecosystem,
  mobileFeatures,
  mobileIntro,
  mobileTrust,
  mobileUseCases,
} from "../../data/mobileApp";
import { Section, SectionHeading, Container } from "../Section";
import { Reveal } from "../Reveal";
import Icon from "../Icon";
import { HomeScreen, OrderScreen, PhoneFrame } from "./PhoneMockups";
import ScopeNote from "./ScopeNote";

// ─────────────────────────────────────────────
// MOBİL UYGULAMA SAYFASI — BÖLÜM 3-7
//   MobileTrust  → Hero altı hızlı güven alanı (4)
//   Intro        → "Dijital Deneyim" tanıtım bölümü
//   UseCases     → "İşletmeniz İçin Nasıl Bir Mobil Uygulama?" (6 kart)
//   Features     → "Uygulamanızda Neler Olabilir?" (21 özellik)
//   Ecosystem    → "Web + Mobil + Yönetim Paneli" (3 kart)
// ─────────────────────────────────────────────

// ── HIZLI GÜVEN ────────────────────────────────────────────────
export function MobileTrust() {
  return (
    <div className="border-y border-line bg-surface">
      <Container className="py-10 sm:py-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mobileTrust.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={i * 70}
              className="flex min-w-0 items-start gap-3.5 rounded-2xl border border-line bg-white p-5"
            >
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-ugr-50 text-ugr-600">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[14.5px] font-extrabold text-navy-800">
                  {item.title}
                </span>
                <span className="mt-1 block text-[12.5px] leading-relaxed text-muted">
                  {item.desc}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </div>
  );
}

// ── DİJİTAL DENEYİM ─────────────────────────────────────────────
export function Intro() {
  return (
    <Section tone="surface" bordered>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Sol — metin */}
        <div className="min-w-0">
          <Reveal>
            <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-ugr-100 bg-white px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.18em] text-ugr-600 uppercase">
              Dijital Deneyim
            </span>
            <h2 className="text-[23px] leading-[1.2] font-extrabold tracking-tight text-navy-800 sm:text-[27px] lg:text-[30px]">
              Sadece Bir Uygulama Değil,
              <br className="hidden sm:block" />{" "}
              <span className="text-ugr-600">İşletmenize Özel Bir Dijital Deneyim.</span>
            </h2>

            {mobileIntro.paragraphs.map((p) => (
              <p key={p} className="mt-4 text-[15px] leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </Reveal>

          <ul className="mt-7 grid gap-3 sm:grid-cols-3">
            {mobileIntro.facts.map((f, i) => (
              <Reveal
                key={f.label}
                as="li"
                delay={i * 70}
                className="min-w-0 rounded-2xl border border-line bg-white p-4"
              >
                <span className="block text-[11px] font-extrabold tracking-[0.14em] text-ugr-600 uppercase">
                  {f.label}
                </span>
                <span className="mt-1.5 block text-[13.5px] leading-snug font-bold text-navy-800">
                  {f.value}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Sağ — telefon + bilgi kartları */}
        <Reveal delay={120} className="min-w-0">
          <div className="mx-auto flex max-w-[280px] items-center justify-center gap-3 sm:max-w-[420px]">
            <div className="floaty-slow -rotate-[4deg]">
              <PhoneFrame className="!w-[104px] sm:!w-[128px] lg:!w-[140px]">
                <HomeScreen />
              </PhoneFrame>
            </div>
            <div className="floaty-slow rotate-[4deg]" style={{ animationDelay: "1.4s" }}>
              <PhoneFrame className="!w-[104px] sm:!w-[128px] lg:!w-[140px]">
                <OrderScreen />
              </PhoneFrame>
            </div>
          </div>

          <p className="mt-5 text-center text-[11.5px] font-semibold text-navy-400">
            Yukarıdaki ekranlar konsept arayüz çizimleridir.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

// ── HANGİ İŞLETMELER İÇİN? ──────────────────────────────────────
export function UseCases() {
  return (
    <Section id="kullanim">
      <SectionHeading
        eyebrow="KULLANIM ALANLARI"
        title="İşletmeniz İçin"
        highlight="Nasıl Bir Mobil Uygulama?"
        description="Mobil uygulamalar farklı sektörlerde müşteri deneyimini ve işletme süreçlerini geliştirmek için kullanılabilir."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mobileUseCases.map((u, i) => (
          <Reveal
            key={u.order}
            as="li"
            delay={(i % 3) * 70}
            className="flex min-w-0 flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-200 hover:border-ugr-200 hover:shadow-[0_18px_38px_-26px_rgba(15,23,42,0.4)]"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ugr-50 text-ugr-600">
                <Icon name={u.icon} className="h-5 w-5" />
              </span>
              <span className="text-[11px] font-extrabold tracking-[0.18em] text-navy-300">
                {u.order}
              </span>
            </div>
            <h3 className="text-[15.5px] font-extrabold text-navy-800">{u.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{u.desc}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

// ── UYGULAMANIZDA NELER OLABİLİR? ───────────────────────────────
export function Features() {
  return (
    <Section tone="surface" bordered>
      <SectionHeading
        eyebrow="ÖZELLİKLER"
        title="Uygulamanızda"
        highlight="Neler Olabilir?"
        description="İhtiyacınıza göre uygulamanıza farklı özellikler ekleyebiliriz."
      />

      <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {mobileFeatures.map((f, i) => (
          <Reveal
            key={f.label}
            as="li"
            delay={Math.min(i, 8) * 40}
            className="flex min-w-0 items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 transition-colors duration-200 hover:border-ugr-200"
          >
            <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-ugr-50 text-ugr-600">
              <Icon name={f.icon} className="h-4 w-4" />
            </span>
            <span className="min-w-0 text-[13.5px] font-bold text-navy-700">{f.label}</span>
          </Reveal>
        ))}
      </ul>

      <ScopeNote>
        Her özellik her projeye otomatik olarak dâhil değildir. İhtiyaç duyulan özellikler
        projenin kapsamına göre belirlenir.
      </ScopeNote>
    </Section>
  );
}

// ── WEB + MOBİL + YÖNETİM PANELİ ───────────────────────────────
export function Ecosystem() {
  return (
    <Section id="ekosistem">
      <SectionHeading
        eyebrow="BÜTÜNLEŞKİK SİSTEM"
        title="Uygulamanız Tek Başına"
        highlight="Çalışmak Zorunda Değil"
        description="Mobil uygulamanızı gerektiğinde web sitesi, yönetim paneli ve diğer dijital sistemlerinizle birlikte çalışacak şekilde planlayabiliriz."
      />

      <ul className="grid gap-4 md:grid-cols-3">
        {ecosystem.map((e, i) => (
          <Reveal
            key={e.title}
            as="li"
            delay={i * 80}
            className="min-w-0 rounded-2xl border border-line bg-white p-6 text-center transition-all duration-200 hover:border-ugr-200 hover:shadow-[0_18px_38px_-26px_rgba(15,23,42,0.4)]"
          >
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-ugr-50 text-ugr-600">
              <Icon name={e.icon} className="h-[22px] w-[22px]" />
            </span>
            <h3 className="mt-4 text-[16px] font-extrabold text-navy-800">{e.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{e.desc}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-8 text-center">
        <p className="text-[12.5px] text-navy-500">
          İhtiyaca göre bu sistemler API ve farklı entegrasyonlarla birbirine bağlanabilir.
        </p>
      </Reveal>
    </Section>
  );
}
