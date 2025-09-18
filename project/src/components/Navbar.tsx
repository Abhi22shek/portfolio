import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { TbBolt } from 'react-icons/tb';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [thunderActive, setThunderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Thunder effect trigger
  useEffect(() => {
    const thunderInterval = setInterval(() => {
      setThunderActive(true);
      setTimeout(() => setThunderActive(false), 300);
    }, 5000);

    return () => clearInterval(thunderInterval);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'About', href: '#about', icon: '👨‍💻' },
    { name: 'Projects', href: '#projects', icon: '🚀' },
    { name: 'Experience', href: '#experience', icon: '💼' },
    { name: 'Contact', href: '#contact', icon: '📧' },
    { name: 'Blog', href: '/blog', icon: '✍️' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = -70;
      const top = element.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Thunder Background Effect */}
      <AnimatePresence>
        {thunderActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-blue-500/5 pointer-events-none z-40"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo with Thunder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl font-bold relative flex items-center gap-2">
                <motion.div
                  animate={thunderActive ? { 
                    color: ['#3b82f6', '#ffffff', '#3b82f6'],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <TbBolt className="text-blue-400 w-7 h-7" />
                </motion.div>
                <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                  ABHISHEK
                </span>
                <span className="text-blue-400 animate-pulse">.</span>
              </div>
              
              {/* Enhanced glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={thunderActive ? { opacity: [0, 0.5, 0] } : {}}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Enhanced Desktop Navigation with Thunder */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link, index) =>
                link.href.startsWith('/') ? (
                  <Link to={link.href} key={link.name}>
                    <motion.button
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full group overflow-hidden text-gray-300 hover:text-white hover:bg-white/10`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">{link.name}</span>
                    </motion.button>
                  </Link>
                ) : (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleLinkClick(link.href)}
                    className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full group overflow-hidden ${
                      activeSection === link.href.slice(1)
                        ? 'text-white bg-blue-500/20 shadow-lg shadow-blue-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {/* ... existing indicator logic ... */}
                  </motion.button>
                )
              )}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="md:hidden relative p-3 text-white hover:text-blue-400 transition-colors duration-300 rounded-full hover:bg-white/10 touch-manipulation"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation'
              }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
              </motion.div>
              
              {/* Thunder effect on menu button */}
              <AnimatePresence>
                {thunderActive && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.5, 0], opacity: [0, 0.5, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-blue-400/30 rounded-full"
                  />
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Navigation Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
              style={{ touchAction: 'none' }}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                mass: 0.8
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#0a0a0f] via-[#0f1419] to-[#1a1a2e] z-50 md:hidden shadow-2xl border-l border-blue-500/20 overflow-hidden"
              style={{ touchAction: 'pan-y' }}
            >
              {/* Thunder Effect in Mobile Menu */}
              <AnimatePresence>
                {thunderActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 0.3, 0, 0.3, 0],
                      scale: [1, 1.02, 1]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10"
                  />
                )}
              </AnimatePresence>

              {/* Mobile Menu Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex items-center justify-between p-6 border-b border-blue-500/20 relative z-10"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={thunderActive ? { 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1]
                    } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <TbBolt className="text-blue-400 w-6 h-6" />
                  </motion.div>
                  <div className="text-xl font-bold">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                      Menu
                    </span>
                  </div>
                </div>
                
                <motion.button
                  onClick={closeMobileMenu}
                  className="p-2 text-white hover:text-blue-400 transition-colors rounded-full hover:bg-white/10 touch-manipulation"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                >
                  <RiCloseLine size={24} />
                </motion.button>
              </motion.div>

              {/* Mobile Menu Items */}
              <div className="py-8 px-6 space-y-2 relative z-10">
                {navLinks.map((link, index) =>
                  link.href.startsWith('/') ? (
                    <Link to={link.href} key={link.name}>
                      <motion.button
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1, duration: 0.3, ease: 'easeOut' }}
                        className={`w-full flex items-center space-x-4 px-4 py-4 text-left font-medium transition-all duration-300 rounded-xl group overflow-hidden touch-manipulation text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-blue-500/20`}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-2xl relative z-10">{link.icon}</span>
                        <div className="flex-1 relative z-10">
                          <span className="text-lg">{link.name}</span>
                        </div>
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.3, ease: 'easeOut' }}
                      onClick={() => handleLinkClick(link.href)}
                      className={`w-full flex items-center space-x-4 px-4 py-4 text-left font-medium transition-all duration-300 rounded-xl group overflow-hidden touch-manipulation ${
                        activeSection === link.href.slice(1)
                          ? 'text-white bg-gradient-to-r from-blue-500/30 to-indigo-500/20 shadow-lg shadow-blue-500/20 border border-blue-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-blue-500/20'
                      }`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* ... existing icon and indicator logic ... */}
                    </motion.button>
                  )
                )}
              </div>

              {/* Mobile Menu Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-500/20 relative z-10"
              >
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">Let's connect</p>
                  <div className="flex justify-center space-x-4">
                    {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
                      <motion.div
                        key={social}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                        className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center border border-blue-500/30 touch-manipulation"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ 
                          WebkitTapHighlightColor: 'transparent',
                          touchAction: 'manipulation'
                        }}
                      >
                        <span className="text-xs text-blue-400 font-bold">
                          {social[0]}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
