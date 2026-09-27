import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "../data/blog";
import BlogTopicIcon from "../components/BlogTopicIcon";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import { quoteMailtoHref } from "../config";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <Seo
        title={`${post.title} | UGR Studio Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />

      <main id="main">
        <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-[14px] font-bold text-ugr-600 transition-colors hover:text-ugr-700"
          >
            <Icon name="arrowLeft" className="h-4 w-4" />
            Tüm Yazılar
          </Link>

          <div className="mb-4 flex items-center gap-2">
            <span className="text-[11px] font-extrabold tracking-[0.12em] text-ugr-600 uppercase">
              {post.category}
            </span>
            <span className="text-[13px] text-muted">
              · {post.date} · {post.readTime}
            </span>
          </div>

          <h1 className="text-[24px] leading-tight font-extrabold tracking-tight text-navy-800 sm:text-[29px]">
            {post.title}
          </h1>

          {post.image && (
            <div className="relative mt-8 mb-10 overflow-hidden rounded-2xl border border-line">
              <img src={post.image} alt={post.title} className="h-auto w-full" />
              <div className="absolute top-4 left-4">
                <BlogTopicIcon icon={post.icon} className="h-11 w-11" />
              </div>
            </div>
          )}

          <div className="space-y-9">
            {post.sections.map((section, i) => (
              <div key={i}>
                <h2 className="mb-2.5 text-[18px] font-extrabold text-navy-800">
                  {section.heading}
                </h2>
                <div className="space-y-3.5 text-[15px] leading-relaxed text-muted">
                  {section.body.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-ugr-100 bg-ugr-50 p-7 text-center sm:p-9">
            <h2 className="text-xl font-extrabold text-navy-800">
              Projenizi konuşalım mı?
            </h2>
            <p className="mx-auto mt-2.5 max-w-lg text-[14px] leading-relaxed text-muted">
              Bu yazıda anlattığımız standartlarla, sizin için de anahtar teslim bir web sitesi
              kurabiliriz.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/iletisim"
                className="inline-flex h-12 items-center gap-2 rounded-2xl bg-flame-700 px-6 text-[15px] font-extrabold text-white transition-colors duration-200 hover:bg-flame-800"
              >
                Ücretsiz Teklif Al
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <a
                href={quoteMailtoHref()}
                className="inline-flex h-12 items-center rounded-2xl border border-line bg-white px-5 text-[15px] font-extrabold text-navy-700 transition-colors duration-200 hover:border-ugr-200 hover:text-ugr-600"
              >
                E-posta Gönder
              </a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
