import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

// import useScrollReveal from './hooks/useScrollReveal';

import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import FeaturedCategories from './components/FeaturedCategories';
import TourPackages from './components/TourPackages';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import Loader from './components/Loader';

import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import PackageDetailPage from './pages/PackageDetailPage';
import JagannathPage from './pages/JagannathPage';
import TribalPage from './pages/TribalPage';
import CabRentalPage from './pages/CabRentalPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import EcoTourismPage from './pages/EcoTourismPage';

import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';
import CancellationPage from './pages/CancellationPage';

/* NEW PAGES */
import HotelsPage from './pages/HotelsPage';
import CityHotelsPage from './pages/CityHotelsPage';
import HotelDetailsPage from './pages/HotelDetailsPage';
import FAQPage from './pages/FAQPage';
import MapReviewSection from './components/MapReviewSection';
import ContactPage from './pages/ContactPage';
import RathYatraPage from './pages/RathYatraPage';
import OdishaMapPage from './pages/OdishaMapPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // useScrollReveal();

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const openInquiry = () => setInquiryOpen(true);

  const closeInquiry = () => setInquiryOpen(false);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <Topbar />

      <Navbar onOpenInquiry={openInquiry} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage onOpenInquiry={openInquiry} />
              <FeaturedCategories />
              <TourPackages onOpenInquiry={openInquiry} />
              <WhyChooseUs />
              <Testimonials />
              <MapReviewSection onOpenInquiry={openInquiry}/>
              <CTABanner onOpenInquiry={openInquiry} />
            </>
          }
        />

        <Route
          path="/packages"
          element={
            <PackagesPage onOpenInquiry={openInquiry} />
          }
        />

        <Route
          path="/contact"
          element={
            <ContactPage />
          }
        />

        <Route
          path="/packages/:id"
          element={
            <PackageDetailPage onOpenInquiry={openInquiry} />
          }
        />

        <Route
          path="/jagannath-darshan"
          element={
            <JagannathPage onOpenInquiry={openInquiry} />
          }
        />

        <Route
          path="/rath-yatra"
          element={
            <RathYatraPage onOpenInquiry={openInquiry} />
          }
        />

        <Route
          path="/tribal-tours"
          element={
            <TribalPage onOpenInquiry={openInquiry} />
          }
        />

        <Route
          path="/cab-rentals"
          element={
            <CabRentalPage onOpenInquiry={openInquiry} />
          }
        />

        <Route
          path="/blog"
          element={<BlogPage />}
        />

        <Route
          path="/blog/:id"
          element={<BlogDetailPage onOpenInquiry={openInquiry}/>}
        />

        <Route
          path="/destinations"
          element={<DestinationsPage />}
        />

        <Route
          path="/destinations/:id"
          element={
            <DestinationDetailPage
              onOpenInquiry={openInquiry}
            />
          }
        />

        <Route
          path="/eco-tourism"
          element={
            <EcoTourismPage onOpenInquiry={openInquiry} />
          }
        />

        {/* NEW HOTELS ROUTES */}

        <Route
          path="/hotels"
          element={<HotelsPage />}
        />

        <Route
          path="/hotels/:cityId"
          element={<CityHotelsPage />}
        />

        <Route
          path="/hotel/:id"
          element={<HotelDetailsPage />}
        />

        {/* FAQ PAGE */}

        <Route
          path="/faq"
          element={<FAQPage />}
        />

        <Route
          path="/odisha-tourist-map"
          element={<OdishaMapPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/terms-and-conditions"
          element={<TermsPage />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPage />}
        />

        <Route
          path="/refund-policy"
          element={<RefundPage />}
        />

        <Route
          path="/cancellation-policy"
          element={<CancellationPage />}
        />
      </Routes>

      <Footer />

      <InquiryForm
        isOpen={inquiryOpen}
        onClose={closeInquiry}
      />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;