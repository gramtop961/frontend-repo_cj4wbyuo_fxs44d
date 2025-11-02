import React from 'react';
import Hero from './components/Hero';
import AboutAndServices from './components/AboutAndServices';
import ProjectsAndTestimonials from './components/ProjectsAndTestimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <AboutAndServices />
      <ProjectsAndTestimonials />
      <Contact />
    </div>
  );
}

export default App;
