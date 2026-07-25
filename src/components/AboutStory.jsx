import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Droplets, Sparkles, Star, ShieldCheck, Sun, Compass, Music, Laptop, Trophy, Palette, SunMedium } from 'lucide-react';
import { SmilingFlower, CuteMushroom } from './Illustrations';

export const AboutStory = () => {
  const [activeFlower, setActiveFlower] = useState(0);

  const flowerChildren = [
    {
      id: 0,
      name: 'Curious Sunflower',
      talent: 'Asks "Why?" & Explores STEM',
      petalColor: '#FDE047',
      quote: 'I love discovering how nature and science work!',
      bgGradient: 'bg-amber-50 border-amber-200',
      icon: SunMedium,
    },
    {
      id: 1,
      name: 'Creative Rose',
      talent: 'Paints, Crafts & Imagines',
      petalColor: '#F472B6',
      quote: 'Every canvas is a window to my dreams!',
      bgGradient: 'bg-pink-50 border-pink-200',
      icon: Palette,
    },
    {
      id: 2,
      name: 'Musical Lotus',
      talent: 'Sings, Dances & Plays Rhymes',
      petalColor: '#DDD6FE',
      quote: 'Music makes my heart dance every single day!',
      bgGradient: 'bg-purple-50 border-purple-200',
      icon: Music,
    },
    {
      id: 3,
      name: 'Tech Daisy',
      talent: 'Loves Robotics & Coding Labs',
      petalColor: '#BAE6FD',
      quote: 'I solve puzzles and build smart ideas!',
      bgGradient: 'bg-sky-50 border-sky-200',
      icon: Laptop,
    },
    {
      id: 4,
      name: 'Athletic Tulip',
      talent: 'Loves Sports, Fitness & Team Play',
      petalColor: '#FFEDD5',
      quote: 'Running, playing, and learning together!',
      bgGradient: 'bg-orange-50 border-orange-200',
      icon: Trophy,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 font-extrabold text-xs tracking-wide uppercase">
            <Heart className="w-3.5 h-3.5 fill-pink-600" /> Educational Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Nurturing Every Unique <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Little Blossom</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Just like a garden filled with different flowers, every child grows at their own magical pace, bringing unique talents and joy into the world.
          </p>
        </div>

        {/* Story Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Garden Box */}
          <div className="lg:col-span-6 relative">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg relative overflow-hidden">
              
              <div className="absolute top-4 right-4">
                <Sun className="w-8 h-8 text-amber-400 animate-spin-slow" />
              </div>

              <div className="text-center mb-4">
                <span className="inline-block px-4 py-1 bg-white text-slate-700 font-extrabold text-xs rounded-full border border-slate-200 shadow-xs">
                  Interactive Garden - Click a flower to water it!
                </span>
              </div>

              {/* Garden Row */}
              <div className="relative w-full h-64 sm:h-72 flex items-end justify-center pb-4">
                <div className="absolute bottom-0 inset-x-0 h-16 bg-emerald-100/60 rounded-b-2xl flex items-center justify-around">
                  <CuteMushroom size={32} capColor="#F472B6" />
                  <CuteMushroom size={28} capColor="#A78BFA" />
                  <CuteMushroom size={30} capColor="#FB923C" />
                </div>

                <div className="relative z-10 flex justify-center items-end gap-3 sm:gap-6">
                  {flowerChildren.map((flower) => {
                    const isSelected = activeFlower === flower.id;
                    return (
                      <button
                        key={flower.id}
                        onClick={() => setActiveFlower(flower.id)}
                        className={`interactive-flower flex flex-col items-center group transition-all duration-300 transform ${isSelected ? 'scale-125 -translate-y-3' : 'hover:scale-110'}`}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="mb-1 text-xs font-bold text-sky-600 flex items-center gap-0.5 bg-white px-2 py-0.5 rounded-full shadow-xs border border-sky-100"
                          >
                            <Droplets className="w-3 h-3 fill-sky-500" /> Blooming!
                          </motion.div>
                        )}
                        <SmilingFlower color={flower.petalColor} centerColor="#FEF08A" size={isSelected ? 62 : 48} />
                        <span className="mt-1 text-[11px] font-extrabold text-slate-700 bg-white/90 px-2 py-0.5 rounded-full shadow-xs border border-slate-200">
                          {flower.name.split(' ')[1]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFlower}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className={`mt-4 p-4 rounded-2xl ${flowerChildren[activeFlower].bgGradient} border shadow-xs text-center`}
                >
                  <div className="flex items-center justify-center gap-2 text-lg font-bold font-heading text-slate-900">
                    <span>{flowerChildren[activeFlower].name}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-700 mt-1">
                    Talent: <span className="text-pink-600">{flowerChildren[activeFlower].talent}</span>
                  </p>
                  <p className="text-xs italic text-slate-600 mt-1 font-storybook">
                    "{flowerChildren[activeFlower].quote}"
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* Storytelling Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-4 rounded-2xl bg-pink-50 border border-pink-200 shadow-xs">
              <p className="text-pink-700 font-extrabold font-storybook text-lg">
                "Every Child Has Its Own Qualities Like Flowers."
              </p>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 leading-snug">
              We Don't Compare Flowers; We Help Every Single One Bloom Brightly!
            </h3>

            <p className="text-slate-600 font-medium leading-relaxed">
              At Saini Public School, we understand that no two children are identical. One child might be a natural problem solver who loves math and coding, while another finds their voice through painting, poetry, or music. 
            </p>

            <p className="text-slate-600 font-medium leading-relaxed">
              Our compassionate teachers provide a warm atmosphere where kids feel safe to express themselves, ask questions, make mistakes, and build confidence that lasts a lifetime.
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="p-2.5 rounded-xl bg-pink-100 text-pink-600">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Individual Attention</h4>
                  <p className="text-xs text-slate-500 font-medium">Small teacher-student ratio for personal care.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="p-2.5 rounded-xl bg-sky-100 text-sky-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">100% Safe Environment</h4>
                  <p className="text-xs text-slate-500 font-medium">CCTV monitored, child-friendly campus.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
