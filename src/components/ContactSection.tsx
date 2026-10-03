import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Card3D } from './Card3D';
import { playWowSound } from '../utils/soundEffects';
import { triggerGrandWowBurst } from '../utils/burstEffect';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      playWowSound();
      triggerGrandWowBurst();
      setFormData({ name: '', email: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>Get in Touch</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              LET'S BUILD SOMETHING INTELLIGENT.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              I'm always interested in learning, building and collaborating on meaningful technology projects. Whether you are discussing graduate AI roles, technical internships, or open-source collaboration, feel free to reach out.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 pt-2">
              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 group shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    EMAIL ADDRESS
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block group-hover:text-cyan-300 transition-colors font-mono">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 ml-auto group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 group shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    LINKEDIN PROFILE
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block group-hover:text-blue-300 transition-colors font-mono">
                    {PERSONAL_INFO.linkedinDisplay}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 ml-auto group-hover:text-blue-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 group shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    GITHUB REPOSITORIES
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block group-hover:text-cyan-300 transition-colors font-mono">
                    {PERSONAL_INFO.githubDisplay}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 ml-auto group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Contact Form with Cyber Glass */}
          <div className="lg:col-span-6">
            <Card3D maxTilt={7} glowColor="rgba(0, 242, 254, 0.35)">
              <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
                <h3 className="font-display font-bold text-xl text-white mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  I typically respond within 24–48 hours to academic and professional inquiries.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3 animate-in fade-in zoom-in-95 duration-200">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="font-display font-bold text-base text-emerald-200">
                      Message Dispatched!
                    </h4>
                    <p className="text-xs text-emerald-300 max-w-sm mx-auto">
                      Thank you for reaching out! You can also directly write to me at{' '}
                      <span className="font-mono font-semibold text-white">{PERSONAL_INFO.email}</span>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-emerald-400 underline hover:text-emerald-300 pt-2 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-mono font-semibold text-slate-300 block mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono font-semibold text-slate-300 block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono font-semibold text-slate-300 block mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell me about the project, opportunity, or idea..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-400 transition-all resize-none font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Dispatching Message...' : 'Send Message'}</span>
                    </button>

                    <p className="text-[11px] text-slate-500 text-center font-mono">
                      Client-validated transmission · Delivered directly to inbox
                    </p>
                  </form>
                )}
              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
};
