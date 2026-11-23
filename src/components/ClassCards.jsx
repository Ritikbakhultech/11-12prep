import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Check, 
  Trophy,
  Target
} from 'lucide-react';

export default function ClassCards({ activeClass, setActiveClass, onSelectClass }) {
  return (
    <section id="classes" className="py-14 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <Target className="w-3.5 h-3.5 text-navy-800" />
            <span>Academic Programs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Targeted Excellence for Class 11th & 12th
          </h2>
          <p className="text-sm text-slate-600">
            Choose your current class to unlock tailored notes, NCERT solutions, chapter weightages, and mock exams.
          </p>
        </div>

        {/* Two Normal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Class 11 Card */}
          <div 
            className={`rounded-xl bg-white p-6 sm:p-8 transition border relative ${
              activeClass === 11 
                ? 'border-brand-purple-400 ring-2 ring-brand-purple-100 shadow-sm' 
                : 'border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            {activeClass === 11 && (
              <div className="absolute top-4 right-4 bg-brand-purple-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Check className="w-3 h-3" /> Selected Class
              </div>
            )}

            <div className="space-y-5">
              
              <div>
                <span className="text-xs font-bold text-navy-700 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded">
                  Senior Secondary Year 1
                </span>
                <h3 className="text-2xl font-bold text-navy-950 mt-3">
                  Class 11th Foundation
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Master fundamentals early. Bridge the gap between school curriculum and competitive exam rigor.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Total Chapters</span>
                  <span className="text-sm font-bold text-navy-900">56 Chapters</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Practice Questions</span>
                  <span className="text-sm font-bold text-brand-purple-700">4,500+ Questions</span>
                </div>
              </div>

              {/* Key Features List */}
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Derivations:</strong> Calculus-based physics derivations & projectile motion proofs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>NCERT Line-by-Line Solutions:</strong> Detailed exercise calculations for Physical & Organic Chemistry.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Formulas & Identities Flashcards:</strong> Quick review sheets for Trigonometry & Conic Sections.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>School Exam Test Series:</strong> Timed subjective tests with model answer sheets.</span>
                </li>
              </ul>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setActiveClass(11);
                    if (onSelectClass) onSelectClass(11);
                  }}
                  className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 ${
                    activeClass === 11
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-navy-900'
                  }`}
                >
                  <span>{activeClass === 11 ? 'Active Class: Class 11' : 'Select Class 11'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

          {/* Class 12 Card */}
          <div 
            className={`rounded-xl bg-white p-6 sm:p-8 transition border relative ${
              activeClass === 12 
                ? 'border-brand-purple-400 ring-2 ring-brand-purple-100 shadow-sm' 
                : 'border-slate-200 hover:border-slate-300 shadow-sm'
            }`}
          >
            {activeClass === 12 && (
              <div className="absolute top-4 right-4 bg-navy-900 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Trophy className="w-3 h-3 text-amber-400" /> Active Class
              </div>
            )}

            <div className="space-y-5">
              
              <div>
                <span className="text-xs font-bold text-brand-purple-800 uppercase tracking-wider bg-brand-purple-50 px-2.5 py-1 rounded">
                  Board Examination Masterclass
                </span>
                <h3 className="text-2xl font-bold text-navy-950 mt-3">
                  Class 12th Board Hub
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Engineered for 95%+ board aggregate. Comprehensive 10-year solved papers and full syllabus mocks.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Past 10 Years Papers</span>
                  <span className="text-sm font-bold text-navy-900">1,200+ Solved</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Board Blueprint</span>
                  <span className="text-sm font-bold text-brand-purple-700">Latest Pattern</span>
                </div>
              </div>

              {/* Key Features List */}
              <ul className="space-y-2.5 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>10-Year Solved Papers:</strong> All Sets with step-by-step official marking rubrics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>High-Weightage 5-Mark Derivations:</strong> Ray Optics, Gauss Law, AC Generator & Calculus proofs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Official Sample Papers Solved:</strong> Step-by-step solutions for latest competency-based MCQs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Full Online Mock Tests:</strong> Experience exact 3-hour examination pressure with timed navigation.</span>
                </li>
              </ul>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setActiveClass(12);
                    if (onSelectClass) onSelectClass(12);
                  }}
                  className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 ${
                    activeClass === 12
                      ? 'bg-navy-900 text-white shadow-sm hover:bg-navy-800'
                      : 'bg-slate-100 hover:bg-slate-200 text-navy-900'
                  }`}
                >
                  <span>{activeClass === 12 ? 'Active Class: Class 12' : 'Select Class 12'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
