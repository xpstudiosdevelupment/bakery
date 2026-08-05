import React from 'react';
import { motion } from 'motion/react';

interface ScrollFloatProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  floatOnHover?: boolean;
  once?: boolean;
}

export const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 35,
  duration = 0.6,
  floatOnHover = false,
  once = false,
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      default:
        return { y: distance, x: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.12, margin: '-20px 0px -20px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={floatOnHover ? { y: -6, transition: { duration: 0.3, ease: 'easeOut' } } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FloatingImageContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15, margin: '-20px 0px -20px 0px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.4 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
