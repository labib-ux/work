import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h4 className="text-accent text-sm font-bold uppercase tracking-wider mb-2">Our Services</h4>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">What We Do?</h2>
            </div>
            <a href="#" className="hidden md:flex items-center text-accent font-medium hover:underline mt-4 md:mt-0">
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
                <div key={service.id} className="p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 group">
                    <div className="mb-6 p-4 bg-white rounded-full inline-block shadow-sm group-hover:bg-accent/10 transition-colors">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed mb-6">
                        {service.description}
                    </p>
                    <a href="#" className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors">
                        Learn More <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
