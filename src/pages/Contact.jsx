import '../styles/contact.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen backgroundHelp">
      <Navbar />
      
      <main className="flex flex-col margins-king items-center text-center backgroundHelp">

        <h1 className="texto-cool">
          Contacta con Nosotros
        </h1>

        <ContactForm />

      </main>
      
      <Footer />
    </div>
  );
}
