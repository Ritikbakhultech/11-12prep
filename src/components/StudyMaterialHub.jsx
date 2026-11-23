import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  BookOpen, 
  Bookmark, 
  Star, 
  Search, 
  CheckCircle, 
  Layers
} from 'lucide-react';
import { STUDY_MATERIALS } from '../data/mockData';

export default function StudyMaterialHub({ 
  activeClass, 
  onOpenReader, 
  savedBookmarks, 
  onToggleBookmark,
  onDownloadNotification
}) {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const types = ['All', 'Notes', 'NCERT Solutions', 'Important Questions', 'Previous Year Papers'];
  const subjects = ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology'];

  // Filter study materials
  const filteredMaterials = STUDY_MATERIALS.filter((item) => {
    const matchesClass = item.classLevel === activeClass;
    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesSubject = selectedSubject === 'All' || item.subject === selectedSubject;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesClass && matchesType && matchesSubject && matchesSearch;
  });

  return (
    <section id="study-material" className="py-14 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-2">
              <Layers className="w-3.5 h-3.5 text-navy-800" />
              <span>Resource Library</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
              Class {activeClass}th Study Material
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Verified chapter notes, step-wise NCERT solutions, high-yield question banks, and 10-year past papers compiled by top educators.
            </p>
          </div>

          {/* Search within resources */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notes, formulas, PYQs..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple-300 transition"
            />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-8 space-y-3">
          
          {/* Material Type Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
              Category:
            </span>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedType === type
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Subject Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-slate-100 scrollbar-none">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
              Subject:
            </span>
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  selectedSubject === sub
                    ? 'bg-brand-purple-100 text-brand-purple-800 font-bold border border-brand-purple-200'
                    : 'text-slate-600 hover:text-navy-950 hover:bg-slate-50'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

        </div>

        {/* Materials Grid */}
        {filteredMaterials.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-navy-950">No study material found for this criteria</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting the search filters or switch subjects above.</p>
            <button
              onClick={() => { setSelectedType('All'); setSelectedSubject('All'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 text-xs font-bold bg-navy-900 text-white rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((mat) => {
              const isBookmarked = savedBookmarks && savedBookmarks.includes(mat.id);

              return (
                <div
                  key={mat.id}
                  className="rounded-xl bg-white border border-slate-200 hover:border-slate-300 p-6 shadow-sm transition flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    
                    {/* Top Meta: Subject & Type & Bookmark */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {mat.subject}
                        </span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-brand-purple-50 text-brand-purple-800 border border-brand-purple-100">
                          {mat.type}
                        </span>
                      </div>

                      <button
                        onClick={() => onToggleBookmark(mat.id)}
                        className={`p-1.5 rounded-lg border transition ${
                          isBookmarked
                            ? 'bg-brand-purple-50 border-brand-purple-200 text-brand-purple-700'
                            : 'border-slate-200 text-slate-400 hover:text-navy-900 hover:bg-slate-50'
                        }`}
                        title={isBookmarked ? 'Remove Bookmark' : 'Save Material'}
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-brand-purple-600' : ''}`} />
                      </button>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 
                        onClick={() => onOpenReader(mat)}
                        className="text-base font-bold text-navy-950 group-hover:text-brand-purple-700 transition cursor-pointer leading-snug line-clamp-2"
                      >
                        {mat.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {mat.summary}
                      </p>
                    </div>

                    {/* Verified By Tag */}
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 bg-emerald-50/70 px-2.5 py-1.5 rounded-lg border border-emerald-100">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="font-medium truncate">{mat.verifiedBy}</span>
                    </div>

                    {/* Stats Info */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span className="font-bold text-slate-700">{mat.rating}</span>
                        <span>({mat.downloads})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{mat.pages} Pages</span>
                        <span>•</span>
                        <span>{mat.fileSize}</span>
                      </div>
                    </div>

                  </div>

                  {/* Actions: Read Online & Download */}
                  <div className="grid grid-cols-2 gap-2 pt-4 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onOpenReader(mat)}
                      className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy-950 text-xs font-bold transition flex items-center justify-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-slate-700" />
                      <span>Read Online</span>
                    </button>

                    <button
                      onClick={() => onDownloadNotification(mat.title)}
                      className="py-2 px-3 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
