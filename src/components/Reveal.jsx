import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────
// SCROLL İLE BELİREN ANİMASYON
// IntersectionObserver kullanır (harici kütüphane yok, performans dostu).
// Kullanıcının "hareketi azalt" tercihi varsa CSS tarafında devre dışı bırakılır.
// ─────────────────────────────────────────────

export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  // IntersectionObserver desteklenmiyorsa içerik doğrudan görünür olsun.
  // (lazy initializer — ilk render'da belirlenir, effect içinde setState yok)
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
