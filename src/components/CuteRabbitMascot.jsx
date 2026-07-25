import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mascotImg from '../assets/rabbit_mascot.jpg';

export const CuteRabbitMascot = () => {
  const rabbitRef = useRef(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isHappy, setIsHappy] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  // Mouse Pupil Eye Tracking Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!rabbitRef.current) return;
      const rect = rabbitRef.current.getBoundingClientRect();
      const rabbitCenterX = rect.left + rect.width / 2;
      const rabbitCenterY = rect.top + rect.height * 0.38;

      const dx = e.clientX - rabbitCenterX;
      const dy = e.clientY - rabbitCenterY;
      const angle = Math.atan2(dy, dx);
      
      const dist = Math.min(Math.hypot(dx, dy) / 25, 7);

      setPupilOffset({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Global Click Listener for Happiness Reaction
  useEffect(() => {
    const handleGlobalClick = () => {
      setIsHappy(true);

      const newSparkles = Array.from({ length: 8 }).map((_, i) => ({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 180,
        y: (Math.random() - 0.5) * 120,
        scale: 0.8 + Math.random() * 0.7,
        type: ['✨', '💖', '⭐', '🌸'][i % 4],
      }));

      setSparkles((prev) => [...prev, ...newSparkles]);

      const timer = setTimeout(() => setIsHappy(false), 1600);
      setTimeout(() => setSparkles([]), 1200);

      return () => clearTimeout(timer);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div ref={rabbitRef} className="relative w-full max-w-md mx-auto flex items-center justify-center p-2 select-none">
      
      {/* Soft Background Radial Aura */}
      <div className={`absolute inset-0 rounded-full blur-3xl transition-all duration-700 ${isHappy ? 'bg-gradient-to-tr from-pink-400/60 via-amber-300/50 to-sky-400/60 scale-125' : 'bg-gradient-to-tr from-pink-200/40 via-sky-100/30 to-amber-100/40 scale-100'}`}></div>

      {/* Floating Sparkles & Hearts */}
      <AnimatePresence>
        {sparkles.map((sp) => (
          <motion.div
            key={sp.id}
            initial={{ opacity: 1, y: 0, scale: 0.4 }}
            animate={{ opacity: 0, y: -80, scale: sp.scale, x: sp.x }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute top-1/4 left-1/2 pointer-events-none text-3xl font-bold z-30 drop-shadow-md"
          >
            {sp.type}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Standalone 3D Mascot Character Cutout (No Card Frame) */}
      <motion.div
        className="relative z-10 cursor-pointer group flex flex-col items-center"
        onClick={() => setIsHappy(true)}
        animate={isHappy ? { y: [0, -22, 0, -12, 0], rotate: [0, -3, 3, -1, 0] } : { y: [0, -8, 0] }}
        transition={isHappy ? { duration: 0.6 } : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Mascot Character Image */}
        <div className="relative w-72 sm:w-80 h-72 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500 bg-white">
          <img
            src={mascotImg}
            alt="Saini Public School Bunny Mascot"
            className="w-full h-full object-cover mix-blend-multiply filter contrast-105"
          />

          {/* Eye Pupil Tracking Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left Eye Pupil */}
            <motion.div
              className="absolute top-[40%] left-[42%] w-3 h-3 rounded-full bg-slate-900 shadow-xs border border-white"
              animate={{
                x: pupilOffset.x,
                y: pupilOffset.y,
                scale: isHappy ? 1.5 : 1,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div className="w-1 h-1 rounded-full bg-white ml-0.5 mt-0.5"></div>
            </motion.div>

            {/* Right Eye Pupil */}
            <motion.div
              className="absolute top-[40%] right-[42%] w-3 h-3 rounded-full bg-slate-900 shadow-xs border border-white"
              animate={{
                x: pupilOffset.x,
                y: pupilOffset.y,
                scale: isHappy ? 1.5 : 1,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div className="w-1 h-1 rounded-full bg-white ml-0.5 mt-0.5"></div>
            </motion.div>
          </div>
        </div>

        {/* Mascot Shadow underneath */}
        <div className="w-48 h-4 bg-slate-900/15 rounded-full blur-sm mt-3 group-hover:scale-110 transition-transform"></div>
      </motion.div>

    </div>
  );
};
