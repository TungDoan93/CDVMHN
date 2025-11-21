import React from 'react';
import { Users, Briefcase } from 'lucide-react';
import { BRAND_COLORS } from '../constants';
import { PhilosophyContent } from '../types';
import { SectionTitle } from './SectionTitle';

interface PhilosophyProps {
  content: PhilosophyContent;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
          <SectionTitle color={BRAND_COLORS.primary}>{content.title}</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
              <div className="bg-gray-50 p-8 lg:p-10 rounded-2xl border-l-8 shadow-sm hover:shadow-md transition-shadow flex flex-col" style={{ borderColor: BRAND_COLORS.primary }}>
                  <div className="mb-6 p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                    <Users size={32} style={{ color: BRAND_COLORS.primary }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: BRAND_COLORS.primary }}>
                    {content.items[0].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                    {content.items[0].desc}
                  </p>
              </div>

              <div className="bg-gray-50 p-8 lg:p-10 rounded-2xl border-l-8 shadow-sm hover:shadow-md transition-shadow flex flex-col" style={{ borderColor: BRAND_COLORS.accent }}>
                  <div className="mb-6 p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                    <Briefcase size={32} style={{ color: BRAND_COLORS.accent }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: BRAND_COLORS.primary }}>
                    {content.items[1].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                    {content.items[1].desc}
                  </p>
              </div>
          </div>
      </div>
    </section>
  );
};