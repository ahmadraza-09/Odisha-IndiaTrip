import { Link } from 'react-router-dom';
import {
  Star,
  Hotel,
  Car,
  UtensilsCrossed,
  Camera,
  ArrowRight,
} from 'lucide-react';


import { allPackages } from '../data/content';

const includeIcons = [
  { key: 'hotel', icon: Hotel, label: 'Hotel' },
  { key: 'cab', icon: Car, label: 'Cab' },
  { key: 'meals', icon: UtensilsCrossed, label: 'Meals' },
  { key: 'sightseeing', icon: Camera, label: 'Sightseeing' },
];

const TourPackages = ({ onOpenInquiry }) => {
  const featured = allPackages.slice(0, 6);

  return (
    <section id="packages" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Curated by Local Experts
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Trending Odisha Tour Packages
          </h2>

          <p className="text-navy-500 text-lg leading-relaxed">
            Handcrafted itineraries with the best rates — only a local
            DMC can offer this kind of access and pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`group bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover shadow-sm reveal stagger-${
                (i % 6) + 1
              }`}
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
                <h3 className="font-display text-lg font-bold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {pkg.title}
                </h3>

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

                      <span className="font-medium">
                        {item.label}
                      </span>
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

                    <p className="text-xs text-navy-400">
                      Per Person
                    </p>
                  </div>

                  <div className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg">
                    Save{' '}
                    {Math.round(
                      ((parseInt(
                        pkg.originalPrice.replace(/,/g, '')
                      ) -
                        parseInt(
                          pkg.price.replace(/,/g, '')
                        )) /
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
                    name='Open Inquiry Form'
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

        <div className="text-center mt-12">
          <Link
            to="/packages"
            className="btn-secondary px-8 py-3.5 text-sm inline-flex"
          >
            View All Packages

            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;