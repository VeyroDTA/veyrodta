import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-32 text-center">
      <span className="text-blue-700 font-black text-6xl block mb-4">404</span>
      <h1 className="text-2xl font-bold text-slate-900 mb-3">Aradığınız sayfa bulunamadı</h1>
      <p className="text-slate-500 mb-8">Bu sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <Link
        to="/"
        className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 font-extrabold px-8 py-4 rounded-xl shadow-md hover:scale-105 transition-all"
      >
        Anasayfaya Dön →
      </Link>
    </section>
  );
}
