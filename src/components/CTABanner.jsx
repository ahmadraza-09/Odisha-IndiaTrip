import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTABanner = ({ onOpenInquiry }) => {
  return (
    <section className="relative overflow-hidden reveal-scale">
      <div className="gradient-amber py-16 sm:py-20">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Ready to Explore Odisha?
          </h2>

          <p className="text-navy-800/70 text-lg max-w-xl mx-auto mb-8">
            Get a customized itinerary and free quote from our local travel
            experts. No obligations, just honest advice.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              name='Get Free Quote'
              onClick={onOpenInquiry}
              className="btn-secondary px-8 py-3.5 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Get Free Quote
            </button>

            <a
              href="tel:+919958826437"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/20 hover:bg-white/30 text-navy-900 font-semibold rounded-lg transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>
            <div className="flex flex-wrap justify-center gap-4 flex-col sm:flex-row items-center pt-10">
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
    </section>
  );
};

export default CTABanner;