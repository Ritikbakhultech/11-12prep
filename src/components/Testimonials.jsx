import React from 'react';
import { Star, Award, CheckCircle2 } from 'lucide-react';
import { TOPPER_TESTIMONIALS } from '../data/mockData';

export default function Testimonials() {
  return (
    <section className="py-14 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-navy-800" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Trusted by Top Board Scorers
          </h2>
          <p className="text-sm text-slate-600">
            Hear from students across prestigious institutions who secured 98%+ aggregate scores.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOPPER_TESTIMONIALS.map((top, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Score badge & stars */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-purple-800 bg-brand-purple-50 px-2.5 py-0.5 rounded">
                    Score: {top.score}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{top.quote}"
                </p>

              </div>

              {/* Student Bio */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
                <img
                  src={top.avatar}
                  alt={top.name}
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div className="truncate">
                  <div className="text-xs font-bold text-navy-950 truncate flex items-center gap-1">
                    <span>{top.name}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  </div>
                  <div className="text-[10px] font-semibold text-brand-purple-700 truncate">
                    {top.rank}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {top.school}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 bg-navy-950 text-white rounded-xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-bold text-white">
              Ready to Accelerate Your Board Exam Preparation?
            </h3>
            <p className="text-xs text-slate-300">
              Access free chapter notes, solved exemplars, and timed mock tests today.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#study-material"
              className="px-4 py-2 bg-brand-purple-600 hover:bg-brand-purple-500 text-white text-xs font-bold rounded-lg transition"
            >
              Get Free Material
            </a>
            <a
              href="#mock-tests"
              className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-lg border border-white/20 transition"
            >
              Take Practice Test
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
