import React from "react";
import "../app/assets/styles/public.css";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Handin Logo"
          className="w-16 h-16 mx-auto mb-4"
        />

        {/* Links de contacto o derechos */}
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Handin. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

