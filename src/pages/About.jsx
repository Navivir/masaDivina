import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionD from "../components/SectionD";
import HeroSection from "../components/HeroSection";
import equipo from "../assets/equipo.jpg";
import pizzero from "../assets/pizzero.webp";
import '../styles/about.css';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex flex-col items-center text-center backgroundHelp ">
        <h1 className=" texto-cool margins-king">
          Sobre Nosotros
        </h1>

        <SectionD
          title="Hecho con pasión desde 1998"
          paragraph1="En Masa Divina llevamos más de 25 años elaborando pizzas con recetas tradicionales italianas."
          paragraph2="Cada masa, cada salsa y cada ingrediente son preparados con dedicación para que disfrutes de una experiencia única."
          image={equipo}
        />
        <HeroSection
          title="Equipo profesional...."
          paragraph="Nuestro equipo de pizzaiolos está formado por expertos que combinan técnicas artesanales con ingredientes de alta calidad para crear pizzas excepcionales."
          image={pizzero}
        />

      </main>

      <Footer />
    </div>
  );
}
