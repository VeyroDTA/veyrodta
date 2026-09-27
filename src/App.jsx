import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import MobileApp from "./pages/MobileApp";
import Projects from "./pages/Projects";
import Pricing from "./pages/Pricing";
import Process from "./pages/Process";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

import Kvkk from "./pages/Kvkk";
import Gizlilik from "./pages/Gizlilik";
import Cerez from "./pages/Cerez";
import KullanimKosullari from "./pages/KullanimKosullari";

import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-white text-ink antialiased selection:bg-ugr-500 selection:text-white">
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* Satış akışı */}
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler" element={<Services />} />
        {/* Hizmetin kendi sayfası — üst menüde değil, /hizmetler ve footer'dan */}
        <Route path="/mobil-uygulama-gelistirme" element={<MobileApp />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/fiyatlar" element={<Pricing />} />
        <Route path="/surec" element={<Process />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/sss" element={<Faq />} />
        <Route path="/iletisim" element={<Contact />} />

        {/* Eski adresler — kalıcı yönlendirme */}
        <Route path="/projelerimiz" element={<Navigate to="/projeler" replace />} />
        <Route path="/hizmetlerimiz" element={<Navigate to="/hizmetler" replace />} />
        <Route path="/fiyatlandirma" element={<Navigate to="/fiyatlar" replace />} />
        <Route path="/surecimiz" element={<Navigate to="/surec" replace />} />
        <Route path="/iletisim-bize" element={<Navigate to="/iletisim" replace />} />

        {/* İçerik (yalnızca footer'dan erişilir) */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Yasal */}
        <Route path="/kvkk" element={<Kvkk />} />
        <Route path="/gizlilik-politikasi" element={<Gizlilik />} />
        <Route path="/cerez-politikasi" element={<Cerez />} />
        <Route path="/kullanim-kosullari" element={<KullanimKosullari />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <FloatingActions />
    </div>
  );
}
