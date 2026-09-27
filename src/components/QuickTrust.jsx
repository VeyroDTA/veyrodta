import Reveal from "./Reveal";
import Icon from "./Icon";
import { Container } from "./Section";

// ─────────────────────────────────────────────
// HERO SONRASI HIZLI GÜVEN ALANI
// Ziyaretçi ilk 5-10 saniyede "buraya ne yapabilirim?" sorusunun cevabını
// burada bulur. Bilinçli olarak kısa ve alçak tutuldu.
// ─────────────────────────────────────────────

const items = [
  {
    icon: "pen",
    title: "Özgün Tasarım",
    desc: "Hazır şablon yerine markanıza özel tasarım.",
  },
  {
    icon: "mobile",
    title: "Mobil Uyumlu",
    desc: "Her cihazda kusursuz kullanıcı deneyimi.",
  },
  {
    icon: "search",
    title: "SEO Altyapısı",
    desc: "Arama motorları için sağlam teknik temel.",
  },
  {
    icon: "headset",
    title: "Yayın Sonrası Destek",
    desc: "Proje tesliminden sonra da yanınızdayız.",
  },
];

export default function QuickTrust() {
  return (
    <div className="border-y border-line bg-surface">
      <Container className="py-10 sm:py-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={i * 70}
              className="flex items-start gap-3.5 rounded-2xl border border-line bg-white p-5"
            >
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-ugr-50 text-ugr-600">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span>
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
