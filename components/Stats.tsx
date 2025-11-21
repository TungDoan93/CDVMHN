import React from 'react';
import { BRAND_COLORS } from '../constants';
import { StatItem } from '../types';

interface StatsProps {
  stats: StatItem[];
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section className="py-16 text-white relative" style={{ backgroundColor: BRAND_COLORS.primary }}>
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-blue-800/50">
              {stats.map((stat, index) => (
                  <div key={index} className="p-4 flex flex-col items-center group hover:bg-white/5 rounded-lg transition-colors duration-300">
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                        {stat.num}
                      </div>
                      <div className="text-sm md:text-base opacity-90 font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </section>
  );
};