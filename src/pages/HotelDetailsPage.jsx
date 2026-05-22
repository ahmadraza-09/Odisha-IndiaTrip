import { useParams } from 'react-router-dom';
import { hotels } from '../data/hotels';
import { MapPin, Star } from 'lucide-react';

const HotelDetailsPage = () => {
  const { id } = useParams();

  const hotel = hotels.find((item) => item.id === id);

  if (!hotel) {
    return <div className="pt-32 text-center">Hotel not found</div>;
  }

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-10">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-[500px] object-cover rounded-3xl"
          />

          <div>
            <div className="flex items-center gap-2 text-amber-500 mb-3">
              <Star className="w-5 h-5 fill-current" />
              <span>{hotel.rating}</span>
            </div>

            <h1 className="font-display text-4xl font-bold text-navy-900 mb-4">
              {hotel.name}
            </h1>

            <div className="flex items-center gap-2 text-slate-500 mb-5">
              <MapPin className="w-5 h-5" />
              {hotel.location}
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              {hotel.description}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">
                Amenities
              </h3>

              <div className="flex flex-wrap gap-3">
                {hotel.amenities.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-3xl font-bold text-amber-500 mb-6">
              {hotel.price}
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-semibold transition">
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsPage;