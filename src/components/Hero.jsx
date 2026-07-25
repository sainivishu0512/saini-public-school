import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';
import { BigInteractiveFlowerMascot, SmilingFlower, ShiningSun, PastelRainbow } from './Illustrations';

export const Hero = ({ onOpenAdmissions }) => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/60 via-pink-50/40 to-white">
      
      {/* Background Soft Pastel Glow Aura */}
      <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-pink-200/50 via-amber-100/40 to-sky-200/30 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute top-1/3 right-4 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-bl from-purple-100/40 via-emerald-100/50 to-pink-100/40 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative Sun & Rainbow */}
      <div className="absolute top-14 left-3 sm:left-12 md:left-20 animate-spin-slow">
        <ShiningSun size={65} />
      </div>

      <div className="absolute top-20 right-4 md:right-16 opacity-90 hidden sm:block">
        <PastelRainbow width={180} height={95} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            className="lg:col-span-6 text-center lg:text-left space-y-5 sm:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-pink-200 text-pink-700 font-extrabold text-xs sm:text-sm shadow-xs">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-400" />
              <span>Welcoming Preschool (PP1, PP2) to Grade 8</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
              SAINI PUBLIC <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
                SCHOOL
              </span>
            </h1>

            {/* Mandatory Tagline Box */}
            <div className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border-2 border-pink-200 shadow-md inline-block max-w-xl">
              <p className="text-base sm:text-xl font-bold font-storybook text-pink-600 tracking-wide leading-relaxed">
                "Every Child Has Its Own Qualities Like Flowers."
              </p>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-slate-600 text-sm sm:text-lg max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
              Where curious young minds bloom with joy! We cultivate love for learning, creative expression, smart technology, and caring character from early childhood (PP1) through Grade 8.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenAdmissions}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-500 active:scale-95 text-white font-extrabold text-base shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 group border-2 border-white/60"
              >
                <span>Admissions Open</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </button>

              <a
                href="#about"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-slate-800 hover:text-pink-600 active:scale-95 font-bold text-base border-2 border-slate-200 hover:border-pink-300 shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-5 h-5 text-sky-500" />
                <span>Explore Our School</span>
              </a>
            </div>

            {/* Highlights Stats Strip */}
            <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0">
              <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white border border-pink-200 text-center shadow-xs">
                <span className="block font-bold text-base sm:text-xl text-pink-600 font-heading">PP1 - PP2</span>
                <span className="text-[11px] sm:text-xs text-slate-600 font-bold">Pre-Primary</span>
              </div>
              <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white border border-amber-200 text-center shadow-xs">
                <span className="block font-bold text-base sm:text-xl text-amber-600 font-heading">Grade 1-5</span>
                <span className="text-[11px] sm:text-xs text-slate-600 font-bold">Primary</span>
              </div>
              <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white border border-sky-200 text-center shadow-xs">
                <span className="block font-bold text-base sm:text-xl text-sky-600 font-heading">Grade 6-8</span>
                <span className="text-[11px] sm:text-xs text-slate-600 font-bold">Middle</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero BIG Interactive Blooming Flower Mascot */}
          <motion.div
            className="lg:col-span-6 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <BigInteractiveFlowerMascot />
          </motion.div>

        </div>
      </div>

      {/* Bottom Garden Wave */}
      <div className="w-full overflow-hidden leading-none mt-8 sm:mt-12">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 sm:h-12 text-slate-50 fill-current">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};
