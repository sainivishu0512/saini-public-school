import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { FloatingElements } from './components/FloatingElements';
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

export function App() {
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);

  const handleOpenAdmissions = () => {
    setAdmissionsModalOpen(true);
  };

  const handleCloseAdmissions = () => {
    setAdmissionsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-warm-cream overflow-x-hidden selection:bg-pinky-soft selection:text-pinky-deep">
      {/* Custom Blooming Flower Cursor */}
      <CustomCursor />

      {/* Floating Animated Sky & Garden Background Layer */}
      <FloatingElements />

      {/* Navigation Header */}
      <Navbar onOpenAdmissions={handleOpenAdmissions} />

      {/* Main Sections */}
      <main>
        <Hero onOpenAdmissions={handleOpenAdmissions} />
        <AboutStory />
        <Classes onOpenAdmissions={handleOpenAdmissions} />
        <Activities />
        <WhyChooseUs />
        <Gallery />
        <AdmissionsTimeline isOpen={admissionsModalOpen} onClose={handleCloseAdmissions} />
        <ContactSection />
      </main>

      {/* Storybook Footer */}
      <Footer />
    </div>
  );
}

export default App;
