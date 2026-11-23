import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClassCards from './components/ClassCards';
import SubjectSections from './components/SubjectSections';
import StudyMaterialHub from './components/StudyMaterialHub';
import MockTestSimulator from './components/MockTestSimulator';
import PerformanceDashboard from './components/PerformanceDashboard';
import FeaturedResources from './components/FeaturedResources';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

// Modals
import ReaderModal from './components/Modals/ReaderModal';
import AuthModal from './components/Modals/AuthModal';
import FormulaSheetModal from './components/Modals/FormulaSheetModal';

import { STUDY_MATERIALS } from './data/mockData';
import { CheckCircle2, Download, Bookmark } from 'lucide-react';

export default function App() {
  // Active academic class: 12 (Board) or 11 (Foundation)
  const [activeClass, setActiveClass] = useState(12);

  // Modals state
  const [readerMaterial, setReaderMaterial] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isFormulaOpen, setIsFormulaOpen] = useState(false);

  // User state
  const [user, setUser] = useState({
    name: 'Aarav Sharma',
    email: 'aarav.sharma@gmail.com',
    classLevel: 12,
    stream: 'PCM'
  });

  // Saved Bookmarks
  const [savedBookmarks, setSavedBookmarks] = useState(['mat-1', 'mat-3', 'mat-5']);

  // Toast Notification state
  const [toast, setToast] = useState(null);

  const showToast = (message, icon = 'check') => {
    setToast({ message, icon });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const handleToggleBookmark = (id) => {
    if (savedBookmarks.includes(id)) {
      setSavedBookmarks(prev => prev.filter(item => item !== id));
      showToast('Removed from Bookmarks', 'bookmark');
    } else {
      setSavedBookmarks(prev => [...prev, id]);
      showToast('Saved to Study Bookmarks!', 'bookmark');
    }
  };

  const handleDownloadNotification = (title) => {
    showToast(`Downloading: "${title}" (PDF)`, 'download');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-brand-purple-100 selection:text-brand-purple-900">
      
      {/* Simple, Normal Navigation Bar */}
      <Navbar
        activeClass={activeClass}
        setActiveClass={setActiveClass}
        onOpenAuth={() => setIsAuthOpen(true)}
        user={user}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          activeClass={activeClass}
          setActiveClass={setActiveClass}
          onStartMock={() => {
            const el = document.getElementById('mock-tests');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreMaterials={() => {
            const el = document.getElementById('study-material');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Two Cards for Class 11 & Class 12 */}
        <ClassCards
          activeClass={activeClass}
          setActiveClass={setActiveClass}
          onSelectClass={(cls) => {
            setActiveClass(cls);
            showToast(`Switched view to Class ${cls}th Portal`, 'check');
          }}
        />

        {/* Subject Sections for Physics, Chemistry, Mathematics, Biology */}
        <SubjectSections
          activeClass={activeClass}
          onOpenFormulaModal={() => setIsFormulaOpen(true)}
          onSelectChapterMaterial={(chapterTitle, type, subject) => {
            const existing = STUDY_MATERIALS.find(m => m.subject === subject && m.type === type);
            if (existing) {
              setReaderMaterial(existing);
            } else {
              setReaderMaterial({
                id: `custom-${Date.now()}`,
                title: `${chapterTitle} - ${type}`,
                subject,
                type,
                summary: `Comprehensive module for ${chapterTitle}. Contains standard derivations, key formulas, NCERT solutions and past questions with marking criteria.`,
                pages: 28,
                fileSize: '3.6 MB',
                verifiedBy: 'Senior Board Panel'
              });
            }
          }}
        />

        {/* Chapter-wise Notes, NCERT Solutions, Important Questions, PYQs */}
        <StudyMaterialHub
          activeClass={activeClass}
          onOpenReader={(mat) => setReaderMaterial(mat)}
          savedBookmarks={savedBookmarks}
          onToggleBookmark={handleToggleBookmark}
          onDownloadNotification={handleDownloadNotification}
        />

        {/* Online Mock Tests with Exam-Style Interfaces */}
        <MockTestSimulator
          activeClass={activeClass}
        />

        {/* Student Progress and Performance Tracking */}
        <PerformanceDashboard
          activeClass={activeClass}
          onExploreSubject={(subj) => {
            const el = document.getElementById('subjects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Featured Study Resources and Recently Uploaded Content */}
        <FeaturedResources
          onOpenReader={(mat) => setReaderMaterial(mat)}
          onDownloadNotification={handleDownloadNotification}
        />

        {/* Topper Testimonials */}
        <Testimonials />

        {/* Board Preparation FAQ */}
        <FAQSection />

      </main>

      {/* Footer */}
      <Footer
        onOpenFormulaModal={() => setIsFormulaOpen(true)}
      />

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-navy-950 text-white px-4 py-2.5 rounded-lg shadow-xl border border-navy-800 flex items-center gap-3 animate-in slide-in-from-bottom-3 duration-200">
          {toast.icon === 'download' && <Download className="w-4 h-4 text-emerald-400 shrink-0" />}
          {toast.icon === 'bookmark' && <Bookmark className="w-4 h-4 text-brand-purple-400 fill-brand-purple-400 shrink-0" />}
          {toast.icon === 'check' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
          <span className="text-xs font-semibold">{toast.message}</span>
        </div>
      )}

      {/* Modals */}
      <ReaderModal
        material={readerMaterial}
        onClose={() => setReaderMaterial(null)}
        onDownloadNotification={handleDownloadNotification}
        isBookmarked={readerMaterial && savedBookmarks.includes(readerMaterial.id)}
        onToggleBookmark={handleToggleBookmark}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={user}
        onLogin={(userData) => {
          setUser(userData);
          setActiveClass(userData.classLevel);
          showToast(`Welcome back, ${userData.name}!`, 'check');
        }}
        onLogout={() => {
          setUser(null);
          showToast('Logged out of session', 'check');
        }}
      />

      <FormulaSheetModal
        isOpen={isFormulaOpen}
        onClose={() => setIsFormulaOpen(false)}
        activeClass={activeClass}
        onDownloadNotification={handleDownloadNotification}
      />

    </div>
  );
}
