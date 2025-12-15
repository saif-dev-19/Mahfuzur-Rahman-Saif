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
import SimpleBackground from './components/SimpleBackground';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-x-hidden">
      <SimpleBackground />
      
      {/* Premium Neon Border Glow */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 animate-pulse" />
      </div>
      
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Architecture />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
