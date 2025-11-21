import React from 'react';
import { BRAND_COLORS } from '../constants';
import { HeroContent } from '../types';
import { PlayCircle } from 'lucide-react';

interface HeroProps {
  content: HeroContent;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative py-20 md:py-32 flex items-center justify-center text-center px-4 overflow-hidden bg-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-5 bg-repeat" style={{ 
          backgroundImage: `radial-gradient(${BRAND_COLORS.primary} 1px, transparent 1px)`, 
          backgroundSize: '30px 30px' 
      }}></div>
      <div className="absolute inset-0 z-0 opacity-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-400 filter blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-red-400 filter blur-[120px] transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <span className="inline-block py-1 px-4 rounded-full text-xs md:text-sm font-bold mb-6 bg-blue-50 tracking-wider border border-blue-100" style={{ color: BRAND_COLORS.primary }}>
              EQuest Education Group
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight" style={{ color: BRAND_COLORS.primary }}>
              {content.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 font-light max-w-3xl">
              {content.subtitle}
          </p>
          <p className="text-md md:text-lg mb-10 max-w-2xl mx-auto text-gray-500 leading-relaxed">
              {content.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <a 
                href="#contact"
                className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 text-center" 
                style={{ backgroundColor: BRAND_COLORS.accent }}
              >
                  {content.cta}
              </a>
              <button className="px-8 py-4 rounded-full bg-white text-gray-800 border font-bold text-lg shadow hover:bg-gray-50 transition flex items-center justify-center gap-2 group">
                  <PlayCircle size={20} className="text-gray-400 group-hover:text-blue-900 transition-colors" />
                  Video Intro
              </button>
          </div>
      </div>
    </section>
  );
};