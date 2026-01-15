import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const HERO_IMAGES = [
  "https://picsum.photos/id/15/1920/1080", // Waterfall
  "https://picsum.photos/id/48/1920/1080", // Architecture
  "https://picsum.photos/id/54/1920/1080", // Mountains/Sky
  "https://picsum.photos/id/28/1920/1080", // Forest
  "https://picsum.photos/id/122/1920/1080" // City
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Background Slideshow */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url("${img}")` }} 
        >
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <div className="mb-8 animate-fade-in-up">
           <Logo className="w-56 h-auto" inverted={true} />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight max-w-4xl shadow-sm drop-shadow-lg">
          COMMITTED TO <span className="text-accent">SUPERIOR QUALITY</span>
        </h1>
        
        <p className="text-lg md:text-xl font-light max-w-2xl text-gray-200 mb-10 drop-shadow-md">
          Building dreams into reality with transparency, innovation, and excellence in every square foot.
        </p>

        {/* Floating Quick Filter */}
        <div className="hidden md:flex bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full absolute bottom-20">
           <div className="flex space-x-2">
              {['Ongoing Projects', 'Upcoming Projects', 'Completed Projects'].map((item) => (
                <a href="#projects" key={item} className="px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-primary transition-all cursor-pointer">
                  {item}
                </a>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;