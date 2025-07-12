import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-8 left-1/4 w-64 h-64 bg-maroon/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -top-8 right-1/4 w-64 h-64 bg-maroon/5 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center space-y-8">
          {/* Logo or Brand */}
          <motion.div 
            variants={itemVariants}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-maroon to-white"
          >
            ABHISHEK BORANA
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex space-x-8"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/yourusername' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername' },
              { icon: FaTwitter, href: 'https://twitter.com/yourusername' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-maroon transition-all duration-300 transform hover:scale-110"
                whileHover={{ y: -3 }}
              >
                <social.icon className="text-2xl" />
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 text-sm"
          >
            {[
              'Home', 'About', 'Projects', 'Experience', 'Contact'
            ].map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white group-hover:text-maroon transition-colors duration-300">
                  {link}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            variants={itemVariants}
            className="text-sm text-gray-400 text-center"
          >
            <p>© {currentYear} Abhishek Borana. All rights reserved.</p>
            <p className="mt-2 text-xs">Crafted with passion and precision</p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;