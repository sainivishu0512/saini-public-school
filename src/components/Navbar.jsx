import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, BookOpen } from 'lucide-react';
import { SmilingFlower } from './Illustrations';

export const Navbar = ({ activeTab = 'home', onSelectTab, onOpenAdmissions }) => {
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
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'classes', name: 'Classes (PP1-8)' },
    { id: 'activities', name: 'Activities' },
    { id: 'why-us', name: 'Why Choose Us' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'admissions', name: 'Admissions' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleNavClick = (tabId) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Glass Navbar */}
      <div className={`px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left shrink-0"
          >
            <div className="flex items-center justify-center p-2 rounded-2xl bg-pink-50 group-hover:scale-105 transition-transform shadow-xs border border-pink-100">
              <SmilingFlower size={32} color="#F472B6" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold font-heading text-slate-900 tracking-tight block group-hover:text-pink-600 transition-colors">
                SAINI <span className="text-pink-600">PUBLIC SCHOOL</span>
              </span>
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">
                PP1 to Grade 8
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 px-3 py-1.5 rounded-full border border-slate-200 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-pink-600 text-white shadow-sm scale-105'
                      : 'text-slate-700 hover:text-pink-600 hover:bg-white/80'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAdmissions}
              className="px-5 py-2.5 rounded-full bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-2 border border-pink-400/40"
            >
              <span>Admissions Open</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-pink-600 shadow-xs"
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
            <div className="flex flex-col space-y-1.5 max-w-md mx-auto">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                      isActive
                        ? 'bg-pink-600 text-white'
                        : 'text-slate-700 hover:bg-pink-50 hover:text-pink-600'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissions();
                  }}
                  className="w-full py-3 rounded-2xl bg-pink-600 text-white font-bold shadow-md text-center flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
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
