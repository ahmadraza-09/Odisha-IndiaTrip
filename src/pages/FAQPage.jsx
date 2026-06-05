import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SEO from '../components/SEO'
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What is the best time to visit Odisha?',
    answer:
      'October to March is the best time to visit Odisha for pleasant weather and sightseeing.',
  },

  {
    question: 'Do you provide hotel booking services?',
    answer:
      'Yes, we provide hotel booking services in Puri, Bhubaneswar, Konark, Daringbadi and more.',
  },

  {
    question: 'Can I customize my Odisha tour package?',
    answer:
      'Yes, all our tour packages can be customized according to your needs.',
  },

  {
    question: 'Do you provide transportation?',
    answer:
      'Yes, we provide private cab and transportation services.',
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <SEO
        title="FAQ | Odisha Tour Packages, Hotels & Travel Information"
        description="Find answers to common questions about Odisha tour packages, hotel bookings, cab services, customized trips, best time to visit Odisha, and travel planning assistance."
        keywords="Odisha travel FAQ, Odisha tourism questions, Odisha tour package FAQ, Odisha hotel booking, Odisha cab service, best time to visit Odisha, Odisha travel guide, Odisha holiday planning"
        url="https://odishaindiatrip.com/faq"
      />
      <div className="gradient-navy py-16 text-center">
        <h1 className="font-display text-5xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h1>

        <p className="text-white/60">
          Everything you need to know before planning your Odisha trip.
        </p>
      </div>

      <div className="container-max section-padding max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-lg text-navy-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 transition ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
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

export default FAQPage;