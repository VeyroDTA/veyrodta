import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog";
import BlogTopicIcon from "../components/BlogTopicIcon";
import BlogCardCover from "../components/BlogCardCover";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { Container } from "../components/Section";

// ─────────────────────────────────────────────
// BLOG ANA SAYFASI
// Blog üst menüde yer almıyor; içeriklere footer'daki "Kaynaklar"
// başlığı altından ulaşılır.
// ─────────────────────────────────────────────

export default function Blog() {
  const pillarPost = blogPosts.find((p) => p.pillar);
  const articles = blogPosts.filter((p) => !p.pillar);

  return (
    <>
      <Seo
        title="Blog | Web Tasarım, SEO ve Dijital Dönüşüm | UGR Studio"
        description="UGR Studio blog: web tasarım, SEO altyapısı, e-ticaret ve dijital dönüşüm üzerine uygulanabilir rehberler."
        path="/blog"
      />

      <main id="main">
        <PageHero
          eyebrow="BİLGİ BANKASI"
          title="Web Tasarım ve Dijital"
          highlight="Dönüşüm"
          description="Web tasarım, SEO altyapısı ve dijital dönüşüm üzerine; işinizde doğrudan uygulayabileceğiniz yazılar."
        />

        <Container className="py-12 sm:py-16">
          {pillarPost && (
            <Reveal className="mb-10">
              <Link
                to={`/blog/${pillarPost.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-line bg-white transition-colors duration-200 hover:border-ugr-200 sm:grid-cols-5"
              >
                <div className="relative aspect-video overflow-hidden sm:col-span-2 sm:aspect-auto">
                  {pillarPost.image ? (
                    <img
                      src={pillarPost.image}
                      alt={pillarPost.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <BlogCardCover icon={pillarPost.icon} index={0} />
                  )}
                  <div className="absolute top-3 left-3">
                    <BlogTopicIcon icon={pillarPost.icon} className="h-10 w-10" />
                  </div>
                </div>

                <div className="p-6 sm:col-span-3 sm:p-9">
                  <span className="inline-flex rounded-full bg-ugr-50 px-3 py-1 text-[11px] font-extrabold tracking-[0.14em] text-ugr-600 uppercase">
                    {pillarPost.category}
                  </span>
                  <h2 className="mt-3.5 text-[18px] leading-snug font-extrabold text-navy-800 sm:text-[21px]">
                    {pillarPost.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">
                    {pillarPost.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-extrabold text-ugr-600">
                    Yazıyı Oku
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((post, index) => (
              <Reveal key={post.slug} delay={index * 60} className="h-full">
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-200 hover:border-ugr-200"
                >
                  <div className="aspect-video overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <BlogCardCover icon={post.icon} index={index} />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-[11px] font-extrabold tracking-[0.12em] text-ugr-600 uppercase">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-muted">· {post.readTime}</span>
                    </div>
                    <h3 className="text-[16px] leading-snug font-extrabold text-navy-800">
                      {post.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-extrabold text-ugr-600">
                      Yazıyı Oku
                      <Icon
                        name="arrowRight"
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
