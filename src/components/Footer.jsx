import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { SmilingFlower } from './Illustrations';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-12 bg-slate-900 text-white overflow-hidden border-t-4 border-pink-500">
      
      {/* Decorative SVG Flowers Top Row */}
      <div className="absolute top-0 inset-x-0 -translate-y-1/2 flex items-center justify-around pointer-events-none px-4 opacity-90">
        <SmilingFlower size={48} color="#F472B6" />
        <SmilingFlower size={56} color="#A78BFA" />
        <SmilingFlower size={42} color="#FB923C" />
        <SmilingFlower size={52} color="#FEF08A" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Mandatory Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-2xl bg-white/10 backdrop-blur-sm">
                <SmilingFlower size={40} color="#F472B6" />
              </div>
              <div>
                <span className="text-2xl font-bold font-heading text-white tracking-tight block">
                  SAINI <span className="text-pink-400">PUBLIC SCHOOL</span>
                </span>
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">PP1 to 8th Grade</span>
              </div>
            </div>

            {/* Mandatory Tagline */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-xs inline-block">
              <p className="text-pink-300 font-bold font-storybook text-sm">
                "Every Child Has Its Own Qualities Like Flowers."
              </p>
            </div>

            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">
              Providing a warm, safe, activity-based educational environment where young minds grow with joy, empathy, curiosity, and academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-extrabold font-heading text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Quick Explore
            </h4>
            <ul className="space-y-2 text-sm font-semibold text-slate-300">
              <li><a href="#hero" className="hover:text-pink-400 transition-colors">Home Page</a></li>
              <li><a href="#about" className="hover:text-pink-400 transition-colors">About & Philosophy</a></li>
              <li><a href="#classes" className="hover:text-pink-400 transition-colors">Classes (PP1 to Grade 8)</a></li>
              <li><a href="#activities" className="hover:text-pink-400 transition-colors">Activities & Clubs</a></li>
              <li><a href="#why-us" className="hover:text-pink-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#admissions" className="hover:text-pink-400 transition-colors">Admissions 2026-27</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-base font-extrabold font-heading text-white flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" /> Contact Campus
            </h4>
            <div className="space-y-2.5 text-sm font-medium text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-400" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" /> info@sainipublicschool.edu
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" /> Main Education Hub Campus, Knowledge Park Road, City Center - 400001
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-400">
          <p>© {new Date().getFullYear()} Saini Public School. All Rights Reserved. (PP1 to Grade 8)</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">Crafted with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" /> for little blooming flowers</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-800 text-slate-200 hover:bg-pink-600 hover:text-white shadow-md transition-all"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
