import React, { useState } from 'react';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';

export default function Footer({ onOpenFormulaModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-14 pb-10 border-t border-navy-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-navy-800">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-purple-600 flex items-center justify-center text-white">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Bakhul<span className="text-brand-purple-400"> Edu</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Dedicated learning platform for Class 11th and 12th Science students. Empowering learners with structured NCERT solutions, chapter notes, and exam-style mock tests.
            </p>

            {/* Newsletter signup */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-200 block mb-1.5">
                Subscribe for Exam Updates & Study Alerts
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email..."
                  required
                  className="bg-navy-900 border border-slate-700 text-white px-3 py-1.5 text-xs rounded-md focus:outline-none focus:border-brand-purple-400 flex-1 placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-brand-purple-600 hover:bg-brand-purple-500 text-white text-xs font-bold rounded-md transition shrink-0"
                >
                  {subscribed ? 'Joined' : 'Subscribe'}
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] text-emerald-400 font-medium block mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Subscribed successfully!
                </span>
              )}
            </div>
          </div>

          {/* Quick Links: Class 12 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Class 12th Hub
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#subjects" className="hover:text-white transition">Physics Derivations</a></li>
              <li><a href="#subjects" className="hover:text-white transition">Chemistry Reactions</a></li>
              <li><a href="#subjects" className="hover:text-white transition">Maths Calculus</a></li>
              <li><a href="#subjects" className="hover:text-white transition">Biology Concept Maps</a></li>
              <li><a href="#study-material" className="hover:text-white transition">10-Year Solved Papers</a></li>
              <li><a href="#mock-tests" className="hover:text-white transition">Online Mock Tests</a></li>
            </ul>
          </div>

          {/* Quick Links: Class 11 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Class 11th Foundation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#classes" className="hover:text-white transition">Kinematics & Vectors</a></li>
              <li><a href="#classes" className="hover:text-white transition">Chemical Thermodynamics</a></li>
              <li><a href="#classes" className="hover:text-white transition">Trigonometry Identities</a></li>
              <li><a href="#classes" className="hover:text-white transition">Cell Cycle & Division</a></li>
              <li><a href="#mock-tests" className="hover:text-white transition">Annual Exam Series</a></li>
              <li><button onClick={onOpenFormulaModal} className="hover:text-white transition text-left">Formula Sheet</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Support & Helpline
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-purple-400 shrink-0" />
                <span>1800-120-PREP</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-purple-400 shrink-0" />
                <span>support@bakhuledu.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-purple-400 shrink-0 mt-0.5" />
                <span>Sector 62, Noida, NCR Delhi 201309</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Bakhul Edu Learning Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <a href="#terms" className="hover:text-slate-300 transition">Terms</a>
            <span>•</span>
            <a href="#privacy" className="hover:text-slate-300 transition">Privacy</a>
            <span>•</span>
            <a href="#sitemap" className="hover:text-slate-300 transition">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
