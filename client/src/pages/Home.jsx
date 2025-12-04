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
import local from "../assets/local.jpg";
import varias from "../assets/varias.webp";
import cliente from "../assets/cliente.webp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex flex-col items-center text-center backgroundHelp pb-60 paddingGeneral">
        <div className="full-container-home-section">
          <h1 className="texto-cool margins-king-soft">
            Pizzería artesanal en Badalona.
          </h1>
          <div className="full-image-container"></div>
        </div>
        <h2 className="section-text-white-h2">
          El fuego nos da sabor. La masa nos da alma. Tú nos das sentido.
        </h2>

        <SectionI
          title="Cuidamos lo que comes."
          paragraph1="Solo trabajamos con ingredientes frescos, locales y de temporada."
          paragraph2="Del campo a nuestro horno. Del horno a tu mesa. Sabor real, sin atajos."
          image1={horno}
          image2={candela}
        />

        <Section
          title="Más que Pizza"
          paragraph1="En Masa Divina creamos sabores: pizzas, platos caseros y antojos únicos, siempre con calidad y sabor irresistible."
          paragraph2="Disfruta de una experiencia que nos distingue."
          image1={tartar}
          image2={nachos}
        />

        <SectionI
          title="Pizza artesanal de verdad."
          paragraph1="Masa madre, ingredientes seleccionados y cocción en horno de fuego. Auténtica pizza romana hecha a mano, bocado a bocado."
          paragraph2="Ven a probar el sabor que nos ha convertido en un referente de Badalona."
          image1={varias}
          image2={cliente}
        />

        <SectionD
          title="Pasión por la pizza."
          aragraph1="Hecho con pasión desde el primer día. Creciendo para convertirnos en tu pizzería de confianza en Badalona."
          paragraph2="Cada masa, cada salsa y cada ingrediente está hecho con dedicación. Porque las mejores tradiciones también empiezan así: desde cero, pero con alma."
          image={local}
          imageClassName="w-[1200px] h-[700px] object-cover mb-20"
          className="my-20"
        />

        <HeadingKing
          title="Reserva tu mesa hoy"
          paragraph1="No esperes más para vivir la experiencia Masa Divina. Reserva tu mesa y déjate llevar por el sabor."
          linkTo="https://www.google.com/maps/reserve/v/dine/c/kN4BzCV7GcM?source=pa&opi=89978449&hl=es-ES&gei=wUgcaaLkF9uI7NYP77T7GA&sourceurl=https://www.google.com/service/ViewerOrchestratorService/FetchViewer?hl%3Des%26gl%3Des"
        />
        <div className="h-20"></div>
      </main>

      <Footer />
    </div>
  );
}
