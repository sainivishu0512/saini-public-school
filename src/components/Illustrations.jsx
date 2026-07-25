import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Smiling Flower SVG
export const SmilingFlower = ({ color = '#F472B6', centerColor = '#FEF08A', size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`drop-shadow-sm ${className}`}>
    <g transform="translate(50, 50)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-28"
          rx="14"
          ry="22"
          fill={color}
          transform={`rotate(${angle})`}
        />
      ))}
      <circle cx="0" cy="0" r="22" fill={centerColor} stroke="#EAB308" strokeWidth="2" />
      <circle cx="-7" cy="-4" r="2.5" fill="#334155" />
      <circle cx="7" cy="-4" r="2.5" fill="#334155" />
      <circle cx="-12" cy="2" r="3" fill="#F472B6" opacity="0.6" />
      <circle cx="12" cy="2" r="3" fill="#F472B6" opacity="0.6" />
      <path d="M-6 4 Q0 12 6 4" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

// Cute Butterfly SVG
export const CuteButterfly = ({ wingColor = '#A78BFA', bodyColor = '#475569', size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`drop-shadow-md ${className}`}>
    <g transform="translate(40, 40)">
      <path d="M-4 -2 C-30 -30 -40 0 -4 -4" fill={wingColor} opacity="0.9" />
      <path d="M-4 -2 C-30 -30 -40 0 -4 -4" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      <path d="M4 -2 C30 -30 40 0 4 -4" fill={wingColor} opacity="0.9" />
      <path d="M4 -2 C30 -30 40 0 4 -4" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
      <path d="M-4 2 C-25 25 -30 5 -4 4" fill="#F472B6" opacity="0.85" />
      <path d="M4 2 C25 25 30 5 4 4" fill="#F472B6" opacity="0.85" />
      <ellipse cx="0" cy="0" rx="3.5" ry="16" fill={bodyColor} />
      <path d="M-2 -14 Q-8 -22 -12 -20" stroke={bodyColor} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M2 -14 Q8 -22 12 -20" stroke={bodyColor} strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="-12" cy="-20" r="2" fill="#F472B6" />
      <circle cx="12" cy="-20" r="2" fill="#F472B6" />
    </g>
  </svg>
);

// Cute Bee SVG
export const CuteBee = ({ size = 44, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className={className}>
    <g transform="translate(30,30)">
      <ellipse cx="-6" cy="-14" rx="8" ry="14" fill="#E0F2FE" opacity="0.8" transform="rotate(-20 -6 -14)" />
      <ellipse cx="6" cy="-14" rx="8" ry="14" fill="#E0F2FE" opacity="0.8" transform="rotate(20 6 -14)" />
      <ellipse cx="0" cy="2" rx="16" ry="12" fill="#FEF08A" />
      <path d="M-6 -8 L-6 12 M0 -10 L0 14 M6 -8 L6 12" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
      <circle cx="-8" cy="0" r="2" fill="#334155" />
      <path d="M-10 4 Q-8 7 -6 4" stroke="#334155" strokeWidth="1.5" fill="none" />
      <polygon points="16,2 22,0 16,-2" fill="#334155" />
    </g>
  </svg>
);

// Fluffy Cloud SVG
export const FluffyCloud = ({ width = 120, height = 70, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 120 70" fill="none" className={`drop-shadow-sm ${className}`}>
    <path
      d="M20 50 C10 50 5 40 12 30 C5 20 18 10 30 15 C38 5 58 5 65 15 C75 5 95 10 95 25 C105 25 112 35 105 45 C115 50 100 60 90 55 C80 65 30 65 20 50 Z"
      fill="#FFFFFF"
      opacity="0.95"
    />
  </svg>
);

// Sun SVG
export const ShiningSun = ({ size = 90, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
    <g transform="translate(50,50)">
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <line
          key={i}
          x1="0"
          y1="-38"
          x2="0"
          y2="-46"
          stroke="#FDBA74"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${angle})`}
        />
      ))}
      <circle cx="0" cy="0" r="30" fill="#FEF08A" stroke="#FDE047" strokeWidth="3" />
      <circle cx="-9" cy="-5" r="3" fill="#334155" />
      <circle cx="9" cy="-5" r="3" fill="#334155" />
      <circle cx="-14" cy="3" r="4" fill="#FB923C" opacity="0.6" />
      <circle cx="14" cy="3" r="4" fill="#FB923C" opacity="0.6" />
      <path d="M-8 6 Q0 15 8 6" stroke="#334155" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

// Rainbow SVG
export const PastelRainbow = ({ width = 200, height = 110, className = '' }) => (
  <svg width={width} height={height} viewBox="0 0 200 110" fill="none" className={className}>
    <path d="M 10 100 A 90 90 0 0 1 190 100" stroke="#F472B6" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.85" />
    <path d="M 24 100 A 76 76 0 0 1 176 100" stroke="#FDE047" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.85" />
    <path d="M 38 100 A 62 62 0 0 1 162 100" stroke="#34D399" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.85" />
    <path d="M 52 100 A 48 48 0 0 1 148 100" stroke="#38BDF8" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.85" />
    <path d="M 66 100 A 34 34 0 0 1 134 100" stroke="#A78BFA" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.85" />
  </svg>
);

// Tiny Mushroom SVG
export const CuteMushroom = ({ size = 40, capColor = '#F472B6', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" fill="none" className={className}>
    <path d="M 20 28 Q 20 45 25 45 Q 30 45 30 28 Z" fill="#FFFBEB" stroke="#CBD5E1" strokeWidth="1.5" />
    <path d="M 8 28 Q 25 5 42 28 Z" fill={capColor} stroke="#E2E8F0" strokeWidth="1.5" />
    <circle cx="20" cy="18" r="3" fill="#FFFFFF" opacity="0.9" />
    <circle cx="30" cy="21" r="2.5" fill="#FFFFFF" opacity="0.9" />
    <circle cx="27" cy="12" r="2" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

// LARGE INTERACTIVE STORYBOOK BLOOMING FLOWER MASCOT WITH AUTOMATIC EYE BLINKING
export const BigInteractiveFlowerMascot = () => {
  const containerRef = useRef(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isHappy, setIsHappy] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  // Automatic Eye Blinking Cycle (Every 3.5 seconds)
  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3500);

    return () => clearInterval(blinkTimer);
  }, []);

  // Mouse Pupil Eye Tracking Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const flowerCenterX = rect.left + rect.width / 2;
      const flowerCenterY = rect.top + rect.height * 0.42;

      const dx = e.clientX - flowerCenterX;
      const dy = e.clientY - flowerCenterY;
      const angle = Math.atan2(dy, dx);
      const dist = Math.min(Math.hypot(dx, dy) / 25, 6);

      setPupilOffset({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      });

      // Check if mouse is hovering over any button or interactive element
      const target = e.target;
      const hoveringButton =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-flower') ||
        target.closest('input') ||
        target.closest('select');

      setIsHappy(!!hoveringButton);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg lg:max-w-xl mx-auto flex flex-col items-center justify-center p-4 cursor-pointer"
    >
      {/* Background Soft Pastel Glow Aura */}
      <div className={`absolute inset-0 rounded-full blur-3xl transition-all duration-500 ${isHappy ? 'bg-gradient-to-tr from-sky-400/70 via-pink-400/60 to-sunshine-300/70 scale-125' : 'bg-gradient-to-tr from-sky-100/50 via-pink-100/40 to-sunshine-100/50 scale-100'}`}></div>

      {/* Main Big Interactive Flower Canvas */}
      <motion.svg
        viewBox="0 0 460 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10 drop-shadow-2xl"
        onClick={() => setIsHappy(true)}
        animate={isHappy ? { scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] } : { y: [0, -7, 0] }}
        transition={isHappy ? { duration: 0.6 } : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Soft Shadow Underneath */}
        <ellipse cx="230" cy="445" rx="150" ry="20" fill="#0F172A" opacity="0.12" />

        {/* Green Grass Hill Mound */}
        <path d="M 20 420 Q 230 360 440 420 L 440 480 L 20 480 Z" fill="#A7F3D0" opacity="0.9" />
        <path d="M 0 440 Q 210 380 460 440 L 460 480 L 0 480 Z" fill="#34D399" opacity="0.8" />

        {/* MAIN FLOWER MASCOT */}
        <g transform="translate(230, 200)">
          
          {/* Flower Stem */}
          <path d="M 0 60 Q 15 140 0 220" stroke="#10B981" strokeWidth="12" strokeLinecap="round" fill="none" />

          {/* Green Stem Leaves */}
          <path d="M 4 140 Q 60 120 70 150 Q 30 170 4 140 Z" fill="#34D399" stroke="#059669" strokeWidth="2" />
          <path d="M -4 160 Q -60 140 -70 170 Q -30 190 -4 160 Z" fill="#34D399" stroke="#059669" strokeWidth="2" />

          {/* Blooming Petals Ring */}
          <g transform={`rotate(${isHappy ? 22.5 : 0})`} className="transition-transform duration-500">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <ellipse
                key={i}
                cx="0"
                cy="-82"
                rx="36"
                ry="58"
                fill="#F472B6"
                stroke="#E11D48"
                strokeWidth="2.5"
                transform={`rotate(${angle})`}
              />
            ))}
          </g>

          {/* Flower Center Face Disk */}
          <circle cx="0" cy="0" r="70" fill="#FEF08A" stroke="#EAB308" strokeWidth="5" />

          {/* Cheeks Blush */}
          <circle cx="-42" cy="18" r="14" fill="#F472B6" opacity={isHappy ? 0.95 : 0.6} />
          <circle cx="42" cy="18" r="14" fill="#F472B6" opacity={isHappy ? 0.95 : 0.6} />

          {/* Left Eye Socket & Pupil Tracking / Blinking */}
          <circle cx="-25" cy="-10" r="14" fill="#FFFFFF" stroke="#334155" strokeWidth="3" />
          {isHappy ? (
            <path d="M -36 -10 Q -25 -25 -14 -10" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          ) : isBlinking ? (
            <path d="M -34 -10 Q -25 -5 -16 -10" stroke="#334155" strokeWidth="4" strokeLinecap="round" fill="none" />
          ) : (
            <g transform={`translate(${pupilOffset.x}, ${pupilOffset.y})`}>
              <circle cx="-25" cy="-10" r="7.5" fill="#1E293B" />
              <circle cx="-28" cy="-14" r="3" fill="#FFFFFF" />
              <circle cx="-22" cy="-6" r="1.5" fill="#FFFFFF" opacity="0.8" />
            </g>
          )}

          {/* Right Eye Socket & Pupil Tracking / Blinking */}
          <circle cx="25" cy="-10" r="14" fill="#FFFFFF" stroke="#334155" strokeWidth="3" />
          {isHappy ? (
            <path d="M 14 -10 Q 25 -25 36 -10" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          ) : isBlinking ? (
            <path d="M 16 -10 Q 25 -5 34 -10" stroke="#334155" strokeWidth="4" strokeLinecap="round" fill="none" />
          ) : (
            <g transform={`translate(${pupilOffset.x}, ${pupilOffset.y})`}>
              <circle cx="25" cy="-10" r="7.5" fill="#1E293B" />
              <circle cx="22" cy="-14" r="3" fill="#FFFFFF" />
              <circle cx="28" cy="-6" r="1.5" fill="#FFFFFF" opacity="0.8" />
            </g>
          )}

          {/* Nose Drop */}
          <circle cx="0" cy="8" r="4" fill="#FB923C" />

          {/* Mouth Expression */}
          {isHappy ? (
            <g>
              <path d="M -22 18 Q 0 46 22 18 Z" fill="#F472B6" stroke="#334155" strokeWidth="3" />
              <path d="M -14 26 Q 0 38 14 26" fill="#FDA4AF" />
            </g>
          ) : (
            <path d="M -18 16 Q 0 30 18 16" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          )}

        </g>

        {/* Flying Cute Butterfly Beside Flower Mascot */}
        <g transform="translate(50, 75)">
          <CuteButterfly wingColor="#A78BFA" size={54} />
        </g>

        {/* Flying Cute Bee Beside Flower Mascot */}
        <g transform="translate(340, 110)">
          <CuteBee size={48} />
        </g>

      </motion.svg>
    </div>
  );
};
