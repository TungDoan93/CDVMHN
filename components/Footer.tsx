import React from 'react';
import { Facebook, Youtube, Linkedin } from 'lucide-react';
import { BRAND_COLORS } from '../constants';
import { FooterContent } from '../types';

interface FooterProps {
  content: FooterContent;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer id="contact" className="text-white pt-20 pb-8 relative overflow-hidden" style={{ backgroundColor: BRAND_COLORS.primary }}>
       {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto mb-16 bg-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
              <p className="mb-10 text-lg md:text-xl text-blue-100 leading-relaxed">
                Join the community of global citizens at Viet My College Hanoi. Admissions are open for the upcoming semester.
              </p>
              <button className="px-12 py-5 rounded-full font-bold text-xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-red-400/50" style={{ backgroundColor: BRAND_COLORS.accent }}>
                  Apply Now
              </button>
          </div>

          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
              <p>{content.copy}</p>
              <div className="flex space-x-6 mt-6 md:mt-0">
                  <a href="#" className="p-2 bg-blue-800/50 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 group">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="p-2 bg-blue-800/50 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 group">
                    <Youtube size={20} />
                  </a>
                  <a href="#" className="p-2 bg-blue-800/50 rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300 group">
                    <Linkedin size={20} />
                  </a>
              </div>
          </div>
      </div>
    </footer>
  );
};