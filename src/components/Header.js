import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-3xl font-bold">
          <Link to="/">Galaxy Travel Tour</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/services" className="hover:text-gray-200">Services</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-600">
          <Link to="/" className="block py-2 px-4 text-white hover:bg-blue-700">Home</Link>
          <Link to="/about" className="block py-2 px-4 text-white hover:bg-blue-700">About</Link>
          <Link to="/services" className="block py-2 px-4 text-white hover:bg-blue-700">Services</Link>
          <Link to="/contact" className="block py-2 px-4 text-white hover:bg-blue-700">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
