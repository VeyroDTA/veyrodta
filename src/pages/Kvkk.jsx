export default function Kvkk() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-slate-600 text-sm leading-relaxed">
      <div className="text-center mb-14">
        <span className="text-blue-700 font-bold text-xs uppercase tracking-widest block mb-2">YASAL</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">KVKK Aydınlatma Metni</h1>
      </div>

      {/*
        DİKKAT — BU BİR ŞABLONDUR, AVUKAT ONAYI YERİNE GEÇMEZ.
        Şahıs firması olduğun için "veri sorumlusu" alanına şirket unvanı değil,
        kendi adın soyadın (bağlı olduğun vergi dairesi/no ile) yazılır. Köşeli
        parantez içindeki [ ... ] alanları doldur. İdeal olanı, son halini bir
        hukuk danışmanına kontrol ettirmen; 6698 sayılı KVKK'ya göre veri
        sorumlusunun kimliği ve işleme amaçları eksiksiz ve doğru olmalı.
      */}

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">1. Veri Sorumlusu</h2>
          <p>
            [Adın Soyadın] ("Veyro DTA") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu
            ("KVKK") kapsamında veri sorumlusu sıfatıyla, aşağıda açıklanan kişisel verilerinizi
            işlemekteyiz. Adres: Mimar Sinan 3. Etap, 34570 Silivri / İstanbul. Vergi Dairesi/No:
            [vergi dairesi / TC kimlik ya da vergi numaran].
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">2. İşlenen Kişisel Veriler</h2>
          <p>
            İletişim formumuzu doldurduğunuzda ad-soyad, e-posta adresi, telefon numarası ve
            bize ilettiğiniz proje detaylarına ilişkin kişisel verileriniz işlenmektedir.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">3. İşleme Amacı</h2>
          <p>
            Kişisel verileriniz; tarafınıza teklif sunulması, talebinizin değerlendirilmesi,
            sizinle iletişime geçilmesi ve mevzuattan doğan yükümlülüklerin yerine getirilmesi
            amacıyla işlenmektedir.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">4. Kişisel Verilerin Aktarılması</h2>
          <p>
            Verileriniz, form gönderiminin teknik altyapısını sağlayan hizmet sağlayıcımız
            (Formspree) ve yalnızca hizmetin ifası için gerekli olduğu ölçüde ilgili tedarikçilerimiz
            dışında üçüncü kişilerle paylaşılmaz, yurt dışına aktarılması hâlinde KVKK'nın aradığı
            şartlar sağlanır.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">5. Haklarınız</h2>
          <p>
            KVKK'nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme,
            işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp
            kullanılmadığını öğrenme, yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme,
            eksik/yanlış işlenmişse düzeltilmesini isteme, silinmesini/yok edilmesini isteme ve
            bu işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme haklarına sahipsiniz.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">6. Başvuru</h2>
          <p>
            Yukarıdaki haklarınızı kullanmak için iletisim@veyrodta.com adresine yazılı olarak
            başvurabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}
