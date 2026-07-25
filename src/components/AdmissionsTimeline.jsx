import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, School, Users, FileText, Heart, CheckCircle2, ArrowRight, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SmilingFlower } from './Illustrations';

export const AdmissionsTimeline = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    grade: 'PP1',
    phone: '',
    email: '',
  });

  const steps = [
    {
      num: '01',
      title: 'Visit School Campus',
      subtitle: 'Guided Campus Tour',
      desc: 'Schedule a friendly campus visit, explore our classrooms, green play lawns, robotics lab, and blooming garden.',
      icon: School,
      badgeColor: 'bg-pink-500 text-white',
    },
    {
      num: '02',
      title: 'Meet Teachers',
      subtitle: 'Warm Interaction',
      desc: 'Informal, stress-free interaction where our teachers understand your child’s unique personality, interests, and learning style.',
      icon: Users,
      badgeColor: 'bg-amber-500 text-white',
    },
    {
      num: '03',
      title: 'Admission Process',
      subtitle: 'Simple Documentation',
      desc: 'Fill out the simple admission form, submit basic documents (Birth certificate & address proof), and secure a seat.',
      icon: FileText,
      badgeColor: 'bg-sky-500 text-white',
    },
    {
      num: '04',
      title: 'Join Our Family',
      subtitle: 'Welcome Aboard!',
      desc: 'Receive the welcome kit, uniform, book pack, and join our school family as your child begins their blossoming journey.',
      icon: Heart,
      badgeColor: 'bg-emerald-500 text-white',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F472B6', '#38BDF8', '#FEF08A', '#A78BFA', '#34D399'],
    });
  };

  return (
    <section id="admissions" className="py-24 relative bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 font-extrabold text-xs tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Simple & Transparent
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Admissions <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Joining Saini Public School is easy and joyful. Here is our 4-step process.
          </p>
        </div>

        {/* 4 Step Timeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-2xl ${step.badgeColor} font-extrabold text-sm flex items-center justify-center shadow-xs`}>
                      {step.num}
                    </div>
                    <div className="p-2 rounded-xl bg-slate-100 text-slate-700">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold font-heading mb-1 text-slate-900">
                    {step.title}
                  </h3>
                  <span className="text-xs font-bold text-pink-600 block mb-3">
                    {step.subtitle}
                  </span>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Phase {idx + 1}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </motion.div>
            );
          })}
        </div>



      </div>

      {/* Admission Inquiry Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm p-4 flex items-center justify-center"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="relative max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="inline-block p-3 rounded-2xl bg-pink-50 mb-2">
                  <SmilingFlower size={40} color="#F472B6" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Admission Inquiry Form
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-1">
                  Saini Public School (PP1 to Grade 8)
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-slate-900">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-slate-600 font-medium">
                    Thank you! Our counselor will get in touch with you within 24 hours to schedule your campus visit.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="px-6 py-2.5 rounded-full bg-pink-600 text-white font-bold text-sm"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Parent's Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-pink-600 focus:outline-none text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Child's Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-pink-600 focus:outline-none text-sm font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Grade Applying *</label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:border-pink-600 focus:outline-none text-sm font-medium bg-white"
                      >
                        <option value="PP1">PP1 (Nursery)</option>
                        <option value="PP2">PP2 (KG)</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-pink-600 focus:outline-none text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-pink-600 focus:outline-none text-sm font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-sm shadow-md hover:scale-102 transition-all mt-2"
                  >
                    Submit Application / Book Visit
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
