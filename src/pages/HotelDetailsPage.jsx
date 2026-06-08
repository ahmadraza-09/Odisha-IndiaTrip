import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Wifi,
  Car,
  UtensilsCrossed,
  Dumbbell,
  Sparkles,
  Waves,
  Users,
} from 'lucide-react';

import { hotels } from '../data/hotels';
import SEO from '../components/SEO';

const amenityIcons = {
  'Free WiFi': Wifi,
  WiFi: Wifi,
  'AC Rooms': Sparkles,
  AC: Sparkles,
  'Swimming Pool': Waves,
  Gym: Dumbbell,
  'Fitness Center': Dumbbell,
  Restaurant: UtensilsCrossed,
  Parking: Car,
  '24/7 Room Service': Clock,
  'Beach Access': Waves,
  '24/7 Security': Users,
};

const HotelDetailsPage = () => {
  const { id } = useParams();

  const hotel = hotels.find((item) => item.id === id);

  if (!hotel) {
    return (
      <div className="pt-24">
        <div className="container-max px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-bold text-navy-900 mb-4">
            Hotel Not Found
          </h1>

          <Link
            to="/hotels"
            className="bg-amber-500 text-white px-6 py-3 rounded-lg"
          >
            Back to Hotels
          </Link>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    const message = `Hello, I want to book ${hotel.name}. Please share room availability, pricing and booking details.`;

    const whatsappUrl = `https://wa.me/919958826437?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24">
      <SEO
        title={`${hotel.name} | Hotel in Odisha`}
        description={hotel.description}
        keywords={`${hotel.name}, Odisha Hotel, Hotel Booking Odisha`}
        url={`https://odishaindiatrip.com/hotel/${hotel.id}`}
      />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/40 to-navy-950/90" />
        </div>

        <div className="relative z-10 py-16 sm:py-20">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <Link
              to="/hotels"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Hotels
            </Link>

            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />

                <span className="text-navy-900 text-sm font-bold">
                  {hotel.rating}
                </span>
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
              {hotel.name}
            </h1>

            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4" />
              {hotel.location}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                  About This Hotel
                </h2>

                <p className="text-navy-600 text-base leading-relaxed">
                  {hotel.description}
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-navy-900 mb-4">
                  Amenities
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hotel.amenities.map((amenity) => {
                    const Icon =
                      amenityIcons[amenity] || CheckCircle;

                    return (
                      <div
                        key={amenity}
                        className="flex items-center gap-2 p-3 rounded-lg bg-slate-50"
                      >
                        <Icon className="w-4 h-4 text-amber-600" />

                        <span className="text-navy-700 text-sm">
                          {amenity}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="p-6 rounded-2xl border border-slate-200 shadow-lg">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-navy-900">
                      {hotel.price}
                    </span>

                    <p className="text-slate-500 text-sm">
                      Starting Price Per Night
                    </p>
                  </div>

                  <div className="space-y-3 mb-5 pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-navy-400" />

                      <span className="text-navy-600">
                        {hotel.location}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleBookNow}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold mb-3"
                  >
                    Book Now
                  </button>

                  <a
                    href="tel:+919958826437"
                    className="block text-center w-full border border-navy-900 text-navy-900 py-3 rounded-lg font-semibold hover:bg-navy-900 hover:text-white transition"
                  >
                    Call Now
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 mt-4">
                  <h3 className="font-bold text-navy-900 mb-2">
                    Need Help?
                  </h3>

                  <p className="text-navy-600 text-sm mb-3">
                    Contact our travel experts for hotel booking,
                    transfers and complete Odisha tour packages.
                  </p>

                  <a
                    href="tel:+919958826437"
                    className="text-amber-600 font-semibold hover:underline"
                  >
                    +91 99588 26437
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;