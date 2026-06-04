import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Headphones,
  Users,
} from 'lucide-react';
import SEO from '../components/SEO';
import JagannathTemple from '../assets/jagannath-puri-temple-odisha.webp';
import Tribe from '../assets/Tribes-of-Odisha.webp';
import Beach from '../assets/Puri-Sea-Beach.webp';
import Wildlife from '../assets/wildlife.webp';

const heroSlides = [
  {
    image: JagannathTemple,
    headline: 'Unveiling the',
    highlight: 'Soul',
    subline: 'of Incredible India',
    description:
      'From the sacred Jagannath Temple to the pristine beaches of Gopalpur — experience Odisha with the locals who know it best.',
  },
  {
    image: Beach,
    headline: 'Pristine',
    highlight: 'Beaches',
    subline: 'of Eastern India',
    description:
      'Gopalpur-on-Sea, Puri Beach, Chandipur — where golden sands meet the Bay of Bengal in perfect harmony.',
  },
  {
    image: Wildlife,
    headline: 'Untamed',
    highlight: 'Wildlife',
    subline: 'of Odisha',
    description:
      'Bhitarkanika mangroves, Chilika dolphins, Simlipal tigers — discover nature at its rawest and most beautiful.',
  },
  {
    image: Tribe,
    headline: 'Ancient',
    highlight: 'Tribal',
    subline: 'Culture Awaits',
    description:
      'Walk among the Dongria Kondh, visit weekly haats, and witness traditions unchanged for millennia.',
  },
];

const destinations = [
  'Puri',
  'Konark',
  'Bhubaneswar',
  'Chilika Lake',
  'Bhitarkanika',
  'Tribal Odisha',
  'Gopalpur',
  'Kolkata',
  'Deoghar',
  'Cuttack',
  'Ganga Sagar',
];

const trustBadges = [
  { icon: Headphones, label: '24/7 Local Support', sub: 'Always Available' },
  { icon: Users, label: '10,000+ Happy Travelers', sub: 'Since 2015' },
];

const Hero = () => {
  const navigate = useNavigate(); // 2. Initialize the hook
  const [current, setCurrent] = useState(0);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);

  const prev = () => {
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  };

  const next = () => {
    setCurrent((c) => (c + 1) % heroSlides.length);
  };

  // 3. Handle the programmatic redirection purely via routes
  const handleExplore = () => {
    if (!destination) {
      // Fallback to the main packages overview layout if no destination is specified
      navigate('/destinations');
      return;
    }

    // Convert string like "Chilika Lake" -> "chilika-lake"
    const destinationSlug = destination.toLowerCase().replace(/\s+/g, '-');

    // Generates a query string context for your package list filtering view
    const queryParams = new URLSearchParams({
      search: destinationSlug,
      date: date,
      duration: duration,
    }).toString();

    navigate(`/destinations?${queryParams}`);
  };

  const slide = heroSlides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <SEO
        title="Best DMC Odisha Tour Packages & Travel Agency | Odisha Indiatrip Pvt. Ltd."
        description="Discover the best Odisha tour packages with Odisha Indiatrip Pvt. Ltd. Explore Jagannath Puri, Konark Sun Temple, Chilika Lake, Bhubaneswar, beaches, wildlife, tribal tours, eco tourism, and cab rental services in Odisha."
        keywords="Odisha tour packages, Odisha tourism, Odisha travel agency, Puri tour package, Jagannath Puri tour, Konark tour, Chilika Lake tour, Odisha cab rental, Odisha holiday packages, Odisha sightseeing"
        url="https://odishaindiatrip.com/"
      />
      {/* Background Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/60 to-navy-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/50 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      {/* Navigation Arrows */}
      <button
        name='prev'
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        name='next'
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? 'w-8 bg-amber-400'
                : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-sm font-medium">
              Your Trusted Odisha DMC Since 2015
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            {slide.headline}{' '}
            <span className="text-amber-400">{slide.highlight}</span>
            <br />
            {slide.subline}
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            {slide.description}
          </p>

          {/* Search Bar */}
          <div>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Destination */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />

                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 appearance-none cursor-pointer"
                  >
                    <option value="" className="text-navy-900">
                      Destination
                    </option>

                    {destinations.map((d) => (
                      <option
                        key={d}
                        value={d}
                        className="text-navy-900"
                      >
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />

                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
                  />
                </div>

                {/* Duration */}
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />

                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 appearance-none cursor-pointer"
                  >
                    <option value="" className="text-navy-900">
                      Duration
                    </option>

                    <option value="2" className="text-navy-900">
                      1-2 Days
                    </option>

                    <option value="4" className="text-navy-900">
                      3-5 Days
                    </option>

                    <option value="7" className="text-navy-900">
                      6-8 Days
                    </option>

                    <option value="10" className="text-navy-900">
                      9+ Days
                    </option>
                  </select>
                </div>

                {/* Button */}
                <button
                  name='explore'
                  onClick={handleExplore} // 4. Fires route navigation exclusively
                  className="btn-primary rounded-xl py-3 text-sm"
                >
                  <Search className="w-4 h-4" />
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl place-items-center">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 text-amber-400" />
              </div>

              <div>
                <p className="text-white text-sm font-semibold">
                  {badge.label}
                </p>

                <p className="text-white/50 text-xs">
                  {badge.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;