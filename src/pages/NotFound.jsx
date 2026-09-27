import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Sayfa Bulunamadı (404) | UGR Studio"
        description="Aradığınız sayfa bulunamadı. UGR Studio ana sayfasına dönerek web tasarım hizmetlerimize göz atabilirsiniz."
        path="/404"
        noindex
      />

      <main id="main" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-ugr-50 blur-3xl" />
        </div>

        <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-5 py-24 text-center sm:px-6 sm:py-32">
          <Reveal>
            <span className="text-[86px] leading-none font-extrabold tracking-tight text-navy-100 sm:text-[120px]">
              404
            </span>
          </Reveal>

          <Reveal delay={80}>
            <span
              aria-hidden="true"
              className="mt-4 block h-1 w-14 rounded-full rule-orange"
            />
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-7 text-[24px] leading-tight font-extrabold tracking-tight text-navy-800 sm:text-[29px]">
              Aradığınız Sayfayı Bulamadık.
            </h1>
            <p className="mt-3 text-[15px] text-muted">
              Sayfa taşınmış veya artık mevcut olmayabilir.
            </p>
          </Reveal>

          <Reveal delay={200} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/" size="lg" withArrow>
              Ana Sayfaya Dön
            </Button>
            <Button to="/iletisim" variant="secondary" size="lg">
              Teklif Al
            </Button>
          </Reveal>

          <Reveal delay={260} className="mt-12 w-full border-t border-line pt-8">
            <p className="mb-4 text-[13px] font-bold tracking-wide text-muted uppercase">
              Bunlar ilginizi çekebilir
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { to: "/hizmetler", label: "Hizmetler" },
                { to: "/projeler", label: "Projeler" },
                { to: "/fiyatlar", label: "Fiyatlar" },
                { to: "/sss", label: "SSS" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-xl border border-line bg-white px-4 py-2.5 text-[13px] font-bold text-navy-700 transition-colors hover:border-ugr-200 hover:text-ugr-600"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}
