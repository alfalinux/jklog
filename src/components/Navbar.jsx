import React, { useState } from "react";
import logo from "../assets/jkl-logo-1.png";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <img className="h-10 w-auto" src={logo} alt="Logo JKL" />
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-hitam-muda-jkl hover:bg-gray-200 hover:text-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-blue-500" />
              ) : (
                <Bars3BottomRightIcon className="h-6 w-6 text-blue-500" />
              )}
            </button>
          </div>

          {/* Menu */}
          <div
            className={`flex-1 flex items-center justify-center sm:items-stretch sm:justify-center ${
              isOpen ? "hidden" : "flex"
            } hidden md:flex`}
          >
            <div className="flex space-x-4">
              <a
                href="#beranda"
                className="text-hitam-muda-jkl hover:bg-biru-muda-jkl hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Beranda
              </a>
              <a
                href="#cekongkir"
                className="text-hitam-muda-jkl hover:bg-biru-muda-jkl hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Cek Ongkir
              </a>
              <a
                href="#profil"
                className="text-hitam-muda-jkl hover:bg-biru-muda-jkl hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Tentang Kami
              </a>
              <a
                href="#kontak"
                className="text-hitam-muda-jkl hover:bg-biru-muda-jkl hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Login Button */}
          <div className="absolute inset-y-0 right-0 hidden md:flex items-center">
            <button className="text-gray-100 bg-biru-muda-jkl hover:bg-biru-tua-jkl hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="text-hitam-muda-jkl hover:bg-biru-muda-jkl hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-hitam-muda-jkl hover:bg-biru-muda-jkl hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-hitam-muda-jkl hover:bg-biru-muda-jkl hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-hitam-muda-jkl hover:bg-biru-muda-jkl hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
              <button className="w-full text-gray-100 bg-biru-muda-jkl hover:bg-biru-tua-jkl hover:text-gray-100 px-3 py-2 rounded-md text-base font-medium">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
