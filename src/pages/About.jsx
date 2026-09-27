import { useRef, useState } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import AboutBlock from "../components/AboutBlock";
import WhyUs from "../components/WhyUs";
import ContactBlock from "../components/ContactBlock";
import { Section } from "../components/Section";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";

// ─────────────────────────────────────────────
// HAKKIMIZDA
// Tanıtım videosu burada, "tıklayınca oynat" düzeniyle sunulur.
// 6.5 MB'lık dosya sayfayı yavaşlatmasın diye preload="none" kullanıldı ve
// yalnızca tıklandıktan sonra yüklenir (poster yerine ilk kare CSS ile temsil edilir).
// ─────────────────────────────────────────────

function PromoVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
    // src yalnızca tıklamada atanır → sayfa yüklenirken indirilmez
    videoRef.current.src = "/Tanitim.mp4";
    videoRef.current.play().catch(() => setPlaying(false));
  };

  return (
    <Reveal className="mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-navy-800 shadow-[0_28px_60px_-36px_rgba(15,23,42,0.6)]">
        {playing ? (
          <video
            ref={videoRef}
            controls
            playsInline
            preload="none"
            poster="/og-image.jpg"
            aria-label="UGR Studio tanıtım videosu"
            className="aspect-video w-full"
          >
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        ) : (
          <button
            onClick={play}
            className="group relative block aspect-video w-full cursor-pointer"
            aria-label="UGR Studio tanıtım videosunu oynat"
          >
            {/* Görsel yerine CSS ile kurulmuş kapak */}
            <span className="absolute inset-0 bg-gradient-to-br from-ugr-600 via-navy-800 to-navy-900" />
            <span
              aria-hidden="true"
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 55%)",
              }}
            />

            <span className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-flame-500 text-white shadow-[0_14px_32px_-12px_rgba(255,138,0,0.8)] transition-transform duration-200 group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5-11-6.5z" />
                </svg>
              </span>
              <span className="text-[17px] font-extrabold text-white sm:text-xl">
                UGR Studio Tanıtım Videosu
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3.5 py-1.5 text-[11px] font-bold text-white/80">
                <Icon name="bolt" className="h-3.5 w-3.5" />
                Videoyu oynatmak için tıklayın
              </span>
            </span>
          </button>
        )}
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <>
      <Seo
        title="Hakkımızda | Bağımsız Web Tasarım Stüdyosu — UGR Studio"
        description="UGR Studio; modern web tasarımı, geliştirme ve dijital çözümler üzerine çalışan bağımsız bir stüdyodur. Özgün tasarım, şeffaf süreç."
        path="/hakkimizda"
      />

      <main id="main">
        <PageHero
          eyebrow="HAKKIMIZDA"
          title="Fikirleri Dijital Deneyimlere"
          highlight="Dönüştürüyoruz."
          description="Web sitenizi değil, işinizi tasarlıyoruz. Markanızın dijital dünyadaki deneyimini tasarım, teknoloji ve içerik birlikte belirliyor."
        />

        <AboutBlock withSection={false} withCta={false} />

        <Section>
          <PromoVideo />
        </Section>

        <WhyUs />

        <ContactBlock />
      </main>
    </>
  );
}
