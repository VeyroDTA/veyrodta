# Veyro DTA

Veyro DTA'nın kurumsal web sitesi. React + Vite + Tailwind CSS ile geliştirildi.

## Geliştirme

```bash
npm install
npm run dev
```

## Yapı

- `src/pages/` — her sayfa (Anasayfa, Fiyatlar, Projelerimiz, Blog, SSS, İletişim, KVKK)
- `src/components/` — paylaşılan bileşenler (Navbar, Footer, WhatsApp/Ara butonları vb.)
- `src/data/` — proje, blog yazısı, SSS ve fiyat verileri
- `src/config.js` — **tek yerden değiştirilen ayarlar**: WhatsApp numarası, telefon,
  e-posta, adres, Formspree form adresi, GA4 Ölçüm Kimliği, site URL'si

## Barındırma (Hosting)

Bu proje **Cloudflare Workers (static assets)** üzerinde barınıyor (Vercel'in ücretsiz
planı ticari kullanıma kapalı olduğu için Cloudflare'e geçildi — onun ücretsiz planı
statik siteler için ticari kullanıma açık).

- Build komutu: `npm run build`
- Çıktı klasörü: `dist`
- `wrangler.jsonc` dosyası, React Router'ın client-side sayfalarının (`/fiyatlar`,
  `/blog/:slug` gibi) doğrudan URL ile açılınca ya da sayfa yenilenince 404 vermemesi
  için gerekli (`not_found_handling: single-page-application`) — silme.
- `main` branch'ine her `git push` otomatik olarak yeni bir deploy tetikler.

## Yayına almadan / domain bağlarken kontrol listesi

- [ ] `src/config.js` içindeki `SITE_URL`'i gerçek domain ile güncelle
- [ ] `public/robots.txt` ve `public/sitemap.xml` içindeki URL'leri güncelle
- [ ] `index.html` içindeki `og:url`, `og:image`, `canonical` linklerini güncelle
- [ ] GA4'te (analytics.google.com) veri akışının URL'sini güncelle (zorunlu değil ama önerilir)
- [ ] `src/pages/Kvkk.jsx` içindeki `[Adın Soyadın]` ve `[vergi/TC no]` alanlarını doldur
