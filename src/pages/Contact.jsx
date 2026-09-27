import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ContactBlock from "../components/ContactBlock";

export default function Contact() {
  return (
    <>
      <Seo
        title="İletişim | E-posta ile Teklif Al — UGR Studio"
        description="UGR Studio'ya ulaşın: e-posta, telefon ve WhatsApp üzerinden projenizi anlatın, size uygun dijital çözümü birlikte planlayalım."
        path="/iletisim"
      />

      <main id="main">
        <PageHero
          eyebrow="İLETİŞİM"
          title="Projenizi Birlikte"
          highlight="Konuşalım."
          description="Nasıl bir web sitesine ihtiyacınız olduğunu anlatın, size uygun çözümü birlikte planlayalım. Bize e-posta yazın, WhatsApp'tan mesaj gönderin ya da doğrudan arayın."
        />

        <ContactBlock withSection={false} showHeading={false} />
      </main>
    </>
  );
}
