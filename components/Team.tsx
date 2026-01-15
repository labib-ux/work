import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h4 className="text-accent text-sm font-bold uppercase tracking-wider mb-2">Our Teams</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12">Meet Our Agents</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {TEAM.map((member) => (
                    <div key={member.id} className="group">
                        <div className="overflow-hidden rounded-lg mb-4 bg-gray-100 relative">
                             {/* Fallback box if image fails or placeholder */}
                            <div className="aspect-[3/4] bg-gray-200 w-full h-full flex items-center justify-center text-gray-400">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                        <p className="text-accent text-sm">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Team;
