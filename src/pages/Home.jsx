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
import romana from "../assets/romana.webp";
import cliente from "../assets/cliente.webp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex flex-col items-center text-center backgroundHelp pb-60 paddingGeneral">
        <div className="full-container-home-section">
          <h1 className="texto-cool margins-king-soft">
            El fuego nos da sabor. La masa nos da alma. Tú nos das sentido.
          </h1>
          <div className="full-image-container"></div>
        </div>

        <p className="parrafo1">
          En Masa Divina no solo hacemos pizza: honramos un ritual.
          <br />
          Fermentamos la masa 72 horas, cocinamos en horno Valoriani
          <br />
          y cuidamos cada detalle como si cocinaras para los tuyos.
          <br />
          Aquí no eres cliente: eres familia.
        </p>

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
          paragraph2="Ven a probar el sabor que nos ha convertido en un clásico de Badalona."
          image1={romana}
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
          linkTo="https://masadivina.carrd.co/"
        />
        <div className="h-20"></div>
      </main>

      <Footer />
    </div>
  );
}
