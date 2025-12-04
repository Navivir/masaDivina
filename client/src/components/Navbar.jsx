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
  "https://www.google.com/maps/reserve/v/dine/c/kN4BzCV7GcM?source=pa&opi=89978449&hl=es-ES&gei=wUgcaaLkF9uI7NYP77T7GA&sourceurl=https://www.google.com/service/ViewerOrchestratorService/FetchViewer?hl%3Des%26gl%3Des";
const linkLlegar =
  "https://www.google.com/maps/dir//Masa+divina+%7C+Pizzer%C3%ADa+artesanal+en+Badalona,+Pla%C3%A7a+del+Vaixell+Maria+Assumpta,+3,+local+2-3,+08912+Badalona,+Barcelona/@41.4076331,2.106493,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12a4bb8da0fd280b:0x1134ab2a79b7d58a!2m2!1d2.2423987!2d41.4401176?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D";

export default function CustomNavbar() {
  return (
    <Navbar Navbar fluid="true" rounded="true" className="bg-[#F5E3BF]">
      <NavbarBrand as={Link} to="/" className="flex items-center space-x-3">
        <img src={logo} className="h-8 sm:h-10" alt="Masa Divina Logo" />
        <span className="text-xl font-semibold text-black">Masa Divina</span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse theme={customCollapseTheme.collapse}>
        <NavbarLink as={Link} to="/products">
          Carta
        </NavbarLink>
        <NavbarLink as={Link} to={linkReservar} target="_blank">
          Reservar
        </NavbarLink>
        <a href="tel:+34930139401">
          <NavbarLink>Llamar</NavbarLink>
        </a>
        <NavbarLink as={Link} to={linkLlegar} target="_blank">
          Como llegar
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
