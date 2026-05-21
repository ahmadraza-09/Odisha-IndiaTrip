import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { destinations } from '../data/content';
import SEO from '../components/SEO'

const DestinationsPage = () => {
  return (
    <div className="pt-24">
      <SEO
        title="Best Tourist Destinations in Odisha | Puri, Konark, Chilika & More"
        description="Explore the best tourist destinations in Odisha including Jagannath Puri, Konark Sun Temple, Chilika Lake, Bhubaneswar, Daringbadi, Bhitarkanika, waterfalls, beaches, wildlife, and cultural heritage sites."
        keywords="Odisha destinations, tourist places in Odisha, Puri tourism, Konark Sun Temple, Chilika Lake tour, Bhubaneswar sightseeing, Odisha beaches, Odisha wildlife, Odisha travel destinations, best places to visit in Odisha"
        url="https://odishaindiatrip.com/destinations"
      />
      {/* Header */}
      <div className="gradient-navy py-16 sm:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 text-sm font-semibold mb-4">
            Explore Odisha & Beyond
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Top Destinations
          </h1>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From the sacred temples of Puri to the colonial charm of Kolkata —
            discover the destinations that make Eastern India unforgettable.
          </p>
        </div>
      </div>

      <div className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                to={`/destinations/${dest.id}`}
                className="group relative rounded-2xl overflow-hidden card-hover aspect-[4/5] block"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-amber-400" />

                    <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider">
                      {dest.attractions.length} Attractions
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-white mb-1">
                    {dest.name}
                  </h2>

                  <p className="text-white/60 text-sm mb-4">
                    {dest.tagline}
                  </p>

                  <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explore Attractions
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

export default DestinationsPage;