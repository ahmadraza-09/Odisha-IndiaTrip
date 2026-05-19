import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsPage = () => {
  return (
    <div className="pt-24">
      <div className="gradient-navy py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Terms & Conditions
          </h1>

          <p className="text-white/60 text-sm mt-2">
            Last updated: May 1, 2026
          </p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="prose-custom space-y-8">
            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                1. General
              </h2>

              <p>
                These Terms and Conditions govern the relationship between Odisha
                IndiaTrip ("Company", "we", "us", "our") and the customer ("you",
                "your") booking travel services through our website, phone,
                email, or in person. By making a booking, you agree to be bound
                by these terms.
              </p>

              <p>
                Odisha IndiaTrip is a registered travel company based in
                Bhubaneswar, Odisha, India. We operate as a Destination
                Management Company (DMC) providing tour packages, cab rentals,
                hotel bookings, and related travel services primarily in Odisha
                and Eastern India.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                2. Bookings & Payments
              </h2>

              <p>
                A booking is confirmed only upon receipt of advance payment.
                Verbal or email inquiries without payment do not constitute a
                confirmed booking.
              </p>

              <ul>
                <li>
                  A minimum advance of 30% of the total package cost is required
                  to confirm a booking. For peak season (October-March) and
                  festival periods (Rath Yatra, Durga Puja), 50% advance may be
                  required.
                </li>

                <li>
                  The balance payment must be received at least 7 days before
                  the tour start date. For last-minute bookings (within 7 days
                  of travel), full payment is required at the time of booking.
                </li>

                <li>
                  Payments can be made via bank transfer (NEFT/RTGS/IMPS), UPI,
                  credit/debit card, or demand draft. Cash payments above
                  ₹50,000 are not accepted per RBI guidelines.
                </li>

                <li>
                  All prices are quoted in Indian Rupees (INR) and are inclusive
                  of applicable taxes unless stated otherwise.
                </li>

                <li>
                  Prices are subject to change without prior notice until a
                  booking is confirmed with advance payment.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                3. Itinerary & Services
              </h2>

              <p>
                The itinerary provided at the time of booking is indicative and
                may be modified due to local conditions, weather, road closures,
                festival schedules, or other factors beyond our control. We will
                make reasonable efforts to provide equivalent alternatives.
              </p>

              <ul>
                <li>
                  Hotel categories (3-star, 4-star, etc.) are based on local
                  classification and may differ from international standards.
                  Specific hotel names are confirmed at the time of booking.
                </li>

                <li>
                  Vehicle types (Sedan, SUV, Tempo Traveller) are indicative.
                  Upgrades may be provided at no extra cost, but downgrades due
                  to unavailability will be refunded proportionately.
                </li>

                <li>
                  AC in vehicles operates only when the engine is running and in
                  areas where ambient temperature permits. AC may be turned off
                  in hilly/tribal areas for safety reasons.
                </li>

                <li>
                  Sightseeing entries, boat rides, and permits are subject to
                  government regulations and availability. Closure of monuments
                  or restricted access is beyond our control.
                </li>

                <li>
                  VIP Darshan arrangements at Jagannath Temple are subject to
                  temple trust regulations and may be cancelled without notice
                  by the temple authorities.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                4. Travel Documents & Identification
              </h2>

              <p>
                It is the customer's responsibility to carry valid
                government-issued photo identification (Aadhaar Card, Passport,
                Voter ID, or Driving License) at all times during the tour. This
                is mandatory for hotel check-ins, monument entries, and tribal
                area permits.
              </p>

              <p>
                For foreign nationals, a valid passport and appropriate Indian
                visa are required. Restricted Area Permits (RAP) or Protected
                Area Permits (PAP) may be needed for certain tribal areas — we
                will assist in obtaining these but the responsibility for
                providing accurate documentation lies with the customer.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                5. Health & Safety
              </h2>

              <p>
                Customers must inform us of any medical conditions,
                disabilities, or dietary requirements at the time of booking.
                While we will make reasonable efforts to accommodate special
                needs, we cannot guarantee accessibility in all locations,
                particularly in tribal areas and heritage sites.
              </p>

              <p>
                Travel insurance is strongly recommended but not included in our
                packages unless explicitly stated. We are not liable for any
                medical emergencies, accidents, or health issues arising during
                the tour.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                6. Liability
              </h2>

              <p>
                Odisha IndiaTrip acts as an intermediary between the customer and
                service providers (hotels, transport companies, restaurants,
                monument authorities). While we carefully select our partners,
                we are not liable for:
              </p>

              <ul>
                <li>
                  Loss, damage, or theft of personal belongings during the tour
                </li>

                <li>
                  Accidents, injuries, or health issues arising during travel or
                  activities
                </li>

                <li>
                  Delays or cancellations due to weather, natural calamities,
                  strikes, political unrest, or government actions
                </li>

                <li>
                  Quality of food, service standards, or hygiene at third-party
                  establishments
                </li>

                <li>
                  Changes in monument entry fees, permit costs, or government
                  regulations after booking confirmation
                </li>
              </ul>

              <p>
                Our total liability in any circumstance shall not exceed the
                amount paid by the customer for the specific service in
                question.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                7. Intellectual Property
              </h2>

              <p>
                All content on our website — including text, images,
                itineraries, logos, and design — is the intellectual property of
                Odisha IndiaTrip and is protected under Indian copyright law.
                Reproduction, distribution, or commercial use without written
                permission is prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                8. Governing Law & Dispute Resolution
              </h2>

              <p>
                These terms are governed by the laws of India. Any disputes
                shall be subject to the exclusive jurisdiction of the courts in
                Bhubaneswar, Odisha. Before initiating legal proceedings, both
                parties agree to attempt resolution through good-faith
                negotiation or mediation.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                9. Changes to Terms
              </h2>

              <p>
                We reserve the right to modify these Terms and Conditions at any
                time. Changes will be effective upon posting on our website.
                Continued use of our services after changes constitutes
                acceptance of the revised terms.
              </p>
            </section>

            <section className="pt-6 border-t border-slate-200">
              <p className="text-navy-500 text-sm">
                For questions about these terms, contact us at{' '}
                <a
                  href="mailto:welcome@odishaindiatrip.com"
                  className="text-amber-600 hover:underline"
                >
                  welcome@odishaindiatrip.com
                </a>{' '}
                or{' '}
                <a
                  href="tel:+919958826437"
                  className="text-amber-600 hover:underline"
                >
                  +91 99588 26437
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;