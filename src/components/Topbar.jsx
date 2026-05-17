import { useEffect, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Topbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 overflow-hidden ${
        scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
      }`}
    >
      <div
        className={`${
          isHome
            ? 'bg-navy-950/60 backdrop-blur-md'
            : 'bg-navy-900'
        } border-b border-white/10`}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <a
                href="tel:+919958826437"
                className="flex items-center gap-1.5 text-white/70 hover:text-amber-300 text-xs font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 99588 26437</span>
              </a>

              <a
                href="mailto:welcome@odishaindiatrip.com"
                className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-amber-300 text-xs font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>welcome@odishaindiatrip.com</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-white/50 text-xs hidden md:block">
                Mon-Sun: 9AM - 8PM IST
              </span>

              <a
                href="tel:+919958826437"
                className="text-amber-400 text-xs font-semibold hover:text-amber-300 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;