import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  MapPin,
  Wifi,
  Car,
  UtensilsCrossed,
  Dumbbell,
  Sparkles,
  Waves,
} from 'lucide-react';
import SEO from "../components/SEO"

import { hotelCities , hotels } from '../data/hotels';

const amenityIcons = {
  'Free WiFi': Wifi,
  WiFi: Wifi,
  'AC Rooms': Sparkles,
  AC: Sparkles,
  'Swimming Pool': Waves,
  Gym: Dumbbell,
  Restaurant: UtensilsCrossed,
  Parking: Car,
};

const HotelCard = ({ hotel, cityId }) => {
  const handleBookNow = () => {
    const message = `Hello, I want to book ${hotel.name} in ${cityId}. Please share details.`;

    const whatsappUrl = `https://wa.me/919958826437?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <SEO
        title={`Hotels in ${cityId} Odisha | Luxury, Budget & Family Hotels`}
        description={`Find the best hotels in ${cityId}, Odisha with comfortable stays, luxury accommodations, family-friendly hotels, beach resorts, and affordable rooms for your Odisha trip.`}
        keywords={`${cityId} hotels, hotels in ${cityId} Odisha, ${cityId} accommodation, luxury hotels ${cityId}, budget hotels ${cityId}, Odisha hotel booking, family hotels ${cityId}, resorts in ${cityId}`}
        url={`https://odishaindiatrip.com/hotels/${cityId}`}
      />
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white px-3 py-1 rounded-lg shadow">
          <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
          <span className="font-semibold text-sm">{hotel.rating}</span>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-navy-900 mb-2">
          {hotel.name}
        </h2>

        <div className="flex items-center gap-2 text-slate-500 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{hotel.location}</span>
        </div>

        <p className="text-slate-600 text-sm mb-4">
          {hotel.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {hotel.amenities.slice(0, 4).map((amenity) => {
            const Icon = amenityIcons[amenity] || Sparkles;

            return (
              <span
                key={amenity}
                className="flex items-center gap-1 text-xs bg-slate-100 px-2 py-1 rounded-md"
              >
                <Icon className="w-3 h-3" />
                {amenity}
              </span>
            );
          })}
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-slate-500">
              Starting From
            </p>

            <h3 className="text-lg font-bold text-navy-900">
              {hotel.price}
            </h3>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleBookNow}
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Book Now
            </button>

            <Link
              to={`/hotel/${hotel.id}`}
              className="border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const HotelsCityPage = () => {
  const { cityId } = useParams();

  const city = hotelCities .find((item) => item.id === cityId);

  const cityHotels = hotels.filter(
    (hotel) => hotel.city === cityId
  );

  if (!city) {
    return (
      <div className="pt-24">
        <div className="container-max px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">
            City Not Found
          </h1>

          <Link
            to="/hotels"
            className="bg-amber-500 text-white px-6 py-3 rounded-lg"
          >
            Back To Hotels
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <div className="relative overflow-hidden">
        <img
          src={city.image}
          alt={city.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 py-20">
          <div className="container-max px-4">
            <Link
              to="/hotels"
              className="inline-flex items-center gap-2 text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              All Cities
            </Link>

            <h1 className="text-4xl font-bold text-white mb-3">
              Hotels in {city.name}
            </h1>

            <p className="text-white/80 max-w-2xl">
              {city.description}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-max px-4">
          {cityHotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityHotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  cityId={cityId}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-3">
                No Hotels Available
              </h2>

              <p className="text-slate-500 mb-6">
                Contact us for customized hotel arrangements.
              </p>

              <a
                href="tel:+919958826437"
                className="bg-amber-500 text-white px-6 py-3 rounded-lg"
              >
                Call Us
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelsCityPage;