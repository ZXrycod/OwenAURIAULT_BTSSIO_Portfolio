import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Playground from './components/Playground';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import AudioToggle from './components/AudioToggle';

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
    <AnimatePresence>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {!showIntro && (
        <div className="min-h-screen bg-black">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Timeline />
          <Playground />
          <Experience />
          <Contact />
          <Footer />
          <AIChat />
          <AudioToggle />
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
