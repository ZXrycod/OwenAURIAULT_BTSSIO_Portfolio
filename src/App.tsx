import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import StatsDocs from './components/StatsDocs';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import Competences from './components/Competences';
import AudioToggle from './components/AudioToggle';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (!showIntro) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [showIntro]);

  return (
    <Routes>
      <Route path="/" element={
        <AnimatePresence>
          {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
          {!showIntro && (
            <div className="min-h-screen bg-black">
              <Navbar />
              <Hero />
              <About />
              <Competences />
              <Projects />
              <Experience />
              <StatsDocs />
              <Contact />
              <Footer />
              <AIChat />
              <AudioToggle />
            </div>
          )}
        </AnimatePresence>
      } />
    </Routes>
  );
}

export default App;
