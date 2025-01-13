import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "primeicons/primeicons.css";

interface ICustomNavBarProps {
   categories: string[];
   isAuthenticated: boolean;
}

export function CustomNavBar({categories, isAuthenticated}: ICustomNavBarProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          <img
            src="/images/logo2.png"
            alt="Eduvibe Logo"
            className="h-16 w-auto cursor-pointer"
            onClick={() => router.push("/")}
          />
          <div className="relative group hidden md:block">
            <button className="bg-white text-[#23A8E1] py-2 px-4 border-2 border-[#23A8E1] rounded-md hover:bg-[#23A8E1] hover:text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#23A8E1]">
              Categorías
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md z-10 hidden group-hover:block">
              <ul>
                {
                  categories.map((category: any) => (
                    <li
                      key={category.type}
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                      onClick={() => router.push(`/courses?category=${category}`)}>
                      {category.type}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#23A8E1] focus:outline-none"
          >
            <i className={`pi ${isMobileMenuOpen ? "pi-times" : "pi-bars"} text-2xl`} />
          </button>
        </div>

        <div className="relative w-full max-w-xs lg:max-w-md hidden md:block">
          <input
            type="text"
            placeholder="Buscar cursos..."
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A8E1]"
          />
          <button className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700">
            <i className="pi pi-search text-xl" />
          </button>
        </div>
        {
          !isAuthenticated ?  (
            <div className="hidden lg:flex items-center space-x-6">
            <button
                className="bg-[#23A8E1] text-white py-2 px-4 rounded-md hover:scale-105 transition"
                onClick={() => router.push("/sign-in")}
              >
                Iniciar Sesión
              </button>
              <button
                className="bg-gray-100 text-[#23A8E1] py-2 px-4 rounded-md hover:bg-gray-200 transition"
                onClick={() => router.push("/sign-up")}
              >
                Regístrate
              </button>
            </div>
          )
          : null
        }
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10">
          <ul>
            <li
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => router.push("/")}
            >
              Programación
            </li>
            <li
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => router.push("/")}
            >
              Diseño
            </li>
            <li
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => router.push("/")}
            >
              Negocios
            </li>
            <li className="py-2 px-4 border-t-2 border-gray-100">
              <button
                className="w-full text-[#23A8E1] py-2 px-4 rounded-md hover:bg-gray-100"
                onClick={() => router.push("/sign-in")}>Iniciar Sesión
              </button>
            </li>
            <li>
              <button
                className="w-full bg-[#23A8E1] text-white py-2 px-4 rounded-md hover:bg-[#1D8FBC]"
                onClick={() => router.push("/sign-up")}>Regístrate
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
