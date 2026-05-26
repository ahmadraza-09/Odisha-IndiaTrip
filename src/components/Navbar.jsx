import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Hotels', href: '/hotels' },
  { label: 'Tour Packages', href: '/packages' },
  // { label: 'Jagannath Darshan', href: '/jagannath-darshan' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Cab Rentals', href: '/cab-rentals' },
  { label: 'Eco Tourism', href: '/eco-tourism' },
  { label: 'Blog', href: '/blog' },
];

const Navbar = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'top-0 glass shadow-xl py-2'
          : 'top-10 bg-transparent py-2'
      }`}
    >
      <div className="container-max px-2 sm:px-2 lg:px-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
              <img
                src={Logo}
                alt="Odisha IndiaTrip"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col leading-tight">
              {/* Mobile Text */}
              <span
                className={`block lg:hidden font-display font-bold text-lg transition-colors duration-300 ${
                  scrolled || !isHome
                    ? 'text-navy-900'
                    : 'text-white'
                }`}
              >
                Odisha IndiaTrip Pvt. Ltd.
              </span>

              {/* Desktop Text */}
              <span
                className={`hidden lg:block font-display font-bold text-xl transition-colors duration-300 ${
                  scrolled || !isHome
                    ? 'text-navy-900'
                    : 'text-white'
                }`}
              >
                Odisha IndiaTrip Pvt. Ltd.
              </span>

              <span
                className={`text-[9px] sm:text-[10px] font-medium tracking-widest uppercase transition-colors duration-300 ${
                  scrolled || !isHome
                    ? 'text-navy-600'
                    : 'text-amber-300'
                }`}
              >
                DMC Partner
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.href
                    ? scrolled || !isHome
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-amber-300'
                    : scrolled || !isHome
                    ? 'text-navy-700 hover:text-navy-900 hover:bg-navy-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome
                ? 'text-navy-900 hover:bg-navy-50'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen
              ? 'max-h-[600px] opacity-100 mt-4'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-2xl p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'bg-amber-50 text-amber-600'
                    : 'text-navy-700 hover:bg-navy-50 hover:text-navy-900'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-navy-100 space-y-2">
              <a
                href="tel:+919958826437"
                className="flex items-center gap-2 px-4 py-3 text-navy-600 font-medium"
              >
                <Phone className="w-4 h-4" />
                +91 99588 26437
              </a>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenInquiry();
                }}
                className="btn-primary w-full text-sm"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;