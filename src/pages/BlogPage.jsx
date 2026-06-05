import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
} from 'lucide-react';

import SEO from '../components/SEO'

import { blogPosts } from '../data/content';

const categories = [
  'All',
  'Spiritual',
  'Nature',
  'Culture',
  'Heritage',
  'Wildlife',
  'Food',
  'Festivals',
  'Beaches',
  'Art & Craft',
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] =
    useState('All');

  const [searchQuery, setSearchQuery] = useState('');

  const filtered = blogPosts.filter((post) => {
    const matchCategory =
      activeCategory === 'All' ||
      post.category === activeCategory;

    const matchSearch =
      post.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      post.excerpt
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchCategory && matchSearch;
  });

  const featured = filtered.filter((p) => p.featured);

  const regular = filtered.filter((p) => !p.featured);

  return (
    <div className="pt-24">
      <SEO
        title="Odisha Travel Blog | Guides, Tips & Stories"
        description="Explore Odisha travel blogs, destination guides, Jagannath Puri travel tips, Chilika Lake tours, Odisha culture, beaches, wildlife, festivals, food, and local travel experiences."
        keywords="Odisha travel blog, Odisha tourism blog, Puri travel guide, Jagannath Puri blog, Odisha beaches, Chilika Lake travel, Odisha culture, Odisha travel tips, Odisha tourism guide, Odisha travel stories"
        url="https://odishaindiatrip.com/blog"
      />
      <div className="gradient-navy py-16 sm:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 text-sm font-semibold mb-4">
            Travel Stories & Guides
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Odisha Travel Blog
          </h1>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Insider tips, destination guides, and cultural
            deep-dives from our local experts who know Odisha
            like no one else.
          </p>
        </div>
      </div>

      <div className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${activeCategory === cat
                      ? 'bg-navy-900 text-white shadow-md'
                      : 'bg-white text-navy-600 hover:bg-navy-50 border border-slate-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-300" />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
            </div>
          </div>

          {featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featured.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover block"
                >
                  <div className="image-zoom aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-md">
                        {post.category}
                      </span>

                      <span className="text-navy-400 text-xs flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>

                      <span className="text-navy-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-xl font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-navy-500 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1 text-amber-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More

                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regular.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover block"
              >
                <div className="image-zoom aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-md">
                      {post.category}
                    </span>

                    <span className="text-navy-400 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-navy-500 text-sm leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-navy-400 text-xs">
                      {post.date}
                    </span>

                    <span className="inline-flex items-center gap-1 text-amber-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Read

                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-navy-400 text-lg">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
      {/* CTA */}
      <div className="gradient-amber py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
            Ready to Experience the Real Odisha?
          </h2>

          <p className="text-navy-800/70 text-lg max-w-xl mx-auto mb-8">
            Let our local experts craft your perfect itinerary. No templates, no
            compromises — just the Odisha we know and love.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/tour-packages"
              className="btn-secondary px-8 py-3.5 text-sm"
            >
              Explore Tour Packages
            </Link>

            <Link
              to="/hotels"
              className="btn-secondary px-8 py-3.5 text-sm"
            >
              View Hotels
            </Link>

            <Link
              to="/eco-tourism"
              className="btn-secondary px-8 py-3.5 text-sm"
            >
              Eco Tourism
            </Link>

            <a
              href="tel:+919958826437"
              className="btn-secondary px-8 py-3.5 text-sm"
            >
              Call Us: +91 99588 26437
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;