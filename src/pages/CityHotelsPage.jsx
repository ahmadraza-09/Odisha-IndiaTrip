import { Link, useParams } from 'react-router-dom';
import { hotels } from '../data/hotels';
import { Star, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const CityHotelsPage = () => {
  const { city } = useParams();

  const cityHotels = hotels.filter((hotel) => hotel.city === city);

  const handleBookNow = (hotel) => {
    const message = `Hello, I want to book ${hotel.name} in ${city}. Please share details.`;

    const whatsappUrl = `https://wa.me/919958826437?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <SEO
        title={`Hotels in ${city} Odisha | Luxury, Budget & Family Hotels`}
        description={`Find the best hotels in ${city}, Odisha with comfortable stays, luxury accommodations, family-friendly hotels, beach resorts, and affordable rooms for your Odisha trip.`}
        keywords={`${city} hotels, hotels in ${city} Odisha, ${city} accommodation, luxury hotels ${city}, budget hotels ${city}, Odisha hotel booking, family hotels ${city}, resorts in ${city}`}
        url={`https://odishaindiatrip.com/hotels/${city}`}
      />

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

                  <div className="flex gap-3">
                    <button
                      name='Open Inquiry Form'
                      onClick={() => handleBookNow(hotel)}
                      className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition"
                    >
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

export default CityHotelsPage;