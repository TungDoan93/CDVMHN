import React from 'react';
import { BRAND_COLORS } from '../constants';

interface SectionTitleProps {
  children: React.ReactNode;
  color?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, color = BRAND_COLORS.primary }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase relative pb-4">
      <span style={{ color }}>{children}</span>
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1" 
        style={{ backgroundColor: BRAND_COLORS.accent }}
      />
    </h2>
  );
};