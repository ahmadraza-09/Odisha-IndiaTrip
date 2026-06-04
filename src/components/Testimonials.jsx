import { useState, useEffect, useCallback } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import MaleAvatar from '../assets/avatar/male-avatar.jpg'
import FemaleAvatar from '../assets/avatar/female-avatar.jpg'

const testimonials = [
  {
    name: 'Rajesh Sharma',
    location: 'Mumbai',
    text:
      'The Puri Jagannath Darshan package with Odisha Indiatrip Pvt. Ltd. was beyond our expectations. As one of the best Odisha tour operators, they provided excellent arrangements and a knowledgeable local guide who knew every story behind the temple. Truly a spiritual experience we will never forget.',
    rating: 5,
    tour: 'Puri Jagannath Darshan',
    image: MaleAvatar,
  },
  {
    name: 'Priya Menon',
    location: 'Bangalore',
    text:
      'The Tribal Odisha tour organized by Odisha Indiatrip Pvt. Ltd. opened our eyes to a completely different world. The weekly haats and Dongria Kondh villages were raw, real, and deeply moving. If you are looking for an authentic Odisha travel package, I highly recommend them.',
    rating: 5,
    tour: 'Tribal Odisha Expedition',
    image: FemaleAvatar,
  },
  {
    name: 'Rahul Kumar',
    location: 'Uttar Pradesh',
    text:
      'As a B2B partner, working with Odisha Indiatrip Pvt. Ltd. has been seamless. Their on-ground execution, vehicle quality, Odisha hotel bookings, and tour management services are consistently excellent. A reliable Destination Management Company in Odisha.',
    rating: 5,
    tour: 'B2B Partner',
    image: MaleAvatar,
  },
  {
    name: 'Anita Desai',
    location: 'Delhi',
    text:
      'The Chilika boat ride at sunset arranged by Odisha Indiatrip Pvt. Ltd. was magical. We spotted dolphins and migratory birds, and the eco-retreat stay was the perfect blend of nature and comfort. One of the best Odisha tour packages we have experienced.',
    rating: 5,
    tour: 'Chilika Bird Watching',
    image: FemaleAvatar,
  },
  {
    name: 'Sanjay Singh',
    location: 'Noida',
    text:
      'The Bhitarkanika wildlife tour with Odisha Indiatrip Pvt. Ltd. was a once-in-a-lifetime experience. Seeing saltwater crocodiles in their natural habitat from a boat was absolutely thrilling. Their Odisha wildlife tour planning and local support were outstanding.',
    rating: 5,
    tour: 'Bhitarkanika Wildlife Tour',
    image: MaleAvatar,
  },
  {
    name: 'Sunita Patel',
    location: 'Ahmedabad',
    text:
      'We booked the Golden Triangle of Odisha package through Odisha Indiatrip Pvt. Ltd. for our family. The kids loved the beaches, the elders loved the temples, and we all loved the local cuisine. This is one of the best family tour packages in Odisha.',
    rating: 5,
    tour: 'Golden Triangle of Odisha',
    image: FemaleAvatar,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (c) => (c - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(next, 4000);

    return () => clearInterval(timer);
  }, [isPaused, next]);

  const getVisibleCount = () => {
    if (
      typeof window !== 'undefined' &&
      window.innerWidth >= 1024
    ) {
      return 3;
    }

    if (
      typeof window !== 'undefined' &&
      window.innerWidth >= 768
    ) {
      return 2;
    }

    return 1;
  };

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount());

    update();

    window.addEventListener('resize', update);

    return () => window.removeEventListener('resize', update);
  }, []);

  const getVisibleTestimonials = () => {
    const result = [];

    for (let i = 0; i < visibleCount; i++) {
      const idx = (current + i) % testimonials.length;

      result.push({
        ...testimonials[idx],
        key: `${testimonials[idx].name}-${idx}`,
      });
    }

    return result;
  };

  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Traveler Stories
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            What Our Travelers Say
          </h2>

          <p className="text-navy-500 text-lg leading-relaxed">
            Real stories from real travelers — not paid reviews, just
            genuine experiences.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation */}
          <button
            name='prev'
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-navy-600 hover:bg-navy-900 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            name='next'
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-navy-600 hover:bg-navy-900 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((t) => (
              <div
                key={t.key}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 transition-all duration-500"
              >
                <Quote className="w-8 h-8 text-amber-200 mb-4" />

                <p className="text-navy-600 text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-navy-900 text-sm font-semibold">
                      {t.name}
                    </p>

                    <p className="text-navy-400 text-xs">
                      {t.location} &middot; {t.tour}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current
                    ? 'w-8 bg-amber-500'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;