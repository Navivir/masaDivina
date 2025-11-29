import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import '../styles/custom_navbar.css';

const customCollapseTheme = {
  collapse: {
    base: 'w-full md:block md:w-auto custom-navbar-list-container md:self-center', 
    list: 'mt-4 flex', 
  },
  link: {
    base: 'block py-2 pr-4 pl-3 md:p-0',
  }
};

export default function CustomNavbar() {
  return (
    <Navbar Navbar fluid="true" rounded="true" className="bg-[#F5E3BF]">
      
      <NavbarBrand as={Link} to="/" className="flex items-center space-x-3">
        <img src={logo} className="h-8 sm:h-10" alt="Masa Divina Logo" />
        <span className="text-xl font-semibold text-black">Masa Divina</span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse 
        
        theme={customCollapseTheme.collapse}
      >
        <NavbarLink as={Link} to="/">Inicio</NavbarLink>
        <NavbarLink as={Link} to="/about">Sobre Nosotros</NavbarLink>
        <NavbarLink as={Link} to="/products">Carta</NavbarLink>
        <NavbarLink as={Link} to="/contact">Contacto</NavbarLink>
      </NavbarCollapse>
      
    </Navbar>
  );
}