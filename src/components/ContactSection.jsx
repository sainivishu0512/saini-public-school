import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SmilingFlower } from './Illustrations';

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [msgData, setMsgData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F472B6', '#38BDF8', '#FEF08A'],
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-extrabold text-xs tracking-wide uppercase">
            <MessageCircle className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight">
            Contact <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Saini Public School</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Have questions about admissions, fees, transport, or curriculum? We are always here to help you!
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-md relative overflow-hidden">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white shadow-xs">
                  <SmilingFlower size={42} color="#F472B6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold font-heading text-slate-900">
                    Saini Public School
                  </h3>
                  <p className="text-xs font-bold text-pink-600">Pre-Primary (PP1) to 8th Grade</p>
                </div>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4 text-slate-700 text-sm font-semibold">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                  <Phone className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-400 font-bold">Helpline / Admissions</span>
                    <span className="text-slate-900 font-bold text-base">+91 98765 43210</span> / <span className="text-slate-900 font-bold text-base">+91 98765 43211</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                  <Mail className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-400 font-bold">Email Address</span>
                    <span className="text-slate-900 font-bold">info@sainipublicschool.edu</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                  <MapPin className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-400 font-bold">Campus Address</span>
                    <span className="text-slate-900 font-bold">Main Education Hub Campus, Knowledge Park Road, City Center - 400001</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs text-slate-400 font-bold">School Office Hours</span>
                    <span className="text-slate-900 font-bold">Monday - Saturday: 8:00 AM - 3:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Card */}
              <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
                <div className="h-32 rounded-xl bg-slate-100 flex flex-col items-center justify-center border border-slate-200 p-2">
                  <MapPin className="w-8 h-8 text-pink-600 animate-bounce" />
                  <span className="text-xs font-extrabold text-slate-800 mt-1">Interactive Campus Map</span>
                  <span className="text-[11px] text-slate-500 font-semibold">Click to view location</span>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Send Us A Message
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-1">
                  We reply to every parent inquiry within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto text-pink-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold font-heading text-slate-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-600 font-medium text-sm max-w-md mx-auto">
                    Thank you for reaching out! Our admissions team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-pink-600 text-white font-bold text-sm shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={msgData.name}
                        onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-pink-600 focus:outline-none text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={msgData.phone}
                        onChange={(e) => setMsgData({ ...msgData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-pink-600 focus:outline-none text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={msgData.email}
                      onChange={(e) => setMsgData({ ...msgData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-pink-600 focus:outline-none text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                    <select
                      value={msgData.subject}
                      onChange={(e) => setMsgData({ ...msgData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-pink-600 focus:outline-none text-sm font-medium bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="PP1 / PP2 Admissions">PP1 / PP2 Admissions</option>
                      <option value="Grade 1-5 Primary">Grade 1-5 Primary Admissions</option>
                      <option value="Grade 6-8 Middle School">Grade 6-8 Middle School Admissions</option>
                      <option value="School Bus & Transport">School Bus & Transport</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message / Question *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your child's grade or any specific queries..."
                      value={msgData.message}
                      onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-pink-600 focus:outline-none text-sm font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-extrabold text-base shadow-lg hover:scale-102 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
