import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState('default');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnter = () => setVisible(true);
    const mouseLeave = () => setVisible(false);

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: Event) => {
      if (e.target && (e.target as HTMLElement).closest('a, button, input[type="submit"], [role="button"]')) {
        setVariant('hover');
      }
    };

    const handleMouseOut = (e: Event) => {
      if (e.target && (e.target as HTMLElement).closest('a, button, input[type="submit"], [role="button"]')) {
        setVariant('default');
      }
    };

    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: 'rgba(29, 78, 216, 0.7)', // blue-600
      mixBlendMode: 'difference' as const,
    },
    hover: {
      height: 48,
      width: 48,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      mixBlendMode: 'normal' as const,
      border: '2px solid #2563eb',
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={variant}
      style={{
        display: visible ? 'block' : 'none',
        x: position.x - (variant === 'default' ? 8 : 24),
        y: position.y - (variant === 'default' ? 8 : 24),
      }}
      transition={{
        width: { duration: 0.2 },
        height: { duration: 0.2 },
      }}
    />
  );
};

export default CustomCursor;
