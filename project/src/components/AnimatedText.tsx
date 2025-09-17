import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
  }),
};

const childVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  el: Wrapper = 'p',
  className,
  once = true,
}) => {
  const words = text.split(' ');

  return (
    <Wrapper className={className}>
      <motion.span
        style={{ display: 'inline-block', overflow: 'hidden' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            style={{ display: 'inline-block', paddingRight: '0.25em' }}
            variants={childVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
