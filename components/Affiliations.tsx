import React from 'react';
import { AFFILIATIONS } from '../constants';

const Affiliations: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-b border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
            <h3 className="text-xl font-serif font-bold text-primary">Affiliations & Suppliers</h3>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex space-x-12 px-4">
                {[...AFFILIATIONS, ...AFFILIATIONS, ...AFFILIATIONS].map((name, index) => (
                    <div key={index} className="flex items-center justify-center min-w-[150px] h-20 bg-white shadow-sm rounded-lg border border-gray-100 text-gray-400 font-bold text-lg hover:text-primary hover:border-accent transition-colors cursor-pointer px-6">
                        {name}
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Affiliations;
