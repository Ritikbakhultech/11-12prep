import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-navy-800" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Board Preparation Queries Answered
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Clear guidelines on marking schemes, syllabus coverage, and practical exam weightage.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-lg border border-slate-200 transition overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 text-left bg-white hover:bg-slate-50 flex items-center justify-between gap-4 transition"
                >
                  <span className="text-xs sm:text-sm font-bold text-navy-950">
                    {item.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'transform rotate-180 text-brand-purple-600' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="p-4 pt-0 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
