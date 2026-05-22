import { Link, useParams } from 'react-router-dom';
import { hotels } from '../data/hotels';
import { Star, MapPin } from 'lucide-react';

const CityHotelsPage = () => {
  const { city } = useParams();

  const cityHotels = hotels.filter((hotel) => hotel.city === city);

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <div className="gradient-navy py-16 text-center">
        <h1 className="font-display text-4xl font-bold text-white capitalize">
          Hotels in {city}
        </h1>
      </div>

      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-display text-2xl font-bold text-navy-900">
                      {hotel.name}
                    </h2>

                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      {hotel.rating}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 mb-3">
                    <MapPin className="w-4 h-4" />
                    {hotel.location}
                  </div>

                  <p className="text-slate-600 mb-4">
                    {hotel.price}
                  </p>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition">
                      Book Now
                    </button>

                    <Link
                      to={`/hotel/${hotel.id}`}
                      className="flex-1 border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white py-3 rounded-xl font-semibold transition text-center"
                    >
                      View Details
                    </Link>
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

export default CityHotelsPage;