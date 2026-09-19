import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import BlogTopicIcon from '../components/BlogTopicIcon';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  // Sayfa başlığını yazıya göre günceller (SEO + tarayıcı sekmesi için).
  // Not: Bu bir SPA olduğu için arama motoru önizlemesi (og:title vb.) index.html'deki
  // sabit değerleri kullanır. Blog gerçekten SEO odaklı büyüyecekse ileride bu projeyi
  // Astro/Next gibi statik üretim yapan bir yapıya taşımak en doğrusu olur.
  useEffect(() => {
    if (post) document.title = `${post.title} | Veyro Blog`;
    return () => {
      document.title = 'Veyro DTA | Kurumsal Web Tasarım & Dijital Çözümler';
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <Link to="/blog" className="inline-flex items-center gap-1.5 text-cyan-400 text-sm font-semibold mb-8 hover:text-cyan-300">
        <span aria-hidden="true">←</span> Tüm Yazılar
      </Link>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">{post.category}</span>
        <span className="text-slate-500 text-xs">· {post.date} · {post.readTime}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-black text-white mb-8 leading-tight">{post.title}</h1>

      {post.image && (
        <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 mb-10 shadow-xl">
          <img src={post.image} alt={post.title} className="w-full h-auto" />
          <div className="absolute top-4 left-4">
            <BlogTopicIcon icon={post.icon} className="w-12 h-12" />
          </div>
        </div>
      )}

      <div className="space-y-10">
        {post.sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-xl font-bold text-cyan-300 mb-3">{section.heading}</h2>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              {section.body.map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t border-cyan-500/20 bg-gradient-to-r from-[#112048] to-[#040814] border border-cyan-500/30 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Projenizi konuşalım mı?</h3>
        <p className="text-sm text-slate-400 mb-5">Bu yazıda anlattığımız standartlarla, sizin için de anahtar teslim bir web sitesi kurabiliriz.</p>
        <Link
          to="/iletisim"
          className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all"
        >
          Ücretsiz Teklif Al →
        </Link>
      </div>
    </article>
  );
}
