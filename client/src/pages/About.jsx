import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionD from "../components/SectionD";
import HeroSection from "../components/HeroSection";
import equipo from "../assets/equipo.webp";
import pizzero from "../assets/pizzero.webp";
import "../styles/about.css";
import "../styles/section.css";

export default function About() {

  const paragraph3 = (
  <>
    📌 Nuestra masa fermenta 72 horas.<br />
    📌 Nuestro horno Valoriani enciende el alma del local.<br />
    📌 Y cada pizza sale con la misma intención: que disfrutes como en casa
  </>
);

const paragraph2 = (
  <p>
    Nacimos de una idea simple:<br />
    <span style={{ color: "#ffd86b" }}>
      “Hacer la pizza que a nosotros nos gustaría comer.”
    </span>
    <br />
    Sin prisas, sin atajos, sin trucos
  </p>
);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex flex-col items-center text-center backgroundHelp ">
        <h1 className=" texto-cool margins-king">Sobre Nosotros</h1>

        <SectionD
          title="Pasión que se amasa. Sabor que se siente."
          paragraph1="En Masa Divina llevamos toda una vida soñando con este momento."
          paragraph2={paragraph2}
          paragraph3={paragraph3}
          image={equipo}
        />
        <HeroSection
          title="Equipo profesional, corazón artesanal."
          paragraph="Trabajamos con ingredientes de primera, técnicas de tradición napolitana y un respeto absoluto por el fuego, la masa y el oficio."
          image={pizzero}
        />
      </main>

      <Footer />
    </div>
  );
}
