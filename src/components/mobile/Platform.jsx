import { adminFeatures, integrations, platforms, stores } from "../../data/mobileApp";
import { Section, SectionHeading } from "../Section";
import { Reveal } from "../Reveal";
import Icon from "../Icon";
import ScopeNote from "./ScopeNote";

// ─────────────────────────────────────────────
// MOBİL UYGULAMA SAYFASI — BÖLÜM 10-13
//   Platforms     → Android & iOS
//   Stores        → Google Play / App Store
//   Integrations  → Ödeme & entegrasyonlar
//   AdminPanel    → Yönetim paneli
//
// TEKNOLOJİ VAADİ KURALI (önemli)
// Sayfada "Native iOS", "Native Android", "React Native", "Flutter" gibi
// teknik/teknoloji vaadi yoktur. Kullanılan yaklaşım proje ihtiyacına göre
// belirlenir. Platform ve mağaza kartlarında da ikon yerine düz bir üst
// başlık etiketi kullanılır: hem marka/logogram kullanılmaz, hem de
// "hangi teknoloji" sorusu gereksiz yere ön plana çıkmaz.
// ─────────────────────────────────────────────

// ── İKİ KARTLIK ORTAK KART ─────────────────────────────────────
function LabelCard({ item, delay }) {
  return (
    <Reveal
      delay={delay}
      className="min-w-0 rounded-2xl border border-line bg-white p-6 transition-all duration-200 hover:border-ugr-200 hover:shadow-[0_18px_38px_-26px_rgba(15,23,42,0.4)]"
    >
      <span className="inline-flex rounded-full border border-ugr-100 bg-ugr-50 px-3 py-1 text-[11px] font-extrabold tracking-[0.16em] text-ugr-600 uppercase">
        {item.label}
      </span>
      <h3 className="mt-4 text-[17px] font-extrabold text-navy-800">{item.title}</h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{item.desc}</p>
    </Reveal>
  );
}

// ── İKİ KARTLI ORTAK BÖLÜM ─────────────────────────────────────
function PairSection({ id, eyebrow, title, highlight, description, items, note }) {
  return (
    <Section id={id} tone="surface" bordered>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        description={description}
      />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, i) => (
          <LabelCard key={item.title} item={item} delay={i * 90} />
        ))}
      </div>
      <ScopeNote>{note}</ScopeNote>
    </Section>
  );
}

// ── ANDROID & iOS ───────────────────────────────────────────────
export function Platforms() {
  return (
    <PairSection
      id="platform"
      eyebrow="PLATFORMLAR"
      title="Android ve iOS İçin"
      highlight="Mobil Deneyimler"
      description="Uygulamanızın hedef kitlesine ve projenin teknik ihtiyaçlarına göre uygun mobil geliştirme yaklaşımını belirliyoruz."
      items={platforms}
      note="Uygulamanın hangi platformlarda geliştirileceği ve kullanılacak teknik yaklaşım proje ihtiyaçlarına göre belirlenir."
    />
  );
}

// ── MAĞAZA YAYINI ───────────────────────────────────────────────
export function Stores() {
  return (
    <PairSection
      id="yayin"
      eyebrow="MAĞAZA YAYINI"
      title="Uygulamanızı"
      highlight="Yayına Hazırlıyoruz"
      description="Geliştirme tamamlandıktan sonra uygulamanın test, son kontroller ve mağaza yayın hazırlıkları konusunda destek sağlıyoruz."
      items={stores}
      note="Mağaza hesapları, geliştirici hesapları ve ilgili platform ücretleri proje kapsamına göre ayrıca değerlendirilebilir."
    />
  );
}

// ── ÖDEME & ENTEGRASYONLAR ──────────────────────────────────────
export function Integrations() {
  return (
    <Section id="entegrasyon">
      <SectionHeading
        eyebrow="ENTEGRASYONLAR"
        title="İhtiyacınız Olan Sistemlerle"
        highlight="Entegre Edilebilir"
        description="Mobil uygulamanızın ihtiyaç duyduğu üçüncü taraf servisler ve işletme sistemleriyle entegrasyonlar proje kapsamına göre planlanabilir."
      />

      <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((it, i) => (
          <Reveal
            key={it.label}
            as="li"
            delay={Math.min(i, 8) * 40}
            className="flex min-w-0 items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 transition-colors duration-200 hover:border-ugr-200"
          >
            <span className="grid h-8 w-8 flex-none place-items-center rounded-lg bg-ugr-50 text-ugr-600">
              <Icon name={it.icon} className="h-4 w-4" />
            </span>
            <span className="min-w-0 text-[13.5px] font-bold text-navy-700">{it.label}</span>
          </Reveal>
        ))}
      </ul>

      <ScopeNote>Entegrasyonlar proje kapsamına göre ayrıca planlanır.</ScopeNote>
    </Section>
  );
}

// ── YÖNETİM PANELİ ──────────────────────────────────────────────
export function AdminPanel() {
  return (
    <Section id="yonetim-paneli" tone="surface" bordered>
      <SectionHeading
        eyebrow="YÖNETİM PANELİ"
        title="Uygulamanızı"
        highlight="Nereden Yöneteceksiniz?"
        description="Gerekli projelerde mobil uygulamanın arkasında çalışan web tabanlı bir yönetim paneli geliştirilebilir."
      />

      <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {adminFeatures.map((f, i) => (
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

      <ScopeNote>Yönetim panelinin kapsamı uygulamanın ihtiyaçlarına göre belirlenir.</ScopeNote>
    </Section>
  );
}
