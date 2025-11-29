import "../styles/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SectionI from "../components/SectionI";
import SectionD from "../components/SectionD";
import HeadingKing from "../components/HeadingKing";
import nachos from "../assets/nachos.webp";
import tartar from "../assets/tartar.webp";
import horno from "../assets/horno.webp";
import candela from "../assets/candela.webp";
import local from "../assets/local.webp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex flex-col items-center text-center backgroundHelp pb-60">

        <div className="full-container-home-section">
          <h1 className="texto-cool margins-king-soft">
            El sabor del fuego. El alma de la masa.

          </h1>
          <div className="full-image-container"></div>
        </div>

        <p className="parrafo1">
          En Masa Divina no solo cocinamos, compartimos rituales.
          <br />
          Nuestra masa fermenta 72 horas, horneamos en Valoriani.
          <br />Y tratamos a cada cliente como parte de la familia.
        </p>


        <SectionI
          title="Ingredientes frescos y locales"
          paragraph1="Solo usamos productos de temporada y de proximidad, para que cada bocado sepa como si estuvieras en Italia."
          paragraph2="Nuestro compromiso con la calidad empieza desde el campo hasta tu mesa."
          image1={horno}
          image2={candela}
        />

        <Section
          title="La auténtica pizza artesanal"
          paragraph1="Masa madre, ingredientes frescos y cocción en horno de leña."
          paragraph2="Disfruta de una experiencia napolitana auténtica con el sabor que nos distingue."
          image1={tartar}
          image2={nachos}
        />
        
        <SectionD
          title="Hecho con pasión desde 1998"
          paragraph1="En Masa Divina llevamos más de 25 años elaborando pizzas con recetas tradicionales italianas."
          paragraph2="Cada masa, cada salsa y cada ingrediente son preparados con dedicación para que disfrutes de una experiencia única."
          image={local}
          imageClassName="w-[1200px] h-[700px] object-cover mb-20"
          className="my-20"
        />

        <HeadingKing
          title="Reserva tu mesa hoy"
          paragraph1="No esperes más para vivir la experiencia Masa Divina. Reserva tu mesa y déjate llevar por los sabores auténticos de Italia."
          linkTo="https://masadivina.carrd.co/"
        />
        <div className="h-20"></div>
        

      </main>

      <Footer />
    </div>
  );
}
