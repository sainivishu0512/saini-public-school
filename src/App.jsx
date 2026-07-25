import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStory } from './components/AboutStory';
import { Classes } from './components/Classes';
import { Activities } from './components/Activities';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { AdmissionsTimeline } from './components/AdmissionsTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { FloatingElements } from './components/FloatingElements';

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);

  const handleOpenAdmissions = () => {
    setActiveTab('admissions');
    setAdmissionsModalOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-pink-100 selection:text-pink-700 relative overflow-x-hidden">
      {/* Custom Magic Cursor & Floating Ambient Particles */}
      <CustomCursor />
      <FloatingElements />

      {/* Navbar with Page Tabs */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenAdmissions={handleOpenAdmissions}
      />

      {/* Page Content View Router */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <Hero onOpenAdmissions={handleOpenAdmissions} />
              <AboutStory />
              <Classes onOpenAdmissions={handleOpenAdmissions} />
              <Activities />
              <WhyChooseUs />
              <Gallery />
              <AdmissionsTimeline onOpenModal={() => setAdmissionsModalOpen(true)} />
              <ContactSection />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="pt-8"
            >
              {/* Dedicated About Page Header */}
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white py-14 px-4 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">About Saini Public School</h1>
                <p className="text-lg font-storybook mt-3 max-w-2xl mx-auto opacity-95">
                  "Every Child Has Its Own Qualities Like Flowers."
                </p>
              </div>
              <AboutStory />
              <WhyChooseUs />
            </motion.div>
          )}

          {activeTab === 'classes' && (
            <motion.div
              key="classes"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="pt-8"
            >
              {/* Dedicated Classes Page Header */}
              <div className="bg-gradient-to-r from-amber-500 via-pink-500 to-rose-500 text-white py-14 px-4 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">Classes & Curriculum</h1>
                <p className="text-lg font-storybook mt-3 max-w-2xl mx-auto opacity-95">
                  Pre-Primary (PP1, PP2) to Grade 8 Academic Programs
                </p>
              </div>
              <Classes onOpenAdmissions={handleOpenAdmissions} />
            </motion.div>
          )}

          {activeTab === 'activities' && (
            <motion.div
              key="activities"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="pt-8"
            >
              {/* Dedicated Activities Page Header */}
              <div className="bg-gradient-to-r from-purple-500 via-sky-500 to-emerald-500 text-white py-14 px-4 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">Co-Curricular & Sports</h1>
                <p className="text-lg font-storybook mt-3 max-w-2xl mx-auto opacity-95">
                  Creative Arts, Music, STEM Labs, Robotics & Physical Sports
                </p>
              </div>
              <Activities />
            </motion.div>
          )}

          {activeTab === 'why-us' && (
            <motion.div
              key="why-us"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="pt-8"
            >
              {/* Dedicated Why Us Page Header */}
              <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-white py-14 px-4 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">Why Choose Saini Public School?</h1>
                <p className="text-lg font-storybook mt-3 max-w-2xl mx-auto opacity-95">
                  Safe Campus, Smart Classrooms, Caring Educators & Holistic Growth
                </p>
              </div>
              <WhyChooseUs />
            </motion.div>
          )}

          {activeTab === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="pt-8"
            >
              {/* Dedicated Gallery Page Header */}
              <div className="bg-gradient-to-r from-sky-500 via-pink-500 to-purple-500 text-white py-14 px-4 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">Campus Gallery & Events</h1>
                <p className="text-lg font-storybook mt-3 max-w-2xl mx-auto opacity-95">
                  A Glimpse into Daily Life, Celebrations & Student Achievement
                </p>
              </div>
              <Gallery />
            </motion.div>
          )}

          {activeTab === 'admissions' && (
            <motion.div
              key="admissions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="pt-8"
            >
              {/* Dedicated Admissions Page Header */}
              <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white py-14 px-4 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">Admissions Open (2026-27)</h1>
                <p className="text-lg font-storybook mt-3 max-w-2xl mx-auto opacity-95">
                  Pre-Primary (PP1, PP2) to Grade 8 Admissions Guide
                </p>
              </div>
              <AdmissionsTimeline onOpenModal={() => setAdmissionsModalOpen(true)} />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="pt-8"
            >
              {/* Dedicated Contact Page Header */}
              <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-purple-950 text-white py-14 px-4 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">Contact Us</h1>
                <p className="text-lg font-storybook mt-3 max-w-2xl mx-auto opacity-95">
                  Visit Our Campus, Call Our Helpline or Send Us a Message
                </p>
              </div>
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Shared Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
export default App;
