import LegalPage, { LegalSection } from "../components/LegalPage";
import {
  CONTACT_ADDRESS_LINE1,
  CONTACT_ADDRESS_LINE2,
  CONTACT_EMAIL,
  LEGAL_CONTROLLER_NAME,
  LEGAL_CONTROLLER_TAX,
  SITE_URL,
} from "../config";

export default function Kvkk() {
  return (
    <LegalPage
      seoTitle="KVKK Aydınlatma Metni | UGR Studio"
      seoDescription="6698 sayılı KVKK kapsamında UGR Studio tarafından işlenen kişisel veriler hakkında aydınlatma metni."
      path="/kvkk"
      title="KVKK Aydınlatma Metni"
      intro="Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusu sıfatıyla faaliyet gösteren UGR Studio tarafından, web sitesi üzerinden paylaştığınız kişisel verilerin nasıl işlendiğini açıklamak amacıyla hazırlanmıştır."
    >
      <LegalSection heading="1. Veri Sorumlusu">
        <p>
          {LEGAL_CONTROLLER_NAME} (&quot;UGR Studio&quot;) olarak, 6698 sayılı KVKK kapsamında
          veri sorumlusu sıfatıyla aşağıda açıklanan kişisel verileri işlemekteyiz.
        </p>
        <p>
          <strong className="font-bold text-navy-700">Adres:</strong> {CONTACT_ADDRESS_LINE1},{" "}
          {CONTACT_ADDRESS_LINE2}
        </p>
        <p>
          <strong className="font-bold text-navy-700">Vergi Dairesi / No:</strong>{" "}
          {LEGAL_CONTROLLER_TAX}
        </p>
        <p>
          <strong className="font-bold text-navy-700">E-posta:</strong>{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-ugr-600 underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>
        </p>
      </LegalSection>

      <LegalSection heading="2. İşlenen Kişisel Veriler">
        <p>
          Bize e-posta, WhatsApp ya da telefon aracılığıyla ulaştığınızda aşağıdaki
          kişisel verileriniz işlenmektedir:
        </p>
        <ul className="ml-4 list-disc space-y-1.5">
          <li>Ad, soyad</li>
          <li>Firma adı</li>
          <li>Telefon numarası</li>
          <li>E-posta adresi</li>
          <li>Mevcut web sitesi adresi (varsa)</li>
          <li>Proje türü ve bütçe aralığı tercihiniz</li>
          <li>Projenize ilişkin olarak ilettiğiniz açıklama ve talepler</li>
        </ul>
        <p>
          Ayrıca sitemizi ziyaretiniz sırasında sunucu günlükleri (IP adresi, tarayıcı ve
          cihaz bilgisi, ziyaret zamanı) aracılığıyla otomatik olarak toplanabilir.
        </p>
      </LegalSection>

      <LegalSection heading="3. Kişisel Verilerin İşlenme Amaçları">
        <ul className="ml-4 list-disc space-y-1.5">
          <li>Talebinize karşılık teklif hazırlanması ve sunulması</li>
          <li>Size projenize özel kapsam, süre ve fiyat bilgisinin iletilmesi</li>
          <li>Sözleşme süreçlerinin yürütülmesi ve mevzuattan doğan yükümlülüklerin yerine getirilmesi</li>
          <li>Hizmet kalitemizin ölçülmesi ve iyileştirilmesi</li>
          <li>Yasal yükümlülüklerimizin yerine getirilmesi</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Hukuki Sebep ve İşleme Şartı">
        <p>
          Kişisel verileriniz; KVKK&apos;ın 5. maddesinde yer alan &quot;bir sözleşmenin kurulması
          veya ifasıyla doğrudan doğruya ilgili olması&quot; ve &quot;hukuki yükümlülüğün
          yerine getirilmesi&quot; hukuki sebeplerine dayanılarak işlenmektedir. Teklif
          talebiniz için verileri açık rızanız olmadan işliyor olabiliriz; bu durumda
          kanundaki istisna halleri uygulanır.
        </p>
      </LegalSection>

      <LegalSection heading="5. Aktarım ve Yurt Dışı Aktarımı">
        <p>
          Sitede teklif formu bulunmadığından iletişim talepleriniz doğrudan e-posta,
          WhatsApp ya da telefon üzerinden bize iletilir. Bu kanalların hiçbiri
          üçüncü taraf bir form hizmeti üzerinden çalışmaz. Buna karşılık erişim
          analizi için Google Analytics (Google LLC) ile ve iletişim hizmetleri
          kapsamında tedarikçilerimizle veri paylaşımı yapılabilir. Verileriniz, hizmetin
          ifası için gerekli olduğu ölçüde üçüncü kişilerle paylaşılır.
        </p>
        <p>
          Yurt dışına veri aktarımı söz konusu olduğunda KVKK&apos;ın 9. maddesi uyarınca
          yeterli tedbirler alınmakta, uygun güvence esasları (standart sözleşme, açık rıza
          vb.) değerlendirilmektedir. İlgili hizmet sağlayıcıların bir kısmı yurt dışında
          bulunduğundan bu madde kapsamında aktarım gerçekleşebilir.
        </p>
      </LegalSection>

      <LegalSection heading="6. Saklama Süresi">
        <p>
          Kişisel verileriniz, işleme amacının ortadan kalkması ve ilgili mevzuatta öngörülen
          saklama süresi dolmaya kadar muhafaza edilir. Teklif talepleri için veriler,
          talebin sonuçlanmasını takiben makul bir süre boyunca saklanır; bu süre içinde
          talebinize geri dönmek isterseniz verilerinize erişebilirsiniz.
        </p>
      </LegalSection>

      <LegalSection heading="7. Güvenlik ve Veri Sorumluluğu">
        <p>
          Kişisel verilerinizin hukuka aykırı olarak işlenmesini önlemek, veri güvenliğini
          sağlamak ve verilere yetkisiz erişimi engellemek için gerekli her türlü teknik ve
          idari tedbiri almaktayız. E-posta yoluyla iletilen talepler SSL/TLS şifreli
          bağlantı üzerinden tarafımıza ulaşır.
        </p>
      </LegalSection>

      <LegalSection heading="8. Haklarınız">
        <p>
          KVKK&apos;ın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme,
          işlenmişse bilgi talep etme, işleme amacını öğrenme, verilerin üçüncü kişilere
          aktarılıp aktarılmadığını bilme, eksik veya yanlış işlenmiş verilerin
          düzeltilmesini veya silinmesini isteme, işlemenin sınırlandırılmasını isteme,
          verilerinizin aktarıldığı üçüncü kişileri bilme ve verileriniz üzerinde kanunla
          tanınan diğer haklara sahipsiniz.
        </p>
      </LegalSection>

      <LegalSection heading="9. Başvuru Yöntemi">
        <p>
          Haklarınızı kullanmak istediğinizde{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-ugr-600 underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>{" "}
          adresine yazılı olarak başvurabilir ya da tarafımıza posta yoluyla ulaşabilirsiniz.
          Başvurunuz en geç 30 gün içinde sonuçlandırılır.
        </p>
      </LegalSection>

      <LegalSection heading="10. Değişiklikler">
        <p>
          Bu aydınlatma metni, mevzuat değişiklikleri veya hizmetlerimizdeki
          değişiklikler doğrultusunda güncellenebilir. Güncel metin bu sayfada
          yayımlanmaktadır.
        </p>
        <p>
          Site adresi:{" "}
          <a href={SITE_URL} className="font-bold text-ugr-600 underline underline-offset-2">
            {SITE_URL}
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
