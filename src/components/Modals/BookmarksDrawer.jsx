import React from 'react';
import { X, Bookmark, BookOpen, Trash2, ArrowRight } from 'lucide-react';
import { STUDY_MATERIALS } from '../../data/mockData';

export default function BookmarksDrawer({ 
  isOpen, 
  onClose, 
  savedBookmarks, 
  onToggleBookmark, 
  onOpenReader 
}) {
  if (!isOpen) return null;

  const bookmarkedMaterials = STUDY_MATERIALS.filter(m => savedBookmarks.includes(m.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-navy-950/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-150">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-brand-purple-400 fill-brand-purple-400" />
            <div>
              <h3 className="text-sm font-bold text-white">
                Saved Study Materials
              </h3>
              <p className="text-[11px] text-slate-300">
                {bookmarkedMaterials.length} item{bookmarkedMaterials.length === 1 ? '' : 's'} bookmarked for quick revision
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {bookmarkedMaterials.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-2">
              <Bookmark className="w-10 h-10 mx-auto stroke-1" />
              <p className="text-xs font-semibold text-slate-600">No bookmarks saved yet</p>
              <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                Click the bookmark icon on any study material or NCERT solution to save it here for fast revision.
              </p>
            </div>
          ) : (
            bookmarkedMaterials.map((mat) => (
              <div
                key={mat.id}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-brand-purple-300 transition space-y-2 shadow-subtle"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {mat.subject} • Class {mat.classLevel}
                  </span>
                  <button
                    onClick={() => onToggleBookmark(mat.id)}
                    className="text-slate-400 hover:text-rose-600 p-1 transition"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h4 className="text-xs font-bold text-navy-950 leading-snug line-clamp-2">
                  {mat.title}
                </h4>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                  <span className="text-[11px] text-slate-500">{mat.type}</span>
                  <button
                    onClick={() => {
                      onOpenReader(mat);
                      onClose();
                    }}
                    className="text-xs font-bold text-brand-purple-700 hover:text-brand-purple-900 flex items-center gap-1"
                  >
                    <span>Read Notes</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs rounded-xl transition"
          >
            Back to Portal
          </button>
        </div>

      </div>
    </div>
  );
}
