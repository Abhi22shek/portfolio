import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { TbHelmetOff } from 'react-icons/tb';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

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
  ];

 const handleLinkClick = (href: string) => {
  setIsOpen(false);
  const element = document.querySelector(href);
  if (element) {
    const offset = -70; // Adjust based on your navbar height
    const top = element.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
};

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.2
      }
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
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
            {/* Enhanced Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl font-bold relative">
                <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                  ABHISHEK
                </span>
                <span className="text-blue-400 animate-pulse">.</span>
              </div>
              
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full group ${
                    activeSection === link.href.slice(1)
                      ? 'text-white bg-blue-500/20 shadow-lg shadow-blue-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  
                  {/* Active indicator */}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeDesktop"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="md:hidden relative p-3 text-white hover:text-blue-400 transition-colors duration-300 rounded-full hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#0a0a0f] via-[#0f1419] to-[#1a1a2e] z-50 md:hidden shadow-2xl"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-blue-500/20">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold"
                >
                  <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                    Menu
                  </span>
                </motion.div>
                
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white hover:text-blue-400 transition-colors rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <RiCloseLine size={24} />
                </motion.button>
              </div>

              {/* Mobile Menu Items */}
              <div className="py-8 px-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    custom={index}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={() => handleLinkClick(link.href)}
                    className={`w-full flex items-center space-x-4 px-4 py-4 text-left font-medium transition-all duration-300 rounded-xl group ${
                      activeSection === link.href.slice(1)
                        ? 'text-white bg-gradient-to-r from-blue-500/30 to-indigo-500/20 shadow-lg shadow-blue-500/20 border border-blue-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-blue-500/20'
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <div className="flex-1">
                      <span className="text-lg">{link.name}</span>
                      {activeSection === link.href.slice(1) && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          className="h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mt-1 rounded-full"
                        />
                      )}
                    </div>
                    
                    {/* Arrow indicator */}
                    <motion.div
                      className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: activeSection === link.href.slice(1) ? 0 : -10 }}
                    >
                      →
                    </motion.div>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-500/20"
              >
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">Let's connect</p>
                  <div className="flex justify-center space-x-4">
                    {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
                      <motion.div
                        key={social}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center border border-blue-500/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
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
{/* Theme toggle component removed due to undefined reference */}
       
      </AnimatePresence>
    </>
  );
};

export default Navbar;