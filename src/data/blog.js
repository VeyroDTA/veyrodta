// Her yazı ayrı bir /blog/:slug sayfasında açılır (bkz. src/pages/BlogPost.jsx).
// Yeni yazı eklemek için bu diziye yeni bir obje eklemen yeterli — liste ve
// detay sayfaları otomatik günceller.
export const blogPosts = [
  {
    slug: 'profesyonel-web-sitesi-rehberi',
    icon: 'guide',
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
    icon: 'speed',
    category: 'MAKALE',
    date: '18 Eylül 2026',
    readTime: '4 dk okuma',
    image: '/blog-site-hizi.jpg',
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
    icon: 'lock',
    category: 'MAKALE',
    date: '18 Eylül 2026',
    readTime: '3 dk okuma',
    image: '/blog-ssl.jpg',
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
    icon: 'cost',
    category: 'MAKALE',
    date: '18 Eylül 2026',
    readTime: '5 dk okuma',
    image: '/blog-ucretsiz-site.jpg',
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
  {
    slug: 'mobil-uyumlu-web-sitesi-neden-onemli',
    icon: 'mobile',
    category: 'MAKALE',
    date: '19 Eylül 2026',
    readTime: '4 dk okuma',
    image: '/blog-mobil-uyumlu.jpg',
    title: 'Mobil Uyumlu Web Sitesi Neden Önemlidir?',
    excerpt:
      'İnternet trafiğinin büyük kısmı artık akıllı telefonlardan geliyor — sitenizin mobilde nasıl göründüğü, masaüstünden çok daha belirleyici.',
    sections: [
      {
        heading: 'Ziyaretçilerinizin çoğu zaten telefonunda',
        body: [
          'Bugün bir işletmeyi Google\'da arayan kullanıcıların büyük bir kısmı bunu telefonundan yapıyor — yolda, toplu taşımada, bir arkadaşıyla konuşurken aklına gelen bir ihtiyacı o an aratıyor. Web siteniz masaüstünde mükemmel görünse bile, mobilde metinler taşıyor, butonlara dokunmak zorlaşıyor ya da menü açılmıyor sa, o ziyaretçinin büyük kısmını daha ilk saniyede kaybedersiniz.',
        ],
      },
      {
        heading: 'Google artık siteyi önce mobil versiyonundan değerlendiriyor',
        body: [
          'Google, "Mobile-First Indexing" adı verilen bir sistemle sitenizi sıralarken masaüstü değil, mobil sürümünü referans alıyor. Yani mobilde eksik ya da bozuk görünen bir site, masaüstünde ne kadar iyi olursa olsun, arama sonuçlarında geride kalma riskiyle karşı karşıya. Mobil uyumluluk artık bir "ekstra" değil, temel bir SEO şartı.',
        ],
      },
      {
        heading: 'Kötü mobil deneyim doğrudan müşteri kaybettirir',
        body: [
          'Küçük yazılar, üst üste binen butonlar, yatay kaydırma gerektiren tablolar ya da yavaş açılan menüler — bunların hepsi ziyaretçiyi birkaç saniye içinde "geri" tuşuna bastırır. Özellikle telefon numarası, WhatsApp butonu ya da iletişim formu gibi dönüşüm noktaları mobilde zor ulaşılabilirse, iyi bir tasarımın tüm emeği boşa gider.',
        ],
      },
      {
        heading: 'Responsive tasarım ne demek?',
        body: [
          '"Mobil uyumlu" (responsive) bir site, tek bir kod tabanıyla çalışır ama ekran boyutuna göre otomatik olarak yeniden düzenlenir: menü telefonlarda hamburger simgesine dönüşür, sütunlar alt alta sıralanır, yazı boyutları ve dokunma alanları parmakla kullanıma uygun hale gelir. Bu, ayrı bir "mobil site" kurmaktan farklı ve günümüzün standart yaklaşımı — biz de her projede bunu esas alıyoruz.',
        ],
      },
      {
        heading: 'Sitenizin mobil uyumlu olup olmadığını nasıl anlarsınız?',
        body: [
          'En basit yöntem: telefonunuzdan kendi sitenize girip gezinmek. Menü kolayca açılıyor mu, yazılar okunuyor mu, butonlara rahatça dokunabiliyor musunuz? Daha teknik bir kontrol için Google\'ın ücretsiz "PageSpeed Insights" aracı, mobil performansınızı ve olası sorunları ayrıntılı şekilde raporlar.',
        ],
      },
    ],
  },
  {
    slug: 'seo-nedir-google-gorunurluk-rehberi',
    icon: 'seo',
    category: 'MAKALE',
    date: '19 Eylül 2026',
    readTime: '6 dk okuma',
    image: '/blog-seo-rehberi.jpg',
    title: "SEO Nedir? Web Sitenizi Google'da Görünür Hale Getirme Rehberi",
    excerpt:
      'Arama motoru optimizasyonunun temelleri ve web sitenizin Google\'da daha üst sıralarda yer alması için bilmeniz gerekenler.',
    sections: [
      {
        heading: 'SEO kısaca nedir?',
        body: [
          'SEO (Search Engine Optimization / Arama Motoru Optimizasyonu), bir web sitesinin Google gibi arama motorlarında, reklam vermeden, organik sonuçlarda daha üst sıralarda çıkmasını sağlamak için yapılan teknik ve içeriksel çalışmaların bütünüdür. Amaç basit: potansiyel müşteriniz ihtiyacı olan hizmeti aradığında, karşısına rakibiniz değil siz çıkın.',
        ],
      },
      {
        heading: 'Teknik SEO: Google sitenizi "okuyabiliyor" mu?',
        body: [
          'Google bir siteyi sıralamadan önce onu tarar ve anlamaya çalışır. Hızlı yüklenme süresi, mobil uyumluluk, doğru başlık (title) ve açıklama (meta description) etiketleri, temiz bir URL yapısı ve HTTPS (SSL) kullanımı — bunların hepsi teknik SEO\'nun temelini oluşturur. Bu alt yapı doğru kurulmadan, ne kadar iyi içerik yazarsanız yazın sıralamada geride kalırsınız.',
        ],
      },
      {
        heading: 'Anahtar kelime stratejisi: müşteriniz ne yazarak arıyor?',
        body: [
          'İyi bir SEO çalışması, önce "hedef kitleniz Google\'a hangi kelimelerle arama yapıyor?" sorusuna cevap arar. "İstanbul kurumsal web tasarım" arayan biriyle sadece "web tasarım" arayan biri farklı niyetlerle arama yapıyordur. Sitenizin başlıklarında, içeriklerinde ve sayfa yapısında bu gerçek arama kalıplarını yansıtmak, doğru ziyaretçiyi çekmenin ilk adımıdır.',
        ],
      },
      {
        heading: 'İçerik ve düzenli blog yayını',
        body: [
          'Google, güncel ve düzenli içerik üreten siteleri "canlı ve güvenilir" olarak değerlendirme eğilimindedir. Sık sorulan sorulara cevap veren, sektörünüzle ilgili gerçek değer sunan blog yazıları hem yeni anahtar kelimelerde görünürlük kazandırır hem de ziyaretçiye "bu işi bilen bir ekiple çalışıyorum" güvenini verir — tam da bu yazıyı okuduğun blog gibi.',
        ],
      },
      {
        heading: 'Backlink ve dış sinyaller',
        body: [
          'Diğer güvenilir sitelerin sizin sitenize link vermesi (backlink), Google için bir tür referans mektubu işlevi görür. Yerel işletme dizinleri, sektör platformları ya da iş ortaklarınızın siteleri üzerinden gelen kaliteli bağlantılar, zamanla sıralamanızı olumlu etkiler. Burada miktardan çok kalite önemlidir — tek bir güvenilir kaynak, onlarca düşük kaliteli linkten daha değerlidir.',
        ],
      },
      {
        heading: 'SEO bir kerelik iş değil, süreçtir',
        body: [
          'Sık yapılan bir yanılgı, SEO\'yu "bir kere yapılıp bitirilen" bir iş olarak görmek. Oysa Google\'ın algoritmaları sürekli güncelleniyor, rakipleriniz de kendi sitelerini geliştiriyor. Bu yüzden teknik SEO altyapısını sağlam kurmak (ki bunu her projemize dahil ediyoruz) bir başlangıç noktasıdır; sürdürülebilir sonuçlar için düzenli içerik ve takip gerekir.',
        ],
      },
    ],
  },
  {
    slug: 'iyi-web-sitesi-tasarim-7-ozellik',
    icon: 'checklist',
    category: 'MAKALE',
    date: '19 Eylül 2026',
    readTime: '5 dk okuma',
    image: '/blog-7-ozellik.jpg',
    title: 'İyi Bir Web Sitesinin Tasarımında Olması Gereken 7 Özellik',
    excerpt:
      'Kullanıcı deneyimi, okunabilirlik, renk seçimi ve dönüşüm odaklı tasarım prensipleriyle başarılı bir web sitesi nasıl olmalı?',
    sections: [
      {
        heading: '1. Net bir görsel hiyerarşi',
        body: [
          'Ziyaretçi sayfaya girdiğinde gözü nereye gitmeli? İyi bir tasarım, en önemli mesajı (başlık, ana teklif, aksiyon butonu) diğer her şeyden daha belirgin gösterir. Boyut, renk kontrastı ve boşluk kullanımıyla kurulan bu hiyerarşi, kullanıcının kafasının karışmasını engeller.',
        ],
      },
      {
        heading: '2. Sınırlı ve amaçlı renk paleti',
        body: [
          'Çok fazla renk kullanmak, markayı güçlendirmek yerine göz yorar ve amatör bir görünüm verir. Profesyonel siteler genelde 2-3 ana renk etrafında kurulur: bir marka rengi, bir nötr zemin rengi ve dikkat çekmesi gereken (buton gibi) tek bir vurgu rengi. Bu sınırlama, tasarımı hem daha şık hem de daha kullanılabilir kılar.',
        ],
      },
      {
        heading: '3. Okunabilir tipografi',
        body: [
          'Yazı tipi seçimi, boyutu ve satır aralığı, ziyaretçinin içeriği rahatça okuyup okuyamayacağını belirler. Çok küçük yazılar, düşük kontrastlı renkler (örneğin açık gri üzerine beyaz) ya da fazla süslü fontlar okunabilirliği düşürür. Kural basit: metin, en yorgun gözde bile zahmetsizce okunabilmeli.',
        ],
      },
      {
        heading: '4. Sezgisel navigasyon',
        body: [
          'Ziyaretçi aradığı bilgiye üç tıklamadan fazla sürede ulaşamıyorsa, büyük ihtimalle vazgeçip ayrılır. Menü öğeleri az, anlaşılır ve beklenen yerlerde (üstte, mobilde hamburger ikonunda) olmalı. "Nereden geldim, şu an neredeyim, nereye gidebilirim" sorularının cevabı her zaman net olmalı.',
        ],
      },
      {
        heading: '5. Hız ve performans',
        body: [
          'Ne kadar güzel görünürse görünsün, geç açılan bir site ziyaretçiyi kaybettirir. Optimize edilmiş görseller, temiz kod ve gereksiz eklentilerden kaçınmak, tasarımın estetik kadar önemli bir parçasıdır (bu konuyu ayrı bir yazımızda daha ayrıntılı ele aldık).',
        ],
      },
      {
        heading: '6. Mobil uyumluluk',
        body: [
          'Bugün tasarım sürecinin "sonradan eklenen" bir aşaması değil, en baştan planlanması gereken bir gerekliliği bu: site her cihazda -telefon, tablet, masaüstü- aynı kalitede kullanılabilir olmalı. Sadece sığdırmak yetmez, her ekranda gerçekten rahat kullanılabilmesi gerekir.',
        ],
      },
      {
        heading: '7. Net ve dönüşüm odaklı çağrılar (CTA)',
        body: [
          'Güzel bir tasarımın nihai amacı, ziyaretçiyi bir aksiyona yönlendirmektir: teklif almak, arama yapmak, form doldurmak. "Teklif Al", "Hemen Ara" gibi butonlar sayfada net, tutarlı ve kolayca fark edilir konumlarda olmalı. Tasarım ne kadar iyi olursa olsun, ziyaretçi ne yapması gerektiğini bilmiyorsa dönüşüm gerçekleşmez.',
        ],
      },
    ],
  },
  {
    slug: 'web-sitesi-hangi-teknolojiler-kullanilmali',
    icon: 'code',
    category: 'MAKALE',
    date: '19 Eylül 2026',
    readTime: '5 dk okuma',
    image: '/blog-teknolojiler.jpg',
    title: 'Web Sitesi Yaptırırken Hangi Teknolojiler Kullanılmalı?',
    excerpt:
      'Hızlı, güvenli ve uzun vadede sorunsuz çalışan bir web sitesi için doğru teknoloji seçimi neden önemli, hangi seçenekler öne çıkıyor?',
    sections: [
      {
        heading: 'Teknoloji seçimi neden önemli?',
        body: [
          'Bir web sitesinin arkasındaki teknoloji, ziyaretçinin göremediği ama doğrudan hissettiği bir katmandır: sayfa açılma hızı, güvenlik, ileride yeni özellik eklemenin ne kadar kolay olacağı — hepsi bu seçime bağlıdır. Yanlış ya da eskimiş bir teknolojiyle kurulan bir site, kısa vadede fark etmese de, işletme büyüdükçe pahalı bir yeniden yapım ihtiyacı doğurur.',
        ],
      },
      {
        heading: 'Temel yapı taşları: HTML, CSS, JavaScript',
        body: [
          'Hangi teknoloji tercih edilirse edilsin, her modern web sitesinin temelinde bu üçü yatar: HTML içeriğin iskeletini, CSS görsel tasarımını, JavaScript ise etkileşimli (tıklanabilir, hareketli) kısımlarını oluşturur. Bunlar üzerine kurulan modern framework\'ler, geliştirme sürecini hızlandırır ve daha sürdürülebilir kod üretilmesini sağlar.',
        ],
      },
      {
        heading: 'React ve modern framework\'ler',
        body: [
          'React gibi modern JavaScript kütüphaneleri, bir sitenin arayüzünü küçük, yeniden kullanılabilir parçalara (bileşenlere) bölerek geliştirmeyi hem hızlandırır hem de kod kalitesini artırır. Biz de Veyro DTA olarak sitelerimizi bu yaklaşımla kuruyoruz — bu sayede yeni bir sayfa ya da özellik eklemek, sıfırdan başlamaktan çok daha hızlı ve güvenli oluyor.',
        ],
      },
      {
        heading: 'Next.js gibi çözümler ne zaman gerekir?',
        body: [
          'İçerik ağırlıklı, SEO\'nun kritik olduğu veya çok sayfalı büyük projelerde Next.js gibi çözümler, sayfaların arama motorları tarafından daha kolay okunmasını sağlayabilir. Her proje için gerekli değildir — sitenizin kapsamına ve hedeflerine göre doğru aracı seçmek, gereksiz karmaşıklıktan kaçınmak kadar önemlidir.',
        ],
      },
      {
        heading: 'Backend ihtiyacı: ne zaman Node.js, veritabanı gerekir?',
        body: [
          'Basit bir tanıtım sitesi için genelde bir sunucu tarafı (backend) uygulamasına gerek yoktur. Ama kullanıcı girişi, randevu sistemi, ürün yönetimi gibi dinamik özellikler gerektiğinde Node.js gibi bir backend ve MySQL gibi bir veritabanı devreye girer. Bu ihtiyacı en baştan doğru tespit etmek, projenin bütçesini ve süresini gerçekçi şekilde planlamanın anahtarıdır.',
        ],
      },
      {
        heading: 'Sonuç: "en iyi" teknoloji değil, "doğru" teknoloji',
        body: [
          'Piyasada sürekli yeni bir araç, yeni bir framework öne çıkar; ama en yeni teknoloji her zaman en doğru seçim değildir. Önemli olan, projenizin ölçeğine, bütçesine ve büyüme hedeflerine uygun, kanıtlanmış ve sürdürülebilir bir teknoloji yığını seçmektir. Biz her projede bu dengeyi gözeterek ilerliyoruz.',
        ],
      },
    ],
  },
  {
    slug: 'kurumsal-web-sitesi-mi-eticaret-mi',
    icon: 'compare',
    category: 'MAKALE',
    date: '19 Eylül 2026',
    readTime: '4 dk okuma',
    image: '/blog-kurumsal-vs-eticaret.jpg',
    title: 'İşletmeniz İçin Kurumsal Web Sitesi mi, E-Ticaret Sitesi mi?',
    excerpt:
      'İşletmenizin ihtiyaçlarına ve hedeflerine en uygun web sitesi türünü seçmek, dijital başarınız için büyük önem taşır.',
    sections: [
      {
        heading: 'İkisi farklı amaçlara hizmet eder',
        body: [
          'Kurumsal web sitesi ve e-ticaret sitesi, aynı "web sitesi" şemsiyesi altında olsa da tamamen farklı işler görür. Kurumsal site markanızı, hizmetlerinizi ve güvenilirliğinizi anlatıp ziyaretçiyi sizinle iletişime geçirmeyi hedeflerken; e-ticaret sitesi doğrudan ürün satışını, sepet ve ödeme süreçlerini yönetir. Doğru seçim, işinizin nasıl para kazandığına bağlı.',
        ],
      },
      {
        heading: 'Kurumsal web sitesi ne zaman doğru seçim?',
        body: [
          'Bir hizmet sunuyorsanız (danışmanlık, mimarlık, oto servis, güzellik salonu gibi) ve satış süreciniz bir görüşme, teklif veya randevu ile ilerliyorsa, kurumsal bir site size en uygun olanıdır. Amaç, ziyaretçiye güven vermek, hizmetlerinizi net anlatmak ve onu bir forma, telefona ya da WhatsApp\'a yönlendirmektir — ürün sepete eklenmez, iletişime geçilir.',
        ],
      },
      {
        heading: 'E-ticaret sitesi ne zaman gerekir?',
        body: [
          'Fiziksel ya da dijital ürünleri doğrudan online sattığınızda e-ticaret altyapısı gerekir: ürün ve kategori yönetimi, sepet, güvenli ödeme (sanal pos) ve kargo entegrasyonu gibi ek katmanlar devreye girer. Bu, kurumsal bir siteye göre daha kapsamlı bir kurulum ve devam eden bir yönetim (stok, sipariş takibi) gerektirir.',
        ],
      },
      {
        heading: 'Emin değil misiniz? İkisini birleştirmek de mümkün',
        body: [
          'Bazı işletmeler için doğru cevap "ikisi de" olabilir — örneğin hem kurumsal kimliğinizi anlatan hem de sınırlı sayıda ürününüzü satabileceğiniz hibrit bir yapı. Bizimle görüştüğünüzde ilk yaptığımız şey tam olarak bunu netleştirmek: işinizin nasıl işlediğini dinleyip, gereksiz karmaşıklık ya da eksik özellik olmadan size en uygun paketi önermek.',
        ],
      },
    ],
  },
  {
    slug: 'ziyaretci-neden-musteriye-donusmuyor',
    icon: 'funnel',
    category: 'MAKALE',
    date: '19 Eylül 2026',
    readTime: '5 dk okuma',
    image: '/blog-ziyaretci-donusum.jpg',
    title: 'Web Sitenize Gelen Ziyaretçi Neden Müşteriye Dönüşmüyor?',
    excerpt:
      'Ziyaretçi sayınız yüksek ama iletişim formu, telefon ya da teklif talepleri düşükse, sorun nerede olabilir?',
    sections: [
      {
        heading: 'Trafik var, dönüşüm yok — bu çok yaygın bir sorun',
        body: [
          'Birçok işletme sahibi, Analytics\'te ziyaretçi sayısının yüksek olduğunu görüp rahatlıyor, ama telefon çalmıyor, form dolmuyor. Bu genelde reklam ya da SEO\'nun başarısız olduğu anlamına gelmez — sorun çoğu zaman sitenin kendisinde, ziyaretçiyi aksiyona götüren yolda bir yerde tıkanıklık olduğu anlamına gelir.',
        ],
      },
      {
        heading: 'Karışık bir ana sayfa, zayıf ilk izlenim',
        body: [
          'Ziyaretçi sitenize girdiğinde 3-5 saniye içinde "burası bana ne sunuyor, doğru yerde miyim" sorusuna cevap bulmalı. Çok fazla mesaj, dağınık düzen ya da net olmayan bir başlık, bu kararı zorlaştırır ve ziyaretçi kafası karışmış şekilde siteyi terk eder.',
        ],
      },
      {
        heading: 'Yetersiz ya da görünmeyen aksiyon çağrıları (CTA)',
        body: [
          'Ziyaretçi ilgilenmiş olsa bile, "şimdi ne yapmalıyım?" sorusuna net bir cevap bulamıyorsa harekete geçmez. "Teklif Al", "Hemen Ara" gibi butonların sayfa boyunca göze çarpan, tutarlı yerlerde olması gerekir — sadece sayfanın en altında, kimsenin ulaşamayacağı bir noktada değil.',
        ],
      },
      {
        heading: 'Güven unsurlarının eksikliği',
        body: [
          'Bir ziyaretçi, tanımadığı bir işletmeye iletişim bilgisini vermeden önce güven duymak ister. Referans projeler, açık fiyatlandırma, net iletişim bilgileri ve profesyonel bir tasarım bu güveni inşa eder. Bunlardan biri eksikse, ziyaretçi "biraz daha araştırayım" deyip başka bir sekmeye geçer ve genelde geri dönmez.',
        ],
      },
      {
        heading: 'Belirsiz fiyatlandırma ve karmaşık içerik',
        body: [
          'Fiyat bilgisi hiç yoksa ya da ulaşmak için birden fazla sayfa gezmek gerekiyorsa, birçok ziyaretçi teklif istemek yerine sessizce ayrılmayı tercih eder. Aynı şekilde uzun, dağınık paragraflar yerine kısa, tarayarak okunabilir içerik, ziyaretçinin aradığı bilgiyi hızlıca bulmasını sağlar.',
        ],
      },
      {
        heading: 'Mobil uyum ve zor iletişim süreci',
        body: [
          'Ziyaretçilerin büyük kısmı mobilden geliyor (bu konuyu ayrı bir yazımızda ele aldık); form doldurmak zorsa, telefon numarasına tıklayınca arama başlamıyorsa, ya da WhatsApp butonu yoksa, en ilgili ziyaretçi bile son adımda vazgeçebilir. Dönüşümü artırmanın en hızlı yollarından biri, iletişime geçmeyi mümkün olduğunca kolaylaştırmaktır.',
        ],
      },
    ],
  },
];
