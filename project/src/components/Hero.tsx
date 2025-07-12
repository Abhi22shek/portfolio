import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';
import { createAccessibleButtonProps } from '../utils/a11y';
import DarkThemeParticles from './DarkThemeParticles';

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'https://acrobat.adobe.com/id/urn:aaid:sc:AP:7d1d0aad-1237-4a01-a96a-325b90d36b66';
      link.target = '_blank';
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0f]">
      {/* Enhanced Particle System */}
      <DarkThemeParticles />
      
      {/* Bolt-Inspired Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f1419] to-[#1a1a2e] opacity-95" />
      
      {/* Animated Background Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 via-indigo-600/25 to-cyan-600/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-600/20 via-blue-600/25 to-indigo-600/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-blue-500/10 via-indigo-500/15 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Bolt-Style Accent Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.div 
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
        <motion.div 
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 2 }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full"
        animate={floatingAnimation}
        style={{ animationDelay: '0s' }}
      />
      <motion.div 
        className="absolute top-40 right-32 w-1 h-1 bg-indigo-400 rounded-full"
        animate={floatingAnimation}
        style={{ animationDelay: '1s' }}
      />
      <motion.div 
        className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-cyan-400 rounded-full"
        animate={floatingAnimation}
        style={{ animationDelay: '2s' }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Enhanced Heading with Gradient Text */}
          <motion.div 
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Abhishek Borana
            </motion.h1>

            <motion.div className="relative">
              <motion.p 
                className="text-2xl md:text-3xl text-blue-400 font-light"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Full Stack Developer & UI/UX Designer
              </motion.p>
              
              {/* Typing cursor effect */}
              <motion.span
                className="inline-block w-0.5 h-8 bg-blue-400 ml-2"
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Glass Effect Description */}
          <motion.div 
            variants={itemVariants}
            className="backdrop-blur-xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-500/20 shadow-2xl shadow-blue-500/10 relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-indigo-600/5 to-purple-600/5 rounded-2xl" />
            
            <motion.p 
              className="text-xl text-blue-100 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Crafting modern web experiences with clean code and innovative design solutions.
            </motion.p>
          </motion.div>

          {/* Enhanced Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              {...downloadButtonProps}
            >
              {isDownloading ? (
                <>
                  <span className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                  Downloading...
                </>
              ) : (
                <>
                  <FaDownload className="w-5 h-5" />
                  Download Resume
                  <FaArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>

            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
              <FaArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Enhanced Social Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-8 pt-8"
          >
            {[
              { Icon: FaGithub, label: 'GitHub', href: 'https://github.com/Abhi22shek', color: 'from-gray-600 to-gray-800' },
              { Icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/abhishekb2202', color: 'from-blue-600 to-blue-800' },
              { Icon: FaTwitter, label: 'Twitter', href: 'https://x.com/Abhishe22437482', color: 'from-cyan-600 to-blue-600' }
            ].map(({ Icon, label, href, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-full bg-gradient-to-r ${color} text-white hover:scale-110 transition-all duration-300 group shadow-lg shadow-blue-500/20 relative overflow-hidden`}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 5,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Icon className="w-6 h-6 relative z-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;