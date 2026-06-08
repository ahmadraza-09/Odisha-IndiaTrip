import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { hotelCities } from '../data/hotels';
import SEO from "../components/SEO"

const HotelsPage = () => {
  return (
    <div className="pt-24">
      <SEO
        title="Hotels in Odisha | Luxury & Budget Hotels in Puri, Bhubaneswar & More"
        description="Browse the best hotels in Odisha including Puri, Bhubaneswar, Konark, Chilika, Gopalpur, and other top destinations. Find luxury, family, beachside, and budget hotel stays."
        keywords="Hotels in Odisha, Odisha hotels, Puri hotels, Bhubaneswar hotels, Konark hotels, Chilika hotels, beach hotels Odisha, luxury hotels Odisha, budget hotels Odisha, Odisha accommodation"
        url="https://odishaindiatrip.com/hotels"
      />
      <div className="gradient-navy py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Our Hotels
          </h1>

          <p className="text-white/60 text-sm mt-2">
            Hand-picked accommodations across Odisha&apos;s most popular
            destinations
          </p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
              Curated Stays
            </span>

            <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
              Choose Your City
            </h2>

            <p className="text-navy-500 text-lg leading-relaxed">
              We partner with the best hotels in each destination — from luxury
              heritage properties to cozy budget stays. Select a city to
              explore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotelCities.map((city) => (
              <Link
                key={city.id}
                to={`/hotels/${city.id}`}
                className="group relative rounded-2xl overflow-hidden card-hover aspect-[4/3] block"
              >
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">
                      {city.name}
                    </span>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-3">
                    {city.description}
                  </p>

                  <span className="text-amber-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    View Hotels
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
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