import LegalPage, { LegalSection } from "../components/LegalPage";
import {
  CONTACT_ADDRESS_LINE1,
  CONTACT_ADDRESS_LINE2,
  CONTACT_EMAIL,
  LEGAL_CONTROLLER_NAME,
  LEGAL_CONTROLLER_TAX,
  SITE_URL,
} from "../config";

export default function Gizlilik() {
  return (
    <LegalPage
      seoTitle="Gizlilik Politikası | UGR Studio"
      seoDescription="UGR Studio'nun gizlilik politikası: web sitesi üzerinden toplanan verilerin nasıl kullanıldığı ve korunduğuna dair bilgilendirme."
      path="/gizlilik-politikasi"
      title="Gizlilik Politikası"
      intro="Bu politika, UGR Studio web sitesi üzerinden topladığımız bilgilerin nasıl
      kullanıldığını ve hangi güvencelerin sağlandığını açıklamak amacıyla hazırlanmıştır."
    >
      <LegalSection heading="1. Kapsam">
        <p>
          Bu politika, {SITE_URL} adresi üzerinden sunulan web sitesi ile ilgilidir. Kişisel
          verilerin işlenmesine dair ayrıntılı bilgilendirme{" "}
          <a href="/kvkk" className="font-bold text-ugr-600 underline underline-offset-2">
            KVKK Aydınlatma Metni
          </a>{" "}
          içinde yer almaktadır.
        </p>
      </LegalSection>

      <LegalSection heading="2. Toplanan Bilgiler">
        <p>
          Sitede teklif formu bulunmamaktadır. Bize e-posta, WhatsApp ya da telefon
          aracılığıyla ilettiğiniz bilgiler toplanır:
        </p>
        <ul className="ml-4 list-disc space-y-1.5">
          <li>Ad, soyad, firma adı</li>
          <li>Telefon numarası ve e-posta adresi</li>
          <li>Mevcut web sitesi adresi (varsa)</li>
          <li>Proje türü, bütçe aralığı ve proje açıklamanız</li>
        </ul>
        <p>
          Ayrıca ziyaret analizi kapsamında IP adresi, tarayıcı/cihaz türü, hangi sayfaların
          görüntülendiği bilgisi otomatik olarak kaydedilebilir. Bu veriler yalnızca
          hizmetimizin kalitesini ölçmek amacıyla kullanılır.
        </p>
      </LegalSection>

      <LegalSection heading="3. Bilgilerin Kullanımı">
        <p>Bize ilettiğiniz bilgiler şu amaçlarla kullanılır:</p>
        <ul className="ml-4 list-disc space-y-1.5">
          <li>Talebinize karşılık teklif hazırlamak ve iletmek</li>
          <li>Sizinle iletişime geçmek ve süreç takibi yapmak</li>
          <li>Hizmetlerimizi geliştirmek ve ziyaretçi deneyimini iyileştirmek</li>
          <li>Yasal ve sözleşmesel yükümlülüklerimizi yerine getirmek</li>
        </ul>
        <p>
          Bilgileriniz, sizin açık rızanız olmadan pazarlama amaçlı üçüncü taraflara
          satılmaz, reklam amacıyla paylaşılmaz.
        </p>
      </LegalSection>

      <LegalSection heading="4. Üçüncü Taraflarla Paylaşım">
        <p>
          Verileriniz yalnızca hizmetin ifası için gerekli olduğu ölçüde tedarikçilerimizle
          paylaşılabilir. Bunlar; ziyaret analizi sağlayıcısı, e-posta gönderim ve
          altyapı/hosting hizmet sağlayıcılarıdır. Tüm tedarikçilerle
          veri güvenliğini korumaya yönelik sözleşmesel yükümlülüklerimiz bulunur.
        </p>
      </LegalSection>

      <LegalSection heading="5. Bilgi Güvenliği">
        <p>
          {LEGAL_CONTROLLER_NAME} ({LEGAL_CONTROLLER_TAX}) tarafından, verilerinizin
          korunması için teknik ve idari tedbirler alınmaktadır. Veri aktarımı SSL/TLS ile
          şifrelenir, erişimi yalnızca yetkili kişilerle sınırlıdır. Kişisel verilerin
          güvenliğini etkileyen bir olayın tespit edilmesi hâlinde yasal bildirim yükümlülüğü
          kapsamında ilgili kişi ve kurumlara bilgi verilir.
        </p>
      </LegalSection>

      <LegalSection heading="6. Saklama Süresi">
        <p>
          Bilgileriniz, işleme amacı için gerekli olduğu süre boyunca saklanır. Talebiniz
          sonuçlandıktan sonra yasal saklama yükümlülükleri saklayacağınız süre dışında
          silinir veya anonim hâle getirilir.
        </p>
      </LegalSection>

      <LegalSection heading="7. Üçüncü Taraf Bağlantıları">
        <p>
          Sitemizde üçüncü taraflara ait bağlantılar (ör. WhatsApp, harita servisleri)
          bulunabilir. Bu bağlantılar üzerinden ilgili sağlayıcıların kendi gizlilik
          politikaları geçerlidir.
        </p>
      </LegalSection>

      <LegalSection heading="8. Değişiklikler ve İletişim">
        <p>
          Bu politika zaman zaman güncellenebilir. Güncel hâli bu sayfada yayımlanır.
          Sorularınız için{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-ugr-600 underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>{" "}
          adresine yazabilirsiniz.
        </p>
        <p>
          <strong className="font-bold text-navy-700">Adres:</strong> {CONTACT_ADDRESS_LINE1},{" "}
          {CONTACT_ADDRESS_LINE2}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
