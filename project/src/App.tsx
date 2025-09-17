import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
// import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);


  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
   
      <div className="app-container">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
          ) : (
            <>
              <Navbar />
              <main>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
              </main>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </div>
      
  );
}

export default App;