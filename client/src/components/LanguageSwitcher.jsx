import React from "react";
import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";
import catalunya from "../assets/catalunya.png";
import "../styles/languageSwitcher.css";

const LanguageSwitcher = ({ isOpen, onClose }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    onClose(); // cerrar modal al cambiar idioma
  };

  if (!isOpen) return null; // no renderiza nada si el modal está cerrado

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-lg font-semibold mb-4">Selecciona un idioma</h2>
        <div className="flex flex-col gap-3">
          <button
            className={`flex items-center gap-2 px-4 py-2 border rounded ${
              i18n.language === "ca" ? "bg-blue-100" : ""
            }`}
            onClick={() => changeLanguage("ca")}
          >
            <img src={catalunya} alt="Català" className="flag-icon" />
            Català
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 border rounded ${
              i18n.language === "es" ? "bg-blue-100" : ""
            }`}
            onClick={() => changeLanguage("es")}
          >
            <span className="fi fi-es"></span> Español
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 border rounded ${
              i18n.language === "en" ? "bg-blue-100" : ""
            }`}
            onClick={() => changeLanguage("en")}
          >
            <span className="fi fi-gb-eng"></span> English
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 rounded hover:bg-[#C7A86D]"
          style={{
            backgroundColor: "#D5B892",
            color: "#000000",
            fontWeight: 600,
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
