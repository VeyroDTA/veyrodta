import { useEffect, useRef } from "react";
import { quoteMailtoHref } from "../config";
import { trackEvent } from "../analytics";
import Button from "./Button";
import Icon from "./Icon";

// ─────────────────────────────────────────────
// PROJE DETAY MODALI
// Konsept çalışmaların "problem → çözüm → sonuç" anlatımı.
// Diğer tüm bileşenlerle aynı tasarım dilini kullanır (navy / ugr / flame);
// ayrı bir renk sistemi veya gradient yoktur.
//
// YAPI — panel neden iki parçaya bölündü
// Üstte GÖRSEL sabit durur, altındaki metin kendi içinde kayar
// (flex-col + min-h-0 + overflow-y-auto). Böylece:
//   · panel yüksekliği max-h ile sınırlı kalır, ekranı kaplamaz
//   · görsel, metin kaydırılırken kaybolmaz
//   · metin uzun olsa bile görsel tekrar tekrar görünmez
// Kutu max-w-lg (512px) — daha önce max-w-2xl (672px) ekranı gereğinden
// geniş dolduruyordu. Görsel 16/9 kutuyla kırpılmadan (ya da en fazla
// %10 yatay) görünür.
// ─────────────────────────────────────────────

const blocks = (project) => [
  { key: "problem", label: "Karşılaşılan problem" },
  { key: "solution", label: "UGR çözümü" },
  {
    key: "result",
    label: project.concept ? "Hedeflenen sonuç" : "Elde edilen sonuç",
  },
];

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);
  const panelRef = useRef(null);

  // Modal açıkken: Esc kapatır, arka plan kaydırması kilitlenir, odak panoya taşınır.
  useEffect(() => {
    if (!project) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    closeBtnRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy-900/70 backdrop-blur-sm sm:items-center sm:p-5"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[88vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-line bg-white shadow-[0_40px_80px_-30px_rgba(15,23,42,0.6)] sm:rounded-3xl"
      >
        {/* Görsel — sabit, 16/9, kırpma yok */}
        <div className="relative aspect-[16/9] w-full flex-none overflow-hidden bg-surface">
          <img
            src={project.image}
            alt={`${project.title} — ${project.categoryLabel} arayüz önizlemesi`}
            decoding="async"
            width="1200"
            height="675"
            className="h-full w-full object-cover object-top"
          />

          {project.concept && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-white/95 px-2.5 py-1 text-[11px] font-extrabold tracking-[0.1em] text-navy-700 uppercase backdrop-blur">
              <Icon name="sparkle" className="h-3 w-3" />
              Konsept Çalışma
            </span>
          )}

          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Pencereyi kapat"
            className="absolute top-3 right-3 grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-line bg-white/95 text-muted backdrop-blur transition-colors duration-200 hover:border-navy-200 hover:text-navy-800"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        {/* Metin — kendi içinde kayar */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-6">
          <div className="pr-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-ugr-100 bg-ugr-50 px-3 py-1 text-[11px] font-extrabold tracking-[0.16em] text-ugr-600 uppercase">
              {project.category}
            </span>

            <h2
              id="project-modal-title"
              className="mt-2.5 text-[20px] leading-snug font-extrabold tracking-tight text-navy-800 sm:text-[22px]"
            >
              {project.title}
            </h2>
          </div>

          <div className="mt-4 space-y-2.5">
            {blocks(project).map(({ key, label }) => (
              <div key={key} className="rounded-2xl border border-line bg-surface p-3.5">
                <span className="block text-[11px] font-extrabold tracking-[0.12em] text-ugr-600 uppercase">
                  {label}
                </span>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{project[key]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Butonlar — görsel gibi sabit, tek CTA her zaman erişilebilir */}
        <div className="flex-none border-t border-line bg-white p-4 sm:px-6">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-end">
            <Button variant="secondary" size="md" onClick={onClose} className="w-full sm:w-auto">
              Kapat
            </Button>
            <a
              href={quoteMailtoHref(project.title)}
              onClick={() => {
                trackEvent("generate_lead", { method: "email", context: project.title });
                onClose();
              }}
              className="inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-flame-700 px-5 text-[14px] font-extrabold text-white transition-colors duration-200 hover:bg-flame-800 sm:w-auto"
            >
              Benzer Proje İçin Teklif Al
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
