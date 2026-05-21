import { Link } from 'react-router-dom';
import {
  Star,
  Hotel,
  Car,
  UtensilsCrossed,
  Camera,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import SEO from '../components/SEO';
import { allPackages } from '../data/content';

const jagannathPackages = allPackages.filter(
  (p) =>
    p.id === 'jagannath-special-darshan-2n' ||
    p.id === 'puri-jagannath-darshan' ||
    p.id === 'rath-yatra-special'
);

const includeIcons = [
  { key: 'hotel', icon: Hotel, label: 'Hotel' },
  { key: 'cab', icon: Car, label: 'Cab' },
  { key: 'meals', icon: UtensilsCrossed, label: 'Meals' },
  { key: 'sightseeing', icon: Camera, label: 'Sightseeing' },
];

const highlights = [
  {
    icon: MapPin,
    title: 'VIP Darshan Access',
    desc: 'Skip the regular queue with our special temple access arrangements',
  },
  {
    icon: Clock,
    title: 'Aarti Participation',
    desc: 'Join the sacred evening aarti ceremony at the Jagannath Temple',
  },
  {
    icon: Calendar,
    title: 'Festival Packages',
    desc: 'Exclusive Rath Yatra, Snana Purnima, and Nabakalebara packages',
  },
  {
    icon: Star,
    title: 'Local Pandit Guide',
    desc: 'Experienced temple guides who explain every ritual and legend',
  },
];

const JagannathPage = ({ onOpenInquiry }) => {
  return (
    <div className="pt-24">
      <SEO
        title="Jagannath Puri Tour Packages | VIP Darshan & Rath Yatra Tours"
        description="Book Jagannath Puri tour packages with VIP darshan, Rath Yatra special tours, temple sightseeing, Puri beach stays, local guides, hotel, cab, meals, and spiritual Odisha experiences."
        keywords="Jagannath Puri tour package, Puri Jagannath darshan, Rath Yatra package, Puri temple tour, Odisha spiritual tour, Jagannath temple VIP darshan, Puri sightseeing, Odisha pilgrimage tour, Puri holiday package"
        url="https://odishaindiatrip.com/jagannath-darshan"
      />
      {/* Page Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={jagannathPackages?.[0]?.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-950/90" />
        </div>

        <div className="relative z-10 py-16 sm:py-24">
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 text-sm font-semibold mb-4">
              Spiritual Odisha
            </span>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Jagannath Darshan Special
            </h1>

            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Experience the divine presence of Lord Jagannath with our curated
              spiritual packages — VIP darshan, festival access, and sacred
              temple tours.
            </p>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
                  <h.icon className="w-6 h-6 text-amber-600" />
                </div>

                <h3 className="font-display font-bold text-navy-900 mb-1">
                  {h.title}
                </h3>

                <p className="text-navy-500 text-sm">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* Packages */}
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-8">
            Jagannath Tour Packages
          </h2>

          <div className="space-y-8">
            {jagannathPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="relative image-zoom aspect-video lg:aspect-auto">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-4 left-4">
                      <span
                        className={`${pkg.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md`}
                      >
                        {pkg.badge}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-navy-900 mb-1">
                          {pkg.title}
                        </h3>

                        <span className="text-navy-400 text-sm">
                          {pkg.duration}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />

                        <span className="text-navy-900 text-sm font-bold">
                          {pkg.rating}
                        </span>

                        <span className="text-navy-400 text-xs">
                          ({pkg.reviews})
                        </span>
                      </div>
                    </div>

                    <p className="text-navy-500 text-sm leading-relaxed mb-4">
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

                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
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

                    {/* Day Plan Preview */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-navy-900 text-sm mb-2">
                        Day-wise Itinerary
                      </h4>

                      <div className="space-y-2">
                        {pkg.dayPlan.slice(0, 3).map((day) => (
                          <div
                            key={day.day}
                            className="flex gap-3 text-sm"
                          >
                            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {day.day}
                            </span>

                            <div>
                              <span className="font-medium text-navy-900">
                                {day.title}
                              </span>

                              <span className="text-navy-400">
                                {' '}
                                — {day.detail.substring(0, 80)}...
                              </span>
                            </div>
                          </div>
                        ))}

                        {pkg.dayPlan.length > 3 && (
                          <Link
                            to={`/packages/${pkg.id}`}
                            className="text-amber-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                          >
                            View full {pkg.dayPlan.length}-day itinerary

                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JagannathPage;