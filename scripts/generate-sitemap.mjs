// ─────────────────────────────────────────────
// SITEMAP ÜRETİCİ
//
// Bu bir SPA (tek sayfa uygulaması) olduğu için sunucu tarafında
// otomatik sitemap yok. Bu betik, `src/data/blog.js` içindeki yazı
// slug'larını okuyup `public/sitemap.xml` dosyasını üretir.
//
// Çalıştırma:
//   npm run sitemap        (tek seferlik)
//   npm run build          → prebuild adımı otomatik çalıştırır
//
// NOT: Sayfa adresleri burada elle tutulur. src/App.jsx içine yeni bir
// rota eklediğinde bu listeye de ekle. Blog slug'ları ise otomatik gelir.
// ─────────────────────────────────────────────

import { writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// Alan adını tek yerden almak için config.js'den okuyoruz (dosya statik
// olduğu için index.html'deki değerlerle elle aynı tutulmalıdır).
const configSource = readFileSync(resolve(ROOT, "src/config.js"), "utf8");
const SITE_URL = configSource.match(/SITE_URL\s*=\s*["'`]([^"'`]+)["'`]/)?.[1];
if (!SITE_URL) {
  console.error("sitemap: src/config.js içinde SITE_URL bulunamadı.");
  process.exit(1);
}
const BASE = SITE_URL.replace(/\/+$/, "");

// Öncelik sırası satış akışını izler: ana sayfa > hizmetler/fiyatlar > içerik > yasal
const STATIC_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/hizmetler", changefreq: "monthly", priority: "0.9" },
  { path: "/mobil-uygulama-gelistirme", changefreq: "monthly", priority: "0.9" },
  { path: "/fiyatlar", changefreq: "monthly", priority: "0.9" },
  { path: "/projeler", changefreq: "monthly", priority: "0.8" },
  { path: "/surec", changefreq: "monthly", priority: "0.7" },
  { path: "/hakkimizda", changefreq: "monthly", priority: "0.7" },
  { path: "/sss", changefreq: "monthly", priority: "0.7" },
  { path: "/iletisim", changefreq: "monthly", priority: "0.9" },
  { path: "/blog", changefreq: "weekly", priority: "0.6" },
  { path: "/kvkk", changefreq: "yearly", priority: "0.2" },
  { path: "/gizlilik-politikasi", changefreq: "yearly", priority: "0.2" },
  { path: "/cerez-politikasi", changefreq: "yearly", priority: "0.2" },
  { path: "/kullanim-kosullari", changefreq: "yearly", priority: "0.2" },
];

// Blog yazılarındaki tarihler "18 Eylül 2026" biçiminde Türkçe yazılı.
// Sitemap'in lastmod alanı ISO 8601 istediği için burada çeviriyoruz.
const MONTHS = {
  ocak: "01", şubat: "02", mart: "03", nisan: "04", mayıs: "05", haziran: "06",
  temmuz: "07", ağustos: "08", eylül: "09", ekim: "10", kasım: "11", aralık: "12",
};

function toIsoDate(trDate) {
  if (!trDate) return null;
  const m = trDate.trim().toLowerCase().match(/^(\d{1,2})\s+([a-zçğıöşü]+)\s+(\d{4})$/);
  if (!m) return null;
  const month = MONTHS[m[2]];
  if (!month) return null;
  return `${m[3]}-${month}-${m[1].padStart(2, "0")}`;
}

const { blogPosts } = await import(pathToFileURL(resolve(ROOT, "src/data/blog.js")).href);

const urls = [
  ...STATIC_ROUTES.map(({ path, changefreq, priority }) => ({ loc: `${BASE}${path}`, changefreq, priority })),
  ...blogPosts.map((post) => {
    const lastmod = toIsoDate(post.date);
    return {
      loc: `${BASE}/blog/${post.slug}`,
      changefreq: "monthly",
      priority: post.pillar ? "0.6" : "0.5",
      lastmod,
    };
  }),
];

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((u) =>
    [
      "  <url>",
      `    <loc>${u.loc}</loc>`,
      ...(u.lastmod ? [`    <lastmod>${u.lastmod}</lastmod>`] : []),
      `    <changefreq>${u.changefreq}</changefreq>`,
      `    <priority>${u.priority}</priority>`,
      "  </url>",
    ].join("\n"),
  ),
  "</urlset>",
  "",
].join("\n");

const outPath = resolve(ROOT, "public/sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(`sitemap: ${urls.length} adres yazıldı → public/sitemap.xml`);
