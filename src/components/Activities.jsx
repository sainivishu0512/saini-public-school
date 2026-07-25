import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Music, Activity, Trophy, Laptop, BookOpen, TreePine, FlaskConical, Sparkles, Scissors } from 'lucide-react';

export const Activities = () => {
  const activitiesList = [
    {
      name: 'Art & Expression',
      icon: Palette,
      accentColor: 'from-pink-500 to-rose-400',
      iconBg: 'bg-pink-100 text-pink-600',
      desc: 'Watercoloring, pottery, sketching, and imaginative canvas art to express inner emotions.',
    },
    {
      name: 'Music & Harmony',
      icon: Music,
      accentColor: 'from-purple-500 to-indigo-400',
      iconBg: 'bg-purple-100 text-purple-600',
      desc: 'Vocal training, keyboards, drums, and rhythmic percussion for early acoustic appreciation.',
    },
    {
      name: 'Dance & Rhythm',
      icon: Activity,
      accentColor: 'from-amber-400 to-yellow-400',
      iconBg: 'bg-amber-100 text-amber-600',
      desc: 'Folk, classical, and contemporary dance to build flexibility, grace, and body posture.',
    },
    {
      name: 'Sports & Fitness',
      icon: Trophy,
      accentColor: 'from-orange-500 to-red-400',
      iconBg: 'bg-orange-100 text-orange-600',
      desc: 'Football, basketball, skating, gymnastics, and athletics in our green sports field.',
    },
    {
      name: 'Computer & AI Lab',
      icon: Laptop,
      accentColor: 'from-sky-500 to-blue-400',
      iconBg: 'bg-sky-100 text-sky-600',
      desc: 'Kid-friendly coding, robotics, 3D printing concepts, and safe digital citizenship.',
    },
    {
      name: 'Reading Club',
      icon: BookOpen,
      accentColor: 'from-emerald-500 to-teal-400',
      iconBg: 'bg-emerald-100 text-emerald-600',
      desc: 'Illustrated picture books, fairy tales, mystery novels, and vocabulary building sessions.',
    },
    {
      name: 'Nature Walks',
      icon: TreePine,
      accentColor: 'from-green-500 to-emerald-400',
      iconBg: 'bg-green-100 text-green-600',
      desc: 'Organic gardening, butterfly spotting, seed planting, and environmental sustainability.',
    },
    {
      name: 'Science Explorers',
      icon: FlaskConical,
      accentColor: 'from-yellow-500 to-amber-400',
      iconBg: 'bg-yellow-100 text-yellow-700',
      desc: 'Hands-on experiments, volcano models, space astronomy, and curiosity investigations.',
    },
    {
      name: 'Story Time',
      icon: Sparkles,
      accentColor: 'from-violet-500 to-purple-400',
      iconBg: 'bg-violet-100 text-violet-600',
      desc: 'Interactive moral storytelling, puppet theater, roleplaying, and theater performance.',
    },
    {
      name: 'Creative Crafts',
      icon: Scissors,
      accentColor: 'from-rose-500 to-pink-400',
      iconBg: 'bg-rose-100 text-rose-600',
      desc: 'Origami, paper mache, recycled craft projects, and fine motor dexterity exercises.',
    },
  ];

  return (
    <section id="activities" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-extrabold text-xs tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Holistic Enrichment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Fun & Creative <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Learning extends beyond books! We offer 10 vibrant activity streams so every child discovers their natural talent.
          </p>
        </div>

        {/* 10 Activity Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {activitiesList.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                whileHover={{ y: -6 }}
                className="p-5 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.accentColor}`}></div>

                <div>
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <div className={`w-10 h-10 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700">
                      Co-Curricular
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold font-heading text-slate-900 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span>Weekly Sessions</span>
                  <span className="text-pink-600 font-extrabold">Included</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
