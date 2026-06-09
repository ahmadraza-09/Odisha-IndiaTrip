import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from "../components/SEO"

const faqs = [
  {
    category: 'Booking & Payments',
    questions: [
      { q: 'How do I book a tour?', a: 'You can book through our website by clicking "Book Now" on any package, or contact our team directly at +91 99588 26437 or welcome@odishaindiatrip.com. A 30% advance is required to confirm your booking.' },
      { q: 'What payment methods do you accept?', a: 'We accept bank transfers (NEFT/RTGS/IMPS), UPI, credit/debit cards, and demand drafts. For bookings above ₹50,000, cash payments are not accepted per RBI guidelines.' },
      { q: 'Is travel insurance included?', a: 'Travel insurance is not included unless explicitly mentioned. We strongly recommend purchasing comprehensive travel insurance covering medical emergencies, trip cancellations, and baggage loss.' },
      { q: 'Can I get a discount for group bookings?', a: 'Yes! We offer special discounts for groups of 10 or more. Contact our B2B team at welcome@odishaindiatrip.com for custom quotes.' },
    ],
  },
  {
    category: 'Cancellations & Refunds',
    questions: [
      { q: 'What is your cancellation policy?', a: 'Cancellation fees depend on timing: 30+ days = 10% fee, 21-30 days = 25%, 11-20 days = 50%, 5-10 days = 75%, less than 5 days = 100% (no refund). See our full Cancellation Policy page for details.' },
      { q: 'Can I reschedule instead of cancelling?', a: 'Yes! You can reschedule your trip to any future date at no extra cost (subject to availability). Simply contact us to modify your booking dates.' },
      { q: 'How long does a refund take?', a: 'After cancellation approval, refunds are initiated within 2 business days and credited to your original payment method within 7-10 business days.' },
      { q: 'What if you cancel the tour?', a: 'If we cancel due to unforeseen circumstances (weather, government restrictions), you receive a full refund or the option to reschedule at no cost.' },
    ],
  },
  {
    category: 'Tours & Experiences',
    questions: [
      { q: 'What is the best time to visit Odisha?', a: 'October to March is ideal — pleasant weather, clear skies, and all destinations are fully accessible. Avoid May-September (monsoon) unless you want monsoon experiences.' },
      { q: 'Are tours suitable for families with kids?', a: 'Yes! Most tours are family-friendly. We can customize itineraries based on children\'s ages and interests. Inform us about specific needs.' },
      { q: 'Can you accommodate dietary restrictions?', a: 'Absolutely. Inform us of vegetarian, vegan, gluten-free, or allergy-specific requirements at booking, and we\'ll coordinate with hotels and restaurants.' },
      { q: 'Do I need permits for tribal areas?', a: 'Some tribal areas require Restricted Area Permits (RAP) or Protected Area Permits (PAP). We assist in obtaining these — just provide your identity documents at booking.' },
    ],
  },
  {
    category: 'Accommodations',
    questions: [
      { q: 'What hotels are included in packages?', a: 'We partner with 3-star to 5-star hotels across Odisha. Specific hotel names are confirmed at booking. Check our "Our Hotels" page to see properties in each city.' },
      { q: 'Can I upgrade my hotel?', a: 'Yes, room upgrades are available for an additional cost. Contact us with your preference and we\'ll arrange it.' },
      { q: 'Is WiFi and AC available at all hotels?', a: 'Most hotels have WiFi and AC. However, in tribal and remote areas, connectivity may be limited. We inform you during itinerary planning.' },
    ],
  },
  {
    category: 'Transport',
    questions: [
      { q: 'What vehicles do you use?', a: 'We have 50+ well-maintained vehicles: Sedans (4 passengers), SUVs (6-7 passengers), and Tempo Travellers (12-16 passengers). Assignment depends on your group size.' },
      { q: 'Are drivers trained and insured?', a: 'Yes, all drivers are trained, licensed, and have 5+ years of experience. All vehicles are fully insured.' },
      { q: 'Can I rent a cab without a tour package?', a: 'Yes! We offer standalone cab rentals. Contact us for daily or weekly rental rates.' },
      { q: 'What if a vehicle breaks down?', a: 'We have backup vehicles. A replacement is arranged within 2 hours, or you receive a pro-rata refund.' },
    ],
  },
  {
    category: 'Rath Yatra',
    questions: [
      { q: 'When is Rath Yatra 2026?', a: 'Rath Yatra 2026 falls on June 27. Bahuda Yatra (return) is July 5, and Suna Besha (Gold Attire) is July 6.' },
      { q: 'How early should I book?', a: 'At least 3-4 months in advance. Puri hotels sell out by March. Our Rath Yatra package includes guaranteed accommodation and premium viewing spots.' },
      { q: 'Is it safe for elderly visitors?', a: 'We arrange balcony/viewing gallery access so you can watch comfortably without being in the dense crowd.' },
      { q: 'Can I pull the chariot?', a: 'Yes! Anyone can pull the chariots — this is the unique aspect of Rath Yatra. Our guide will help you safely participate.' },
    ],
  },
  {
    category: 'General',
    questions: [
      { q: 'Do you offer 24/7 support?', a: 'Yes! Our team is available 24/7 during your tour. Call +91 99588 26437 or email welcome@odishaindiatrip.com anytime.' },
      { q: 'Can I customize my itinerary?', a: 'Absolutely! All packages can be customized. Tell us your interests, duration, budget, and dates — we\'ll create a bespoke itinerary.' },
      { q: 'Do you offer corporate outings?', a: 'Yes! We specialize in corporate group tours with team-building activities, offsite venues, and customized itineraries.' },
      { q: 'How do I request a quote?', a: 'Fill out the inquiry form, call +91 99588 26437, or email welcome@odishaindiatrip.com with your travel dates, group size, and preferences. We\'ll send a quote within 24 hours.' },
    ],
  },
];

const FAQPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="pt-24">
      <SEO
        title="FAQ | Odisha Tour Packages, Hotels & Travel Information"
        description="Find answers to common questions about Odisha tour packages, hotel bookings, cab services, customized trips, best time to visit Odisha, and travel planning assistance."
        keywords="Odisha travel FAQ, Odisha tourism questions, Odisha tour package FAQ, Odisha hotel booking, Odisha cab service, best time to visit Odisha, Odisha travel guide, Odisha holiday planning"
        url="https://odishaindiatrip.com/faq"
      />
      <div className="gradient-navy py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Frequently Asked Questions
          </h1>

          <p className="text-white/60 text-sm mt-2">
            Everything you need to know about traveling with Odisha Indiatrip Pvt. Ltd.
          </p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="space-y-12">
            {faqs.map((category, catIndex) => (
              <div key={category.category}>
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-6 pb-3 border-b-2 border-amber-500">
                  {category.category}
                </h2>

                <div className="space-y-3">
                  {category.questions.map((faq, qIndex) => {
                    const idx = catIndex * 1000 + qIndex;
                    const open = expandedIndex === idx;

                    return (
                      <div
                        key={idx}
                        className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                      >
                        <button
                          onClick={() =>
                            setExpandedIndex(open ? null : idx)
                          }
                          className="w-full px-6 py-4 flex items-start gap-3 text-left hover:bg-slate-50 transition-colors duration-200"
                        >
                          <ChevronDown
                            className={`w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                              open ? 'rotate-180' : ''
                            }`}
                          />

                          <span className="font-semibold text-navy-900">
                            {faq.q}
                          </span>
                        </button>

                        {open && (
                          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                            <p className="text-navy-600 text-base leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-amber-50 border border-amber-200">
            <h3 className="font-display font-bold text-navy-900 text-lg mb-2">
              Didn't find your answer?
            </h3>

            <p className="text-navy-600 mb-4">
              Our team is here to help! Reach out anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919958826437"
                className="btn-primary text-sm px-6 py-2.5"
              >
                Call Us: +91 99588 26437
              </a>

              <a
                href="mailto:welcome@odishaindiatrip.com"
                className="btn-secondary text-sm px-6 py-2.5"
              >
                Email: welcome@odishaindiatrip.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;