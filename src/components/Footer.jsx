import { Link } from "react-router-dom";
import {
  CONTACT_ADDRESS_LINE1,
  CONTACT_ADDRESS_LINE2,
  CONTACT_EMAIL,
  WORKING_HOURS,
  phoneDisplay,
  phoneHref,
  whatsappHref,
} from "../config";
import Icon from "./Icon";
import Logo from "./Logo";
import { Container } from "./Section";

// ─────────────────────────────────────────────
// FOOTER
// Blog bilinçli olarak üst menüde değil, burada "Kaynaklar" başlığı altında.
// Yasal sayfalar alt barda bağlantı olarak toplandı.
// ─────────────────────────────────────────────

// Bu liste src/data/services.js ile aynı sırayı ve aynı 6 hizmeti izler.
// Mobil Uygulama'nın kendi sayfası olduğu için doğrudan oraya gider.
const serviceLinks = [
  { label: "Kurumsal Web Sitesi", to: "/hizmetler" },
  { label: "E-Ticaret", to: "/hizmetler" },
  { label: "Mobil Uygulama Geliştirme", to: "/mobil-uygulama-gelistirme" },
  { label: "Landing Page", to: "/hizmetler" },
  { label: "Özel Web Çözümleri", to: "/hizmetler" },
  { label: "Bakım & Teknik Destek", to: "/hizmetler" },
];

const pageLinks = [
  { label: "Ana Sayfa", to: "/" },
  { label: "Hizmetler", to: "/hizmetler" },
  { label: "Projeler", to: "/projeler" },
  { label: "Fiyatlar", to: "/fiyatlar" },
  { label: "Süreç", to: "/surec" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "SSS", to: "/sss" },
  { label: "İletişim", to: "/iletisim" },
];

const resourceLinks = [
  { label: "Blog Yazıları", to: "/blog" },
  { label: "Teklif Al", to: "/iletisim" },
  { label: "WhatsApp'tan Yaz", to: null, href: whatsappHref() },
];

const legalLinks = [
  { label: "KVKK Aydınlatma Metni", to: "/kvkk" },
  { label: "Gizlilik Politikası", to: "/gizlilik-politikasi" },
  { label: "Çerez Politikası", to: "/cerez-politikasi" },
  { label: "Kullanım Koşulları", to: "/kullanim-kosullari" },
];

function FooterLink({ item, className = "" }) {
  const cls = `transition-colors duration-200 hover:text-ugr-300 ${className}`;
  return item.href ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {item.label}
    </a>
  ) : (
    <Link to={item.to} className={cls}>
      {item.label}
    </Link>
  );
}

function FooterGroup({ title, children }) {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-extrabold tracking-[0.16em] text-white uppercase">
        {title}
      </h3>
      <ul className="space-y-2.5 text-[13px] text-navy-300">{children}</ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-navy-300">
      <Container className="pt-14 pb-10 sm:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {/* Marka */}
          <div>
            <Link to="/" className="inline-block">
              <Logo onDark />
              <span className="sr-only">UGR Studio — ana sayfa</span>
            </Link>
            <p className="mt-4 max-w-[24rem] text-[13px] leading-relaxed text-navy-300">
              Modern, hızlı ve dönüşüm odaklı web çözümleri. Tasarım, geliştirme ve yayın
              sürecini tek elden yürüten bağımsız bir dijital stüdyo.
            </p>
            <p className="mt-4 text-[12px] font-semibold text-navy-300">
              İstanbul ve tüm Türkiye&apos;ye uzaktan hizmet veriyoruz.
            </p>
          </div>

          <FooterGroup title="Hizmetler">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <FooterLink item={l} />
              </li>
            ))}
          </FooterGroup>

          <FooterGroup title="Sayfalar">
            {pageLinks.map((l) => (
              <li key={l.label}>
                <FooterLink item={l} />
              </li>
            ))}
          </FooterGroup>

          <FooterGroup title="Kaynaklar">
            {resourceLinks.map((l) => (
              <li key={l.label}>
                <FooterLink item={l} />
              </li>
            ))}
          </FooterGroup>

          <FooterGroup title="İletişim">
            <li className="font-bold text-white">UGR Studio</li>
            <li className="pt-1 text-navy-200">
              {CONTACT_ADDRESS_LINE1}
              <br />
              {CONTACT_ADDRESS_LINE2}
            </li>
            <li className="pt-1">
              <a href={phoneHref()} className="flex items-center gap-2 transition-colors hover:text-ugr-300">
                <Icon name="phone" className="h-4 w-4 flex-shrink-0 opacity-70" />
                {phoneDisplay()}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 break-all transition-colors hover:text-ugr-300"
              >
                <Icon name="mail" className="h-4 w-4 flex-shrink-0 opacity-70" />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-ugr-300"
              >
                <Icon name="whatsapp" filled className="h-4 w-4 flex-shrink-0 opacity-70" />
                WhatsApp&apos;tan Yazın
              </a>
            </li>
            <li className="flex items-center gap-2 pt-1 text-navy-300">
              <Icon name="clock" className="h-4 w-4 flex-shrink-0 opacity-60" />
              {WORKING_HOURS}
            </li>
          </FooterGroup>
        </div>
      </Container>

      {/* Alt bar — yasal bağlantılar + telif */}
      <div className="border-t border-navy-700">
        <Container className="py-6">
          <ul className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-[12px]">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <FooterLink item={l} className="text-navy-300 hover:text-ugr-300" />
              </li>
            ))}
          </ul>

          <p className="text-[12px] text-navy-300">
            © {new Date().getFullYear()} UGR Studio. Tüm hakları saklıdır.
          </p>
        </Container>
      </div>
    </footer>
  );
}
