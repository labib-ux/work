import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Affiliations from './components/Affiliations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Story />
      <Projects />
      <Services />
      <WhyUs />
      <Testimonials />
      <Team />
      <Affiliations />
      <Footer />
    </div>
  );
}

export default App;
