import LegalPage, { LegalSection } from "../components/LegalPage";
import {
  CONTACT_ADDRESS_LINE1,
  CONTACT_ADDRESS_LINE2,
  CONTACT_EMAIL,
  legalControllerName,
  legalControllerWithTax,
  SITE_URL,
} from "../config";

export default function KullanimKosullari() {
  return (
    <LegalPage
      seoTitle="Kullanım Koşulları | UGR Studio"
      seoDescription="UGR Studio web sitesini kullanımına ilişkin genel şartlar: içeriklerin kullanımı, fikri mülkiyet hakları, sorumluluk sınırları ve iletişim."
      path="/kullanim-kosullari"
      title="Kullanım Koşulları"
      intro="Bu koşullar, UGR Studio web sitesine erişmeniz ve site içeriğini
      kullanmanız için uyulması gereken genel şartları düzenler."
    >
      <LegalSection heading="1. Koşulların Kapsamı">
        <p>
          Bu koşullar, {SITE_URL} adresine erişerek siteyi kullanan tüm ziyaretçiler için
          geçerlidir. Siteyi kullanmaya başlamanız, bu koşulları kabul ettiğiniz anlamına gelir.
          Koşulları kabul etmiyorsanız siteyi kullanmamanız gerekir.
        </p>
      </LegalSection>

      <LegalSection heading="2. Site Kullanımı">
        <p>Siteyi kullanırken uyulması gereken genel kurallar:</p>
        <ul className="ml-4 list-disc space-y-1.5">
          <li>Siteyi yasalara aykırı, zararlı veya hileli amaçlarla kullanmamak</li>
          <li>Site altyapısına izinsiz erişmeye, müdahale etmeye veya aşırı yük bindirmeye çalışmamak</li>
          <li>İçerikleri izinsiz kopyalamak, çoğaltmak, yayımlamak veya ticari amaçla kullanmamak</li>
        </ul>
        <p>
          Bu kurallara uyulmaması durumunda erişim kısıtlanabilir.
        </p>
      </LegalSection>

      <LegalSection heading="3. Fikri Mülkiyet Hakları">
        <p>
          Sitedeki tüm içerikler — metinler, görseller, tasarım öğeleri, arayüz tasarımı, kod
          ve marka kullanımı — {legalControllerName()} adlı veri sorumlusuna aittir. İçerikler
          yalnızca bilgilendirme amaçlıdır; izinsiz kopyalanması, yeniden yayımlanması veya
          ticari kullanılması hukuki sonuç doğurur.
        </p>
        <p>
          Site üzerindeki çalışmalarımıza ilişkin ayrıntılar için{" "}
          <a
            href={`${SITE_URL}/projeler`}
            className="font-bold text-ugr-600 underline underline-offset-2"
          >
            Projeler
          </a>{" "}
          sayfasını inceleyebilirsiniz.
        </p>
      </LegalSection>

      <LegalSection heading="4. Bilgi Doğruluğu ve Sorumluluk Sınırı">
        <p>
          Sitedeki fiyatlar, süreler ve hizmet açıklamaları bilgilendirme amaçlıdır; her bir iş için
          güncel ve kesin bilgi değildir. Teklifler, proje kapsamına göre yazılı olarak
          belirlenir. Sitedeki içerikler doğru ve güncel tutulmaya çalışılsa da, bu içeriklere
          dayanarak alınan kararların sonuçlarından UGR Studio sorumlu tutulamaz.
        </p>
        <p>
          Sitede gösterilen tasarım çalışmaları{" "}
          <strong className="font-bold text-navy-700">konsept çalışma</strong> niteliğindedir ve
          gerçek müşteri referansı olarak kullanılmaz.
        </p>
      </LegalSection>

      <LegalSection heading="5. Harici Bağlantılar">
        <p>
          Sitede üçüncü taraflara ait bağlantılar bulunabilir. Bu bağlantılardan dolaylı olarak
          UGR Studio sorumlu tutulamaz; harici sitelerin içerik ve politikaları ilgili
          sağlayıcılara aittir.
        </p>
      </LegalSection>

      <LegalSection heading="6. Değişiklikler ve Uyuşmazlık Çözümü">
        <p>
          UGR Studio bu koşulları önceden bildirim yapmaksızın güncelleme hakkını saklı tutar.
          Güncel hâli bu sayfada yayımlanır. Koşullardan doğan uyuşmazlıklar Türk hukuku
          uyarınca çözülecektir.
        </p>
        <p>
          Sorularınız için{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-bold text-ugr-600 underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          adresine yazabilir,{" "}
          <strong className="font-bold text-navy-700">{CONTACT_ADDRESS_LINE1},{" "}
            {CONTACT_ADDRESS_LINE2}</strong>{" "}
          adresinden tarafımıza ulaşabilirsiniz.
        </p>
        <p>
          <strong className="font-bold text-navy-700">Veri sorumlusu:</strong>{" "}
          {legalControllerWithTax()}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
