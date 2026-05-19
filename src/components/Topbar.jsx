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
        className={`border-b border-white/10 ${
          isHome
            ? 'bg-navy-950/70 backdrop-blur-md'
            : 'bg-navy-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-10">
            {/* Left Side */}
            <div className="flex items-center gap-2 sm:gap-5 min-w-0 overflow-hidden">
              {/* Phone */}
              <a
                href="tel:+919958826437"
                className="flex items-center gap-1 text-white/80 hover:text-amber-300 text-[12px] sm:text-xs font-medium transition-colors whitespace-nowrap flex-shrink-0"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>+91 99588 26437</span>
              </a>

              {/* Email */}
              <a
                href="mailto:welcome@odishaindiatrip.com"
                className="flex items-center gap-1 text-white/80 hover:text-amber-300 text-[12px] sm:text-xs font-medium transition-colors min-w-0 overflow-hidden"
              >
                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />

                <span className="truncate">
                  welcome@odishaindiatrip.com
                </span>
              </a>
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-4 flex-shrink-0">
              <span className="text-white/60 text-xs whitespace-nowrap">
                Mon-Sun: 9AM - 8PM IST
              </span>

              <a
                href="tel:+919958826437"
                className="text-amber-400 text-xs font-semibold hover:text-amber-300 transition-colors whitespace-nowrap"
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