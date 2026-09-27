import { useEffect } from "react";
import { SITE_URL } from "../config";

// ─────────────────────────────────────────────
// SAYFA BAŞLIĞI / META YÖNETİMİ
// Bu site bir SPA (tek sayfa uygulaması) olduğu için tarayıcı her rota
// değişiminde title/description'ı otomatik güncellemez. Bu bileşen her sayfa
// için ayrı title, meta description, canonical ve Open Graph bilgisi üretir.
//
// Kullanım: <Seo title="..." description="..." path="/fiyatlar" />
// ─────────────────────────────────────────────

const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// Paylaşım görseli (siteleme görseli). Bir sayfaya özel görsel varsa `ogImage`
// ile dosya adı verilir, aksi halde site geneli og-image.jpg kullanılır.
// Yeni görsel public/ altına konduğunda buraya da eklenmelidir.
const ogImageUrl = (name) =>
  name ? `${SITE_URL}/${name.replace(/^\/+/, "")}` : OG_IMAGE;

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);

  if (!content) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function Seo({
  title,
  description,
  path = "/",
  type = "website",
  noindex = false,
  ogImage,
}) {
  useEffect(() => {
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    const image = ogImageUrl(ogImage);

    document.title = title;

    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : null);

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:width", ogImage ? "1200" : null);
    setMeta("property", "og:image:height", ogImage ? "630" : null);

    // Twitter / X
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:url", url);
    setMeta("name", "twitter:image", image);
  }, [title, description, path, type, noindex, ogImage]);

  // Canonical — index.html'de ana sayfa için tanımlı, diğer sayfalarda burada
  useEffect(() => {
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    let link = document.head.querySelector('link[rel="canonical"]');

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [path]);

  return null;
}
