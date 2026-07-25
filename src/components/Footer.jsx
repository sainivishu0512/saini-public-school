import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { SmilingFlower } from './Illustrations';

export const Footer = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (tabId) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    }
    scrollToTop();
  };

  return (
    <footer className="relative pt-20 pb-12 bg-slate-900 text-white overflow-hidden border-t-4 border-pink-500">
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
              <li><button onClick={() => handleLinkClick('home')} className="hover:text-pink-400 transition-colors text-left">Home Page</button></li>
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-pink-400 transition-colors text-left">About & Philosophy</button></li>
              <li><button onClick={() => handleLinkClick('classes')} className="hover:text-pink-400 transition-colors text-left">Classes (PP1 to Grade 8)</button></li>
              <li><button onClick={() => handleLinkClick('activities')} className="hover:text-pink-400 transition-colors text-left">Activities & Clubs</button></li>
              <li><button onClick={() => handleLinkClick('why-us')} className="hover:text-pink-400 transition-colors text-left">Why Choose Us</button></li>
              <li><button onClick={() => handleLinkClick('gallery')} className="hover:text-pink-400 transition-colors text-left">Photo Gallery</button></li>
              <li><button onClick={() => handleLinkClick('admissions')} className="hover:text-pink-400 transition-colors text-left">Admissions Guide</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-pink-400 transition-colors text-left">Contact & Helpline</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-base font-extrabold font-heading text-white">Contact Info</h4>
            <div className="space-y-2.5 text-sm text-slate-300 font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-1" />
                <span>Main Education Hub Campus, Knowledge Park Road, City Center - 400001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+91 98765 43210 / +91 98765 43211</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@sainipublicschool.edu</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <p>© {new Date().getFullYear()} Saini Public School. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-800 hover:bg-pink-600 text-white transition-colors flex items-center gap-2 border border-slate-700 shadow-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
