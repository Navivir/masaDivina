import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import "../styles/custom_navbar.css";
import { useState } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher.jsx";



const customCollapseTheme = {
  collapse: {
    base: "w-full md:block md:w-auto custom-navbar-list-container md:self-center",
    list: "mt-4 flex",
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0",
  },
};

const linkReservar =
  "https://www.google.com/maps/reserve/v/dine/c/kN4BzCV7GcM";
const linkLlegar =
  "https://www.google.com/maps/dir//Masa+divina";

export default function CustomNavbar() {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  const openLanguageModal = () => setIsLanguageModalOpen(true);
  const closeLanguageModal = () => setIsLanguageModalOpen(false);

  return (
    <>
      <Navbar fluid rounded className="bg-[#F5E3BF]">
        <NavbarBrand as={Link} to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8 sm:h-10" alt="Masa Divina Logo" />
          <span className="text-xl font-semibold text-black">Masa Divina</span>
        </NavbarBrand>

        <NavbarToggle />

        <NavbarCollapse theme={customCollapseTheme.collapse}>
          <NavbarLink as={Link} to="/products">Carta</NavbarLink>
          <NavbarLink as={Link} to={linkReservar} target="_blank">Reservar</NavbarLink>
          <a href="tel:+34930139401">
            <NavbarLink>Llamar</NavbarLink>
          </a>
          <NavbarLink as={Link} to={linkLlegar} target="_blank">Como llegar</NavbarLink>
          {/* Link que abre el modal */}
           <NavbarLink as="button" className="language-switcher"onClick={openLanguageModal}>Idioma</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      {/* Modal de idiomas */}
      <LanguageSwitcher isOpen={isLanguageModalOpen} onClose={closeLanguageModal} />
    </>
  );
}
