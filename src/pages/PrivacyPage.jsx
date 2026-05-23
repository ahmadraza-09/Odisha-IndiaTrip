import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO'

const PrivacyPage = () => {
  return (
    <div className="pt-24">
      <SEO
        title="Privacy Policy | Odisha IndiaTrip"
        description="Read the Privacy Policy of Odisha IndiaTrip to understand how we collect, use, store, and protect your personal information for Odisha tour packages, hotel bookings, cab rentals, and travel services."
        keywords="Privacy Policy Odisha IndiaTrip, Odisha travel privacy policy, Odisha tour data protection, hotel booking privacy Odisha, cab booking privacy policy, Odisha travel company privacy, Odisha tourism privacy policy, Odisha IndiaTrip data security"
        url="https://odishaindiatrip.com/privacy-policy"
      />
      <div className="gradient-navy py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/60 text-sm mt-2">Last updated: May 1, 2026</p>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="prose-custom space-y-8">
            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us when you:</p>
              <ul>
                <li>Fill out an inquiry form or request a quote on our website</li>
                <li>Book a tour package, cab rental, or hotel</li>
                <li>Call us, email us, or interact with us on social media</li>
                <li>Subscribe to our newsletter or promotional communications</li>
              </ul>
              <p className="mt-3">The types of personal information we may collect include:</p>
              <ul>
                <li><strong>Identity Data:</strong> Full name, date of birth, gender, nationality</li>
                <li><strong>Contact Data:</strong> Email address, phone number, postal address</li>
                <li><strong>Identity Documents:</strong> Aadhaar number (last 4 digits only), passport number (for foreign nationals), voter ID — collected solely for hotel check-ins, monument entries, and permit applications</li>
                <li><strong>Transaction Data:</strong> Payment details, billing address, tour booking history</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, pages visited — collected automatically via cookies and analytics</li>
                <li><strong>Communication Data:</strong> Content of emails, phone calls, and chat messages related to your bookings</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">2. How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              <ul>
                <li>Processing and managing your tour bookings, cab rentals, and hotel reservations</li>
                <li>Arranging permits, VIP darshan access, and monument entries on your behalf</li>
                <li>Communicating with you about your booking — confirmations, itineraries, updates, and changes</li>
                <li>Providing customer support before, during, and after your trip</li>
                <li>Sending promotional offers and travel updates (only with your consent, and you can opt out anytime)</li>
                <li>Improving our website, services, and customer experience through analytics</li>
                <li>Complying with legal obligations — tax records, government reporting, and dispute resolution</li>
                <li>Detecting and preventing fraud or unauthorized transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">3. Information Sharing</h2>
              <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes. We share your information only with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Hotels, transport operators, boat operators, and guides who need your information to deliver the services you booked</li>
                <li><strong>Government Authorities:</strong> When required for permits, monument entries, or legal compliance (e.g., tribal area permits require identity documentation)</li>
                <li><strong>Payment Processors:</strong> Banks and payment gateways for processing your transactions (we do not store your full card details)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              </ul>
              <p className="mt-3">We share only the minimum information necessary for each purpose. For example, we share your name and ID with a hotel for check-in, but not your payment details.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">4. Data Security</h2>
              <p>We take reasonable measures to protect your personal information:</p>
              <ul>
                <li>All online transactions are processed through SSL-encrypted payment gateways</li>
                <li>Physical documents (ID copies, permits) are stored in locked premises and destroyed after the retention period</li>
                <li>Access to customer data is restricted to authorized personnel on a need-to-know basis</li>
                <li>We regularly review our security practices and update them as needed</li>
              </ul>
              <p className="mt-3">However, no method of transmission or storage is 100% secure. We cannot guarantee absolute security of your data.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">5. Data Retention</h2>
              <p>We retain your personal information for the following periods:</p>
              <ul>
                <li><strong>Booking Records:</strong> 5 years from the date of travel (for tax and legal compliance)</li>
                <li><strong>Identity Documents:</strong> Destroyed within 30 days after tour completion</li>
                <li><strong>Payment Records:</strong> 7 years (as required by Indian tax law)</li>
                <li><strong>Marketing Data:</strong> Until you withdraw consent or unsubscribe</li>
                <li><strong>Website Analytics:</strong> 26 months (Google Analytics default retention)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">6. Cookies</h2>
              <p>Our website uses cookies to improve your browsing experience. We use:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website functionality (session management, security)</li>
                <li><strong>Analytics Cookies:</strong> Google Analytics to understand how visitors use our site (anonymized)</li>
                <li><strong>Marketing Cookies:</strong> To show relevant travel offers based on your interests (only with your consent)</li>
              </ul>
              <p className="mt-3">You can manage cookie preferences through your browser settings. Disabling essential cookies may affect website functionality.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">7. Your Rights</h2>
              <p>Under the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023, you have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (subject to legal retention requirements)</li>
                <li>Withdraw consent for marketing communications at any time</li>
                <li>Request a copy of your data in a machine-readable format</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:welcome@odishaindiatrip.com" className="text-amber-600 hover:underline">welcome@odishaindiatrip.com</a>. We will respond within 30 days.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites (hotels, airlines, payment gateways). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before sharing any personal information.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">9. Children's Privacy</h2>
              <p>Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will delete it promptly.</p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We will notify you of significant changes via email or a prominent notice on our website.</p>
            </section>

            <section className="pt-6 border-t border-slate-200">
              <p className="text-navy-500 text-sm">For privacy-related questions or requests, contact our Data Protection Officer at <a href="mailto:welcome@odishaindiatrip.com" className="text-amber-600 hover:underline">welcome@odishaindiatrip.com</a> or call <a href="tel:+919876543210" className="text-amber-600 hover:underline">+91 98765 43210</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;