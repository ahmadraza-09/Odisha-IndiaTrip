import {
  Car,
  Hotel,
  MapPin,
  BadgePercent,
  Shield,
  Clock,
} from 'lucide-react';

const strengths = [
  {
    icon: Car,
    title: 'Own Fleet of Cabs',
    description:
      '50+ well-maintained vehicles — Innova, Swift, Tempo Traveller — driven by trained local chauffeurs.',
    highlight: 'No third-party cabs',
  },
  {
    icon: Hotel,
    title: 'Handpicked Premium Hotels',
    description:
      'Curated stays from heritage properties to beach resorts — inspected and vetted by our team.',
    highlight: 'Quality guaranteed',
  },
  {
    icon: MapPin,
    title: 'Expert Local Guides',
    description:
      'Born-and-raised Odisha guides who bring every temple, tribe, and trail to life with real stories.',
    highlight: 'Authentic experiences',
  },
  {
    icon: BadgePercent,
    title: 'Direct Supplier Rates',
    description:
      'As a DMC we deal directly with hotels and transport — no middlemen, no markups, just honest pricing.',
    highlight: 'Best price promise',
  },
  {
    icon: Shield,
    title: 'Govt. Licensed & Insured',
    description:
      'Recognized by Odisha Tourism, GST-registered, and fully insured operations for your peace of mind.',
    highlight: 'Fully compliant',
  },
  {
    icon: Clock,
    title: '24/7 On-Ground Support',
    description:
      'Our local team is always a call away — from airport pickup to late-night temple visits, we have you covered.',
    highlight: 'Always available',
  },
];

const stats = [
  { value: '10,000+', label: 'Happy Travelers' },
  { value: '500+', label: 'Tours Completed' },
  { value: '50+', label: 'Own Vehicles' },
  { value: '9+', label: 'Years of Trust' },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="section-padding gradient-navy relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 text-sm font-semibold mb-4">
            Why Odisha IndiaTrip
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Trusted Local DMC Partner
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            We are not a marketplace. We are the operators on the
            ground — and that makes all the difference.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {strengths.map((item, i) => (
            <div
              key={item.title}
              className={`group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500 reveal stagger-${
                i + 1
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center mb-4 group-hover:bg-amber-500/25 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-amber-400" />
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed mb-3">
                {item.description}
              </p>

              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold">
                {item.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl bg-white/5 border border-white/10 reveal-scale stagger-${
                i + 1
              }`}
            >
              <p className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">
                {stat.value}
              </p>

              <p className="text-white/50 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;