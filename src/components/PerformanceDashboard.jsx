import React, { useState } from 'react';
import { 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Flame, 
  Target, 
  ArrowRight
} from 'lucide-react';
import { SUBJECTS_DATA } from '../data/mockData';

export default function PerformanceDashboard({ activeClass, onExploreSubject }) {
  const [targetScore, setTargetScore] = useState(95);

  const subjects = SUBJECTS_DATA[activeClass] || SUBJECTS_DATA[12];

  const scoreTrends = [
    { name: 'Mock 1', score: 68, topperAvg: 88 },
    { name: 'Mock 2', score: 74, topperAvg: 90 },
    { name: 'Mock 3', score: 79, topperAvg: 91 },
    { name: 'Mock 4', score: 84, topperAvg: 93 },
    { name: 'Mock 5', score: 91, topperAvg: 95 },
  ];

  const diagnosticWeakAreas = [
    {
      subject: 'Physics',
      topic: 'Ray Optics (Sign Convention & Lens Maker Formula)',
      accuracy: 52,
      impact: 'High (8-10 Marks)',
      suggestion: 'Review 5-step ray diagram derivation guides and solve 10 numericals.'
    },
    {
      subject: 'Chemistry',
      topic: 'Aldol & Cannizzaro Reaction Conversions',
      accuracy: 61,
      impact: 'Medium (5-6 Marks)',
      suggestion: 'Re-attempt organic synthesis roadmaps with step-wise mechanisms.'
    },
    {
      subject: 'Mathematics',
      topic: 'Definite Integrals (King Property proofs)',
      accuracy: 58,
      impact: 'High (6-8 Marks)',
      suggestion: 'Master 15 standard definite integral theorems with change of limits.'
    }
  ];

  return (
    <section id="progress" className="py-14 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-navy-800" />
              <span>Smart Diagnostics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Class {activeClass}th Student Progress & Analytics
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Real-time syllabus completion tracking, mock exam percentile curves, and diagnostic weak area remediation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-lg border border-slate-200">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <div className="text-left">
                <span className="text-[10px] text-slate-500 block leading-none">Study Streak</span>
                <span className="text-xs font-bold text-navy-950">14 Days Active</span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-lg border border-slate-200">
              <Clock className="w-4 h-4 text-brand-purple-600" />
              <div className="text-left">
                <span className="text-[10px] text-slate-500 block leading-none">Today's Focus</span>
                <span className="text-xs font-bold text-navy-950">2 hrs 45 mins</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top 3 KPI Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: Overall Readiness */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Overall Board Readiness
              </span>
              <div className="text-3xl font-black text-navy-950">78%</div>
              <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12% from last month
              </p>
            </div>
            
            <div className="relative w-14 h-14 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-brand-purple-600"
                  strokeDasharray="78, 100"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="absolute text-xs font-bold text-navy-900">78%</span>
            </div>
          </div>

          {/* Card 2: Projected Aggregate */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Projected Score
              </span>
              <div className="text-3xl font-black text-brand-purple-700">93.4%</div>
              <p className="text-[11px] text-slate-500">
                Target: <span className="font-bold text-navy-900">{targetScore}%</span>
              </p>
            </div>
            <div className="w-11 h-11 rounded-lg bg-brand-purple-50 text-brand-purple-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
          </div>

          {/* Card 3: Questions Solved */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Questions Mastered
              </span>
              <div className="text-3xl font-black text-navy-900">1,842</div>
              <p className="text-[11px] text-slate-500">
                Across NCERT & Past Papers
              </p>
            </div>
            <div className="w-11 h-11 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>

        </div>

        {/* Main Grid: Subject Syllabus Bars & Mock Progression Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Subject-Wise Syllabus Completion (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-navy-950">
                  Subject Syllabus Completion
                </h3>
                <p className="text-xs text-slate-500">Based on topics completed & mock test coverage</p>
              </div>
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                Class {activeClass}th
              </span>
            </div>

            <div className="space-y-4">
              {subjects.map((sub) => (
                <div key={sub.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <span>{sub.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">({sub.totalChapters} Ch)</span>
                    </span>
                    <span className="font-mono font-bold text-navy-950">{sub.syllabusProgress}%</span>
                  </div>

                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        sub.syllabusProgress >= 80
                          ? 'bg-emerald-600'
                          : sub.syllabusProgress >= 70
                          ? 'bg-navy-800'
                          : 'bg-brand-purple-600'
                      }`}
                      style={{ width: `${sub.syllabusProgress}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>{Math.round((sub.syllabusProgress / 100) * sub.totalChapters)} of {sub.totalChapters} chapters completed</span>
                    <span className="hover:text-brand-purple-600 cursor-pointer font-medium" onClick={() => onExploreSubject(sub.name)}>
                      View Topics →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mock Test Score Progression (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-navy-950">
                  Mock Test Progression
                </h3>
                <span className="text-[11px] font-bold text-brand-purple-700 bg-brand-purple-50 px-2 py-0.5 rounded">
                  Last 5 Mocks
                </span>
              </div>
              <p className="text-xs text-slate-500">Your score curve vs Toppers benchmark</p>
            </div>

            {/* Custom SVG Score Chart */}
            <div className="py-2">
              <div className="h-40 w-full flex items-end justify-between gap-3 pt-6 px-2 border-b border-slate-200">
                {scoreTrends.map((st, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                    <div className="text-[10px] font-bold text-navy-900 opacity-0 group-hover:opacity-100 transition">
                      {st.score}%
                    </div>
                    <div className="w-full flex items-end justify-center gap-1 h-28">
                      <div
                        className="w-1/2 bg-navy-900 group-hover:bg-brand-purple-600 transition-all rounded-t"
                        style={{ height: `${st.score}%` }}
                        title={`Your Score: ${st.score}%`}
                      />
                      <div
                        className="w-1/2 bg-slate-200 rounded-t"
                        style={{ height: `${st.topperAvg}%` }}
                        title={`Topper Avg: ${st.topperAvg}%`}
                      />
                    </div>
                    <span className="text-[10px] font-medium text-slate-500 whitespace-nowrap">
                      {st.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Chart Legend */}
              <div className="flex items-center justify-center gap-6 pt-3 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-navy-900" />
                  <span>Your Score %</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-slate-200" />
                  <span>Topper Benchmark (95%+)</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Next Test:</span>
              <span className="font-bold text-navy-950">Pre-Board Full Length Mock 3</span>
            </div>
          </div>

        </div>

        {/* AI Weak Area Diagnostic Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-navy-950 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Diagnostic Weak-Area Alerts</span>
              </h3>
              <p className="text-xs text-slate-500">
                Chapters and topics where accuracy dipped in recent tests.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded self-start sm:self-auto">
              3 Action Items
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {diagnosticWeakAreas.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-amber-200 bg-amber-50/20 space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {item.subject}
                    </span>
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      Accuracy: {item.accuracy}%
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-navy-950 leading-snug">
                    {item.topic}
                  </h4>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.suggestion}
                  </p>
                </div>

                <div className="pt-2 border-t border-amber-100 flex items-center justify-between text-xs">
                  <span className="text-[10px] font-bold text-slate-500">Weightage: {item.impact}</span>
                  <button
                    onClick={() => onExploreSubject(item.subject)}
                    className="text-xs font-bold text-brand-purple-700 hover:text-brand-purple-900 flex items-center gap-1"
                  >
                    <span>Revise</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
