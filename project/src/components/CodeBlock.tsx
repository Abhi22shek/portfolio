import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CodeBlockProps {
  isMobile?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ isMobile = false }) => {
  const [text, setText] = useState('');
  const codeRef = useRef<HTMLPreElement>(null);

  const codeContent = `const Developer = {
  name: "Abhishek Borana",
  role: "Full Stack",
  skills: {
    fe: ["React", "Next.js", "TS"],
    be: ["Node", "Express", "PGSQL"],
    ui: ["Figma", "Tailwind"]
  },
  current: {
    task: "Next-gen Apps",
    status: "Open to work"
  }
};`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= codeContent.length) {
        setText(codeContent.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`code-block-container p-4 ${isMobile ? 'sm:p-6' : 'sm:p-8'}`}>
      <div className="flex items-center gap-2 mb-4">
        {['#FF5F56', '#FFBD2E', '#27C93F'].map((color) => (
          <div
            key={color}
            className={`${isMobile ? 'w-1 h-1.5 sm:w-2 sm:h-2' : 'w-2 h-2 sm:w-3 sm:h-3'} rounded-full`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <pre ref={codeRef} className={`font-mono ${isMobile ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`}>
        <motion.code
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="language-typescript"
        >
          {text}
        </motion.code>
      </pre>
    </div>
  );
};

export default CodeBlock;