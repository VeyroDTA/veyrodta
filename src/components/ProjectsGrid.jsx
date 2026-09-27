import { useState } from "react";
import { projectsData } from "../data/projects";
import { Section, SectionHeading, SrHeading, Container } from "./Section";
import { Reveal } from "./Reveal";
import Button from "./Button";
import Icon from "./Icon";
import ProjectModal from "./ProjectModal";

// ─────────────────────────────────────────────
// PROJELERİMİZ
// layout:
//   "carousel" → ana sayfa (yatay kaydırmalı, mobil dostu)
//   "grid"     → /projeler sayfası (3 kolon)
//
// Dürüstlük: gerçek müşteri olmayan çalışmalar "KONSEPT ÇALIŞMA" etiketiyle
// gösterilir. Gerçek proje eklendiğinde etiket otomatik kaybolur.
// ─────────────────────────────────────────────

function ProjectCard({ project, onOpen }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-200 hover:border-ugr-200 hover:shadow-[0_20px_44px_-28px_rgba(15,23,42,0.45)]">
      {/* 16/9 kutu: proje görselleri 1.60 ve 1.78 oranında. 4/3 kutu
          kullanıldığında Vélora/Ustafil'in %25'i, Autocare/Lume'nin %17'si
          kırpılıyordu. 16/9'da ikisi tamamen, diğer ikisi yalnızca %10
          yatay (iki yandan %5) görünür. */}
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <img
          src={project.image}
          alt={`${project.title} — ${project.categoryLabel}`}
          loading="lazy"
          decoding="async"
          width="1200"
          height="675"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {project.concept && (
          <span className="absolute top-3 left-3 rounded-full border border-line bg-white/95 px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-navy-700 uppercase backdrop-blur">
            Konsept Çalışma
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-[11px] font-extrabold tracking-[0.14em] text-ugr-600 uppercase">
          {project.category}
        </span>
        <h3 className="mt-1.5 text-lg font-extrabold text-navy-800">{project.title}</h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">{project.summary}</p>

        <button
          onClick={() => onOpen(project)}
          // Dokunma alani: metin 14px -> ozgun yuksekligi ~21px; mobilde
          // parmakla vurmasi zor. Ic ice gecici bir <span> butonu 12px asagi
          // yukari genisletir. Konumu negatif oldugu icin yerlesim HIC degismez,
          // yalnizca dokunulabilir alan 21px -> 45px olur.
          // (CSS ::after denendi, hesaplaniyor ama hit-test'e girmiyordu;
          //  gercek bir oge guarantees tikanir.)
          className="relative mt-5 inline-flex cursor-pointer items-center gap-1.5 self-start text-[14px] font-extrabold text-navy-800 transition-colors hover:text-ugr-600"
        >
          <span className="absolute -inset-y-3 right-0 left-0" aria-hidden="true" />
          Projeyi İncele
          <Icon
            name="arrowRight"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </article>
  );
}

export default function ProjectsGrid({ layout = "grid", withSection = true, limit }) {
  const [selected, setSelected] = useState(null);

  const list = limit ? projectsData.slice(0, limit) : projectsData;
  const isCarousel = layout === "carousel";

  const content = isCarousel ? (
    <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-6 sm:px-6 [scrollbar-width:thin]">
      {list.map((project) => (
        <div
          key={project.id}
          className="w-[84%] flex-shrink-0 snap-start sm:w-[58%] lg:w-[42%] xl:w-[31.5%]"
        >
          <ProjectCard project={project} onOpen={setSelected} />
        </div>
      ))}
    </div>
  ) : (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((project, i) => (
        <Reveal
          key={project.id}
          as="li"
          delay={(i % 3) * 70}
          className="h-full min-w-0"
        >
          <ProjectCard project={project} onOpen={setSelected} />
        </Reveal>
      ))}
    </ul>
  );

  const body = (
    <>
      {content}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );

  if (!withSection) {
    return (
      <>
        <SrHeading>Örnek Çalışmalar</SrHeading>
        <Container>{body}</Container>
      </>
    );
  }

  return (
    <Section id="projeler" tone="surface" bordered>
      <SectionHeading
        eyebrow="PROJELERİMİZ"
        title="Projelerimiz"
        description="Farklı ihtiyaçlara özel geliştirdiğimiz dijital deneyimlerden bazıları."
      />

      {body}

      {withSection && (
        <Reveal className="mt-10 flex justify-center">
          <Button to="/projeler" variant="secondary" withArrow>
            Tüm projeleri gör
          </Button>
        </Reveal>
      )}
    </Section>
  );
}
