import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import { LuCode2 } from 'react-icons/lu';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    const loadingTexts = [
      'Initializing',
      'Loading assets',
      'Compiling code',
      'Connecting modules',
      'Finalizing'
    ];
    
    let interval: NodeJS.Timeout;
    let textInterval: NodeJS.Timeout;
    
    // Progress animation
    interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          clearInterval(textInterval);
          
          // Small delay before completing
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          
          return 100;
        }
        return newProgress;
      });
    }, 150);
    
    // Text animation
    let textIndex = 0;
    textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % loadingTexts.length;
      setLoadingText(loadingTexts[textIndex]);
    }, 1500);
    
    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-4 sm:px-6"
      >
        {/* Logo or Name - more responsive sizing */}
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-white">ABHISHEK</span>
          <span className="text-maroon">.</span>
        </motion.h1>
        
        {/* Loading Bar */}
        <div className="h-1 sm:h-1.5 w-full bg-white/10 rounded-full mb-3 sm:mb-4 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-maroon to-maroon/70 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        
        {/* Loading Text - improved for small screens */}
        <div className="flex justify-between items-center text-xs sm:text-sm">
          <motion.p 
            className="text-white/70"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {loadingText}...
          </motion.p>
          <p className="text-white/70">{Math.round(progress)}%</p>
        </div>
        
        {/* Code-like animation - hide on very small screens */}
        <motion.div 
          className="mt-8 sm:mt-12 text-xs text-white/50 font-mono overflow-hidden h-16 sm:h-20 hidden xs:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <CodeAnimation />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Simulated code typing animation
const CodeAnimation = () => {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    const codeLines = [
      'import { Portfolio } from "./components";',
      'const skills = ["React", "TypeScript", "Node.js"];',
      'function initialize() {',
      '  return new Portfolio({ skills });',
      '}',
      'export default initialize();',
      '// Loading experience...'
    ];
    
    let currentLine = 0;
    let currentChar = 0;
    let timeout: NodeJS.Timeout;
    
    const typeNextChar = () => {
      if (currentLine >= codeLines.length) return;
      
      const line = codeLines[currentLine];
      
      if (currentChar <= line.length) {
        setLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = line.substring(0, currentChar);
          return newLines;
        });
        
        currentChar++;
      } else {
        currentLine++;
        currentChar = 0;
        setLines(prev => [...prev, '']);
      }
      
      const delay = Math.random() * 50 + 30;
      timeout = setTimeout(typeNextChar, delay);
    };
    
    timeout = setTimeout(typeNextChar, 300);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div>
      {lines.map((line, index) => (
        <div key={index} className="h-5">
          <span className="text-green-400">{'>>'}</span> {line}
          {index === lines.length - 1 && <span className="animate-pulse">|</span>}
        </div>
      ))}
    </div>
  );
};

export default LoadingScreen;