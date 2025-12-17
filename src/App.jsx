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
    <div className="relative min-h-screen overflow-x-hidden">
      <SimpleBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Education />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        {/* <Architecture /> */}
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
