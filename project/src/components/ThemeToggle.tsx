import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
      document.documentElement.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (!isDarkTheme) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('portfolio-theme', 'original');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDarkTheme ? "Switch to original theme" : "Switch to dark theme"}
    >
      <div className="relative w-12 h-6 rounded-full overflow-hidden">
        // In the ThemeToggle component, update the background color:
        <motion.div 
          className="absolute inset-0 rounded-full"
          initial={false}
          animate={{ 
            backgroundColor: isDarkTheme ? '#000000' : '#e00909',
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Stars in dark mode */}
        {isDarkTheme && (
          <>
            <motion.div 
              className="absolute w-1 h-1 bg-white rounded-full"
              animate={{ 
                opacity: [0, 1, 0],
                x: ['20%', '20%', '20%'],
                y: ['30%', '30%', '30%'],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div 
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              animate={{ 
                opacity: [0, 1, 0],
                x: ['70%', '70%', '70%'],
                y: ['40%', '40%', '40%'],
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            />
            <motion.div 
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              animate={{ 
                opacity: [0, 1, 0],
                x: ['40%', '40%', '40%'],
                y: ['60%', '60%', '60%'],
              }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
          </>
        )}
        
        {/* Sun/Moon icons */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ 
            x: isDarkTheme ? 0 : '100%',
            opacity: isDarkTheme ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <FaMoon className="w-4 h-4 text-white" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ 
            x: isDarkTheme ? '-100%' : 0,
            opacity: isDarkTheme ? 0 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <FaSun className="w-4 h-4 text-white" />
        </motion.div>
        
        {/* Sliding circle */}
        <motion.div 
          className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-md"
          initial={false}
          animate={{ 
            x: isDarkTheme ? 'calc(100% - 0.5rem)' : '0.25rem',
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;