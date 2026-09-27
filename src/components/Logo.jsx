// ─────────────────────────────────────────────
// LOGO — UGR STUDIO
// Tamamen vektörel, harici görsel dosyası yok. "UGR" kelime markası elle
// çizilmiş geometrik SVG yollarından oluşur (fonta bağlı değildir, her
// ölçekte ve her tarayıcıda birebir aynı görünür).
//
// Geometri tek bir ızgara üzerinde kurulmuştur (viewBox 148 × 58):
//   rozet        x   0..48   y  4..52   (yuvarlatılmış kare, r=14)
//   rozet "U"    x  16..32   y 17..39   (genişlik 16, cap 22, kalınlık 5.5)
//   turuncu vurgu x 22.9..25.1, y 21..29 (U'nun içinde ince dikey işaret)
//   UGR          x  62..144  y 13..43   (cap yüksekliği 30, kalınlık 6)
//   turuncu çizgi x 62..77   y 50.5..53
//   STUDIO       x  85..144  cap ~8
//
// Erişilebilirlik: görselin tamamı aria-hidden'dır; stüdyo adı sr-only metin
// olarak verilir. Böylece linkin erişilebilir adı görünür yazıyla çelişmez.
// ─────────────────────────────────────────────

// Marka renkleri logonun içine gömülür; böylece SVG dışa aktarılıp
// kullanıldığında da CSS bağımlılığı olmaz.
const NAVY = "#04152d"; // derin lacivert — rozet ve kelime markası
const FLAME = "#ff8a00"; // turuncu — tek vurgu rengi
const BLUE_LIGHT = "#155eef"; // UGR mavisi — açık zeminde STUDIO
const BLUE_DARK = "#92b5ff"; // UGR mavisi — koyu zeminde STUDIO

/* ── Rozet: yuvarlatılmış kare + içine kesilmiş beyaz U ───────────────
   Dışarı taşan hiçbir şekil yok: her yol rozet dikdörtgeninin içinde. */
function Badge({ onDark }) {
  return (
    <g>
      <rect x="0" y="4" width="48" height="48" rx="14" fill={NAVY} />
      {/* Koyu zeminde rozetin kenarı kaybolmasın diye çok ince bir halka */}
      {onDark && (
        <rect
          x="0.75"
          y="4.75"
          width="46.5"
          height="46.5"
          rx="13.25"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.18"
          strokeWidth="1.5"
        />
      )}

      {/* U — iki dik kol + yarım daire taban. İç yarıçap 2.5, dış 8,
          ikisi de (24, 31) merkezli; böylece kütle boyunca sabit kalınlık. */}
      <path
        d="M16 17h5.5v14a2.5 2.5 0 0 0 5 0V17h5.5v14a8 8 0 0 1-16 0z"
        fill="#ffffff"
      />

      {/* U'nun içindeki turuncu dijital vurgu — ince dikey işaret.
          U'nun açık alanından genişliği 4.6 birim payıyla ayrılır. */}
      <rect x="22.9" y="21" width="2.2" height="8" rx="1.1" fill={FLAME} />
    </g>
  );
}

/* ── Kelime markası: U G R ────────────────────────────────────────────
   cap yüksekliği 30, gövde kalınlığı 6 (cap oranı 0.20). */
function Wordmark({ onDark }) {
  const ink = onDark ? "#ffffff" : NAVY;

  return (
    <g fill={ink}>
      {/* U — x 62..82 */}
      <path d="M62 13h6v20a4 4 0 0 0 8 0V13h6v20a10 10 0 0 1-20 0z" />

      {/* G — x 88..118, daire (merkez 103,28; dış r 15, iç r 9).
          Halka saat yönünün tersine −50°'den 0°'a döner, yani üstten sola
          ve alttan geçerek sağ orta noktaya gelir; 50°'lik açık kalan
          bölüm çapraz çubuğun girdiği yer. */}
      <path d="M112.64 16.51A15 15 0 1 0 118 28L112 28A9 9 0 1 1 108.79 21.11Z" />
      <path d="M103 28h14.6v5.5H103z" />

      {/* R — x 124..144 */}
      <path d="M124 13h6v30h-6z" />
      <path
        fillRule="evenodd"
        d="M130 13h1a9 9 0 0 1 0 18h-1zM130 19a4 3 0 0 1 0 6z"
      />
      <path d="M127.5 29h6.5l6 14h-6.5z" />
    </g>
  );
}

export default function Logo({ compact = false, onDark = false, className = "" }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox={compact ? "0 4 48 48" : "0 0 148 58"}
        className={compact ? "h-10 w-10" : "h-9 w-auto"}
      >
        <Badge onDark={onDark} />
        {!compact && <Wordmark onDark={onDark} />}
        {!compact && (
          <>
            {/* turuncu ayraç çizgisi */}
            <rect x="62" y="50.5" width="15" height="2.5" rx="1.25" fill={FLAME} />
            {/* STUDIO — harf aralığı textLength ile sabitlenir; böylece
                Manrope yüklenmese bile genişlik ve hizalama değişmez. */}
            <text
              x="85"
              y="55"
              fontFamily='"Manrope", "Segoe UI", system-ui, sans-serif'
              fontSize="11"
              fontWeight="800"
              textLength="59"
              lengthAdjust="spacing"
              fill={onDark ? BLUE_DARK : BLUE_LIGHT}
            >
              STUDIO
            </text>
          </>
        )}
      </svg>

      <span className="sr-only">UGR Studio</span>
    </span>
  );
}
