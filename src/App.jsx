import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import ScrollToTopButton from './components/ScrollToTopButton';
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
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      <ScrollToTop />
      <WhatsAppButton />
      <CallButton />
      <ScrollToTopButton />
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
