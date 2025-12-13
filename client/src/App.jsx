import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from 'react-ga4';
import ReactPixel from 'react-facebook-pixel';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import CookiesPolicy from "./pages/CookiesPolicy.jsx";
import CookieBannerSimple from "./components/BannerConsentGA.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import { useEffect } from "react";

export default function App() {
  const location = useLocation();
 

  useEffect(() => {
    // Google Analytics
    ReactGA.initialize(import.meta.env.VITE_GA_ID);   
  
   // Meta Pixel
    ReactPixel.init(import.meta.env.VITE_META_PIXEL_ID);
    ReactPixel.pageView();
  }, []);

  // Trackear cambios de página automáticamente
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      {/* Mostrar banner en todas las rutas excepto /cookies */}
      {location.pathname !== "/cookies" && <CookieBannerSimple />} 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </>
  );
}
