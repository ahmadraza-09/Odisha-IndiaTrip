import { Link } from 'react-router-dom';
import {
  Landmark,
  Bird,
  Tent,
  Waves,
} from 'lucide-react';
import Jagannath from '../assets/jagannath-puri-temple-odisha.webp'
import Wildlife from '../assets/wildlife.webp'
import Tribe from '../assets/tribe2.webp'
import Beach from '../assets/Puri-Sea-Beach.webp'

const categories = [
  {
    icon: Landmark,
    title: 'Spiritual & Heritage',
    description: 'Puri Jagannath, Konark Sun Temple, Lingaraj Temple',
    image:
      Jagannath,
    color: 'from-amber-500/80 to-amber-700/80',
    link: '/jagannath-darshan',
  },
  {
    icon: Bird,
    title: 'Wildlife & Nature',
    description: 'Chilika Lake, Bhitarkanika, Simlipal National Park',
    image:
      Wildlife,
    color: 'from-emerald-500/80 to-emerald-700/80',
    link: '/packages',
  },
  {
    icon: Tent,
    title: 'Tribal & Culture Tours',
    description: 'Rayagada, Koraput, Dongria Kondh, weekly haats',
    image:
      Tribe,
    color: 'from-orange-500/80 to-orange-700/80',
    link: '/tribal-tours',
  },
  {
    icon: Waves,
    title: 'Beach Holidays',
    description: 'Gopalpur-on-Sea, Puri Beach, Chandipur, Balaramgadi',
    image:
      Beach,
    color: 'from-sky-500/80 to-sky-700/80',
    link: '/packages',
  },
];

const FeaturedCategories = () => {
  return (
    <section id="categories" className="section-padding bg-slate-50">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Explore by Category
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Discover Odisha Your Way
          </h2>

          <p className="text-navy-500 text-lg leading-relaxed">
            From ancient temples to untouched tribal lands — choose the Odisha
            that speaks to your soul.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.title}
              to={cat.link}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer card-hover aspect-[4/5] block reveal stagger-${
                i + 1
              }`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent opacity-80`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <cat.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {cat.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {cat.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-amber-300 text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore Tours

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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;