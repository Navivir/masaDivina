import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/products.css';

import cartaComida from "../assets/carta-comida.webp";
import cartaBebidas from "../assets/carta-bebidas.webp";
import cartaVinos from "../assets/carta-vinos.webp";

export default function Products() {

  return (
    <div className="flex flex-col min-h-screen backgroundHelp">
      <Navbar />

      <main className="flex flex-col items-center text-center margins-king px-6 pt-40 pb-40 space-y-40">
        <h1 className="texto-cool">
          Nuestras Cartas
        </h1>

        <div className="carta-container">
          <img 
            src={cartaComida} 
            alt="Carta de comida" 
            className="carta-img"
          />
        </div>

        <div className="carta-container">
          <img 
            src={cartaBebidas} 
            alt="Carta de bebidas" 
            className="carta-img"
          />
        </div>

        <div className="carta-container">
          <img 
            src={cartaVinos} 
            alt="Carta de vinos" 
            className="carta-img"
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}
