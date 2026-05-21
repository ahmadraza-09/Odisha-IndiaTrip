import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Hotel,
  Car,
  UtensilsCrossed,
  Camera,
  Search,
} from 'lucide-react';
import SEO from '../components/SEO';
import { allPackages } from '../data/content';

const categories = [
  { key: 'all', label: 'All Packages' },
  { key: 'spiritual', label: 'Spiritual' },
  { key: 'heritage', label: 'Heritage' },
  { key: 'tribal', label: 'Tribal' },
  { key: 'wildlife', label: 'Wildlife' },
  { key: 'beach', label: 'Beach' },
];

const includeIcons = [
  { key: 'hotel', icon: Hotel, label: 'Hotel' },
  { key: 'cab', icon: Car, label: 'Cab' },
  { key: 'meals', icon: UtensilsCrossed, label: 'Meals' },
  { key: 'sightseeing', icon: Camera, label: 'Sightseeing' },
];

const PackagesPage = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = allPackages.filter((pkg) => {
    const matchCategory =
      activeCategory === 'all' || pkg.category === activeCategory;

    const matchSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.itinerary.some((p) =>
        p.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-24">
      <SEO
        title="Odisha Tour Packages | Puri, Konark, Chilika & Odisha Holiday Tours"
        description="Explore the best Odisha tour packages including Jagannath Puri tours, Konark Sun Temple, Chilika Lake, wildlife, tribal culture, beaches, heritage, eco tourism, and customized Odisha holiday packages."
        keywords="Odisha tour packages, Odisha holiday packages, Puri tour package, Konark tour package, Chilika Lake tour, Odisha travel packages, Odisha tourism, Odisha sightseeing, Odisha family tour, Odisha vacation packages"
        url="https://odishaindiatrip.com/packages"
      />
      <div className="gradient-navy py-16 sm:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 text-sm font-semibold mb-4">
            Curated by Local Experts
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Odisha Tour Packages
          </h1>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Handcrafted itineraries with the best rates — only a local DMC can
            offer this kind of access and pricing.
          </p>
        </div>
      </div>

      <div className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.key
                      ? 'bg-navy-900 text-white shadow-md'
                      : 'bg-white text-navy-600 hover:bg-navy-50 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-300" />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
            </div>
          </div>

          <p className="text-navy-400 text-sm mb-6">
            Showing {filtered.length} package
            {filtered.length !== 1 ? 's' : ''}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((pkg) => (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover shadow-sm"
              >
                <div className="relative image-zoom aspect-[4/3]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span
                      className={`${pkg.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-semibold px-3 py-1.5 rounded-lg">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-navy-900 text-xs font-bold">
                      {pkg.rating}
                    </span>
                    <span className="text-navy-400 text-xs">
                      ({pkg.reviews})
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="text-navy-500 text-sm leading-relaxed mb-3 line-clamp-2">
                    {pkg.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pkg.itinerary.map((place) => (
                      <span
                        key={place}
                        className="px-2.5 py-1 bg-slate-50 text-navy-600 text-xs font-medium rounded-md"
                      >
                        {place}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                    {includeIcons.map((item) => (
                      <div
                        key={item.key}
                        className={`flex items-center gap-1 text-xs ${
                          pkg.includes[item.key]
                            ? 'text-emerald-600'
                            : 'text-slate-300'
                        }`}
                      >
                        <item.icon className="w-3.5 h-3.5" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-xs text-navy-400 mb-1">
                        Starting from
                      </p>

                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-navy-900">
                          ₹{pkg.price}
                        </span>

                        <span className="text-sm text-navy-400 line-through">
                          ₹{pkg.originalPrice}
                        </span>
                      </div>

                      <p className="text-xs text-navy-400">Per Person</p>
                    </div>

                    <div className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg">
                      Save{' '}
                      {Math.round(
                        ((parseInt(
                          pkg.originalPrice.replace(/,/g, '')
                        ) -
                          parseInt(pkg.price.replace(/,/g, ''))) /
                          parseInt(
                            pkg.originalPrice.replace(/,/g, '')
                          )) *
                          100
                      )}
                      %
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to={`/packages/${pkg.id}`}
                      className="flex-1 btn-outline text-sm py-2.5 text-center"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={onOpenInquiry}
                      className="flex-1 btn-primary text-sm py-2.5"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-navy-400 text-lg">
                No packages found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;