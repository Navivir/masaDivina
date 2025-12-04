import { Button } from "flowbite-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie_accepted_v1";
const GA_MEASUREMENT_ID = "G-0EXAMPLE"; // Reemplaza con tu ID de GA

function loadGtag(measurementId) {
  if (!measurementId) return;
  if (document.querySelector(`script[data-gtag-id="${measurementId}"]`)) return;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  s.setAttribute("data-gtag-id", measurementId);
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  window.gtag("js", new Date());
  window.gtag("config", measurementId);
}

export default function CookieBannerModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      setVisible(true);
    } else {
      loadGtag(GA_MEASUREMENT_ID);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    loadGtag(GA_MEASUREMENT_ID);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
      <div
        className="rounded-lg shadow-xl max-w-lg w-full p-6 flex flex-col gap-4"
        style={{ backgroundColor: "#F5E3BF" }}
      >
        <h2 className="text-lg font-semibold" style={{ color: "#000000" }}>
          Uso de cookies
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "#000000" }}>
          Usamos cookies para analizar el tráfico con Google Analytics y mejorar
          tu experiencia en nuestro sitio. Al hacer clic en "Aceptar cookies"
          das tu consentimiento para el uso de estas cookies. Puedes consultar
          nuestra{" "}
          <a
            href="/cookies"
            className="underline"
            style={{ color: "#000000" }}
          >
            Política de cookies
          </a>
          .
        </p>
        <Button onClick={acceptCookies} className="self-end cookie-btn">
          Aceptar cookies
        </Button>
      </div>
    </div>
  );
}
