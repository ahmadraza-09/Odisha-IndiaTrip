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
import { Link } from 'react-router-dom';

import HundaiXcent from '../assets/vehicle/hundia-xcent.webp'
import SwiftDzire from '../assets/vehicle/swift-desire.avif'
import HondaAmaze from '../assets/vehicle/honda-amaze.avif'
import ToyotaEtios from '../assets/vehicle/Toyota-Platinum-Etios.avif'
import ChevroletTavera from '../assets/vehicle/Chevrolet-Tavera.avif'
import ToyotaInnova from '../assets/vehicle/Toyota-Innova.jpg'
import ToyotaInnovaCrysta from '../assets/vehicle/Toyota-Innova-Crysta.jpg'
import MercedesCLA200 from '../assets/vehicle/Mercdes-Cla-200.avif'
import AudiA4 from '../assets/vehicle/Audi-A4.jpg'
import JaguarXF from '../assets/vehicle/Jaguar-XF.avif'
import SeaterWinger from '../assets/vehicle/tata-winger.jpg'
import SeaterWinger9 from '../assets/vehicle/AC-9-Seater-Winger.jpg'
import SeaterTraveller13 from '../assets/vehicle/AC-13-Seater-Traveller.jpg'
import SeaterTraveller17 from '../assets/vehicle/AC-17-Seater-Traveller.jpg'
import SeaterTraveller25 from '../assets/vehicle/AC-25-Seater-Traveller.jpg'
import BharatBenzCoach from '../assets/vehicle/36-Seater-Bharat-Benz-Coach.jpg'
import Volvo45Seater from '../assets/vehicle/Volvo-45-Seater-AC-Coach.jpg'
import CoachSeater44 from '../assets/vehicle/44SeaterCoach.jpg'


import SEO from '../components/SEO'

const vehicles = [
  // SEDAN CARS
  {
    name: 'Hyundai Xcent',
    type: 'Sedan',
    image: HundaiXcent,
    seats: 4,
    fuel: 'Petrol',
    mileage: '19+ km/l',
    pricePerKm: '₹12',
    pricePerDay: '₹2,350',
    price8hr: '₹1,900',
    features: ['AC', 'Music System', 'GPS', 'Comfort Seats'],
    popular: false,
    description:
      'Affordable sedan perfect for city rides, airport pickup, and local sightseeing.',
  },

  {
    name: 'Swift Dzire',
    type: 'Sedan',
    image: SwiftDzire,
    seats: 4,
    fuel: 'Petrol / CNG',
    mileage: '20+ km/l',
    pricePerKm: '₹13',
    pricePerDay: '₹2,500',
    price8hr: '₹2,000',
    features: ['AC', 'Music System', 'Boot Space', 'GPS'],
    popular: true,
    description:
      'Comfortable and fuel-efficient sedan for Odisha tours and family travel.',
  },

  {
    name: 'Honda Amaze',
    type: 'Sedan',
    image: HondaAmaze,
    seats: 4,
    fuel: 'Petrol',
    mileage: '18+ km/l',
    pricePerKm: '₹13',
    pricePerDay: '₹2,600',
    price8hr: '₹2,100',
    features: ['AC', 'GPS', 'Large Boot', 'Music'],
    popular: false,
    description:
      'Smooth driving sedan with spacious interiors and excellent comfort.',
  },

  {
    name: 'Toyota Etios',
    type: 'Sedan',
    image: ToyotaEtios,
    seats: 4,
    fuel: 'Diesel',
    mileage: '22+ km/l',
    pricePerKm: '₹14',
    pricePerDay: '₹2,850',
    price8hr: '₹2,200',
    features: ['AC', 'GPS', 'Music', 'Large Boot'],
    popular: false,
    description:
      'Reliable sedan for outstation travel and long-distance Odisha tours.',
  },

  // SUV CARS
  {
    name: 'Chevrolet Tavera',
    type: 'SUV',
    image: ChevroletTavera,
    seats: 7,
    fuel: 'Diesel',
    mileage: '14+ km/l',
    pricePerKm: '₹14',
    pricePerDay: '₹2,950',
    price8hr: '₹2,600',
    features: ['AC', 'Extra Luggage', 'Music', 'GPS'],
    popular: false,
    description:
      'Spacious SUV suitable for family tours and pilgrimage trips.',
  },

  {
    name: 'Toyota Innova',
    type: 'SUV',
    image: ToyotaInnova,
    seats: 7,
    fuel: 'Diesel',
    mileage: '15+ km/l',
    pricePerKm: '₹17',
    pricePerDay: '₹3,600',
    price8hr: '₹3,000',
    features: ['Captain Seats', 'AC', 'GPS', 'Music'],
    popular: true,
    description:
      'Premium SUV for comfortable long-distance family travel in Odisha.',
  },

  {
    name: 'Toyota Innova Crysta',
    type: 'Luxury SUV',
    image: ToyotaInnovaCrysta,
    seats: 7,
    fuel: 'Diesel',
    mileage: '14+ km/l',
    pricePerKm: '₹20',
    pricePerDay: '₹4,500',
    price8hr: '₹3,500',
    features: [
      'Captain Seats',
      'Premium Interior',
      'Entertainment',
      'GPS',
    ],
    popular: true,
    description:
      'Luxury family vehicle with superior comfort for Odisha road trips.',
  },

  // LUXURY CARS
  {
    name: 'Mercedes CLA 200',
    type: 'Luxury Sedan',
    image: MercedesCLA200,
    seats: 4,
    fuel: 'Petrol',
    mileage: '15+ km/l',
    pricePerKm: '₹95',
    pricePerDay: '₹15,000',
    price8hr: '₹12,000',
    features: ['Luxury Seats', 'Sunroof', 'Premium Audio', 'GPS'],
    popular: true,
    description:
      'Premium luxury sedan for VIP guests, weddings, and executive travel.',
  },

  {
    name: 'Audi A4',
    type: 'Luxury Sedan',
    image: AudiA4,
    seats: 4,
    fuel: 'Petrol',
    mileage: '14+ km/l',
    pricePerKm: '₹90',
    pricePerDay: '₹15,000',
    price8hr: '₹11,000',
    features: ['Leather Seats', 'Premium Audio', 'GPS', 'AC'],
    popular: true,
    description:
      'Executive luxury sedan with elegant interiors and smooth performance.',
  },

  {
    name: 'Jaguar XF',
    type: 'Luxury Sedan',
    image: JaguarXF,
    seats: 4,
    fuel: 'Petrol',
    mileage: '12+ km/l',
    pricePerKm: '₹100',
    pricePerDay: '₹25,000',
    price8hr: '₹20,000',
    features: ['Luxury Interior', 'Sunroof', 'Premium Audio', 'GPS'],
    popular: true,
    description:
      'Ultra luxury sedan for elite business travel and weddings.',
  },

  // WINGER
  {
    name: '13 Seater Winger',
    type: 'Mini Van',
    image: SeaterWinger,
    seats: 13,
    fuel: 'Diesel',
    mileage: '12+ km/l',
    pricePerKm: '₹20',
    pricePerDay: '₹4,200',
    price8hr: '₹3,700',
    features: ['Pushback Seats', 'Music', 'GPS', 'AC'],
    popular: false,
    description:
      'Ideal for medium groups, corporate events, and Odisha sightseeing.',
  },

  {
    name: '9 Seater Winger',
    type: 'Mini Van',
    image: SeaterWinger9,
    seats: 9,
    fuel: 'Diesel',
    mileage: '13+ km/l',
    pricePerKm: '₹20',
    pricePerDay: '₹4,800',
    price8hr: '₹4,000',
    features: ['Pushback Seats', 'AC', 'Music', 'GPS'],
    popular: false,
    description:
      'Comfortable mini van with pushback seating for family tours.',
  },

  // TEMPO TRAVELLER
  {
    name: '13 Seater Traveller',
    type: 'Tempo Traveller',
    image: SeaterTraveller13,
    seats: 13,
    fuel: 'Diesel',
    mileage: '10+ km/l',
    pricePerKm: '₹25',
    pricePerDay: '₹6,000',
    price8hr: '₹5,000',
    features: ['Pushback Seats', 'GPS', 'Music', 'Luggage Space'],
    popular: true,
    description:
      'Popular group vehicle for family trips, corporate tours, and events.',
  },

  {
    name: '17 Seater Traveller',
    type: 'Tempo Traveller',
    image: SeaterTraveller17,
    seats: 17,
    fuel: 'Diesel',
    mileage: '9+ km/l',
    pricePerKm: '₹26',
    pricePerDay: '₹6,300',
    price8hr: '₹5,300',
    features: ['Pushback Seats', 'Music', 'GPS', 'Charging Port'],
    popular: true,
    description:
      'Spacious traveller for big groups and outstation Odisha tours.',
  },

  {
    name: '25 Seater Traveller',
    type: 'Luxury Tempo Traveller',
    image: SeaterTraveller25,
    seats: 25,
    fuel: 'Diesel',
    mileage: '8+ km/l',
    pricePerKm: '₹38',
    pricePerDay: '₹8,500',
    price8hr: '₹7,000',
    features: ['Luxury Pushback', 'LED TV', 'GPS', 'Music'],
    popular: true,
    description:
      'Luxury traveller for weddings, group vacations, and corporate travel.',
  },

  // COACH / BUS
  {
    name: '36 Seater Bharat Benz Coach',
    type: 'Luxury Bus',
    image: BharatBenzCoach,
    seats: 36,
    fuel: 'Diesel',
    mileage: '6+ km/l',
    pricePerKm: '₹80',
    pricePerDay: '₹20,000',
    price8hr: '₹18,000',
    features: ['Luxury Seats', 'AC', 'LED TV', 'GPS'],
    popular: true,
    description:
      'Premium luxury coach for large groups, tours, and corporate events.',
  },

  {
    name: '44 Seater Coach',
    type: 'Luxury Bus',
    image: CoachSeater44,
    seats: 44,
    fuel: 'Diesel',
    mileage: '5+ km/l',
    pricePerKm: '₹85',
    pricePerDay: '₹23,000',
    price8hr: '₹20,000',
    features: ['AC', 'Luxury Seats', 'GPS', 'Entertainment'],
    popular: false,
    description:
      'Large luxury coach for educational tours and corporate travel.',
  },

  {
    name: 'Volvo 45 Seater AC Coach',
    type: 'Volvo Bus',
    image: Volvo45Seater,
    seats: 45,
    fuel: 'Diesel',
    mileage: '5+ km/l',
    pricePerKm: '₹110',
    pricePerDay: '₹26,000',
    price8hr: '₹22,000',
    features: ['Volvo Comfort', 'WiFi', 'GPS', 'AC'],
    popular: true,
    description:
      'Top-class Volvo AC coach with premium comfort for long-distance tours.',
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
      <SEO
        title="Cab Rental in Odisha | Taxi Service | Odisha Indiatrip"
        description="Book reliable cab rental services in Odisha with professional drivers and comfortable vehicles. Available for Bhubaneswar airport transfers, Puri sightseeing, Jagannath Temple visits, Chilika Lake tours, family trips, and outstation travel."
        keywords="cab rental Odisha, taxi service Odisha, Bhubaneswar cab booking, Puri taxi service, Odisha car rental, airport taxi Bhubaneswar, Jagannath Puri cab, Odisha tour cab, outstation taxi Odisha, Odisha travel taxi"
        url="https://odishaindiatrip.com/cab-rentals"
      />
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
              name='Open Inquiry Form'
              onClick={onOpenInquiry}
              className="btn-secondary text-sm"
            >
              Get Custom Quote
            </button>
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

export default CabRentalPage;