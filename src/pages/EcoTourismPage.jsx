import {
  TreePine,
  MapPin,
  Calendar,
  CheckCircle,
  Tent,
} from 'lucide-react';
import SEO from '../components/SEO';

import { ecoRetreats } from '../data/content';

const EcoTourismPage = ({ onOpenInquiry }) => {
  return (
    <div className="pt-24">
      <SEO
        title="Eco Tourism in Odisha | Luxury Eco Retreats & Glamping Experiences"
        description="Experience eco tourism in Odisha with luxury glamping retreats, nature camps, wildlife adventures, waterfalls, forests, tribal culture, and sustainable travel experiences across Odisha."
        keywords="eco tourism Odisha, Odisha eco retreat, luxury camping Odisha, Odisha glamping, Odisha nature tourism, Odisha wildlife tourism, Odisha forest retreat, eco resorts Odisha, sustainable tourism Odisha, Odisha travel packages"
        url="https://odishaindiatrip.com/eco-tourism"
      />
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ecoRetreats?.[2]?.image}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/60 to-navy-950/90" />
        </div>

        <div className="relative z-10 py-16 sm:py-24">
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 text-sm font-semibold mb-4">
              Sustainable Luxury
            </span>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Eco Tourism in Odisha
            </h1>

            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Experience Odisha&apos;s wilderness in luxury glamping retreats —
              where sustainable tourism meets premium comfort in the heart of
              nature.
            </p>
          </div>
        </div>
      </div>

      {/* About Eco Tourism */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
                Odisha Eco Tourism
              </span>

              <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
                Luxury Glamping in Nature
              </h2>

              <p className="text-navy-500 text-base leading-relaxed mb-4">
                The Odisha Eco Retreat initiative by the Department of Tourism
                brings world-class glamping experiences to the state&apos;s most
                stunning natural locations. From the banks of Hirakud Dam to the
                misty hills of Koraput, each retreat offers luxury Swiss tents,
                gourmet dining, and curated activities — all with minimal
                environmental impact.
              </p>

              <p className="text-navy-500 text-base leading-relaxed mb-6">
                These seasonal retreats (October to March) are perfect for
                travelers who want to experience Odisha&apos;s wild side without
                sacrificing comfort. Each location is carefully chosen to
                showcase a different facet of the state&apos;s incredible
                biodiversity and cultural heritage.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-navy-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Nature & Water</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-navy-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Eco-Friendly Operations</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-navy-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Luxury Swiss Tents</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-navy-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>All Meals Included</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={ecoRetreats?.[3]?.image}
                alt="Eco Retreat"
                className="rounded-2xl object-cover w-full h-48"
              />

              <img
                src={ecoRetreats?.[4]?.image}
                alt="Eco Retreat"
                className="rounded-2xl object-cover w-full h-48 mt-8"
              />

              <img
                src={ecoRetreats?.[1]?.image}
                alt="Eco Retreat"
                className="rounded-2xl object-cover w-full h-48"
              />

              <img
                src={ecoRetreats?.[6]?.image}
                alt="Eco Retreat"
                className="rounded-2xl object-cover w-full h-48 mt-8"
              />
            </div>
          </div>

          {/* Eco Retreats */}
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-8">
            Eco Retreat Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecoRetreats.map((retreat) => (
              <div
                key={retreat.id}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover shadow-sm"
              >
                <div className="relative image-zoom aspect-[4/3]">
                  <img
                    src={retreat.image}
                    alt={retreat.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1">
                      <TreePine className="w-3 h-3" />
                      Eco Retreat
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-navy-900 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {retreat.location}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {retreat.name}
                  </h3>

                  <p className="text-navy-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {retreat.description}
                  </p>

                  {/* Season */}
                  <div className="flex items-center gap-2 text-sm text-navy-600 mb-3">
                    <Calendar className="w-4 h-4 text-emerald-500" />

                    <span className="font-medium">
                      Season: {retreat.season}
                    </span>
                  </div>

                  {/* Activities */}
                  <div className="mb-4">
                    <p className="text-xs text-navy-400 font-semibold uppercase tracking-wider mb-2">
                      Activities
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {retreat.activities.slice(0, 4).map((a) => (
                        <span
                          key={a}
                          className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-medium rounded"
                        >
                          {a}
                        </span>
                      ))}

                      {retreat.activities.length > 4 && (
                        <span className="px-2 py-0.5 bg-slate-50 text-navy-400 text-xs font-medium rounded">
                          +{retreat.activities.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Accommodation */}
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <p className="text-xs text-navy-400 font-semibold uppercase tracking-wider mb-2">
                      Accommodation
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {retreat.accommodation.slice(0, 3).map((a) => (
                        <span
                          key={a}
                          className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs font-medium rounded flex items-center gap-1"
                        >
                          <Tent className="w-3 h-3" />
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-navy-400 mb-1">
                        Starting from
                      </p>

                      <span className="text-2xl font-bold text-navy-900">
                        {retreat.price}
                      </span>

                      <p className="text-xs text-navy-400">
                        Per Night / Per Person
                      </p>
                    </div>

                    <button
                      onClick={onOpenInquiry}
                      className="btn-primary text-sm py-2 px-4"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-emerald-900 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Custom Eco Tourism Package
            </h3>

            <p className="text-emerald-200/70 mb-6 max-w-lg mx-auto">
              Combine multiple eco retreats into a single itinerary for the
              ultimate sustainable Odisha experience.
            </p>

            <button
              onClick={onOpenInquiry}
              className="btn-primary text-sm"
            >
              Plan My Eco Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoTourismPage;