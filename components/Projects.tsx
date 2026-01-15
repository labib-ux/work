import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { MapPin, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'Ongoing' | 'Upcoming' | 'Completed'>('Ongoing');

  const filteredProjects = PROJECTS.filter(project => project.status === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header Section (Orange/Blue Style from PDF) */}
        <div className="relative bg-primary rounded-xl overflow-hidden mb-12 py-12 px-6 text-center">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/id/195/1200/400')] bg-cover opacity-20"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Find Your Dream Home</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    We are a real estate agency that will help you find the best residence you dream of. Let's discuss for your dream house?
                </p>
            </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white p-1 rounded-full shadow-sm border border-gray-200">
                {(['Ongoing', 'Upcoming', 'Completed'] as const).map((status) => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            filter === status 
                            ? 'bg-accent text-white shadow-md' 
                            : 'text-secondary hover:text-primary'
                        }`}
                    >
                        {status}
                    </button>
                ))}
            </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))
            ) : (
                <div className="col-span-full text-center py-10 text-gray-500">
                    No projects found in this category.
                </div>
            )}
        </div>

        <div className="mt-12 text-center">
            <a href="#all-projects" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="relative h-64 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded shadow-sm uppercase">
                    {project.status}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <div className="flex items-start text-secondary text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
                    <span>{project.location}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 text-sm text-gray-600">
                    <span className="block font-medium text-primary">Specs:</span>
                    {project.specs}
                </div>
            </div>
        </div>
    )
}

export default Projects;
