import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if mouse target is interactive
      const target = e.target;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('.interactive-flower') ||
        target.closest('.hover-bloom');

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
        animate={{
          x: position.x - (isHovered ? 24 : 12),
          y: position.y - (isHovered ? 24 : 12),
          scale: isHovered ? 1.6 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.5 }}
      >
        <div className="relative flex items-center justify-center">
          {/* Petals */}
          <div className={`absolute transition-all duration-300 ${isHovered ? 'opacity-100 scale-110' : 'opacity-70 scale-90'}`}>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <span
                key={i}
                className="absolute w-3 h-5 bg-pinky-vibrant/80 rounded-full origin-bottom transform -translate-x-1/2 -translate-y-full shadow-sm"
                style={{
                  transform: `rotate(${angle}deg) translateY(-4px)`,
                  backgroundColor: i % 2 === 0 ? '#F472B6' : '#A78BFA',
                }}
              />
            ))}
          </div>
          {/* Flower Center */}
          <div className="w-4 h-4 rounded-full bg-sunshine-vibrant border-2 border-white shadow-md z-10 flex items-center justify-center">
            {isHovered && <div className="w-1.5 h-1.5 rounded-full bg-coral-vibrant animate-ping" />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
