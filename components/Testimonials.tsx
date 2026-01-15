import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:w-1/3 text-center lg:text-left">
                <h4 className="text-accent text-sm font-bold uppercase tracking-wider mb-2">Testimonials</h4>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">What People Say</h2>
                <p className="text-secondary leading-relaxed mb-8">
                    Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.
                </p>
                <div className="flex gap-4 justify-center lg:justify-start">
                    <button className="p-4 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100 group">
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button className="p-4 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100 group">
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Right Cards */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {TESTIMONIALS.slice(0, 2).map((testimonial, index) => (
                    <div 
                        key={testimonial.id} 
                        className={`relative p-8 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-2
                            ${index % 2 === 0 
                                ? 'bg-white border-b-4 border-accent' 
                                : 'bg-primary text-white border-b-4 border-white'}
                        `}
                    >
                        {/* Large Decorative Quote Icon */}
                        <div className={`absolute top-6 right-6 transition-opacity duration-300 ${index % 2 === 0 ? 'text-gray-100 opacity-100' : 'text-white/10 opacity-100'}`}>
                            <Quote size={64} fill="currentColor" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                                ))}
                            </div>
                            <p className={`text-base italic mb-8 leading-relaxed ${index % 2 === 0 ? 'text-secondary' : 'text-gray-300'}`}>
                                "{testimonial.text}"
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-opacity-10 border-gray-500">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center font-serif font-bold text-xl shadow-inner border-2
                                ${index % 2 === 0 ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-white'}
                            `}>
                                {testimonial.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className={`font-bold text-lg ${index % 2 === 0 ? 'text-primary' : 'text-white'}`}>
                                    {testimonial.name}
                                </h4>
                                <p className={`text-xs uppercase tracking-wide font-medium ${index % 2 === 0 ? 'text-accent' : 'text-gray-400'}`}>
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;