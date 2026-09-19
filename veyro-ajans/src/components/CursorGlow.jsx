import { useEffect, useRef } from 'react';

// ÖNCEKİ VERSİYONDAKİ SORUN:
// Fare her hareket ettiğinde useState ile tüm App ağacı yeniden render ediliyordu
// (saniyede 60+ kez). Burada konum doğrudan DOM'a yazılıyor, React'e hiç uğramıyor.
// Ayrıca sadece masaüstünde render edilir (mobilde fare/touch ile anlamı yok).
export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    let frame = null;

    const handleMouseMove = (e) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate(${e.clientX - 112}px, ${e.clientY - 112}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="hidden md:block fixed top-0 left-0 pointer-events-none w-56 h-56 rounded-full bg-cyan-500/15 blur-[60px] z-50"
      style={{ transform: 'translate(-9999px, -9999px)', willChange: 'transform' }}
    />
  );
}
