"use client";
import logo from "../assets/logo.webp";
import '../styles/custom_footer.css';

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsFacebook, BsInstagram,} from "react-icons/bs";
const linkReservar = "https://www.google.com/maps/reserve/v/dine/c/kN4BzCV7GcM?source=pa&opi=89978449&hl=es-ES&gei=wUgcaaLkF9uI7NYP77T7GA&sourceurl=https://www.google.com/service/ViewerOrchestratorService/FetchViewer?hl%3Des%26gl%3Des";
const linkLlegar = "https://www.google.com/maps/dir//Masa+divina+%7C+Pizzer%C3%ADa+artesanal+en+Badalona,+Pla%C3%A7a+del+Vaixell+Maria+Assumpta,+3,+local+2-3,+08912+Badalona,+Barcelona/@41.4076331,2.106493,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12a4bb8da0fd280b:0x1134ab2a79b7d58a!2m2!1d2.2423987!2d41.4401176?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D";

export default function Component() {
  return (
    <Footer container fluid rounded className="bg-[#F5E3BF] footer-text-black">
      <div className="w-full max-w-screen-xl mx-auto p-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          
          <div className="flex flex-col items-center sm:items-start">
            <FooterBrand
              href="#"
              src={logo}
              alt="Masa Divina Logo"
              name="Masa Divina"
            />
            <FooterCopyright
              href="#"
              by="Masa Divina™"
              year={2025}
              className="mt-3 text-black"
            />
            <p className="parrafo-direccion">Plaça del Vaixell Maria Assumpta, 3, 08912 Badalona. (Frente al parque infantil.)</p>
          </div>

          <div>
            <FooterTitle title="Acerca de" className="text-black" />
            <FooterLinkGroup col>
              <FooterLink href="tel:+34930139401" className="text-black">Llamar</FooterLink>
              <FooterLink href={linkReservar} target="_blank" className="text-black">Reservar</FooterLink>
              <FooterLink href={linkLlegar} target="_blank" className="text-black">Como llegar</FooterLink>
              <FooterLink href="/contact" className="text-black">Contacto</FooterLink>
              <FooterLink href="/products" className="text-black">Carta</FooterLink>
              
            </FooterLinkGroup>
          </div>

          <div>
            <FooterTitle title="Siguenos" className="text-black" />
            <FooterLinkGroup col>
              <FooterLink href="https://www.instagram.com/masadivina.badalona/" target="_blank" className="text-black">Instagram</FooterLink>
              <FooterLink href="https://www.facebook.com/people/Masa-Divina/61582653171958/#" target="_blank" className="text-black">Facebook</FooterLink>
              <FooterLink href="/about" className="text-black">Sobre Nosotros</FooterLink>
            </FooterLinkGroup>
          </div>

          <div>
            <FooterTitle title="Legal" className="text-black" />
            <FooterLinkGroup col>
              <FooterLink href="/privacy" className="text-black">Politica de privaciad</FooterLink>
              <FooterLink href="/terms" className="text-black">Terminos &amp; Condiciones</FooterLink>
              <FooterLink href="/cookies" className="text-black">Politica de cookies</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>

        <FooterDivider className="my-6 border-gray-700" />

        <div className="flex justify-center space-x-8 mt-4">
          <FooterIcon href="https://www.facebook.com/people/Masa-Divina/61582653171958/#" target="_blank" icon={BsFacebook} className="text-black" />
          <FooterIcon href="https://www.instagram.com/masadivina.badalona/" target="_blank" icon={BsInstagram} className="text-black" />
     
   
        </div>
      </div>
    </Footer>
  );
}
