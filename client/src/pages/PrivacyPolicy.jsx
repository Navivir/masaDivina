import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import "../styles/cookies.css";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex items-center justify-center backgroundHelp">
      <div
        className="rounded-lg shadow-xl max-w-4xl w-full p-8 flex flex-col gap-6"
        style={{ backgroundColor: "#F5E3BF" }}
      >
        <h1 className="text-3xl font-bold text-black">Política de Privacidad</h1>

        <p className="text-base leading-relaxed text-black">
          Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tus datos personales cuando utilizas nuestro sitio web.
        </p>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Recopilación de información</h2>
          <p className="text-base leading-relaxed text-black">
            Podemos recopilar información personal como tu nombre, correo electrónico, número de teléfono u otra información que nos proporciones voluntariamente al usar nuestros formularios o al suscribirte a nuestros servicios.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Uso de la información</h2>
          <p className="text-base leading-relaxed text-black">
            La información recopilada se utiliza para mejorar nuestros servicios, responder a tus consultas, enviarte información relevante y cumplir con nuestras obligaciones legales.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Protección de datos</h2>
          <p className="text-base leading-relaxed text-black">
            Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra pérdida, acceso no autorizado o divulgación.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Compartir información</h2>
          <p className="text-base leading-relaxed text-black">
            No compartimos tus datos personales con terceros, excepto cuando sea necesario para cumplir con la ley, prestar nuestros servicios o con tu consentimiento explícito.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Consentimiento</h2>
          <p className="text-base leading-relaxed text-black">
            Al utilizar nuestro sitio web, aceptas nuestra Política de Privacidad y das tu consentimiento para el procesamiento de tus datos de acuerdo con esta política.
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
