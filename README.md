# UGR Studio

UGR Studio'nın kurumsal web sitesi. React + Vite + Tailwind CSS v4 ile geliştirildi.

## Geliştirme

```bash
npm install
npm run dev        # geliştirme sunucusu
npm run lint       # ESLint
npm run build      # otomatik sitemap üretir + üretim derlemesi
npm run preview    # dist klasörünü yerelde dener
npm run sitemap    # sitemap.xml'i tek başına yeniler
```

## Sayfalar

| Rota | İçerik | Menüde |
| --- | --- | --- |
| `/` | Ana sayfa — 13 bölümlük satış akışı | Ana Sayfa |
| `/hizmetler` | Çözüm seçici, 6 hizmet, SSS | Hizmetler |
| `/projeler` | Konsept çalışmalar (KONSEPT ÇALIŞMA etiketli) | Projeler |
| `/fiyatlar` | 3 paket + fiyat SSS'leri | Fiyatlar |
| `/surec` | 4 aşama + çalışma şekli | Süreç |
| `/hakkimizda` | Stüdyo, istatistikler, tanıtım videosu | Hakkımızda |
| `/sss` | 12 soruluk SSS | SSS |
| `/iletisim` | E-posta, WhatsApp ve telefon ile iletişim | İletişim |
| `/blog`, `/blog/:slug` | Blog | yalnızca footer |
| `/kvkk`, `/gizlilik-politikasi`, `/cerez-politikasi`, `/kullanim-kosullari` | Yasal metinler | yalnızca footer |

Eski adresler (`/projelerimiz`, `/hizmetlerimiz`, `/fiyatlandirma`, `/surecimiz`,
`/iletisim-bize`) `App.jsx` içinde kalıcı olarak yeni rotalara yönlendirilir.

## Yapı

- `src/pages/` — her rota için bir sayfa bileşeni. Sayfalar `<main id="main">` ile
  sarar, `Navbar`/`Footer` yalnızca `App.jsx` içinde render edilir.
- `src/components/` — paylaşılan bileşenler. Bölümler (`Section`, `SectionHeading`),
  buton (`Button`), ikon seti (`Icon`), SEO (`Seo`) ve teklif e-postası kartı
  (`MailCta`) tek yerden yönetilir.
- `src/data/` — **içerik verisi**: `pricing.js` (paketler), `services.js` (hizmetler),
  `solutions.js` (çözüm kategorileri), `projects.js` (çalışmalar),
  `faqs.js` (SSS), `blog.js` (yazılar).
- `src/config.js` — **tek yerden değiştirilen ayarlar**: WhatsApp numarası, telefon,
  e-posta, adres, teklif e-postası şablonu (`MAIL_BODY_TEMPLATE`), GA4 Ölçüm
  Kimliği, site URL'si, üst menü (`NAV_ITEMS`).
- `src/index.css` — Tailwind v4 `@theme` bloğunda renk paleti (`navy-*`, `ugr-*`,
  `flame-*`), yüzeyler ve animasyonlar.

### Nereden değiştirilir?

| Ne | Nerede |
| --- | --- |
| Telefon / e-posta / adres | `src/config.js` |
| Fiyatlar ve paket içerikleri | `src/data/pricing.js` |
| Hizmetler | `src/data/services.js` |
| Projeler / konsept çalışmalar | `src/data/projects.js` |
| SSS metinleri | `src/data/faqs.js` |
| Üst menü bağlantıları | `src/config.js` → `NAV_ITEMS` |
| Footer bağlantıları | `src/components/Footer.jsx` |
| Sitemap'e yeni sayfa eklerken | `scripts/generate-sitemap.mjs` → `STATIC_ROUTES` |
| Teklif e-postasının konusu ve hazır gövdesi | `src/config.js` → `MAIL_SUBJECT_DEFAULT`, `MAIL_BODY_TEMPLATE` |

## Teklif akışı — form yok, e-posta var

Sitede teklif formu **bulunmuyor**. Teklif talepleri kullanıcının kendi e-posta
istemcisi üzerinden `mailto:` ile iletilir:

- `mailtoHref({ subject, body })` — ham `mailto:` bağlantısı üretir.
- `quoteMailtoHref(context)` — paket/çözüm adını konu satırına ekleyen kısayol.
  `MailCta`, `PricingSection`, `SolutionPicker` ve `FloatingActions` bunu kullanır.
- Hazır gövde (`MAIL_BODY_TEMPLATE`) boş gelmez; kullanıcının doldurması gereken
  alanlar boş başlıklar olarak yazılıdır.

Bunun iki sonucu var: üçüncü taraf bir form hizmetine (Formspree vb.) veri
gönderilmez, dolayısıyla KVKK metinlerinde form altyapısı sağlayıcısı ifadesi
yer almaz. Fiyat ve çözüm kartlarındaki "Teklif Al" butonları da rota yerine
doğrudan e-posta açar; üst menüdeki "Ücretsiz Teklif Al" ise `/iletisim`
sayfasına gider ve üç kanalı birlikte gösterir.

`tailwind.config.js` Tailwind v4 tarafından **okunmaz**; tema tanımları
`src/index.css` içindeki `@theme` bloğundadır.

## Renk ve erişilebilirlik notları

- Turuncu CTA yüzeyi `flame-700` (`#bb5500`) — beyaz yazıyla 4.76:1 kontrast (WCAG AA).
  `flame-500` canlı marka turuncusudur ve yalnızca dekoratif öğelerde ve koyu
  zeminde metin olarak kullanılır.
- Footer'da koyu zeminde `navy-300` / `navy-200` kullanılır.
- Logo görseli `aria-hidden`, adı `sr-only` metin olarak verilir; böylece linkin
  erişilebilir adı görünür yazıyla çelişmez.
- **Ana zemin saf beyaz kalır** (`#fff`); derinlik, ara bölümlerin `surface`
  (`#f4f7fb`) zeminiyle sağlanır. Kartlar `bg-white` olduğu için bölüm
  zeminden ayrılır. Ana zemin griye çekilirse turuncu CTA'nın kontrastı ve
  marka kimliği zayıflar — bu yüzden değiştirilmedi.
- **Logo tamamen vektörel ve fonta bağlı değil.** `src/components/Logo.jsx`
  içindeki "UGR" harfleri elle hesaplanmış SVG yollarıdır; tek bir ızgara
  üzerinde kurulmuştur (viewBox 148 × 58, rozet 48×48, cap yüksekliği 30,
  gövde kalınlığı 6). Harfleri değiştirmek istersen önce bu ölçüleri koru.
  "STUDIO" satırı `<text>` olarak yazıldı; genişliği `textLength` +
  `lengthAdjust="spacing"` ile sabitlendiği için Manrope yüklenmese bile
  hizalama bozulmaz. Marka renkleri SVG'nin içine gömülüdür (CSS bağımlılığı
  yok), bu yüzden dosya doğrudan `.svg` olarak da dışa aktarılabilir.
- Her sayfa ve blog yazısı için ayrı `<title>`, meta description, canonical, OG ve
  Twitter etiketi `Seo` bileşeni tarafından üretilir.
- **Tipografi ölçeği kasıtlı olarak dar tutuldu.** En büyük metin hero başlığıdır
  (27 → 33 → 40 px); bölüm başlıkları 23 → 27 → 30 px, etiketler 11 px'te kalır.
  Brief'teki "aşırı büyük yazı kullanma" kuralı bu yüzden bozulmaz — yeni bir
  başlık yazarken bu tavanı aşma.
- Grid/flex taşması: `overflow-x: clip` yatay kaydırmayı gizler ama içeriği
  **kırpar**. Bir grid öğesine uzun, bölünemeyen metin (e-posta adresi gibi)
  koyacaksan öğeye `min-w-0` ekle — `ContactBlock` bu yüzden böyle.
- **Her içerik bloğu bir konteynerin içinde olmalı.** Yatay ritim tek bir yerden
  gelir: `Section.jsx` içindeki `Container` (`mx-auto w-full max-w-6xl px-5
  sm:px-6`). `Section` kendi konteynerini taşır; ancak `withSection={false}`
  kullanan bloklar (`ProjectsGrid`, `PricingSection`, `ProcessSteps`,
  `AboutBlock`, `WhyUs`, `ContactBlock` — yani `/projeler`, `/fiyatlar`,
  `/surec`, `/hakkimizda`, `/iletisim` sayfaları) `Container` ile
  sarmalanmak zorundadır. Konteyner unutulursa grid ekran kenarına dayanır:
  1440 px'de kartlar 0'dan 1425'e kadar yayılır, "ekrandan taşıyor" gibi
  görünür ve sayfada yatay scrollbar oluşur. Klasik tuzak: `overflow-x: hidden`
  eklemek sorunu gizler ama çözmez — önce konteyneri düzelt.

## Barındırma (Hosting)

Bu proje **Cloudflare Workers (static assets)** üzerinde barınıyor (Vercel'in ücretsiz
planı ticari kullanıma kapalı olduğu için Cloudflare'e geçildi — onun ücretsiz planı
statik siteler için ticari kullanıma açık).

- Build komutu: `npm run build`
- Çıktı klasörü: `dist`
- Deploy **Cloudflare dashboard'daki Git bağlantısı** ile olur
  (Workers & Pages → `ugrstudio` → Settings → Builds & deployments →
  Build command `npm run build`, Branch `main`). `main`'e push otomatik
  deploy tetikler. Depoya ait GitHub Actions dosyası yok ve gerekmiyor.
- `wrangler.jsonc` dosyası, React Router'ın client-side sayfalarının (`/fiyatlar`,
  `/blog/:slug` gibi) doğrudan URL ile açılınca ya da sayfa yenilenince 404 vermemesi
  için gerekli (`not_found_handling: single-page-application`) — silme.
- `wrangler.jsonc` içindeki `name` alanı Worker'ın **kendisinin** adıdır;
  ziyaretçinin gördüğü adres değildir. Değeri `ugrstudio` olmalı, çünkü bu
  hesapta gerçekten bulunan Worker budur. Bu dosyayı dashboard'daki Git
  bağlantısı okumaz (oradaki proje adı belirleyicidir); `name` alanı yalnızca
  bu makineden `wrangler deploy` çalıştırıldığında işe yarar ve yanlışsa
  içeriği yanlış yere yükler. Bu yüzden `veyrodta` → `ugrstudio` düzeltildi.

## Şu anki durum (2026-09-27)

- Site **yayında**: `https://ugrstudio.yapayzekagmail.workers.dev`
- **Kendi domaini bağlı değil.** `ugrstudio.com.tr` DNS'te kayıtsız
  (NXDOMAIN — NS kaydı bile yok). Bu yüzden `src/config.js` içindeki
  `SITE_URL = "https://www.ugrstudio.com.tr"` henüz çalışan bir adres değil.
- Canlıdaki etkisi: sayfa düzgün açılır ve render olur, ama `canonical`,
  `og:url`, `og:image`, JSON-LD `url`, `sitemap.xml` ve `robots.txt` ölü bir
  adrese işaret eder. **Sonuç:** WhatsApp/LinkedIn/X link paylaşımlarında
  kapak görseli çıkmaz ve arama motorları `ugrstudio.com.tr`'yi canonical
  sayar.
- İsteğe bağlı acil çözüm: `SITE_URL`'ı workers.dev adresine çevirip
  `npm run sitemap` çalıştırmak. Ama kalıcı çözüm domaini bağlamaktır;
  o zaman aşağıdaki kontrol listesi tek push'ta devreye girer.

## Domain bağlama kontrol listesi

`ugrstudio.com.tr` şu an kayıtsız. Bağlamak için iki ayrı iş var ve **sırası
önemli** — Worker'a route atamak için domainin önce Cloudflare'a gelmesi gerekir.

**1) Domaini Cloudflare'a ekle**

- [ ] `ugrstudio.com.tr`i Cloudflare'da bir zone olarak ekle
      (Nameserver'lar registrar'da değiştirilir; değişiklik 1–24 saat sürebilir)
- [ ] Nameserver değişikliği yayılana kadar bekle, sonra
      `Resolve-DnsName ugrstudio.com.tr` ile A/NS kaydının geldiğini doğrula

**2) Worker'a bağla**

- [ ] Workers & Pages → `ugrstudio` → Settings → Domains & Routes →
      `ugrstudio.com.tr` ve `www.ugrstudio.com.tr` ekle
- [ ] Tercih edilen adresi seç (örn. `www`), diğerini kalıcı yönlendirmeye çevir
- [ ] `https://ugrstudio.com.tr/` ve `https://www.ugrstudio.com.tr/` adreslerinin
      ikisinin de 200 döndürdüğünü ve yalnızca birinin 301 ile yönlendiğini doğrula

**3) Kodu yeni adrese göre güncelle** (SITE_URL okuma noktasıdır)

- [ ] `src/config.js` → `SITE_URL` değerini gerçek domain ile güncelle
- [ ] `index.html` içindeki alan adı geçen etiketleri elle eşle:
      `canonical` (satır ~18), `og:url`, `og:image`, `twitter:image`,
      JSON-LD `url` (satır ~58)
- [ ] `public/robots.txt` içindeki `Sitemap:` satırını güncelle
- [ ] `npm run sitemap` ile `public/sitemap.xml`'i yeniden üret
- [ ] GA4'te (analytics.google.com) veri akışının URL'sini güncelle
- [ ] Domain bağlandıktan sonra `https://domain/sitemap.xml` adresinin
      gerçekten açıldığını ve içindeki adreslerin yeni alan adını taşıdığını doğrula

**Kontrol (domain'den bağımsız, şimdi yapılabilir)**

- [ ] `index.html` içindeki `priceRange` değerini `src/data/pricing.js` ile eşle
- [ ] `iletisim@ugrstudio.com.tr` adresine bir deneme e-postası gönder (e-posta
      istemcisi bağlantısı her cihazda çalışıyor mu, konu/gövde doğru mu diye bak)

## ⚠ Yasal metinler — yayından önce zorunlu

`src/config.js` içindeki iki alan **henüz doldurulmadı**:

```js
export const LEGAL_CONTROLLER_NAME = "[Ad Soyad]";
export const LEGAL_CONTROLLER_TAX = "[Vergi Dairesi / VKN]";
```

Bu değerler KVKK, Gizlilik, Çerez ve Kullanım Koşulları sayfalarında kullanılır.
KVKK 11. madde (yurt dışına veri aktarımı) ve aydınlatma metninin eksiksizliği
dahil olmak üzere dört yasal metin de **bir hukuk uzmanı tarafından kontrol
edilmelidir** — bu metinler hukuki danışmanlık yerine geçmez. Yasal sayfalarda
bunu gösteren bir uyarı kutusu zaten yer alır.
