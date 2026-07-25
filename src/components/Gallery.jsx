import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, Sparkles, Image as ImageIcon } from 'lucide-react';
import { SmilingFlower, CuteButterfly } from './Illustrations';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Annual Flower Fest & Exhibition',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      tag: 'Festivals',
      color: 'bg-pinky-light',
    },
    {
      id: 2,
      title: 'Smart STEM Robotics Lab',
      category: 'classroom',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      tag: 'Classroom',
      color: 'bg-sky-light',
    },
    {
      id: 3,
      title: 'Little Champions Sports Meet',
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80',
      tag: 'Sports',
      color: 'bg-sunshine-light',
    },
    {
      id: 4,
      title: 'Pre-Primary Storytelling & Rhymes',
      category: 'classroom',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      tag: 'PP1 & PP2',
      color: 'bg-mint-light',
    },
    {
      id: 5,
      title: 'Creative Art & Clay Workshop',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      tag: 'Art & Craft',
      color: 'bg-lavender-light',
    },
    {
      id: 6,
      title: 'Green Garden & Botanical Walk',
      category: 'campus',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      tag: 'Campus Nature',
      color: 'bg-coral-light',
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 relative bg-warm-cream">
      
      {/* Decorative Butterfly */}
      <div className="absolute top-12 right-12 pointer-events-none hidden sm:block">
        <CuteButterfly wingColor="#A78BFA" size={48} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pinky-soft/60 text-pinky-deep font-bold text-sm">
            <Camera className="w-4 h-4" /> Moments Of Joy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-800">
            Life At <span className="text-pinky-vibrant">Saini Public School</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            A glimpse into the daily laughter, hands-on learning, celebrations, and sports activities of our students.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'classroom', label: 'Classrooms' },
              { id: 'events', label: 'Events & Arts' },
              { id: 'sports', label: 'Sports' },
              { id: 'campus', label: 'Campus Nature' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${activeCategory === tab.id ? 'bg-gradient-to-r from-pinky-vibrant to-coral-vibrant text-white shadow-md scale-105' : 'bg-white text-slate-600 border border-slate-200 hover:bg-pinky-light'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedImage(item)}
              className="cursor-pointer group rounded-4xl overflow-hidden bg-white border-4 border-white shadow-md hover:shadow-pastel transition-all relative"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <span className="text-white font-bold text-base font-heading flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sunshine-vibrant" /> {item.title}
                  </span>
                </div>
                <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full font-bold text-xs text-slate-800 shadow-sm">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md p-4 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden p-3 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-slate-800 hover:bg-pinky-vibrant hover:text-white shadow-md transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-cover rounded-2xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold font-heading text-slate-800">{selectedImage.title}</h3>
                <p className="text-xs text-pinky-deep font-bold mt-1">Saini Public School Campus Life</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
