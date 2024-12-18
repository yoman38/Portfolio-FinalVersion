import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: 'home' | 'portfolio' | 'cv' | 'articles') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: 'home' | 'portfolio' | 'cv' | 'articles') => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-8 py-6 flex justify-between items-center">
        <h1 
          onClick={() => handleNavClick('home')}
          className="text-white text-xl font-bold tracking-wider cursor-pointer"
        >
          GUILLAUME BRAY
        </h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-black bg-opacity-95 border-t border-gray-800">
          <div className="py-4">
            <button
              onClick={() => handleNavClick('portfolio')}
              className="block w-full text-left px-8 py-3 text-white hover:text-gray-300 transition-colors"
            >
              PORTFOLIO
            </button>
            <button
              onClick={() => handleNavClick('cv')}
              className="block w-full text-left px-8 py-3 text-white hover:text-gray-300 transition-colors"
            >
              CV
            </button>
            <button
              onClick={() => handleNavClick('articles')}
              className="block w-full text-left px-8 py-3 text-white hover:text-gray-300 transition-colors"
            >
              ARTICLES
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;