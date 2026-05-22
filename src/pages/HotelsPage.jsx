import { Link } from 'react-router-dom';
import { hotelCities } from '../data/hotels';
import { MapPin, ArrowRight } from 'lucide-react';

const HotelsPage = () => {
  return (
    <div className="pt-24">
      <div className="gradient-navy py-16 sm:py-20">
        <div className="container-max px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 text-sm font-semibold mb-4">
            Premium Stay Options
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Hotels
          </h1>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Discover comfortable and luxury hotels across Odisha’s top destinations.
          </p>
        </div>
      </div>

      <div className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelCities.map((city) => (
              <Link
                key={city.id}
                to={`/hotels/${city.id}`}
                className="group relative rounded-2xl overflow-hidden card-hover aspect-[4/5]"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-amber-400" />

                    <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">
                      Odisha
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-white mb-3">
                    {city.name}
                  </h2>

                  <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold">
                    Explore Hotels
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;