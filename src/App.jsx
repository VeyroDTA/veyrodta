import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CursorGlow from './components/CursorGlow';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Kvkk from './pages/Kvkk';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#040814] via-[#080E24] to-[#0A1635] text-slate-100 selection:bg-cyan-500 selection:text-white relative overflow-x-hidden">
      <ScrollToTop />
      <CursorGlow />
      <WhatsAppButton />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiyatlar" element={<Pricing />} />
        <Route path="/projelerimiz" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/sss" element={<Faq />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/kvkk" element={<Kvkk />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
