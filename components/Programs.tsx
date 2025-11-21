import React from 'react';
import { Globe, Briefcase, Monitor, Heart, ChevronRight, LucideIcon } from 'lucide-react';
import { BRAND_COLORS } from '../constants';
import { MajorsContent } from '../types';
import { SectionTitle } from './SectionTitle';

interface ProgramsProps {
  content: MajorsContent;
}

interface CardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
}

const ProgramCard: React.FC<CardProps> = ({ title, items, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-t-4 transform hover:-translate-y-1" style={{ borderColor: BRAND_COLORS.accent }}>
    <div className="flex items-center mb-6">
      <div className="p-3 rounded-full mr-4 text-white shadow-md" style={{ backgroundColor: BRAND_COLORS.primary }}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold leading-tight" style={{ color: BRAND_COLORS.primary }}>{title}</h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center text-gray-600 group cursor-default">
          <ChevronRight size={16} className="mr-2 transition-transform group-hover:translate-x-1" style={{ color: BRAND_COLORS.accent }} />
          <span className="group-hover:text-gray-900 transition-colors">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Programs: React.FC<ProgramsProps> = ({ content }) => {
  const icons = [Globe, Briefcase, Monitor, Heart];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
          <SectionTitle color={BRAND_COLORS.primary}>{content.title}</SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {content.groups.map((group, idx) => (
              <ProgramCard 
                key={idx} 
                title={group.name} 
                items={group.items} 
                icon={icons[idx % icons.length]} 
              />
            ))}
          </div>
      </div>
    </section>
  );
};