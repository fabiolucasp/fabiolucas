import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Instagram } from 'lucide-react';
import { NavLink } from 'react-router-dom'; // Import NavLink

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfólio', href: '/' }, // Root is now the portfolio
    { name: 'Serviços', href: '/servicos' }, // New Services Page
    { name: 'E-books', href: '/ebooks' },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Comunidade', href: '/comunidade' },
    { name: 'Contato', href: '/#contact' }, // Keep contact as anchor in portfolio view
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#000000]/90 backdrop-blur-md shadow-md py-2 border-[#333]' 
          : 'bg-transparent py-4 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2 group"> {/* Use NavLink for internal routing */}
            <div className="bg-[#44D62C] p-2 rounded-lg text-black group-hover:rounded-xl transition-all duration-300">
                <Code2 size={24} />
            </div>
            <span className="text-xl font-bold tracking-wide text-[#EEEEEE] font-mono">
              F<span className="text-[#44D62C]">/</span>L
            </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <NavLink // Use NavLink for all internal routes
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium text-[#EEEEEE] hover:bg-[#111111] hover:text-[#44D62C] transition-all duration-200 font-mono ${isActive ? 'bg-[#111111] text-[#44D62C]' : ''}`
              }
              onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu on click
            >
              {link.name}
            </NavLink>
          ))}
          {/* Login Button */}
          <NavLink to="/login" className="px-4 py-2 ml-4 rounded-full text-sm font-medium bg-[#44D62C] text-[#000000] hover:bg-[#5aff3d] transition-all duration-200 font-mono">
            Login
          </NavLink>

          {/* Instagram Studio Pill */}
          <NavLink
            to="/instagram-studio"
            title="Instagram Studio & Gestor de Marketing"
            aria-label="Instagram Studio"
            className="p-2 ml-2 rounded-full text-[#AAA] hover:text-white hover:bg-gradient-to-tr hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] transition-all duration-200"
          >
            <Instagram size={18} />
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          className="md:hidden text-[#EEEEEE] p-2 hover:text-[#44D62C]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#000000] border-t border-[#333] p-4 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-[#EEEEEE] hover:bg-[#111111] hover:text-[#44D62C] font-mono ${isActive ? 'bg-[#111111] text-[#44D62C]' : ''}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/login" className="block px-4 py-3 rounded-lg bg-[#44D62C] text-[#000000] hover:bg-[#5aff3d] font-mono" onClick={() => setIsMobileMenuOpen(false)}>
            Login
          </NavLink>
          <NavLink 
            to="/instagram-studio" 
            className="flex items-center gap-2 px-4 py-3 rounded-lg text-[#EEEEEE] hover:bg-[#111111] hover:text-[#44D62C] font-mono" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Instagram size={18} /> Instagram Studio
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;