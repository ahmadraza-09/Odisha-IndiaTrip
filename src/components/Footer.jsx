import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import Logo from '../assets/logo.png'

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tour Packages', href: '/packages' },
  { label: 'Our Hotels', href: '/hotels' },
  { label: 'Jagannath Darshan', href: '/jagannath-darshan' },
  { label: 'Rath Yatra', href: '/rath-yatra' },
  { label: 'Tribal Tours', href: '/tribal-tours' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Cab Rentals', href: '/cab-rentals' },
  { label: 'Eco Tourism', href: '/eco-tourism' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

const destinations = [
  { label: 'Puri', href: '/destinations/puri' },
  { label: 'Bhubaneswar', href: '/destinations/bhubaneswar' },
  { label: 'Konark', href: '/destinations/konark' },
  { label: 'Kolkata', href: '/destinations/kolkata' },
  { label: 'Deoghar', href: '/destinations/deoghar' },
  { label: 'Cuttack', href: '/destinations/cuttack' },
  { label: 'Ganga Sagar', href: '/destinations/ganga-sagar' },
];

const legalLinks = [
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
];

const whatsappMessage = encodeURIComponent(
  `🙏 Namaste Odisha Indiatrip Pvt Ltd Team,

I am interested in Odisha Tour Packages, Hotel Booking, Cab Services, and Customized Travel Planning.

Please share the details and assist me with the best itinerary.

Thank you!`
);

const socials = [
  {
    icon: FaFacebookF,
    href: 'https://www.facebook.com/odishaindiatrip/',
    label: 'Facebook',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/odishaindiatrip',
    label: 'Instagram',
  },
  {
    icon: FaTwitter,
    href: 'https://x.com/Odishaindiatrip',
    label: 'Twitter',
  },
  {
    icon: FaYoutube,
    href: 'https://www.youtube.com/@odishaindiatripofficial',
    label: 'YouTube',
  },
  {
    icon: FaWhatsapp,
    href: `https://wa.me/919958826437?text=${whatsappMessage}`,
    label: 'WhatsApp',
  },
];

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src={Logo} alt="" />
              </div>

              <div>
                <span className="font-display font-bold text-xl text-white whitespace-nowrap">
                  Odisha Indiatrip Pvt. Ltd.
                </span>

                <p className="text-[10px] tracking-widest uppercase text-amber-400">
                  DMC Partner
                </p>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Odisha Indiatrip Pvt. Ltd. is a Destination Management
              Company offering authentic, handcrafted travel experiences across
              the soul of Incredible India — Odisha.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target='_blank'
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/30 flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-white/60 hover:text-amber-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-5">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-amber-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="font-display font-bold text-white mb-5">
              Top Destinations
            </h4>

            <ul className="space-y-2.5">
              {destinations.map((dest) => (
                <li key={dest.label}>
                  <Link
                    to={dest.href}
                    className="text-white/50 hover:text-amber-400 text-sm transition-colors duration-300"
                  >
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-5">
              Contact Us
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />

                <p className="text-white/50 text-sm leading-relaxed">
                  Plot No: 1094/1655, Lane-7, Aerodrome Area, District -Khurda Bhubaneswar 751020 Odisha.

                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />

                <a
                  href="tel:+919958826437"
                  className="text-white/50 hover:text-amber-400 text-sm transition-colors"
                >
                  +91 99588 26437
                </a>
              </div>


              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />

                <a
                  href="mailto:welcome@odishaindiatrip.com"
                  className="text-white/50 hover:text-amber-400 text-sm transition-colors"
                >
                  welcome@odishaindiatrip.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />

                <p className="text-white/50 text-sm">
                  Mon-Sun: 8AM - 10PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Odisha Indiatrip Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;