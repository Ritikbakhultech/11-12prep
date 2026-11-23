import React from 'react';
import { X, Download, Bookmark, Star, CheckCircle, FileText, BookOpen } from 'lucide-react';

export default function ReaderModal({ 
  material, 
  onClose, 
  onDownloadNotification, 
  isBookmarked, 
  onToggleBookmark 
}) {
  if (!material) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="p-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-brand-purple-600 flex items-center justify-center text-white">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-purple-300">
                {material.subject} • {material.type}
              </span>
              <h3 className="text-sm font-bold text-white line-clamp-1">
                {material.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Subheader info toolbar */}
        <div className="px-5 py-2 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
          <div className="flex items-center gap-3">
            <span>Verified: <strong>{material.verifiedBy || 'Senior Board Panel'}</strong></span>
            <span>•</span>
            <span>{material.pages || 24} Pages</span>
            <span>•</span>
            <span>{material.fileSize || '3.5 MB'}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(material.id)}
              className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1 border transition ${
                isBookmarked
                  ? 'bg-brand-purple-100 text-brand-purple-800 border-brand-purple-300'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-brand-purple-700' : ''}`} />
              <span>{isBookmarked ? 'Saved' : 'Bookmark'}</span>
            </button>

            <button
              onClick={() => onDownloadNotification(material.title)}
              className="px-2.5 py-1 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs rounded transition flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Document Reader Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-800 leading-relaxed font-sans">
          
          {/* Summary Box */}
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="text-xs font-bold text-navy-950 uppercase tracking-wider mb-1">
              Chapter Overview & Exam Relevance
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {material.summary || 'Comprehensive review document covering high-yield exercises, conceptual derivations, and step-by-step marking scheme pointers.'}
            </p>
          </div>

          {/* Structured Content Preview */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-navy-950 pb-2 border-b border-slate-200 flex items-center justify-between">
              <span>Study Notes & Master Solution Extracts</span>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Latest Curriculum
              </span>
            </h4>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-xs text-slate-800 whitespace-pre-line leading-relaxed shadow-inner">
              {material.contentSnippet || `1. Core Theoretical Principle:
All concepts in this module are arranged according to the revised rationalized syllabus.

2. Step-by-Step Board Derivation:
- Step 1: Draw clean labeled schematic diagram with directional arrows. (1 Mark)
- Step 2: Formulate governing equations and boundary conditions. (1 Mark)
- Step 3: Perform standard algebraic integration / differentiation. (2 Marks)
- Step 4: Final statement of result enclosed in a neat box with standard SI units. (1 Mark)

3. Common Board Mistakes to Avoid:
- Omitting direction arrows in optics ray diagrams or circuit diagrams.
- Missing units in numerical answers (e.g. write V, J, m/s).
- Direct substitution without first quoting the general formula.`}
            </div>
          </div>

          {/* Checklist */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
            <h5 className="text-xs font-bold text-navy-900 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Final Revision Checklist</span>
            </h5>
            <ul className="text-xs text-slate-600 space-y-1 pl-5 list-disc">
              <li>Memorize all boundary conditions and assumptions before writing proofs.</li>
              <li>Practice numerical rounding to correct significant figures.</li>
              <li>Re-solve the 10-year past questions highlighted in practice modules.</li>
            </ul>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Downloaded over {material.downloads || '18,500'} times by students.
          </span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-md transition"
          >
            Close Reader
          </button>
        </div>

      </div>
    </div>
  );
}
