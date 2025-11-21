import React from 'react';
import { MapPin, Star, CheckCircle2 } from 'lucide-react';
import { BRAND_COLORS } from '../constants';
import { FacilitiesContent, LocationsContent } from '../types';

interface FacilitiesProps {
  content: FacilitiesContent;
  locations: LocationsContent;
}

export const Facilities: React.FC<FacilitiesProps> = ({ content, locations }) => {
  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Image Area */}
              <div className="relative order-2 lg:order-1">
                  <div className="absolute -inset-4 rounded-xl opacity-20 transform -rotate-2" style={{ backgroundColor: BRAND_COLORS.accent }}></div>
                  <div className="absolute -inset-4 rounded-xl opacity-20 transform rotate-2" style={{ backgroundColor: BRAND_COLORS.primary }}></div>
                  <div className="relative bg-gray-200 rounded-xl h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden shadow-2xl group">
                      <img 
                        src="https://picsum.photos/800/600" 
                        alt="Campus Facilities" 
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-bold text-lg">Modern Learning Environment</p>
                      </div>
                  </div>
              </div>

              <div className="order-1 lg:order-2">
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block" style={{ color: BRAND_COLORS.primary }}>
                      {content.title}
                      <div className="absolute -bottom-2 left-0 w-1/3 h-1" style={{ backgroundColor: BRAND_COLORS.accent }}></div>
                  </h3>
                  
                  <div className="space-y-6 mb-10">
                      {content.list.map((item, idx) => (
                          <div key={idx} className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                              <div className="mt-1 mr-4 min-w-[24px]">
                                  <CheckCircle2 size={24} className="text-green-500" />
                              </div>
                              <p className="text-lg text-gray-700 font-medium">{item}</p>
                          </div>
                      ))}
                  </div>
                  
                  <div className="pt-8 border-t border-gray-200">
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin size={20} className="text-red-500" />
                        <h4 className="font-bold text-gray-800 uppercase text-sm tracking-widest">{locations.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                          {locations.list.map((loc, idx) => (
                              <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-900 rounded-lg font-semibold text-sm border border-blue-100 shadow-sm hover:shadow-md transition-all cursor-default">
                                  {loc}
                              </span>
                          ))}
                      </div>
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
};