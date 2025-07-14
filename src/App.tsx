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
 import Contact from './components/Contact';
 import Footer from './components/Footer';
 import LoadingScreen from './components/LoadingScreen';

@@ .. @@
   return (
-   
       <div className="app-container">
         <AnimatePresence mode="wait">
           {isLoading ? (
@@ .. @@
                 <About />
                 <Projects />
                 <Experience />
+                <Testimonials />
                 <Contact />
               </main>
@@ .. @@
         </AnimatePresence>
       </div>
-      
   );
 }

export default LoadingScreen