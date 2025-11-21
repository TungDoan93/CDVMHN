import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { BRAND_COLORS } from '../constants';
import { NavContent, Language } from '../types';

interface HeaderProps {
  content: NavContent;
  toggleLang: () => void;
  lang: Language;
}

export const Header: React.FC<HeaderProps> = ({ content, toggleLang, lang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md text-white transition-all duration-300" style={{ backgroundColor: BRAND_COLORS.primary }}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
           <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-blue-900 shadow-sm">
             <GraduationCap size={24} />
           </div>
           <div className="flex flex-col">
             <span className="font-bold text-sm md:text-base uppercase leading-tight tracking-wide">Viet My College</span>
             <span className="text-[10px] md:text-xs opacity-80 tracking-wider">Hanoi</span>
           </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="#about" className="hover:text-gray-300 text-sm lg:text-base font-medium transition">{content.about}</a>
          <a href="#programs" className="hover:text-gray-300 text-sm lg:text-base font-medium transition">{content.programs}</a>
          <a href="#facilities" className="hover:text-gray-300 text-sm lg:text-base font-medium transition">{content.facilities}</a>
          <button 
            onClick={toggleLang}
            className="px-3 py-1 rounded text-sm font-bold border hover:bg-white hover:text-blue-900 transition flex items-center gap-1"
            style={{ borderColor: BRAND_COLORS.accent }}
          >
            {content.langBtn}
          </button>
          <a 
              href="#contact"
              className="px-5 py-2 rounded-full font-bold shadow-lg hover:brightness-110 transition transform hover:-translate-y-0.5 text-sm lg:text-base"
              style={{ backgroundColor: BRAND_COLORS.accent }}
          >
            {content.contact}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-800 p-4 flex flex-col space-y-4 animate-fade-in">
          <a href="#about" className="block py-2 border-b border-blue-800 hover:pl-2 transition-all" onClick={() => setIsMenuOpen(false)}>{content.about}</a>
          <a href="#programs" className="block py-2 border-b border-blue-800 hover:pl-2 transition-all" onClick={() => setIsMenuOpen(false)}>{content.programs}</a>
          <a href="#facilities" className="block py-2 border-b border-blue-800 hover:pl-2 transition-all" onClick={() => setIsMenuOpen(false)}>{content.facilities}</a>
          <button 
            onClick={() => { toggleLang(); setIsMenuOpen(false); }} 
            className="text-left font-bold text-yellow-400 py-2"
          >
            Switch Language ({content.langBtn})
          </button>
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="block text-center py-3 rounded font-bold mt-4"
            style={{ backgroundColor: BRAND_COLORS.accent }}
          >
            {content.contact}
          </a>
        </div>
      )}
    </header>
  );
};