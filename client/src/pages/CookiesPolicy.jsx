import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import "../styles/cookies.css";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen flex items-center justify-center backgroundHelp p-4">
      <div
        className="rounded-lg shadow-xl max-w-4xl w-full p-8 flex flex-col gap-6"
        style={{ backgroundColor: "#F5E3BF" }}
      >
        <h1 className="text-3xl font-bold text-black">Política de Cookies</h1>

        <p className="text-base leading-relaxed text-black">
          Esta Política de Cookies explica qué son las cookies, cómo las usamos
          en nuestro sitio web y cómo puedes gestionarlas.
        </p>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">¿Qué son las cookies?</h2>
          <p className="text-base leading-relaxed text-black">
            Las cookies son pequeños archivos de texto que se almacenan en tu
            dispositivo cuando visitas un sitio web. Se utilizan para mejorar
            la experiencia de navegación, analizar el tráfico y personalizar
            contenidos.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Tipos de cookies que usamos</h2>
          <ul className="list-disc list-inside text-base leading-relaxed text-black">
            <li><b>Cookies necesarias:</b> Imprescindibles para el funcionamiento del sitio.</li>
            <li><b>Cookies de análisis:</b> Nos permiten conocer cómo interactúas con la web (por ejemplo, Google Analytics).</li>
            <li><b>Cookies de marketing:</b> Opcionales, se usan para mostrar publicidad personalizada.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Cómo gestionar o desactivar cookies</h2>
          <p className="text-base leading-relaxed text-black">
            Puedes configurar tu navegador para bloquear cookies o recibir
            notificaciones cuando se envíen. Ten en cuenta que si desactivas
            ciertas cookies, algunas funciones de la web pueden no funcionar
            correctamente.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Consentimiento</h2>
          <p className="text-base leading-relaxed text-black">
            Al continuar navegando por nuestro sitio o aceptar nuestro banner de
            cookies, das tu consentimiento para el uso de cookies según esta
            política.
          </p>
        </section>

        <div className="flex justify-center mt-6">
          <Link to="/">
            <Button
              style={{ backgroundColor: "#D5B892", color: "#000000" }}
              className="hover:bg-[#C7A86D] px-4 py-2"
            >
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
