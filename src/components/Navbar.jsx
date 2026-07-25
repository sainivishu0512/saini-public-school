import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { SmilingFlower } from './Illustrations';

export const Navbar = ({ onOpenAdmissions }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Classes (PP1-8)', href: '#classes' },
    { name: 'Activities', href: '#activities' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">


      {/* Main Glass Navbar */}
      <div className={`px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-2 rounded-2xl bg-pink-50 group-hover:scale-105 transition-transform shadow-xs">
              <SmilingFlower size={36} color="#F472B6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-heading text-slate-900 tracking-tight block group-hover:text-pink-600 transition-colors">
                SAINI <span className="text-pink-600">PUBLIC SCHOOL</span>
              </span>
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1">
                <Heart className="w-2.5 h-2.5 text-pink-500 fill-pink-500" /> PP1 to Grade 8
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 px-4 py-1.5 rounded-full border border-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-pink-600 hover:bg-white transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAdmissions}
              className="px-5 py-2.5 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Admissions Open</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-pink-600"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-2 max-w-md mx-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl font-bold text-slate-700 hover:bg-pink-50 hover:text-pink-600 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissions();
                  }}
                  className="w-full py-3 rounded-2xl bg-pink-600 text-white font-bold shadow-md text-center flex items-center justify-center gap-2"
                >
                  <span>Admissions Open</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
