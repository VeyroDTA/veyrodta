import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-cyan-500/25 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400 gap-4">
      <span className="text-xs text-cyan-400 font-semibold">Veyro DTA · Dijital Tasarım Atölyesi</span>
      <div className="flex space-x-6 text-xs font-medium">
        <Link to="/" className="hover:text-cyan-400 cursor-pointer">Anasayfa</Link>
        <Link to="/fiyatlar" className="hover:text-cyan-400 cursor-pointer">Fiyatlar</Link>
        <Link to="/iletisim" className="hover:text-cyan-400 cursor-pointer">İletişim</Link>
        <Link to="/kvkk" className="hover:text-cyan-400 cursor-pointer">KVKK</Link>
      </div>
      {/*
        TODO — hâlâ eksik olan alan: src/pages/Kvkk.jsx içindeki
        [Adın Soyadın] / [adres] / [vergi dairesi-no] alanlarını doldur.
      */}
    </footer>
  );
}
