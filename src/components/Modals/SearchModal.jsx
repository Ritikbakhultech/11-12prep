import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { SUBJECTS_DATA, STUDY_MATERIALS, MOCK_TESTS } from '../../data/mockData';

export default function SearchModal({ isOpen, onClose, onSelectMaterial, activeClass }) {
  const [query, setQuery] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Flatten searchable items
  const allChapters = [
    ...(SUBJECTS_DATA[12] || []).flatMap(s => s.chapters.map(c => ({ ...c, subject: s.name, classLevel: 12, type: 'Chapter' }))),
    ...(SUBJECTS_DATA[11] || []).flatMap(s => s.chapters.map(c => ({ ...c, subject: s.name, classLevel: 11, type: 'Chapter' })))
  ];

  const filteredMaterials = STUDY_MATERIALS.filter(m => 
    query.trim() === '' || 
    m.title.toLowerCase().includes(query.toLowerCase()) || 
    m.subject.toLowerCase().includes(query.toLowerCase())
  );

  const filteredChapters = allChapters.filter(c => 
    query.trim() !== '' && (
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.subject.toLowerCase().includes(query.toLowerCase())
    )
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/70 backdrop-blur-sm flex items-start justify-center pt-20 p-4 animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type to search: 'Optics', 'Derivations', 'Integrals', 'Nernst equation'..."
            className="w-full text-sm font-medium text-navy-950 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-slate-500 hover:text-slate-800 bg-slate-100 rounded-md transition"
          >
            Esc
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          
          {/* Quick Suggestions if query is empty */}
          {query.trim() === '' && (
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Popular Board Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Ray Optics Derivations', 'Calculus Integrals', 'Electrochemistry Nernst Eq', '10-Year Solved PYQs', 'Sample Paper 2025'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matching Study Materials */}
          {filteredMaterials.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Study Materials & Solutions ({filteredMaterials.length})
              </span>
              <div className="space-y-1.5">
                {filteredMaterials.slice(0, 5).map((mat) => (
                  <div
                    key={mat.id}
                    onClick={() => {
                      onSelectMaterial(mat);
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-navy-50 text-navy-800 flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-navy-950 group-hover:text-brand-purple-700 transition">
                          {mat.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500">
                          <span>{mat.subject}</span>
                          <span>•</span>
                          <span>Class {mat.classLevel}th</span>
                          <span>•</span>
                          <span>{mat.type}</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-purple-600 transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Matching Chapters */}
          {filteredChapters.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Syllabus Chapters ({filteredChapters.length})
              </span>
              <div className="space-y-1.5">
                {filteredChapters.slice(0, 5).map((ch, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onSelectMaterial({
                        title: ch.title,
                        subject: ch.subject,
                        type: 'Chapter Notes',
                        summary: `Complete Chapter coverage for ${ch.title} with NCERT exercises and ${ch.pyqCount} past board questions.`,
                        pages: 26,
                        fileSize: '3.1 MB'
                      });
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-purple-50 text-brand-purple-700 flex items-center justify-center shrink-0 font-bold text-xs">
                        Ch
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-navy-950 group-hover:text-brand-purple-700 transition">
                          {ch.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500">
                          <span>{ch.subject}</span>
                          <span>•</span>
                          <span>Weightage: {ch.marks} Marks</span>
                          <span>•</span>
                          <span>Class {ch.classLevel}th</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-purple-600 transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {query.trim() !== '' && filteredMaterials.length === 0 && filteredChapters.length === 0 && (
            <div className="text-center py-8 text-xs text-slate-500">
              No matching resources found for "{query}". Try checking another subject.
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Search covering Class 11th & 12th Board Syllabi</span>
          <div className="flex items-center gap-1">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px]">Esc</kbd>
            <span>to exit</span>
          </div>
        </div>

      </div>
    </div>
  );
}
