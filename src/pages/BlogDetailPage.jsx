import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
} from 'lucide-react';

import { blogPosts } from '../data/content';

const BlogDetailPage = () => {
  const { id } = useParams();

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">
            Article Not Found
          </h2>

          <p className="text-navy-500 mb-4">
            The article you are looking for does not exist.
          </p>

          <Link to="/blog" className="btn-primary text-sm">
            Browse All Articles
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        p.category === post.category
    )
    .slice(0, 3);

  const morePosts =
    relatedPosts.length < 3
      ? [
          ...relatedPosts,
          ...blogPosts
            .filter(
              (p) =>
                p.id !== post.id &&
                p.category !== post.category
            )
            .slice(0, 3 - relatedPosts.length),
        ]
      : relatedPosts;

  return (
    <div className="pt-24">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-navy-950/60 to-navy-950/90" />
        </div>

        <div className="relative z-10 py-16 sm:py-24">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-semibold rounded-md">
                {post.category}
              </span>

              <span className="text-white/50 text-xs flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>

              <span className="text-white/50 text-xs flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                {post.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-navy-600 text-base leading-relaxed mb-5"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share */}
              <div className="mt-10 pt-6 border-t border-slate-200 flex items-center gap-4">
                <span className="text-navy-500 text-sm font-medium">
                  Share this article:
                </span>

                <button className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-amber-100 flex items-center justify-center transition-colors">
                  <Share2 className="w-4 h-4 text-navy-500" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* Related Posts */}
                <div>
                  <h3 className="font-display font-bold text-navy-900 mb-4">
                    Related Articles
                  </h3>

                  <div className="space-y-4">
                    {morePosts.map((p) => (
                      <Link
                        key={p.id}
                        to={`/blog/${p.id}`}
                        className="group flex gap-3"
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-20 h-16 rounded-lg object-cover flex-shrink-0"
                        />

                        <div>
                          <h4 className="text-sm font-semibold text-navy-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                            {p.title}
                          </h4>

                          <span className="text-xs text-navy-400">
                            {p.date}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-5 rounded-2xl gradient-amber">
                  <h3 className="font-display font-bold text-navy-900 mb-2">
                    Plan Your Trip
                  </h3>

                  <p className="text-navy-800/70 text-sm mb-4">
                    Inspired by this article? Let us plan your
                    Odisha adventure.
                  </p>

                  <Link
                    to="/"
                    className="btn-secondary text-sm w-full flex justify-center"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;