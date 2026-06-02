import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO'

const CancellationPage = () => {
  return (
    <div className="pt-24">
      <SEO
        title="Cancellation Policy | Odisha Indiatrip"
        description="Read the Cancellation Policy of Odisha IndiaTrip for Odisha tour packages, hotel bookings, cab rentals, refund timelines, festival booking cancellations, and travel cancellation charges."
        keywords="Cancellation Policy Odisha Indiatrip, Odisha tour cancellation policy, Odisha hotel cancellation, cab booking cancellation Odisha, Odisha travel refund policy, Jagannath tour cancellation, Odisha package cancellation charges, Odisha trip cancellation"
        url="https://odishaindiatrip.com/cancellation-policy"
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
            Cancellation Policy
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
                General Cancellation Terms
              </h2>

              <p>
                All cancellation requests must be communicated in writing via
                email to{' '}
                <a
                  href="mailto:welcome@odishaindiatrip.com"
                  className="text-amber-600 hover:underline"
                >
                  welcome@odishaindiatrip.com
                </a>{' '}
                or through your dedicated booking coordinator. Verbal
                cancellations over the phone are not considered valid until
                confirmed in writing.
              </p>

              <p className="mt-3">
                The cancellation date is calculated from the date we receive
                your written request, not the date you send it. We will
                acknowledge receipt within 24 business hours.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                Cancellation Charges for Tour Packages
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-navy-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold">
                        Cancellation Period
                      </th>

                      <th className="px-4 py-3 text-left font-semibold">
                        Cancellation Fee
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 text-navy-700">
                        More than 30 days before departure
                      </td>

                      <td className="px-4 py-3 text-navy-700">
                        10% of total package cost
                      </td>
                    </tr>

                    <tr className="border-b border-slate-100 bg-slate-50">
                      <td className="px-4 py-3 text-navy-700">
                        21-30 days before departure
                      </td>

                      <td className="px-4 py-3 text-navy-700">
                        25% of total package cost
                      </td>
                    </tr>

                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 text-navy-700">
                        11-20 days before departure
                      </td>

                      <td className="px-4 py-3 text-navy-700">
                        50% of total package cost
                      </td>
                    </tr>

                    <tr className="border-b border-slate-100 bg-slate-50">
                      <td className="px-4 py-3 text-navy-700">
                        5-10 days before departure
                      </td>

                      <td className="px-4 py-3 text-navy-700">
                        75% of total package cost
                      </td>
                    </tr>

                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 text-navy-700">
                        Less than 5 days before departure
                      </td>

                      <td className="px-4 py-3 text-navy-700">
                        100% (no refund)
                      </td>
                    </tr>

                    <tr className="bg-red-50">
                      <td className="px-4 py-3 text-red-700 font-semibold">
                        No-show (no prior cancellation)
                      </td>

                      <td className="px-4 py-3 text-red-700 font-semibold">
                        100% (no refund)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-navy-500 text-sm">
                All cancellation fees are calculated on the total package cost,
                not the advance paid. If the cancellation fee exceeds the
                advance paid, the balance is payable by the customer.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                Peak Season & Festival Cancellations
              </h2>

              <p>
                The following periods have stricter cancellation terms due to
                high demand and non-refundable commitments with hotels and
                service providers:
              </p>

              <ul>
                <li>
                  <strong>Rath Yatra (June-July):</strong> 50% cancellation fee
                  for cancellations more than 30 days before departure. 100% for
                  cancellations within 30 days.
                </li>

                <li>
                  <strong>Durga Puja (October):</strong> 50% cancellation fee
                  for cancellations more than 30 days before departure. 100% for
                  cancellations within 30 days.
                </li>

                <li>
                  <strong>Christmas & New Year (Dec 20 - Jan 5):</strong> 50%
                  cancellation fee for cancellations more than 30 days before
                  departure. 100% for cancellations within 30 days.
                </li>

                <li>
                  <strong>Eco Retreat Season (Oct-Mar):</strong> Standard
                  cancellation policy applies, but eco retreat bookings are
                  non-refundable within 15 days of check-in.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                Cab Rental Cancellations
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-navy-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold">
                        Cancellation Period
                      </th>

                      <th className="px-4 py-3 text-left font-semibold">
                        Cancellation Fee
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 text-navy-700">
                        More than 24 hours before pickup
                      </td>

                      <td className="px-4 py-3 text-navy-700">
                        No charge (full refund)
                      </td>
                    </tr>

                    <tr className="border-b border-slate-100 bg-slate-50">
                      <td className="px-4 py-3 text-navy-700">
                        12-24 hours before pickup
                      </td>

                      <td className="px-4 py-3 text-navy-700">
                        25% of booking amount
                      </td>
                    </tr>

                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 text-navy-700">
                        6-12 hours before pickup
                      </td>

                      <td className="px-4 py-3 text-navy-700">
                        50% of booking amount
                      </td>
                    </tr>

                    <tr className="bg-red-50">
                      <td className="px-4 py-3 text-red-700 font-semibold">
                        Less than 6 hours or no-show
                      </td>

                      <td className="px-4 py-3 text-red-700 font-semibold">
                        100% (no refund)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                Hotel-Only Bookings
              </h2>

              <p>
                Hotel cancellation policies vary by property and season. The
                specific cancellation policy for your hotel booking will be
                communicated at the time of confirmation. In general:
              </p>

              <ul>
                <li>
                  Standard season: Free cancellation up to 48 hours before
                  check-in
                </li>

                <li>
                  Peak season: Free cancellation up to 7 days before check-in
                </li>

                <li>
                  Festival period: Non-refundable or 50% charge for any
                  cancellation
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                Cancellation by Odisha Indiatrip
              </h2>

              <p>
                In rare cases, we may need to cancel a tour due to:
              </p>

              <ul>
                <li>
                  Natural calamities, extreme weather, or force majeure events
                </li>

                <li>
                  Government advisories, curfews, or restricted access to
                  destinations
                </li>

                <li>
                  Failure to meet minimum group size (we will offer alternatives
                  or full refund)
                </li>

                <li>Unforeseen operational issues</li>
              </ul>

              <p className="mt-3">
                If we cancel a tour, you will receive a full refund of all
                payments made. We are not liable for any additional expenses
                (flights, visa fees, etc.) incurred by you in preparation for
                the trip.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                Partial Cancellations
              </h2>

              <p>
                If you wish to cancel part of your itinerary (e.g., skip one
                destination, reduce the number of days), this is treated as a
                modification, not a cancellation. The revised cost will be
                calculated, and any refund will be subject to the cancellation
                charges for the removed services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">
                Processing Time
              </h2>

              <p>
                Refunds for eligible cancellations will be processed within 7-10
                business days from the date of cancellation confirmation. The
                refund will be credited to the original payment method. Bank
                processing times may add 3-5 business days.
              </p>
            </section>

            <section className="pt-6 border-t border-slate-200">
              <p className="text-navy-500 text-sm">
                For cancellation requests, email{' '}
                <a
                  href="mailto:welcome@odishaindiatrip.com"
                  className="text-amber-600 hover:underline"
                >
                  welcome@odishaindiatrip.com
                </a>{' '}
                or call{' '}
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

export default CancellationPage;