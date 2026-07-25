import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Sparkles, ArrowRight, ToyBrick, Palette, Pencil, 
  BookMarked, Microscope, Lightbulb, Rocket, Laptop, Globe, GraduationCap 
} from 'lucide-react';

export const Classes = ({ onOpenAdmissions }) => {
  const [filter, setFilter] = useState('all');

  const classesData = [
    {
      grade: 'PP1',
      title: 'Pre-Primary 1 (Nursery)',
      age: '3 - 4 Years',
      category: 'preprimary',
      badge: 'Play-Way & Sensory',
      desc: 'Sensory games, story circles, color discovery, and gross motor skill development in a playful, nurturing classroom.',
      accentColor: 'from-pink-500 to-rose-400',
      badgeBg: 'bg-pink-50 text-pink-700 border-pink-200',
      iconBg: 'bg-pink-100 text-pink-600',
      glow: 'hover:shadow-pink-100',
      icon: ToyBrick,
      highlights: ['Phonics & Rhymes', 'Clay & Finger Paint', 'Social Play'],
    },
    {
      grade: 'PP2',
      title: 'Pre-Primary 2 (KG)',
      age: '4 - 5 Years',
      category: 'preprimary',
      badge: 'Early Literacy',
      desc: 'Letter recognition, foundational numbers, nature walks, and creative storytelling activities.',
      accentColor: 'from-amber-400 to-yellow-400',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      iconBg: 'bg-amber-100 text-amber-700',
      glow: 'hover:shadow-amber-100',
      icon: Palette,
      highlights: ['Sight Words', 'Counting & Shapes', 'Art Expression'],
    },
    {
      grade: 'Grade 1',
      title: 'Grade 1',
      age: '5 - 6 Years',
      category: 'primary',
      badge: 'Foundational Years',
      desc: 'Reading fluency, basic arithmetic, curiosity science, and fun group activity projects.',
      accentColor: 'from-emerald-400 to-teal-400',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconBg: 'bg-emerald-100 text-emerald-700',
      glow: 'hover:shadow-emerald-100',
      icon: Pencil,
      highlights: ['English & Math', 'Environmental Studies', 'Library Hour'],
    },
    {
      grade: 'Grade 2',
      title: 'Grade 2',
      age: '6 - 7 Years',
      category: 'primary',
      badge: 'Active Exploration',
      desc: 'Building reading confidence, creative writing, basic computer play, and environmental awareness.',
      accentColor: 'from-sky-400 to-blue-400',
      badgeBg: 'bg-sky-50 text-sky-800 border-sky-200',
      iconBg: 'bg-sky-100 text-sky-700',
      glow: 'hover:shadow-sky-100',
      icon: BookMarked,
      highlights: ['Creative Writing', 'Math Puzzles', 'Music & Movement'],
    },
    {
      grade: 'Grade 3',
      title: 'Grade 3',
      age: '7 - 8 Years',
      category: 'primary',
      badge: 'Skill Building',
      desc: 'Structured science experiments, mathematical reasoning, social studies, and team sports.',
      accentColor: 'from-purple-400 to-indigo-400',
      badgeBg: 'bg-purple-50 text-purple-800 border-purple-200',
      iconBg: 'bg-purple-100 text-purple-700',
      glow: 'hover:shadow-purple-100',
      icon: Microscope,
      highlights: ['Science Corner', 'Group Projects', 'Computer Basics'],
    },
    {
      grade: 'Grade 4',
      title: 'Grade 4',
      age: '8 - 9 Years',
      category: 'primary',
      badge: 'Curiosity & Logic',
      desc: 'Deeper inquiry in science, grammar mastery, spatial geometry, and introductory coding concepts.',
      accentColor: 'from-orange-400 to-amber-400',
      badgeBg: 'bg-orange-50 text-orange-800 border-orange-200',
      iconBg: 'bg-orange-100 text-orange-700',
      glow: 'hover:shadow-orange-100',
      icon: Lightbulb,
      highlights: ['Intro Coding', 'EVS Field Work', 'Speech & Drama'],
    },
    {
      grade: 'Grade 5',
      title: 'Grade 5',
      age: '9 - 10 Years',
      category: 'primary',
      badge: 'Primary Graduate',
      desc: 'Advanced problem solving, public speaking, science fair projects, and competitive sports.',
      accentColor: 'from-pink-500 to-purple-400',
      badgeBg: 'bg-pink-50 text-pink-800 border-pink-200',
      iconBg: 'bg-pink-100 text-pink-700',
      glow: 'hover:shadow-pink-100',
      icon: Rocket,
      highlights: ['Robotics Basics', 'Math Olympiad Prep', 'Public Speaking'],
    },
    {
      grade: 'Grade 6',
      title: 'Grade 6',
      age: '10 - 11 Years',
      category: 'middle',
      badge: 'Middle School Prep',
      desc: 'Physics, Chemistry, Biology laboratory experiments, algebra foundations, and computer programming.',
      accentColor: 'from-blue-500 to-cyan-400',
      badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
      iconBg: 'bg-blue-100 text-blue-700',
      glow: 'hover:shadow-blue-100',
      icon: Laptop,
      highlights: ['Science Labs', 'Scratch Coding', 'Language Mastery'],
    },
    {
      grade: 'Grade 7',
      title: 'Grade 7',
      age: '11 - 12 Years',
      category: 'middle',
      badge: 'Analytical Mindset',
      desc: 'Critical thinking in humanities, practical science projects, digital literacy, and athletic clubs.',
      accentColor: 'from-teal-400 to-emerald-400',
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-200',
      iconBg: 'bg-teal-100 text-teal-700',
      glow: 'hover:shadow-teal-100',
      icon: Globe,
      highlights: ['Python & Web', 'Social Sciences', 'Inter-School Sports'],
    },
    {
      grade: 'Grade 8',
      title: 'Grade 8',
      age: '12 - 13 Years',
      category: 'middle',
      badge: 'Leadership & STEM',
      desc: 'Board level readiness, STEM innovation, leadership roles, and holistic career guidance.',
      accentColor: 'from-indigo-500 to-purple-500',
      badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      iconBg: 'bg-indigo-100 text-indigo-700',
      glow: 'hover:shadow-indigo-100',
      icon: GraduationCap,
      highlights: ['High School Prep', 'STEM Innovation', 'Student Council'],
    },
  ];

  const filteredClasses = filter === 'all' 
    ? classesData 
    : classesData.filter(c => c.category === filter);

  return (
    <section id="classes" className="py-24 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 font-extrabold text-xs tracking-wide uppercase shadow-xs">
            <BookOpen className="w-3.5 h-3.5" /> Academic Programs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Our Classes <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">(PP1 to Grade 8)</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Structured, joyful learning pathways designed to inspire confidence and curiosity at every milestone.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Classes (PP1-8)' },
              { id: 'preprimary', label: 'Pre-Primary (PP1 & PP2)' },
              { id: 'primary', label: 'Primary (Grade 1 - 5)' },
              { id: 'middle', label: 'Middle School (Grade 6 - 8)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 ${filter === tab.id ? 'bg-slate-900 text-white shadow-md scale-105' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Crisp Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredClasses.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.grade}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md ${item.glow} hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden`}
              >
                <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${item.accentColor}`}></div>

                <div>
                  <div className="flex items-center justify-between mb-5 pt-2">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
                      {item.age}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold font-heading text-slate-900 group-hover:text-pink-600 transition-colors">
                    {item.grade}
                  </h3>
                  <span className={`inline-block text-[11px] font-extrabold px-2.5 py-0.5 rounded-md border ${item.badgeBg} mb-3`}>
                    {item.badge}
                  </span>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-medium">
                    {item.desc}
                  </p>

                  <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                    {item.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Sparkles className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenAdmissions}
                  className="w-full py-3 rounded-2xl bg-slate-50 hover:bg-pink-600 text-slate-700 hover:text-white font-extrabold text-xs border border-slate-200 hover:border-pink-600 shadow-xs transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Enroll in {item.grade}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
