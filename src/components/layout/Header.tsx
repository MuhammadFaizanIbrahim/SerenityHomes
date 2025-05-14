import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl border border-[#FED3DD] transition-all duration-300 ${
        isScrolled
          ? "bg-[#FED3DD]/40 shadow-lg backdrop-blur-md rounded-2xl"
          : "bg-[#FED3DD]/30 backdrop-blur-md rounded-3xl"
      }`}
    >
      <div className="px-8 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Serenity Home Logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative ${
                  isScrolled
                    ? "text-[#F2A2BD] hover:text-amber-800"
                    : "text-white/90 hover:text-[#F2A2BD]"
                } transition-colors duration-300 font-medium ${
                  location.pathname === link.href
                    ? "after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-current"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant={isScrolled ? "primary" : "light"} size="sm">
              Shop Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${
              isScrolled ? "text-stone-800" : "text-white"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-lg">
          <div className="py-4 px-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block text-stone-700 hover:text-amber-800 py-2 transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "font-medium text-amber-800"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="primary"
              className="w-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              Shop Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
