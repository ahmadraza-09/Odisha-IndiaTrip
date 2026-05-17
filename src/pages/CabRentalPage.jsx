import {
  Car,
  Hotel,
  MapPin,
  BadgePercent,
  Shield,
  Clock,
  Users,
  Fuel,
  Gauge,
  Phone,
  CheckCircle,
} from 'lucide-react';

const vehicles = [
  {
    name: 'Swift Dzire',
    type: 'Sedan',
    image:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
    seats: 4,
    fuel: 'Petrol / CNG',
    mileage: '20+ km/l',
    pricePerKm: '₹12',
    pricePerDay: '₹2,499',
    price8hr: '₹1,899',
    features: ['AC', 'Music System', 'Boot Space', 'GPS'],
    popular: true,
    description:
      'Ideal for couples and small families. Comfortable sedan with excellent fuel efficiency for city tours and short trips.',
  },
  {
    name: 'Toyota Innova Crysta',
    type: 'MPV',
    image:
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
    seats: 7,
    fuel: 'Diesel',
    mileage: '14+ km/l',
    pricePerKm: '₹16',
    pricePerDay: '₹4,499',
    price8hr: '₹3,499',
    features: [
      'AC',
      'Captain Seats',
      'Entertainment',
      'GPS',
      'Extra Luggage',
    ],
    popular: true,
    description:
      'The gold standard for family tours and group travel. Spacious, powerful, and supremely comfortable for long Odisha road trips.',
  },
  {
    name: 'Toyota Etios',
    type: 'Sedan',
    image:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
    seats: 4,
    fuel: 'Diesel',
    mileage: '22+ km/l',
    pricePerKm: '₹11',
    pricePerDay: '₹2,299',
    price8hr: '₹1,699',
    features: ['AC', 'Music System', 'Large Boot', 'GPS'],
    popular: false,
    description:
      'Budget-friendly diesel sedan with great mileage. Perfect for Bhubaneswar-Puri-Konark circuit and airport transfers.',
  },
  {
    name: 'Tempo Traveller (12 Seater)',
    type: 'Mini Bus',
    image:
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
    seats: 12,
    fuel: 'Diesel',
    mileage: '10+ km/l',
    pricePerKm: '₹22',
    pricePerDay: '₹6,999',
    price8hr: '₹5,499',
    features: [
      'AC',
      'Pushback Seats',
      'Music',
      'GPS',
      'Luggage Space',
      'Mic',
    ],
    popular: true,
    description:
      'Perfect for large groups, corporate tours, and wedding transport. Comfortable pushback seats with ample luggage space.',
  },
  {
    name: 'Mahindra Xylo',
    type: 'MPV',
    image:
      'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
    seats: 7,
    fuel: 'Diesel',
    mileage: '14+ km/l',
    pricePerKm: '₹14',
    pricePerDay: '₹3,499',
    price8hr: '₹2,799',
    features: ['AC', 'Captain Seats', 'Music', 'GPS'],
    popular: false,
    description:
      "A reliable 7-seater MPV at a competitive price. Great for medium groups exploring Odisha's tribal and coastal routes.",
  },
  {
    name: 'Honda City',
    type: 'Premium Sedan',
    image:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400',
    seats: 4,
    fuel: 'Petrol',
    mileage: '18+ km/l',
    pricePerKm: '₹14',
    pricePerDay: '₹3,299',
    price8hr: '₹2,499',
    features: ['AC', 'Leather Seats', 'Sunroof', 'GPS', 'Premium Audio'],
    popular: false,
    description:
      'Premium sedan for business travelers and VIP guests. Luxurious interiors with top-notch comfort for executive travel.',
  },
];

const serviceAreas = [
  'Bhubaneswar Airport Pickup/Drop',
  'Bhubaneswar – Puri',
  'Bhubaneswar – Konark',
  'Puri – Chilika – Puri',
  'Bhubaneswar – Gopalpur',
  'Bhubaneswar – Bhitarkanika',
  'Bhubaneswar – Simlipal',
  'Full Odisha Circuit',
  'Bhubaneswar City Tour',
  'Corporate & Event Transport',
];

const whyUs = [
  {
    icon: Shield,
    title: 'Own Fleet, No Middlemen',
    desc: 'All vehicles are owned and maintained by us — no third-party cabs, no commission markups.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    desc: 'Early morning flights, late-night temple visits — our cabs are available round the clock.',
  },
  {
    icon: MapPin,
    title: 'Local Expert Drivers',
    desc: 'Our chauffeurs know every road, shortcut, and hidden gem in Odisha. They are your local guides on wheels.',
  },
  {
    icon: CheckCircle,
    title: 'Transparent Pricing',
    desc: 'No surge pricing, no hidden charges. What we quote is what you pay — toll and parking included.',
  },
];

const CabRentalPage = ({ onOpenInquiry }) => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <div className="gradient-navy py-16 sm:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 text-sm font-semibold mb-4">
            Own Fleet of 50+ Vehicles
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Cab Rentals in Odisha
          </h1>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Reliable, well-maintained cabs with trained local chauffeurs —
            available 24/7 across Odisha for tours, transfers, and corporate
            travel.
          </p>
        </div>
      </div>

      {/* Why Us */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-amber-600" />
                </div>

                <h3 className="font-display font-bold text-navy-900 text-sm mb-1">
                  {item.title}
                </h3>

                <p className="text-navy-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Vehicle Cards */}
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-8">
            Our Fleet
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((v) => (
              <div
                key={v.name}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover shadow-sm relative"
              >
                {v.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-amber-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-lg shadow-md">
                      Popular
                    </span>
                  </div>
                )}

                <div className="image-zoom aspect-video">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy-900">
                        {v.name}
                      </h3>

                      <span className="text-xs text-navy-400 font-medium">
                        {v.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-navy-500 text-sm leading-relaxed mb-4">
                    {v.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-1.5 text-sm text-navy-600">
                      <Users className="w-3.5 h-3.5 text-amber-500" />
                      <span className="font-medium">{v.seats} Seats</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm text-navy-600">
                      <Fuel className="w-3.5 h-3.5 text-amber-500" />
                      <span className="font-medium">{v.fuel}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm text-navy-600">
                      <Gauge className="w-3.5 h-3.5 text-amber-500" />
                      <span className="font-medium">{v.mileage}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {v.features.map((f) => (
                      <span
                        key={f}
                        className="px-2 py-0.5 bg-slate-50 text-navy-600 text-xs font-medium rounded"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-slate-50 rounded-xl">
                    <div className="text-center">
                      <p className="text-xs text-navy-400 mb-1">Per Km</p>
                      <p className="text-lg font-bold text-navy-900">
                        {v.pricePerKm}
                      </p>
                    </div>

                    <div className="text-center border-x border-slate-200">
                      <p className="text-xs text-navy-400 mb-1">8hr/80km</p>
                      <p className="text-lg font-bold text-navy-900">
                        {v.price8hr}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-xs text-navy-400 mb-1">Per Day</p>
                      <p className="text-lg font-bold text-navy-900">
                        {v.pricePerDay}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="tel:+919876543210"
                      className="flex-1 btn-outline text-sm py-2.5 justify-center"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>

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

          {/* Service Areas */}
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-8">
              Popular Routes & Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-300 transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />

                  <span className="text-sm text-navy-700 font-medium">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl gradient-amber text-center">
            <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">
              Need a Custom Cab Quote?
            </h3>

            <p className="text-navy-800/70 mb-6">
              Tell us your route and we will give you the best rate —
              guaranteed.
            </p>

            <button
              onClick={onOpenInquiry}
              className="btn-secondary text-sm"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabRentalPage;