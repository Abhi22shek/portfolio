@@ .. @@
 import React, { useState, useEffect } from 'react';
 import { AnimatePresence } from 'framer-motion';
-// import { ThemeProvider } from './context/ThemeContext';
 import Navbar from './components/Navbar';
 import Hero from './components/Hero';
 import About from './components/About';
 import Projects from './components/Projects';
 import Experience from './components/Experience';
+import Testimonials from './components/Testimonials';
import SkillsVisualization from './components/SkillsVisualization';
import BlogSection from './components/BlogSection';
import ScrollProgress from './components/ScrollProgress';
import InteractiveBackground from './components/InteractiveBackground';
 import Contact from './components/Contact';
 import Footer from './components/Footer';
 import LoadingScreen from './components/LoadingScreen';

@@ .. @@
   return (
-   
       <div className="app-container">
        <InteractiveBackground />
        <ScrollProgress />
         <AnimatePresence mode="wait">
           {isLoading ? (
@@ .. @@
                 <About />
                <SkillsVisualization />
                 <Projects />
                 <Experience />
+                <Testimonials />
                <BlogSection />
                 <Contact />
               </main>
@@ .. @@
         </AnimatePresence>
       </div>
-      
   );
 }

export default App;