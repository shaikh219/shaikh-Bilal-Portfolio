'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  id?: string;
  once?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';
};

const getInitial = (direction: MotionWrapperProps['direction']) => {
  switch (direction) {
    case 'left':
      return { x: -40, opacity: 0 };
    case 'right':
      return { x: 40, opacity: 0 };
    case 'up':
      return { y: 40, opacity: 0 };
    case 'down':
      return { y: -40, opacity: 0 };
    default:
      return { y: 40, opacity: 0 };
  }
};

const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  once = true,
  direction = 'up',
}) => {
  return (
    <motion.section
      className={className}
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, ease: 'easeOut', delay }}
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
};

export default MotionWrapper;
