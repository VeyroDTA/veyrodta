// Her yazı ayrı bir /blog/:slug sayfasında açılır (bkz. src/pages/BlogPost.jsx).
// Yeni yazı eklemek için bu diziye yeni bir obje eklemen yeterli — liste ve
// detay sayfaları otomatik günceller.
export const blogPosts = [
  {
    slug: 'profesyonel-web-sitesi-rehberi',
    pillar: true,
    category: 'ANA REHBER',
    date: '18 Eylül 2026',
    readTime: '7 dk okuma',
    image: '/blog-cover.jpg',
    title: "Profesyonel Web Sitesi Sahibi Olmanın İşletmenize Kattığı 5 Şey",
    excerpt:
      'Web sitenizin Google\'da yükselmesini ve ziyaretçiyi müşteriye çeviren bir araca dönüşmesini sağlayan kapsamlı rehber.',
    sections: [
      {
        heading: 'Dijital varlığı olmayan işletme, tabelasız dükkan gibidir',
        body: [
          'Günümüzde bir işletmenin web sitesi, artık "olsa iyi olur" kategorisinden çıktı. Müşteri adayının büyük çoğunluğu, bir markayla ilk teması telefonla değil, Google aramasıyla kuruyor. Arama sonucunda karşısına çıkan sonuç, o işletme hakkındaki ilk izlenimi belirliyor.',
          'Bu rehberde, profesyonel bir web sitesinin bir işletmeye somut olarak ne kazandırdığını beş başlıkta topladık. Diğer blog yazılarımızın çoğu bu beş başlıktan birini derinlemesine ele alıyor; bu yüzden bu yazıyı bir referans noktası olarak düşünebilirsin.',
        ],
      },
      {
        heading: '1. Güven — insanlar aramadan önce bakıyor',
        body: [
          'Bir hizmet ya da ürün almadan önce işletmenin adını arayıp web sitesine bakmak, artık standart bir davranış. Sitesi olmayan ya da eski/bozuk görünen bir işletme, potansiyel müşterinin zihninde "acaba hâlâ faaliyette mi, güvenilir mi" sorusunu doğuruyor. Güncel, profesyonel görünümlü bir site bu tereddütü daha ilk saniyede ortadan kaldırır.',
        ],
      },
      {
        heading: '2. 7/24 çalışan bir satış temsilcisi',
        body: [
          'Fiziksel mağaza ya da ofis mesai saatleriyle sınırlıyken, web sitesi gece yarısı da çalışır. Doğru kurgulanmış bir site; hizmetleri anlatır, fiyat aralığını netleştirir, sık sorulan soruları yanıtlar ve ziyaretçiyi bir forma ya da WhatsApp\'a yönlendirir — sen uyurken bile.',
        ],
      },
      {
        heading: '3. Google\'da bulunabilirlik (SEO)',
        body: [
          'Sosyal medya hesabı Google aramalarında sınırlı görünür; bir web sitesi ise doğru kurulduğunda "şehir + hizmet" gibi aramalarda üst sıralara çıkabilir. Bu, reklama para harcamadan gelen organik, sürekli bir müşteri kaynağı demektir.',
        ],
      },
      {
        heading: '4. Ölçülebilirlik',
        body: [
          'Bir vitrin tabelasının kaç kişi tarafından görüldüğünü bilemezsin. Web sitesi ise Google Analytics gibi araçlarla hangi sayfanın ne kadar ziyaret edildiğini, insanların nerede siteden ayrıldığını, hangi kaynaktan geldiklerini gösterir. Bu veriyle pazarlama kararların artık tahmine değil rakama dayanır.',
        ],
      },
      {
        heading: '5. Marka algısı',
        body: [
          'Aynı hizmeti veren iki işletmeden biri özenli bir web sitesine sahip, diğeri değilse; fiyat eşit olsa bile insan doğası gereği ilkine daha çok güvenir. Tasarım kalitesi, dolaylı yoldan "bu işi ciddiye alan bir ekip" mesajı verir.',
        ],
      },
    ],
  },
  {
    slug: 'site-hizi-satislari-nasil-etkiler',
    category: 'MAKALE',
    date: '18 Eylül 2026',
    readTime: '4 dk okuma',
    image: '/blog-cover.jpg',
    title: 'Site Hızı Satışları Nasıl Etkiler? (Hızlandırma Taktikleri)',
    excerpt:
      'Görsel optimizasyonu, önbellekleme ve temiz kodlamayla sitenizi uçurmanın yolları.',
    sections: [
      {
        heading: 'Her 1 saniyelik gecikme, dönüşümü düşürür',
        body: [
          'Yapılan çok sayıda bağımsız araştırma aynı noktada birleşiyor: sayfa yüklenme süresi uzadıkça, ziyaretçinin siteyi terk etme oranı (bounce rate) hızla artıyor. Özellikle mobilde, 3 saniyeden uzun süren bir yükleme, ziyaretçinin önemli bir kısmını sayfa tam açılmadan kaybetmen anlamına gelir.',
          'Google da bunu biliyor: Core Web Vitals adı verilen hız metrikleri, doğrudan arama sıralamasını etkiliyor. Yani yavaş bir site sadece ziyaretçi değil, SEO sıralaması da kaybettiriyor.',
        ],
      },
      {
        heading: 'En büyük hız düşmanı: optimize edilmemiş görseller',
        body: [
          'Çoğu yavaş sitede sorun kod değil, kontrolsüz görsel boyutlarıdır. Telefonla çekilip doğrudan yüklenen 4-5 MB\'lık bir fotoğraf, sayfayı tek başına saniyelerce geciktirebilir. Çözüm: görselleri WebP/AVIF gibi modern formatlara çevirmek, gerçek gösterim boyutuna göre yeniden boyutlandırmak ve ekranda görünmeyen görselleri "lazy loading" ile geciktirmek.',
        ],
      },
      {
        heading: 'Önbellekleme (caching) ve CDN',
        body: [
          'Tarayıcı önbellekleme, aynı ziyaretçi siteye tekrar geldiğinde dosyaları yeniden indirmek yerine yerel kopyayı kullanmasını sağlar. CDN (içerik dağıtım ağı) ise sitenin dosyalarını dünya genelinde birden çok sunucuya dağıtarak, ziyaretçiye coğrafi olarak en yakın sunucudan hizmet verir. İkisi birlikte, tekrar eden ziyaretleri neredeyse anında yükler.',
        ],
      },
      {
        heading: 'Temiz kod, gereksiz eklenti kullanmama',
        body: [
          'Özellikle hazır site kurucularında (bkz. bir sonraki yazımız), her yeni eklenti kendi JavaScript ve CSS dosyasını sayfaya ekler. 15-20 eklentiyle şişmiş bir site, gerçekten ihtiyaç duyduğun özelliklerin çok ötesinde bir yük taşır. Özel kodlanmış bir site, sadece gerçekten kullanılan kodu yükler.',
        ],
      },
    ],
  },
  {
    slug: 'ssl-sertifikasi-nedir',
    category: 'MAKALE',
    date: '18 Eylül 2026',
    readTime: '3 dk okuma',
    image: '/blog-cover.jpg',
    title: 'SSL Sertifikası Nedir? Neden Web Siteniz İçin Zorunludur?',
    excerpt:
      'E-ticaret ve kurumsal sitelerde güvenliğin ilk şartı olan SSL protokolünün Google sıralamasına etkisi.',
    sections: [
      {
        heading: 'SSL, tarayıcı ile sunucu arasındaki veriyi şifreler',
        body: [
          'SSL (Secure Sockets Layer), ziyaretçinin tarayıcısı ile sitenin sunucusu arasında aktarılan veriyi şifreleyen bir güvenlik protokolüdür. SSL kurulu bir sitenin adresi "https://" ile başlar ve tarayıcıda genelde bir asma kilit simgesiyle gösterilir. SSL olmayan siteler "http://" ile kalır ve modern tarayıcılar bu siteleri "Güvenli Değil" uyarısıyla işaretler.',
        ],
      },
      {
        heading: 'Neden zorunlu: güven, veri güvenliği, sıralama',
        body: [
          'Bir form doldurulduğunda (isim, telefon, e-posta) ya da e-ticarette kart bilgisi girildiğinde, bu veri SSL olmadan şifresiz şekilde iletilir — bu da bilgilerin araya girilerek okunabilmesine açık kapı bırakır. Ayrıca Google, 2014\'ten beri HTTPS\'i doğrudan bir sıralama faktörü olarak kullanıyor: aynı kalitede iki içerikten SSL\'li olan, aramalarda öne çıkma eğiliminde.',
          'Tarayıcıdaki "Güvenli Değil" uyarısı da ziyaretçinin siteden hızla çıkmasına (ve bir daha dönmemesine) yol açan en güçlü güven kırıcılardan biri.',
        ],
      },
      {
        heading: 'Nasıl kurulur?',
        body: [
          'Çoğu güncel hosting sağlayıcısı, Let\'s Encrypt gibi ücretsiz SSL sertifikalarını otomatik olarak kuruyor ve yeniliyor. Veyro DTA olarak teslim ettiğimiz her sitede SSL kurulumu standart olarak dahildir — ayrıca bir işlem yapmana gerek kalmaz.',
        ],
      },
    ],
  },
  {
    slug: 'ucretsiz-site-kurucularinin-gizli-maliyetleri',
    category: 'MAKALE',
    date: '18 Eylül 2026',
    readTime: '5 dk okuma',
    image: '/blog-cover.jpg',
    title: 'Ücretsiz Web Sitesi Kurmanın İşletmenize Gizli Maliyetleri',
    excerpt:
      'Hazır altyapıların esneklik kaybı ve uzun vadede ortaya çıkan gizli masrafları hakkında bilinmeyenler.',
    sections: [
      {
        heading: '"Ücretsiz" gerçekten ücretsiz mi?',
        body: [
          'Hazır site kurucuları (Wix, WordPress.com gibi platformların ücretsiz katmanları) küçük bir başlangıç için cazip görünür. Ancak marka güveni istendiği anda bu "ücretsiz"lik hızla sona erer: kendi alan adını kullanmak, platform reklamlarını kaldırmak, temel özelliklere (form, e-ticaret, depolama) erişmek genelde aylık ücretli paketlere geçmeyi gerektirir.',
        ],
      },
      {
        heading: 'Esneklik kaybı',
        body: [
          'Hazır kurucular, belirli şablonlar ve bileşenler üzerinden çalışır. İşletme büyüdükçe ihtiyaç duyulan özel bir özellik (özel bir randevu akışı, entegrasyon, sayfa yapısı) platformun sunduğu sınırların dışına çıktığında ya imkansız hale gelir ya da pahalı üçüncü parti eklentilerle "yamanmaya" çalışılır.',
        ],
      },
      {
        heading: 'Taşınabilirlik sorunu',
        body: [
          'Bir gün platform değiştirmek istediğinde (fiyat artışı, özellik yetersizliği vb. nedenlerle), hazır kurucularda oluşturulan içerik genelde o platforma kilitlidir. Tasarımı, SEO geçmişini ve bazen de tüm içeriği sıfırdan yeniden kurman gerekebilir. Özel kodlanmış bir site ise senin mülkiyetindedir — istediğin hosting sağlayıcısına taşıyabilirsin.',
        ],
      },
      {
        heading: 'Performans ve SEO sınırları',
        body: [
          'Hazır kurucular, binlerce farklı siteye aynı anda hizmet veren genel bir altyapı üzerinde çalışır. Bu da genelde daha yavaş yüklenme süreleri ve teknik SEO üzerinde daha az kontrol anlamına gelir — bir önceki yazımızda bahsettiğimiz gibi, ikisi de doğrudan satışlarını etkiler.',
        ],
      },
    ],
  },
];
