import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Cpu, Sparkles, Users, Award, Bus, BookOpenCheck } from 'lucide-react';
import { SmilingFlower, CuteButterfly } from './Illustrations';

export const WhyChooseUs = () => {
  const features = [
    {
      title: 'Safe Campus',
      icon: ShieldCheck,
      desc: '24/7 CCTV surveillance, biometric gate security, female attendant escorts, and complete child safety protocols.',
      iconBg: 'bg-sky-100 text-sky-600',
      accentColor: 'from-sky-400 to-blue-500',
    },
    {
      title: 'Caring Teachers',
      icon: HeartHandshake,
      desc: 'Passionate, motherly, background-verified educators trained in positive child psychology and gentle guidance.',
      iconBg: 'bg-pink-100 text-pink-600',
      accentColor: 'from-pink-400 to-rose-500',
    },
    {
      title: 'Smart Learning',
      icon: Cpu,
      desc: 'Interactive smart boards, 3D animated visual concepts, digital quizzes, and hands-on STEM experiment kits.',
      iconBg: 'bg-amber-100 text-amber-600',
      accentColor: 'from-amber-400 to-yellow-500',
    },
    {
      title: 'Creative Activities',
      icon: Sparkles,
      desc: 'Dedicated spaces for art, pottery, music, dance, theater, and public speaking to spark imagination.',
      iconBg: 'bg-purple-100 text-purple-600',
      accentColor: 'from-purple-400 to-indigo-500',
    },
    {
      title: 'Small Class Sizes',
      icon: Users,
      desc: 'Strict 1:15 teacher-student ratio ensuring every single child gets personal mentoring and care.',
      iconBg: 'bg-emerald-100 text-emerald-600',
      accentColor: 'from-emerald-400 to-teal-500',
    },
    {
      title: 'Holistic Development',
      icon: Award,
      desc: 'Equal emphasis on academic mastery, emotional intelligence, moral values, empathy, and physical health.',
      iconBg: 'bg-orange-100 text-orange-600',
      accentColor: 'from-orange-400 to-red-500',
    },
    {
      title: 'GPS Transport',
      icon: Bus,
      desc: 'GPS-tracked air-conditioned school buses with live app tracking, speed governors, and female bus attendants.',
      iconBg: 'bg-pink-100 text-pink-600',
      accentColor: 'from-pink-400 to-purple-500',
    },
    {
      title: 'Wonder Library',
      icon: BookOpenCheck,
      desc: 'Over 5,000 age-appropriate storybooks, encyclopedias, interactive audiobooks, and cozy reading nooks.',
      iconBg: 'bg-blue-100 text-blue-600',
      accentColor: 'from-blue-400 to-cyan-500',
    },
  ];

  return (
    <section id="why-us" className="py-24 relative bg-slate-50/60 overflow-hidden">
      
      <div className="absolute top-12 left-10 pointer-events-none opacity-60">
        <CuteButterfly wingColor="#F472B6" size={44} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-xs tracking-wide uppercase">
            <Award className="w-3.5 h-3.5" /> Parents' Preferred Choice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-pink-600 to-sky-600 bg-clip-text text-transparent">Saini Public School?</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            We provide a sanctuary where academic excellence, child safety, and loving care bloom hand-in-hand.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.accentColor}`}></div>

                <div>
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold font-heading text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-pink-600">
                  <SmilingFlower size={16} color="#F472B6" /> Verified Excellence
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
