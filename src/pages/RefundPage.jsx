import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundPage = () => {
  return (
    <div className="pt-24">
      <div className="gradient-navy py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">Refund Policy</h1>
          <p className="text-white/60 text-sm mt-2">Last updated: May 1, 2026</p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="prose-custom space-y-8">
            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">1. Eligibility for Refund</h2>
              <p>Refunds are applicable only when:</p>
              <ul>
                <li>You cancel a confirmed booking in accordance with our Cancellation Policy and are entitled to a partial or full refund</li>
                <li>We cancel a tour or service due to operational reasons, force majeure, or insufficient bookings</li>
                <li>A service was not delivered as promised due to our fault (e.g., vehicle breakdown with no replacement, hotel overbooking)</li>
                <li>You were overcharged due to a billing error</li>
              </ul>
              <p className="mt-3">Refunds are not applicable for:</p>
              <ul>
                <li>No-shows or cancellations that fall under the 100% cancellation fee bracket</li>
                <li>Services not used voluntarily (e.g., skipping a meal, not using a sightseeing entry)</li>
                <li>Changes to itinerary due to weather, road closures, or government restrictions</li>
                <li>Quality complaints about third-party services (hotels, restaurants) — we will raise the issue but refunds depend on the vendor</li>
                <li>Visa rejection or flight cancellations by airlines</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">2. Refund Calculation</h2>
              <p>Refund amounts are calculated as follows:</p>
              <ul>
                <li><strong>Cancellation Refund:</strong> Total amount paid minus applicable cancellation fee (see Cancellation Policy)</li>
                <li><strong>Service Failure Refund:</strong> Pro-rata refund for the specific service not delivered, calculated on the per-day/per-service cost from the package</li>
                <li><strong>Overcharge Refund:</strong> Full amount of the overcharge</li>
                <li><strong>Tour Cancellation by Us:</strong> Full refund of all payments received, with no deductions</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">3. Refund Method</h2>
              <p>Refunds will be processed through the original payment method:</p>
              <ul>
                <li><strong>Credit/Debit Card:</strong> Refunded to the same card. Processing time: 5-7 business days after initiation</li>
                <li><strong>Bank Transfer (NEFT/RTGS):</strong> Refunded to the same bank account. Processing time: 3-5 business days after initiation</li>
                <li><strong>UPI:</strong> Refunded to the same UPI ID. Processing time: 2-3 business days after initiation</li>
                <li><strong>Cash Payment:</strong> Refunded via bank transfer only, to an account provided by the customer</li>
              </ul>
              <p className="mt-3">We do not process refunds in cash or to a different payment method than the original. If the original payment method is no longer active, we will work with you to find an alternative bank account for the refund.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">4. Processing Timeline</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-navy-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold">Stage</th>
                      <th className="px-4 py-3 text-left font-semibold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 text-navy-700">Refund request received & acknowledged</td>
                      <td className="px-4 py-3 text-navy-700">Within 24 business hours</td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <td className="px-4 py-3 text-navy-700">Eligibility verification & approval</td>
                      <td className="px-4 py-3 text-navy-700">3-5 business days</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 text-navy-700">Refund initiation to payment processor</td>
                      <td className="px-4 py-3 text-navy-700">Within 2 business days of approval</td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <td className="px-4 py-3 text-navy-700">Credit to your account (bank processing)</td>
                      <td className="px-4 py-3 text-navy-700">3-7 business days (varies by bank)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-navy-700 font-semibold">Total estimated time</td>
                      <td className="px-4 py-3 text-navy-700 font-semibold">7-14 business days from request</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">5. Service-Specific Refund Terms</h2>

              <h3 className="font-semibold text-navy-900 mt-4 mb-2">Tour Packages</h3>
              <p>If a specific component of the package could not be delivered (e.g., Chilika boat ride cancelled due to weather), the refund is calculated on the standalone cost of that component, not the per-day average. We will offer an alternative activity first; refund is provided only if no acceptable alternative is available.</p>

              <h3 className="font-semibold text-navy-900 mt-4 mb-2">VIP Darshan</h3>
              <p>VIP Darshan arrangements at Jagannath Temple are subject to temple trust decisions. If the temple authorities cancel VIP access, we will attempt to arrange regular darshan and refund the difference. If no darshan is possible, the VIP darshan fee component is fully refunded.</p>

              <h3 className="font-semibold text-navy-900 mt-4 mb-2">Tribal Tours</h3>
              <p>Tribal haats (markets) operate on specific days. If your itinerary does not align with a haat day due to travel delays, we will adjust the schedule. No refund is provided for missing a haat due to customer-caused delays. If government authorities restrict access to tribal areas, we will offer alternative experiences or a pro-rata refund.</p>

              <h3 className="font-semibold text-navy-900 mt-4 mb-2">Eco Retreats</h3>
              <p>Eco Retreat bookings are managed by the Odisha Tourism Development Corporation (OTDC). Refunds for eco retreat cancellations follow OTDC's policy, which is typically non-refundable within 15 days of check-in. We will facilitate the refund process but the timeline depends on OTDC.</p>

              <h3 className="font-semibold text-navy-900 mt-4 mb-2">Cab Rentals</h3>
              <p>If a cab breaks down during the trip, we will arrange a replacement within 2 hours. If replacement is not possible, a pro-rata refund for the unused portion is provided. No refund for delays caused by traffic, road conditions, or customer-requested stops.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">6. Force Majeure</h2>
              <p>In the event of force majeure (natural disasters, pandemics, government-imposed lockdowns, civil unrest, or other events beyond our control), we will:</p>
              <ul>
                <li>Offer to reschedule your tour to a future date at no extra cost (subject to availability)</li>
                <li>Issue a credit note valid for 12 months for the full amount paid</li>
                <li>Process a refund minus only the non-recoverable costs already paid to third parties (hotels, permits, etc.)</li>
              </ul>
              <p className="mt-3">We will provide documentation of non-recoverable costs upon request. Our goal is always to minimize your financial loss.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">7. Disputes</h2>
              <p>If you believe a refund has been incorrectly calculated or not processed, please contact us at <a href="mailto:welcome@odishaindiatrip.com" className="text-amber-600 hover:underline">welcome@odishaindiatrip.com</a> with your booking reference number and details. We will investigate and respond within 5 business days.</p>
              <p className="mt-3">If the dispute cannot be resolved through our customer service team, you may escalate to our management. The final decision will be communicated in writing within 15 business days of escalation.</p>
            </section>

            <section className="pt-6 border-t border-slate-200">
              <p className="text-navy-500 text-sm">For refund requests, email <a href="mailto:welcome@odishaindiatrip.com" className="text-amber-600 hover:underline">welcome@odishaindiatrip.com</a> or call <a href="tel:+919958826437" className="text-amber-600 hover:underline">+91 99588 26437</a>. Please include your booking reference number for faster processing.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPage;