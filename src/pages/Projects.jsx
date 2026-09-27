import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ProjectsGrid from "../components/ProjectsGrid";
import ContactBlock from "../components/ContactBlock";

export default function Projects() {
  return (
    <>
      <Seo
        title="Projelerimiz | Web Tasarım Çalışmaları — UGR Studio"
        description="Kurumsal web tasarımı, e-ticaret ve özel web çözümleri alanında UGR Studio'nun geliştirdiği dijital deneyimlerden bazıları."
        path="/projeler"
      />

      <main id="main">
        <PageHero
          eyebrow="PROJELERİMİZ"
          title="Projelerimiz"
          description="Farklı ihtiyaçlara özel geliştirdiğimiz dijital deneyimlerden bazıları."
        />

        <ProjectsGrid layout="grid" withSection={false} />

        <ContactBlock />
      </main>
    </>
  );
}
