import React from 'react';
import { FEATURES } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h4 className="text-accent text-sm font-bold uppercase tracking-wider mb-2">Our Benefit</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Why Choose Dream Dale</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center text-white">
                        {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 32 })}
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">{feature.title}</h3>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;