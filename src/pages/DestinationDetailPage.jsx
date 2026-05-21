import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import SEO from '../components/SEO';
import { destinations } from '../data/content';

const DestinationDetailPage = ({ onOpenInquiry }) => {
  const { id } = useParams();

  const dest = destinations.find((d) => d.id === id);

  if (!dest) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">
            Destination Not Found
          </h2>

          <p className="text-navy-500 mb-4">
            The destination you are looking for does not exist.
          </p>

          <Link to="/destinations" className="btn-primary text-sm">
            Browse All Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <SEO
        title={`${dest.name} Tourism | Best Places to Visit in ${dest.name}, Odisha`}
        description={`${dest.description} Explore top tourist attractions, sightseeing places, culture, beaches, temples, wildlife, and travel experiences in ${dest.name}, Odisha.`}
        keywords={`${dest.name} tourism, ${dest.name} travel guide, places to visit in ${dest.name}, ${dest.name} attractions, Odisha tourism, Odisha travel destinations, ${dest.name} sightseeing`}
        url={`https://odishaindiatrip.com/destinations/${dest.id}`}
      />
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={dest.image}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/70 to-navy-950/90" />
        </div>

        <div className="relative z-10 py-16 sm:py-24">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Destinations
            </Link>

            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-amber-400" />

              <span className="text-amber-300 text-sm font-semibold uppercase tracking-wider">
                {dest.attractions.length} Top Attractions
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
              {dest.name}
            </h1>

            <p className="text-amber-300 text-lg font-medium mb-4">
              {dest.tagline}
            </p>

            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              {dest.description}
            </p>
          </div>
        </div>
      </div>

      {/* Attractions Grid */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-8">
            Top Tourist Attractions in {dest.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dest.attractions.map((attr) => (
              <div
                key={attr.name}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover shadow-sm"
              >
                <div className="relative image-zoom aspect-video">
                  <img
                    src={attr.image}
                    alt={attr.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-semibold rounded-md">
                      {attr.type}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {attr.name}
                  </h3>

                  <p className="text-navy-500 text-sm leading-relaxed">
                    {attr.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl gradient-amber text-center">
            <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">
              Plan Your {dest.name} Trip
            </h3>

            <p className="text-navy-800/70 mb-6 max-w-lg mx-auto">
              Our local experts know {dest.name} inside out. Get a customized
              itinerary with the best rates.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="btn-secondary text-sm"
              >
                Get Free Quote
              </button>

              <Link
                to="/packages"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-navy-900 font-semibold rounded-lg transition-all text-sm"
              >
                View Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;