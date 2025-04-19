import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';
import CodeBlock from './CodeBlock';
import { createAccessibleButtonProps } from '../utils/a11y';

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      // Create a link element
      const link = document.createElement('a');
      link.href = '/resume.pdf'; // Path to your resume file
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
    }, 500);
  };

  const downloadButtonProps = createAccessibleButtonProps(
    handleDownloadResume,
    'Download Resume',
    isDownloading
  );

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 sm:my-25 md:my-30 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-white/20 to-white/10 border border-white/20 text-white text-sm sm:text-base">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm{' '}
              <TypeAnimation
                sequence={[
                  'Abhishek Borana',
                  1000,
                  'a Developer',
                  1000,
                  'a Designer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-" // Changed from gradient to white
              />
            </motion.h1>

            <motion.p 
              className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Crafting digital experiences through elegant code and innovative design solutions.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.button 
                className={`button-glow flex items-center gap-2 group relative overflow-hidden ${isDownloading ? 'opacity-70 cursor-wait' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...downloadButtonProps}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isDownloading ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <FaDownload className="w-4 h-4 sm:size-4" />
                      Download Resume
                      <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" // Changed to black for dark theme
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <div className="flex items-center gap-4 sm:gap-6">
                {[
                  { Icon: FaGithub, label: 'GitHub', href: 'https://github.com/Abhi22shek' },
                  { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/abhishekb2202' },
                  { Icon: FaTwitter, label: 'Twitter', href: 'https://x.com/Abhishe22437482' }
                ].map(({ Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-lg group-hover:bg-white/30 transition-all duration-300" />
                    <div className="relative p-2 sm:p-3 rounded-full bg-gradient-to-r from-white/10 to-transparent border border-white/20 group-hover:border-white/40 transition-all duration-300">
                      <Icon className="w-10 sm:w-5 sm:h-5 text-white group-hover:text-white transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Code Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 hidden md:block"
          >
            <div className="relative z-10">
              <CodeBlock />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-white/30 rounded-full blur-[80px] sm:blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-white/20 rounded-full blur-[80px] sm:blur-[100px]" />
          </motion.div>

          {/* Mobile Code Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:hidden w-full"
          >
            <div className="relative z-10 mt-30">
              <CodeBlock isMobile={true} />
            </div>
          </motion.div>
        </div>

        
        
      </div>
    </section>
  );
};

export default Hero;
