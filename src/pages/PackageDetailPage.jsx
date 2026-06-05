import { useParams, Link } from 'react-router-dom';
import {
  Star,
  Hotel,
  Car,
  UtensilsCrossed,
  Camera,
  CheckCircle,
  XCircle,
  ArrowLeft,
  MapPin,
  Clock,
} from 'lucide-react';
import SEO from '../components/SEO';
import { allPackages } from '../data/content';

const includeIcons = [
  { key: 'hotel', icon: Hotel, label: 'Hotel' },
  { key: 'cab', icon: Car, label: 'Cab' },
  { key: 'meals', icon: UtensilsCrossed, label: 'Meals' },
  { key: 'sightseeing', icon: Camera, label: 'Sightseeing' },
];

const PackageDetailPage = ({ onOpenInquiry }) => {
  const { id } = useParams();

  const pkg = allPackages.find((p) => p.id === id);

  if (!pkg) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">
            Package Not Found
          </h2>

          <p className="text-navy-500 mb-4">
            The package you are looking for does not exist.
          </p>

          <Link to="/packages" className="btn-primary text-sm">
            Browse All Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <SEO
        title={`${pkg.title} | Odisha Tour Package with Hotel, Cab & Sightseeing`}
        description={`${pkg.description} Book ${pkg.title} with hotel, cab, meals, sightseeing, and guided Odisha travel experience. Explore ${pkg.itinerary.join(
          ', '
        )} with affordable customized tour packages.`}
        keywords={`${pkg.title}, Odisha tour package, Odisha holiday package, ${pkg.itinerary.join(
          ', '
        )}, Odisha travel packages, Odisha tourism, Puri package, Bhubaneswar tour, Jagannath tour package, Odisha sightseeing`}
        url={`https://odishaindiatrip.com/packages/${pkg.id}`}
      />
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pkg.image}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/70 to-navy-950/90" />
        </div>

        <div className="relative z-10 py-16 sm:py-24">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Packages
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`${pkg.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-lg`}
              >
                {pkg.badge}
              </span>

              <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                {pkg.duration}
              </span>

              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />

                <span className="text-white text-xs font-bold">
                  {pkg.rating}
                </span>

                <span className="text-white/50 text-xs">
                  ({pkg.reviews} reviews)
                </span>
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {pkg.title}
            </h1>

            <p className="text-white/70 text-lg max-w-2xl">
              {pkg.description}
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Itinerary Tags */}
              <div>
                <h2 className="font-display text-xl font-bold text-navy-900 mb-4">
                  Destinations Covered
                </h2>

                <div className="flex flex-wrap gap-2">
                  {pkg.itinerary.map((place, i) => (
                    <div
                      key={place}
                      className="flex items-center gap-2"
                    >
                      <span className="px-4 py-2 bg-amber-50 text-amber-700 text-sm font-semibold rounded-lg border border-amber-200">
                        <MapPin className="w-3.5 h-3.5 inline mr-1" />
                        {place}
                      </span>

                      {i < pkg.itinerary.length - 1 && (
                        <span className="text-navy-300">—</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Includes */}
              <div>
                <h2 className="font-display text-xl font-bold text-navy-900 mb-4">
                  What's Included
                </h2>

                <div className="flex items-center gap-6">
                  {includeIcons.map((item) => (
                    <div
                      key={item.key}
                      className={`flex items-center gap-2 text-sm ${
                        pkg.includes[item.key]
                          ? 'text-emerald-600'
                          : 'text-slate-300'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />

                      <span className="font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-wise Itinerary */}
              <div>
                <h2 className="font-display text-xl font-bold text-navy-900 mb-6">
                  Day-wise Itinerary
                </h2>

                <div className="space-y-0">
                  {pkg.dayPlan.map((day, i) => (
                    <div key={day.day} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {day.day}
                        </div>

                        {i < pkg.dayPlan.length - 1 && (
                          <div className="w-0.5 flex-1 bg-amber-200 my-1" />
                        )}
                      </div>

                      <div className="pb-8">
                        <h3 className="font-display font-bold text-navy-900 mb-1">
                          {day.title}
                        </h3>

                        <p className="text-navy-500 text-sm leading-relaxed">
                          {day.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-display text-xl font-bold text-navy-900 mb-4">
                  Tour Highlights
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 text-sm text-navy-700"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />

                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <h3 className="font-display font-bold text-emerald-800 mb-3">
                    Inclusions
                  </h3>

                  <ul className="space-y-2">
                    {pkg.inclusions.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-emerald-700"
                      >
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-red-50 border border-red-100">
                  <h3 className="font-display font-bold text-red-800 mb-3">
                    Exclusions
                  </h3>

                  <ul className="space-y-2">
                    {pkg.exclusions.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-red-600"
                      >
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Pricing Card */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6">
                  <p className="text-sm text-navy-400 mb-1">
                    Starting from
                  </p>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-navy-900">
                      ₹{pkg.price}
                    </span>

                    <span className="text-lg text-navy-400 line-through">
                      ₹{pkg.originalPrice}
                    </span>
                  </div>

                  <p className="text-sm text-navy-400 mb-4">
                    Per Person
                  </p>

                  <div className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-bold rounded-lg inline-block mb-6">
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

                  <button
                    name='Open Inquiry Form'
                    onClick={onOpenInquiry}
                    className="btn-primary w-full py-3.5 text-sm mb-3"
                  >
                    Book Now / Enquire
                  </button>

                  <a
                    href="tel:+919876543210"
                    className="btn-outline w-full py-3 text-sm flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>

                {/* Quick Info */}
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-amber-500" />

                    <span className="text-navy-700">
                      <strong>Duration:</strong> {pkg.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-amber-500" />

                    <span className="text-navy-700">
                      <strong>Destinations:</strong>{' '}
                      {pkg.itinerary.length} places
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Star className="w-4 h-4 text-amber-500" />

                    <span className="text-navy-700">
                      <strong>Rating:</strong> {pkg.rating}/5 (
                      {pkg.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

const Phone = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
};

export default PackageDetailPage;