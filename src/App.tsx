import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import AudioToggle from './components/AudioToggle';
import { Routes, Route } from 'react-router-dom';
import PagePlayground from './pages/playground';

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
      <Route path="/playground" element={<PagePlayground />} />

      <Route path="/" element={
        <AnimatePresence>
          {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
          {!showIntro && (
            <div className="min-h-screen bg-black">
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Timeline />
              <Experience />
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
