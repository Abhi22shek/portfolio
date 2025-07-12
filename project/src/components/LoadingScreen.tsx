import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const loadingTexts = [
      'Initializing',
      'Loading assets',
      'Compiling code',
      'Ready'
    ];
    
    let interval: NodeJS.Timeout;
    let textInterval: NodeJS.Timeout;
    
    // Faster progress animation - completes in ~1.5 seconds
    interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 15 + 10; // Larger increments
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          clearInterval(textInterval);
          setIsComplete(true);
          
          // Shorter delay before completing
          setTimeout(() => {
            onLoadingComplete();
          }, 200);
          
          return 100;
        }
        return newProgress;
      });
    }, 80); // Faster interval
    
    // Faster text changes
    let textIndex = 0;
    textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % loadingTexts.length;
      setLoadingText(loadingTexts[textIndex]);
    }, 400); // Much faster text changes
    
    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-50 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md px-6 relative z-10"
      >
        {/* Logo with enhanced animation */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-2"
            animate={isComplete ? {
              scale: [1, 1.05, 1],
              transition: { duration: 0.3 }
            } : {}}
          >
            <span className="text-white">ABHISHEK</span>
            <motion.span 
              className="text-blue-500"
              animate={{
                color: ["#3b82f6", "#06b6d4", "#3b82f6"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              .
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-white/60 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer
          </motion.p>
        </motion.div>
        
        {/* Enhanced Loading Bar */}
        <div className="relative mb-4">
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
          
          {/* Progress glow effect */}
          <motion.div
            className="absolute inset-0 h-2 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-full blur-sm"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Loading Text with better animation */}
        <div className="flex justify-between items-center text-sm mb-8">
          <motion.p 
            className="text-white/80 font-medium"
            key={loadingText}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            {loadingText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              ...
            </motion.span>
          </motion.p>
          <motion.p 
            className="text-blue-400 font-mono font-semibold"
            animate={isComplete ? {
              color: ["#60a5fa", "#10b981", "#60a5fa"],
              transition: { duration: 0.5 }
            } : {}}
          >
            {Math.round(progress)}%
          </motion.p>
        </div>
        
        {/* Fast Code Animation */}
        <motion.div 
          className="text-xs text-white/40 font-mono h-16 overflow-hidden hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FastCodeAnimation />
        </motion.div>
      </motion.div>

      {/* Completion animation */}
      {isComplete && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  );
};

// Faster, simpler code animation
const FastCodeAnimation = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const codeLines = [
      '> Initializing portfolio...',
      '> Loading components...',
      '> Compiling assets...',
      '> Ready to launch! 🚀'
    ];
    
    let timeout: NodeJS.Timeout;
    let charIndex = 0;
    
    const typeText = () => {
      if (currentLine >= codeLines.length) return;
      
      const line = codeLines[currentLine];
      
      if (charIndex <= line.length) {
        setDisplayText(line.substring(0, charIndex));
        charIndex++;
        timeout = setTimeout(typeText, 20); // Very fast typing
      } else {
        // Move to next line after short pause
        setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          charIndex = 0;
        }, 300);
      }
    };
    
    timeout = setTimeout(typeText, 100);
    
    return () => clearTimeout(timeout);
  }, [currentLine]);
  
  return (
    <div className="space-y-1">
      {Array.from({ length: currentLine }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.6, x: 0 }}
          className="text-green-400"
        >
          {index === 3 ? '> Ready to launch! 🚀' : `> Step ${index + 1} complete ✓`}
        </motion.div>
      ))}
      <div className="text-cyan-400">
        {displayText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          |
        </motion.span>
      </div>
    </div>
  );
};

export default LoadingScreen;