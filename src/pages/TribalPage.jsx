import { Link } from 'react-router-dom';
import {
  Star,
  Hotel,
  Car,
  Camera,
  MapPin,
  Users,
  TreePine,
  Palette,
} from 'lucide-react';
import { allPackages } from '../data/content';

const tribalPackages = allPackages.filter(
  (p) => p.category === 'tribal'
);

const includeIcons = [
  { key: 'hotel', icon: Hotel, label: 'Hotel' },
  { key: 'cab', icon: Car, label: 'Cab' },
  { key: 'meals', icon: null, label: 'Meals' },
  { key: 'sightseeing', icon: Camera, label: 'Sightseeing' },
];

const tribalInfo = [
  {
    icon: Users,
    title: '62+ Tribal Communities',
    desc: 'Odisha is home to 62 scheduled tribes — the most diverse tribal population in any Indian state. Each community has distinct languages, customs, and art forms.',
  },
  {
    icon: TreePine,
    title: 'Pristine Forests',
    desc: "Tribal Odisha is wrapped in some of India's oldest forests — the Niyamgiri Hills, Eastern Ghats, and dense sal forests that have sustained these communities for millennia.",
  },
  {
    icon: Palette,
    title: 'Living Art Traditions',
    desc: 'From Dongria Kondh wall paintings to Saura tribal art (italon), from Dokra metal craft to Kotpad natural dye textiles — tribal Odisha is a living art gallery.',
  },
  {
    icon: MapPin,
    title: 'Weekly Haats',
    desc: 'Tribal markets (haats) are the social and economic lifeline. Visit Kunduli, Onkadelli, and Chatikona haats where tribes gather to trade, socialize, and celebrate.',
  },
];

const TribalPage = ({ onOpenInquiry }) => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={tribalPackages?.[0]?.image}
            alt=""
            className="w-full h-full object-cover object-top"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-950/90" />
        </div>

        <div className="relative z-10 py-16 sm:py-24">
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 text-sm font-semibold mb-4">
              Authentic Encounters
            </span>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Tribal & Culture Tours
            </h1>

            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Step into a world untouched by time — meet indigenous communities,
              witness ancient rituals, and experience the raw beauty of tribal
              Odisha.
            </p>
          </div>
        </div>
      </div>

      {/* Tribal Info */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-8 text-center">
            Why Tribal Odisha is Extraordinary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {tribalInfo.map((info, i) => (
              <div
                key={info.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-amber-600" />
                </div>

                <h3 className="font-display font-bold text-navy-900 mb-2">
                  {info.title}
                </h3>

                <p className="text-navy-500 text-sm leading-relaxed">
                  {info.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Packages */}
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-8">
            Tribal Tour Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tribalPackages.map((pkg) => (
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
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="text-navy-500 text-sm leading-relaxed mb-3">
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
                        key={item.label}
                        className={`flex items-center gap-1 text-xs ${
                          item.key === 'meals'
                            ? 'text-slate-300'
                            : 'text-emerald-600'
                        }`}
                      >
                        {item.icon && (
                          <item.icon className="w-3.5 h-3.5" />
                        )}

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

          {/* Important Note */}
          <div className="mt-12 p-6 rounded-2xl bg-amber-50 border border-amber-200">
            <h3 className="font-display font-bold text-navy-900 mb-2">
              Important Note on Tribal Tours
            </h3>

            <p className="text-navy-600 text-sm leading-relaxed">
              Tribal tours require special permits from the District
              Administration. Odisha IndiaTrip handles all permissions and ensures
              respectful, responsible tourism practices. Photography may be
              restricted in certain areas. Our local guides ensure cultural
              sensitivity at all times. Minimum 2 travelers required for tribal
              tours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TribalPage;