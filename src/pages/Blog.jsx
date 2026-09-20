import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import BlogTopicIcon from '../components/BlogTopicIcon';
import BlogCardCover from '../components/BlogCardCover';

export default function Blog() {
  const pillarPost = blogPosts.find((p) => p.pillar);
  const articles = blogPosts.filter((p) => !p.pillar);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">BİLGİ BANKASI</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Veyro Blog</h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Web tasarım, SEO ve dijital dönüşüm üzerine, işinize doğrudan uygulayabileceğin yazılar.
        </p>
      </div>

      {pillarPost && (
        <Link
          to={`/blog/${pillarPost.slug}`}
          className="group block mb-10 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 border border-cyan-400/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.25)] hover:shadow-[0_0_40px_rgba(6,182,212,0.22)] transition-all"
        >
          <div className="flex flex-col sm:flex-row items-stretch">
            {pillarPost.image && (
              <div className="relative sm:w-2/5 aspect-video sm:aspect-auto sm:h-auto overflow-hidden flex-shrink-0">
                <img
                  src={pillarPost.image}
                  alt={pillarPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <BlogTopicIcon icon={pillarPost.icon} className="w-11 h-11" />
                </div>
              </div>
            )}
            <div className="p-8 sm:p-10">
              <span className="inline-block bg-white/15 text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {pillarPost.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">{pillarPost.title}</h3>
              <p className="text-cyan-50/90 text-sm mb-5 max-w-2xl">{pillarPost.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-white font-bold text-sm group-hover:gap-2.5 transition-all">
                Yazıyı Oku <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </Link>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((post, index) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group bg-[#0D1736] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-xl hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="aspect-video overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <BlogCardCover icon={post.icon} index={index} />
            </div>
            <div className="p-7 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-cyan-400 font-bold text-[11px] uppercase tracking-widest">{post.category}</span>
                  <span className="text-slate-500 text-[11px]">· {post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{post.title}</h3>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">{post.excerpt}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-cyan-400 font-bold text-sm group-hover:gap-2.5 transition-all">
                Yazıyı Oku <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
