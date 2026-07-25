import React from 'react';
import { motion } from 'framer-motion';
import { FluffyCloud, CuteButterfly, CuteBee } from './Illustrations';

export const FloatingElements = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Moving Clouds Layer */}
      <div className="absolute top-10 left-0 right-0 h-40 overflow-hidden opacity-60">
        <motion.div
          className="flex space-x-32 whitespace-nowrap"
          animate={{ x: ['-20%', '100%'] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        >
          <FluffyCloud width={140} height={80} />
          <FluffyCloud width={100} height={60} />
          <FluffyCloud width={160} height={90} />
        </motion.div>

        <motion.div
          className="flex space-x-48 whitespace-nowrap mt-8"
          animate={{ x: ['-40%', '100%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear', delay: 10 }}
        >
          <FluffyCloud width={120} height={70} />
          <FluffyCloud width={150} height={85} />
        </motion.div>
      </div>

      {/* Flying Butterflies */}
      <motion.div
        className="absolute top-1/4 left-10"
        animate={{
          y: [0, -25, 10, -15, 0],
          x: [0, 20, 40, 15, 0],
          rotate: [-5, 10, -8, 5, -5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CuteButterfly wingColor="#F472B6" size={42} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-16"
        animate={{
          y: [0, -30, 15, -20, 0],
          x: [0, -25, -50, -20, 0],
          rotate: [5, -12, 10, -5, 5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <CuteButterfly wingColor="#A78BFA" size={38} />
      </motion.div>

      {/* Cute Bees */}
      <motion.div
        className="absolute top-1/2 left-1/4"
        animate={{
          y: [0, -15, 5, -20, 0],
          x: [0, 15, -15, 10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CuteBee size={36} />
      </motion.div>

      {/* Floating Paper Airplane */}
      <motion.div
        className="absolute top-20 right-1/4 opacity-75"
        animate={{
          x: [-50, 150],
          y: [0, -40, 20],
          rotate: [-15, -5, 10],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
          <polygon points="5,25 45,5 25,45 20,30" fill="#38BDF8" />
          <polygon points="20,30 45,5 25,45" fill="#BAE6FD" />
        </svg>
      </motion.div>

      {/* Floating Green Leaves */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${20 + i * 20}%`,
            left: `${15 + i * 22}%`,
          }}
          animate={{
            y: [0, 40, 0],
            rotate: [0, 180, 360],
            x: [0, i % 2 === 0 ? 30 : -30, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 30 30" fill="none" opacity="0.6">
            <path d="M5 25 Q15 0 25 25 Q15 15 5 25 Z" fill="#34D399" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
