import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      {/* <Experience />
      <Architecture /> */}
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
