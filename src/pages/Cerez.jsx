import LegalPage, { LegalSection } from "../components/LegalPage";
import {
  CONTACT_ADDRESS_LINE1,
  CONTACT_ADDRESS_LINE2,
  CONTACT_EMAIL,
  legalControllerWithTax,
  SITE_URL,
} from "../config";

export default function Cerez() {
  return (
    <LegalPage
      seoTitle="Çerez Politikası | UGR Studio"
      seoDescription="UGR Studio web sitesinde kullanılan çerezler, çerezlerin amaçları ve tarayıcınızdan çerez yönetimi hakkında bilgilendirme."
      path="/cerez-politikasi"
      title="Çerez Politikası"
      intro="Bu politika, UGR Studio web sitesini ziyaretiniz sırasında tarayıcınıza
      yerleştirilen çerezlerin ne olduğunu, hangi amaçla kullanıldığını ve
      tarayıcınızdan nasıl yönetebileceğinizi açıklar."
    >
      <LegalSection heading="1. Çerez Nedir?">
        <p>
          Çerez (cookie), ziyaret ettiğiniz web sitelerinin tarayıcınıza kaydettiği küçük metin
          dosyalarıdır. Sitenin sizi sonraki ziyaretinizde tanımasını, tercihlerinizi hatırlamasını
          ve sayfaların daha hızlı çalışmasını sağlar. Tarayıcınızın ayarlar bölümünde bu
          dosyaları istediğiniz zaman silebilir veya engelleyebilirsiniz.
        </p>
      </LegalSection>

      <LegalSection heading="2. Kullandığımız Çerez Türleri">
        <p>
          Sitemizde yalnızca hizmetin çalışması için gerekli, toplam veri hacmi düşük çerezler
          kullanırız. Reklam amaçlı takip çerezleri veya üçüncü taraf reklam ağlarının çerezleri
          kullanılmaz.
        </p>
        <ul className="ml-4 list-disc space-y-1.5">
          <li>
            <strong className="font-bold text-navy-700">Zorunlu çerezler:</strong> Güvenlik
            doğrulaması ve oturum güvenliği gibi temel işlevler için gereklidir. Site
            çalışmazsa bu çerezler kapatılamaz.
          </li>
          <li>
            <strong className="font-bold text-navy-700">Ölçüm ve analiz çerezleri:</strong> Hangi
            sayfaların görüntülendiğini ve ziyaretçi deneyimini ölçmek için kullanılır. Bu veriler
            kimlik belirleyici bilgiler içermez; yalnızca istatistiksel amaçla değerlendirilir.
          </li>
          <li>
            <strong className="font-bold text-navy-700">Tercih çerezleri:</strong> Dil ve görünüm gibi
            basit tercihleriniz varsa hatırlanmasını sağlar.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. Üçüncü Taraf Araçları">
        <p>
          Site içeriğinin sunulması ve ziyaret ölçümü için bazı sağlayıcı hizmetleri
          kullanılabilir. Bu sağlayıcılar kendi çerez politikaları kapsamında kendi sunucularından
          veri işleyebilir. Kullandığımız sağlayıcı listesi ve veri işleme koşulları talep
          hâlinde paylaşılır.
        </p>
        <p>
          Ayrıca iletişim butonları WhatsApp gibi harici uygulamalara yönlendirir. Bu
          bağlantılara tıkladığınızda ilgili uygulamanın kendi gizlilik ve çerez politikası
          geçerli olur.
        </p>
      </LegalSection>

      <LegalSection heading="4. Çerezleri Nasıl Yönetebilirim?">
        <p>
          Çerezleri tarayıcınızın ayarlarından yönetebilirsiniz. Tüm çerezleri engellediğinizde
          sitemizin bazı bölümleri çalışmayabilir. Engellemek yerine
          yalnızca üçüncü taraf çerezlerini kapatmanız genellikle yeterlidir.
        </p>
        <p>
          Tarayıcınızın "gizlilik" veya "site verileri" bölümünden çerezleri görüntüleyip
          silebilirsiniz. Daha ayrıntılı bilgi için tarayıcınızın yardım sayfasına bakabilirsiniz.
        </p>
      </LegalSection>

      <LegalSection heading="5. Değişiklikler ve İletişim">
        <p>
          Bu politika zaman zaman güncellenebilir; güncel hâli bu sayfada yayımlanır. Çerezlerle
          ilgili sorularınız için{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-bold text-ugr-600 underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          adresine yazabilirsiniz.
        </p>
        <p>
          <strong className="font-bold text-navy-700">Veri sorumlusu:</strong>{" "}
          {legalControllerWithTax()} — {CONTACT_ADDRESS_LINE1},{" "}
          {CONTACT_ADDRESS_LINE2}
        </p>
        <p>
          Ayrıntılı kişisel veri işleme bilgisi için{" "}
          <a
            href={`${SITE_URL}/kvkk`}
            className="font-bold text-ugr-600 underline underline-offset-2"
          >
            KVKK Aydınlatma Metni
          </a>{" "}
          sayfasını inceleyebilirsiniz.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
