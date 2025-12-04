import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import CookiesPolicy from "./pages/CookiesPolicy.jsx";
import CookieBannerSimple from "./components/BannerConsentGA.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";

export default function App() {
  const location = useLocation();

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
