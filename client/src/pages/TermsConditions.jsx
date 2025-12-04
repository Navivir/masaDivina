import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import "../styles/cookies.css";

export default function TermsConditions() {
  return (
    <div className="min-h-screen flex items-center justify-center backgroundHelp p-4">
      <div
        className="rounded-lg shadow-xl max-w-4xl w-full p-8 flex flex-col gap-6"
        style={{ backgroundColor: "#F5E3BF" }}
      >
        <h1 className="text-3xl font-bold text-black">Términos y Condiciones</h1>

        <p className="text-base leading-relaxed text-black">
          Bienvenido a nuestro sitio web. Al acceder y usar nuestro sitio, aceptas cumplir con estos Términos y Condiciones.
        </p>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Uso del sitio web</h2>
          <p className="text-base leading-relaxed text-black">
            El uso de este sitio es bajo tu propia responsabilidad. Nos reservamos el derecho de modificar o interrumpir el servicio sin previo aviso.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Propiedad intelectual</h2>
          <p className="text-base leading-relaxed text-black">
            Todos los contenidos del sitio, incluyendo textos, imágenes, logotipos y diseños, son propiedad de nuestra empresa o de terceros que han autorizado su uso.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Limitación de responsabilidad</h2>
          <p className="text-base leading-relaxed text-black">
            No nos hacemos responsables de daños o pérdidas derivados del uso del sitio, incluidos errores, interrupciones o virus.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Modificaciones</h2>
          <p className="text-base leading-relaxed text-black">
            Podemos actualizar estos Términos y Condiciones en cualquier momento. Te recomendamos revisarlos periódicamente.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">Consentimiento</h2>
          <p className="text-base leading-relaxed text-black">
            Al continuar usando nuestro sitio, aceptas estos Términos y Condiciones.
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
