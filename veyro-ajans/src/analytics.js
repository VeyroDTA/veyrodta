// GA4 script'i index.html'de yükleniyor (bkz. GA_MEASUREMENT_ID, src/config.js).
// Buradaki fonksiyonlar window.gtag henüz tanımlı değilse (örn. reklam engelleyici
// varsa ya da ID henüz girilmediyse) sessizce hiçbir şey yapmaz — sitenin
// çalışmasını asla engellemez.

export function trackPageView(path) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', { page_path: path });
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}
