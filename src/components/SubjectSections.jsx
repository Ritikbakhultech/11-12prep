import React, { useState } from 'react';
import { 
  Atom, 
  FlaskConical, 
  Calculator, 
  Dna, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  Award,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { SUBJECTS_DATA } from '../data/mockData';

export default function SubjectSections({ 
  activeClass, 
  onSelectChapterMaterial, 
  onOpenFormulaModal 
}) {
  const subjects = SUBJECTS_DATA[activeClass] || SUBJECTS_DATA[12];
  const [selectedSubjectId, setSelectedSubjectId] = useState(subjects[0].id);

  // Sync selected subject if activeClass changes
  const activeSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];

  const getSubjectIcon = (iconName) => {
    switch (iconName) {
      case 'Atom': return <Atom className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'Dna': return <Dna className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="subjects" className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5 text-navy-800" />
              <span>Syllabus Breakdown (Class {activeClass}th)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Subject Blueprint & Chapter Directory
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Access chapter-wise theory, formula summaries, high-weightage derivations, and solved past questions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenFormulaModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-navy-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Formula Sheet</span>
            </button>
          </div>
        </div>

        {/* Subject Selectors (Tabs) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {subjects.map((sub) => {
            const isSelected = sub.id === activeSubject.id;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubjectId(sub.id)}
                className={`p-4 rounded-xl border text-left transition relative ${
                  isSelected
                    ? 'border-brand-purple-500 bg-brand-purple-50/30 ring-1 ring-brand-purple-300'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-navy-900 text-white' : 'bg-slate-100 text-navy-800'
                  }`}>
                    {getSubjectIcon(sub.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                    Code {sub.code}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-navy-950">{sub.name}</h3>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                  <span>{sub.totalChapters} Chapters</span>
                  <span className="font-semibold text-slate-700">{sub.totalMarks} Marks</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Subject Detailed View */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 lg:p-8">
          
          {/* Top Banner of Selected Subject */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-navy-900 text-white px-2.5 py-0.5 rounded">
                  Class {activeClass}th
                </span>
                <span className="text-xs font-bold text-brand-purple-800 bg-brand-purple-100 px-2.5 py-0.5 rounded">
                  {activeSubject.badge}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-navy-950 mt-1.5">
                {activeSubject.name} Curriculum
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                {activeSubject.description}
              </p>
            </div>

            {/* Subject Mastery Mini Stats */}
            <div className="flex items-center gap-6 bg-white p-3.5 rounded-xl border border-slate-200">
              <div>
                <span className="text-[11px] text-slate-500 block">Class Average</span>
                <span className="text-base font-bold text-navy-950">58.4 / {activeSubject.totalMarks}</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div>
                <span className="text-[11px] text-slate-500 block">Topper Benchmark</span>
                <span className="text-base font-bold text-brand-purple-700">68.5 / {activeSubject.totalMarks}</span>
              </div>
            </div>
          </div>

          {/* Two-column Content: Chapter List & Must-Know Derivations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            
            {/* Chapters List (8 cols) */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-navy-700" /> Chapter Directory & Weightage
                </h4>
                <span className="text-[11px] text-slate-500">High priority units</span>
              </div>

              <div className="space-y-2.5">
                {activeSubject.chapters.map((ch) => (
                  <div
                    key={ch.id}
                    className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-xs font-bold text-navy-800 shrink-0 mt-0.5">
                        {ch.num}
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-navy-950">
                          {ch.title}
                        </h5>
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-1">
                          <span className="font-semibold text-slate-700">Weightage: {ch.marks} Marks</span>
                          <span>•</span>
                          <span className={`font-medium ${
                            ch.difficulty === 'Hard' ? 'text-amber-700' :
                            ch.difficulty === 'Medium' ? 'text-blue-700' : 'text-emerald-700'
                          }`}>
                            {ch.difficulty}
                          </span>
                          <span>•</span>
                          <span>{ch.pyqCount} Solved Papers</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Material Actions */}
                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                      <button
                        onClick={() => onSelectChapterMaterial(ch.title, 'Notes', activeSubject.name)}
                        className="px-2.5 py-1 text-[11px] font-semibold text-navy-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition"
                      >
                        Notes
                      </button>
                      <button
                        onClick={() => onSelectChapterMaterial(ch.title, 'NCERT Solutions', activeSubject.name)}
                        className="px-2.5 py-1 text-[11px] font-semibold text-navy-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md transition"
                      >
                        NCERT Sol
                      </button>
                      <button
                        onClick={() => onSelectChapterMaterial(ch.title, 'Important Questions', activeSubject.name)}
                        className="px-2.5 py-1 text-[11px] font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-md transition"
                      >
                        Important Qs
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Top Derivations & Formulas (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Derivations Box */}
              <div className="rounded-xl bg-white p-5 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-brand-purple-600" /> Must-Master Derivations
                  </h4>
                  <span className="text-[10px] font-bold text-brand-purple-800 bg-brand-purple-50 px-1.5 py-0.5 rounded">
                    5 Marks Each
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Essential derivations commonly tested in board examinations:
                </p>

                <ul className="space-y-2 text-xs text-slate-700">
                  {activeSubject.topDerivations.map((item, idx) => (
                    <li key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                      <span className="text-[10px] font-bold text-navy-700 bg-white px-1.5 py-0.5 rounded border border-slate-200 shrink-0">
                        D{idx + 1}
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelectChapterMaterial(activeSubject.name, 'Notes', activeSubject.name)}
                  className="w-full mt-2 py-2 text-xs font-bold text-brand-purple-700 bg-brand-purple-50 hover:bg-brand-purple-100 border border-brand-purple-200 rounded-lg transition flex items-center justify-center gap-1"
                >
                  <span>Download Derivation Handout (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Step Marking Advice */}
              <div className="rounded-xl bg-navy-900 text-white p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Step-Marking Tip</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In {activeSubject.name}, marks are distributed step-wise: formula declaration, numerical substitution with units, and final boxed answer with appropriate SI units.
                </p>
                <div className="pt-1 text-[11px] text-slate-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Applied in all our model answer keys</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
