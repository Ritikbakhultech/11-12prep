import React from 'react';
import { 
  Download, 
  FileText, 
  Clock, 
  Star, 
  BookOpen, 
  Layers
} from 'lucide-react';
import { RECENT_UPLOADS } from '../data/mockData';

export default function FeaturedResources({ onOpenReader, onDownloadNotification }) {
  const featuredCards = [
    {
      id: 'feat-1',
      title: 'Official Board Sample Question Paper Solved',
      subject: 'All 4 Subjects',
      badge: 'Official',
      rating: 5.0,
      downloads: '38,200',
      description: 'Step-by-step solutions following latest competency-based model marking scheme with point-by-point score allocations.',
      format: 'PDF • 64 Pages',
      sampleSnippet: `Contains complete solutions for:
- Physics 042 (Delhi & AI Sets)
- Chemistry 043 (All Competency MCQs solved)
- Mathematics 041 (Vector 3D & Calculus proofs)
- Biology 044 (Line-by-line diagram answers)`
    },
    {
      id: 'feat-2',
      title: '50 Most Repeated Board Derivations & Theorems',
      subject: 'Physics & Maths',
      badge: 'Topper Essential',
      rating: 4.9,
      downloads: '29,400',
      description: 'Historical 10-year analysis of derivations that have appeared 5 or more times in Section D and Section E board exam papers.',
      format: 'PDF • 48 Pages',
      sampleSnippet: `Top Derivations Included:
- Lens Maker's Formula
- Gauss Law: Electric field of infinite plane sheet
- Shortest distance between skew lines
- Semiconservative replication proof`
    },
    {
      id: 'feat-3',
      title: 'Organic Chemistry Reaction Maps & Reagents Sheet',
      subject: 'Chemistry',
      badge: 'Quick Revision',
      rating: 4.8,
      downloads: '34,100',
      description: 'All 24 named reactions, Grignard reagents, tests for distinguishing functional groups in one compact visual chart.',
      format: 'PDF • 12 Pages',
      sampleSnippet: `Complete Roadmap:
- Alkyl Halides -> Alcohols -> Aldehydes -> Carboxylic Acids
- Distinction Tests: Phenol vs Alcohol, Aldehyde vs Ketone
- Named reactions: Aldol, Cannizzaro, Sandmeyer, Gabriel Phthalimide`
    }
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-navy-800" />
            <span>High-Yield Content</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Featured Resources & Recent Uploads
          </h2>
          <p className="text-sm text-slate-600">
            Hand-picked material by experienced educators designed to maximize marks in the final 90 days.
          </p>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredCards.map((feat) => (
            <div
              key={feat.id}
              className="rounded-xl bg-white border border-slate-200 hover:border-slate-300 p-6 shadow-sm transition flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-navy-900 bg-slate-100 px-2.5 py-0.5 rounded">
                    {feat.subject}
                  </span>
                  <span className="text-[11px] font-bold text-brand-purple-800 bg-brand-purple-50 px-2.5 py-0.5 rounded">
                    {feat.badge}
                  </span>
                </div>

                <h3 
                  onClick={() => onOpenReader({ title: feat.title, subject: feat.subject, contentSnippet: feat.sampleSnippet, type: 'Featured Resource', pages: 48, fileSize: '4.8 MB' })}
                  className="text-base font-bold text-navy-950 group-hover:text-brand-purple-700 transition cursor-pointer leading-snug"
                >
                  {feat.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.description}
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-100">
                  <span className="font-medium text-slate-700">{feat.format}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="font-bold text-slate-700">{feat.rating}</span>
                    <span>({feat.downloads})</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-4 mt-2">
                <button
                  onClick={() => onOpenReader({ title: feat.title, subject: feat.subject, contentSnippet: feat.sampleSnippet, type: 'Featured Resource', pages: 48, fileSize: '4.8 MB' })}
                  className="py-2 text-xs font-bold text-navy-950 bg-slate-100 hover:bg-slate-200 rounded-lg transition flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-700" />
                  <span>Preview</span>
                </button>
                <button
                  onClick={() => onDownloadNotification(feat.title)}
                  className="py-2 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 rounded-lg transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recently Uploaded Content Stream */}
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-purple-600" />
              <h3 className="text-sm font-bold text-navy-950">
                Recently Added Study Material
              </h3>
            </div>
            <span className="text-xs text-slate-500">Live updates</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {RECENT_UPLOADS.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3.5 rounded-lg border border-slate-200 hover:border-slate-300 transition flex items-center justify-between gap-3 shadow-sm"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-navy-800 shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy-950 leading-snug line-clamp-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                      <span className="font-semibold text-brand-purple-700 bg-brand-purple-50 px-1 py-0.2 rounded">
                        {item.tag}
                      </span>
                      <span>•</span>
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onDownloadNotification(item.title)}
                  className="shrink-0 p-1.5 text-slate-600 hover:text-navy-900 hover:bg-slate-100 rounded transition"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
