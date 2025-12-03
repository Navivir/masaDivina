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
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

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
          </div>

          <div>
            <FooterTitle title="Acerca de" className="text-black" />
            <FooterLinkGroup col>
              <FooterLink href="/about" className="text-black">Sobre nosotros</FooterLink>
              <FooterLink href="/products" className="text-black">Carta</FooterLink>
            </FooterLinkGroup>
          </div>

          <div>
            <FooterTitle title="Siguenos" className="text-black" />
            <FooterLinkGroup col>
              <FooterLink href="https://www.instagram.com/masadivina.badalona/" target="_blank" className="text-black">Instagram</FooterLink>
              <FooterLink href="https://www.facebook.com/p/Masa-Divina-61582653171958/" target="_blank" className="text-black">Facebook</FooterLink>
            </FooterLinkGroup>
          </div>

          <div>
            <FooterTitle title="Legal" className="text-black" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="text-black">Politica de privaciad</FooterLink>
              <FooterLink href="#" className="text-black">Terminos &amp; Condiciones</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>

        <FooterDivider className="my-6 border-gray-700" />

        <div className="flex justify-center space-x-8 mt-4">
          <FooterIcon href="https://www.facebook.com/p/Masa-Divina-61582653171958/" target="_blank" icon={BsFacebook} className="text-black" />
          <FooterIcon href="https://www.instagram.com/masadivina.badalona/" target="_blank" icon={BsInstagram} className="text-black" />
     
   
        </div>
      </div>
    </Footer>
  );
}
