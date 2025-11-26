import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import { scroller } from "react-scroll";
import { X } from "lucide-react";
import logo from "../assets/Logo/RyExportlogo.png";
import menuIcon from "../assets/menu.png";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll or Navigate + Scroll
  const scrollToSection = (section) => {
    setMenuOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Logo click
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex justify-center pt-6 z-50 relative">
        <nav className="w-[95%] max-w-7xl bg-white rounded-full shadow-md px-6 py-4 flex items-center justify-between">
          <button onClick={handleLogoClick} className="flex items-center h-10">
            <div className="h-18 w-18 overflow-visible relative">
              <img
                src={logo}
                alt="EliteProWealth Logo"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 object-contain"
              />
            </div>
            <span className="-ml-1 text-2xl font-bold text-gray-900 leading-none"> RyInternationals</span>
          </button>


          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-gray-800  text-[20px]">
            <li><button onClick={() => scrollToSection("hero")} className="hover:text-blue-600 transition">Home</button></li>
            <li><button onClick={() => scrollToSection("about")} className="hover:text-blue-600 transition">About Us</button></li>
            <li><button onClick={() => scrollToSection("products")} className="hover:text-blue-600 transition">Products</button></li>
            <li><button onClick={() => scrollToSection("contact")} className="hover:text-blue-600 transition">Contacts</button></li>
          </ul>

          

          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <img src={menuIcon} alt="Menu" className="h-7 w-7" />
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${menuOpen ? 'bg-black/30 visible' : 'invisible opacity-0'}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center w-full">
          <div className="flex items-center py-4 pl-5 pr-3 w-full ">
            <button onClick={handleLogoClick} className="flex items-center">
              <img src={logo} alt="EliteProWealth Logo" className="h-10 w-10" />
              <span className="text-lg font-bold text-gray-800">RyInternationals</span>
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-purple-700 text-white p-1 py-1 rounded-l-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col px-6 py-6 mt-2 gap-5 text-gray-900  text-[18px]">
          <li><button onClick={() => scrollToSection("hero")}>Home</button></li>
          <li><button onClick={() => scrollToSection("about")}>About Us</button></li>
          <li><button onClick={() => scrollToSection("products")}>Products</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contacts</button></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
