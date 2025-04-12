import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-maroon/10 rounded-full blur-[100px]"></div>
      <div className="absolute -top-20 right-1/4 w-48 h-48 bg-maroon/5 rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-4">
        {/* Top section with logo and social links */}
        <div className="glass-effect rounded-2xl p-8 mb-12 border border-white/10">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and title */}
            <div className="text-center md:text-left">
              <motion.h3 
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-white">ABHISHEK</span>
                <span className="text-maroon">.</span>
              </motion.h3>
              <p className="text-white/60">Full Stack Developer</p>
            </div>
            
            {/* Newsletter or tagline */}
            <div className="text-center">
              <p className="text-white/80 italic">"Crafting digital experiences with code and creativity"</p>
            </div>

            {/* Social links */}
            <div className="flex justify-center md:justify-end items-center gap-4">
              {[
                { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Abhi22shek' },
                { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/abhishekb2202' },
                { icon: FaTwitter, label: 'Twitter', href: 'https://x.com/Abhishe22437482' }
              ].map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 rounded-full bg-maroon/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-3 rounded-full bg-gradient-to-r from-maroon/10 to-transparent border border-maroon/20 group-hover:border-maroon/40 transition-all">
                    <Icon className="w-5 h-5 text-white group-hover:text-maroon transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="order-2 md:order-1">
            <p className="text-white/60 text-sm">© {currentYear} Abhishek Borana. All rights reserved.</p>
          </div>
          
          {/* Navigation */}
          <nav className="order-1 md:order-2 mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-colors relative group overflow-hidden"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-maroon group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;