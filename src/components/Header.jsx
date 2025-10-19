import React, { useState, useEffect } from "react";

const Header = ({ 
  title = "MyKarya Portfolio", 
  subtitle = "Welcome to my portfolio website!" 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // 🔹 Handle scroll fade
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newOpacity = 1 - scrollY / 300;
      if (newOpacity < 0.9) newOpacity = 0.9; // min opacity
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className="bg-white shadow-lg sticky top-0 z-50 transition-opacity duration-300"
      style={{ opacity }}
    >
      <div className="container mx-auto px-4 py-4 lg:py-6">
        <nav className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <img 
              src="./image/logo.png" 
              alt="MyKarya Logo" 
              className="h-12 w-auto" 
            />
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1 rounded-md hover:bg-blue-50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 text-gray-700 transition-transform duration-200 ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-64 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="bg-gray-50 rounded-lg p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-blue-600 hover:bg-white font-medium transition-colors duration-200 px-4 py-3 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
