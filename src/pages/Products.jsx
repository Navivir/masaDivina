import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/products.css';

export default function Products() {


  return (
    <div className="flex flex-col min-h-screen backgroundHelp">
      <Navbar />
      <main className="flex flex-col items-center text-center margins-king px-6 pt-40 pb-40 space-y-40">
        <h1 className="texto-cool">
          Nuestras Cartas
        </h1>

      <div className="full-image-container-comida"></div>
      <div className="full-image-container-bebida"></div>
      <div className="full-image-container-vino"></div>


      </main>

      <Footer />
    </div>
  );
}
