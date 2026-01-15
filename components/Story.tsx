import React from 'react';
import { ArrowRight, CheckCircle, Trophy, Users, Building2 } from 'lucide-react';

const Story: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="relative">
             {/* Decorative Background Box */}
             <div className="absolute top-8 left-8 w-full h-full border-2 border-accent/20 rounded-lg -z-10 hidden md:block"></div>
             
             {/* Main Image */}
             <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl mr-0 md:mr-12 mb-0 md:mb-12 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" 
                  alt="Dream Dale Construction" 
                  className="w-full h-[400px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
             </div>

             {/* Floating Secondary Image (Desktop) */}
             <div className="absolute -bottom-8 -right-4 z-20 w-2/3 border-8 border-white rounded-lg shadow-xl hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" 
                  alt="Modern Interior" 
                  className="w-full h-[280px] object-cover"
                />
             </div>

             {/* Experience Badge */}
             <div className="absolute top-10 left-0 md:-left-6 bg-accent text-white p-6 rounded shadow-lg z-30 animate-fade-in-up">
                <div className="text-center">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-white/90" />
                    <span className="block text-3xl font-bold font-serif">5+</span>
                    <span className="text-xs uppercase tracking-widest font-medium">Years of<br/>Success</span>
                </div>
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:pl-8 mt-12 lg:mt-0">
             <h5 className="text-accent font-bold tracking-widest uppercase text-sm mb-3 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent"></span> About Us
             </h5>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                Building Dreams into <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Concrete Reality</span>
             </h2>
             <p className="text-secondary text-lg mb-8 leading-relaxed">
                Since 2020, Dream Dale Ltd. has been dedicated to enhancing the quality of life for our clients by providing superior assets. We are not just building structures; we are crafting the backdrop for your memories with 100% fair & transparent dealings.
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                   <div className="bg-accent/10 p-2 rounded-full text-accent flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                   </div>
                   <div>
                      <h4 className="font-bold text-primary text-lg">Transparency</h4>
                      <p className="text-sm text-secondary mt-1">Clear, honest financial and legal processes.</p>
                   </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                   <div className="bg-accent/10 p-2 rounded-full text-accent flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                   </div>
                   <div>
                      <h4 className="font-bold text-primary text-lg">Innovation</h4>
                      <p className="text-sm text-secondary mt-1">Modern safety standards and eco-friendly designs.</p>
                   </div>
                </div>
             </div>

             {/* Stats Row */}
             <div className="flex items-center gap-12 py-6 border-t border-gray-100 mb-8">
                 <div className="flex items-center gap-3">
                    <Building2 className="w-10 h-10 text-gray-300 stroke-1" />
                    <div>
                        <h3 className="text-3xl font-bold text-primary">20+</h3>
                        <p className="text-xs text-secondary uppercase font-semibold">Total Projects</p>
                    </div>
                 </div>
                 <div className="w-[1px] h-12 bg-gray-200"></div>
                 <div className="flex items-center gap-3">
                    <Users className="w-10 h-10 text-gray-300 stroke-1" />
                    <div>
                        <h3 className="text-3xl font-bold text-primary">85+</h3>
                        <p className="text-xs text-secondary uppercase font-semibold">Happy Families</p>
                    </div>
                 </div>
             </div>

             <a href="#about" className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-semibold hover:bg-accent transition-colors duration-300 rounded shadow-lg hover:shadow-accent/30">
                More About Us 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;