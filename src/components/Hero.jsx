import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Award, 
  Clock, 
  TrendingUp, 
  HelpCircle,
  Check,
  X
} from 'lucide-react';

export default function Hero({ 
  activeClass, 
  setActiveClass, 
  onStartMock, 
  onExploreMaterials 
}) {
  // Question of the day interactive state
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Question of the day (Physics 12/11)
  const qotd = activeClass === 12 ? {
    subject: 'Physics • Electric Charges',
    question: 'Two identical point charges Q are placed at distance r. If a third charge q is placed at midpoint so that the system is in equilibrium, value of q is:',
    options: ['-Q/2', '-Q/4', '+Q/2', '+Q/4'],
    correctIndex: 1,
    explanation: 'For net force on charge Q to be zero: k*Q*Q/r^2 + k*Q*q/(r/2)^2 = 0 => q = -Q/4.'
  } : {
    subject: 'Physics • Kinematics',
    question: 'A body starts from rest with uniform acceleration. What is the ratio of distance traveled in the 3rd second to that in the 5th second?',
    options: ['5 : 9', '3 : 5', '9 : 25', '1 : 2'],
    correctIndex: 0,
    explanation: 'Distance in nth second: Sn = u + a/2*(2n - 1). For u=0: S3/S5 = (2*3 - 1)/(2*5 - 1) = 5/9.'
  };

  const handleSelectOption = (idx) => {
    setSelectedAnswer(idx);
    setShowResult(true);
  };

  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            {/* Simple Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-purple-600" />
              <span>Comprehensive Class 11th & 12th Board Exam Prep</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.15]">
              Learn Smarter.{' '}
              <span className="text-brand-purple-600">
                Score Higher.
              </span>
              <br />
              Build Your Future.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Curated chapter notes, NCERT solutions, 10-year solved question papers, and realistic online mock tests designed for Class 11th & 12th Science students.
            </p>

            {/* Class switcher buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Select Class:</span>
              <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200">
                <button
                  onClick={() => { setActiveClass(11); setSelectedAnswer(null); setShowResult(false); }}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                    activeClass === 11
                      ? 'bg-white text-navy-900 shadow-sm'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  Class 11
                </button>
                <button
                  onClick={() => { setActiveClass(12); setSelectedAnswer(null); setShowResult(false); }}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                    activeClass === 12
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  Class 12
                </button>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#study-material"
                onClick={onExploreMaterials}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm transition"
              >
                <span>Explore Study Material</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#mock-tests"
                onClick={onStartMock}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-slate-50 text-navy-900 font-semibold text-sm border border-slate-300 transition"
              >
                <span>Take Mock Test</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-700 font-medium">NCERT Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-700 font-medium">10-Year Solved Papers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-700 font-medium">Step-Wise Solutions</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dashboard Preview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-200 space-y-4">
              
              {/* Header of widget */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-navy-900">
                    <Award className="w-4 h-4 text-navy-800" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-navy-950 uppercase tracking-wide">
                      Class {activeClass}th Learning Portal
                    </h2>
                    <p className="text-[11px] text-slate-500">Board Exam Target: 95%+</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-[11px] font-semibold bg-emerald-50 text-emerald-700 rounded border border-emerald-200">
                  Active
                </span>
              </div>

              {/* Countdown Bar */}
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-purple-600" /> Board Exam Schedule
                  </span>
                  <span className="font-mono font-bold text-navy-900">82 Days Remaining</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-navy-900 h-full rounded-full w-3/4"></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>Syllabus Target: 100%</span>
                  <span className="font-semibold text-slate-700">Daily: 2.5 hrs</span>
                </div>
              </div>

              {/* Interactive Question of the Day */}
              <div className="rounded-lg border border-slate-200 bg-slate-50/50 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-navy-900">
                    <HelpCircle className="w-3.5 h-3.5 text-brand-purple-600" />
                    <span>Question of the Day</span>
                  </div>
                  <span className="text-[10px] font-medium bg-white px-2 py-0.5 rounded text-slate-600 border border-slate-200">
                    {qotd.subject}
                  </span>
                </div>

                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {qotd.question}
                </p>

                {/* Options */}
                <div className="grid grid-cols-2 gap-2">
                  {qotd.options.map((opt, i) => {
                    const isChosen = selectedAnswer === i;
                    const isCorrect = i === qotd.correctIndex;
                    
                    let btnStyle = "bg-white hover:bg-slate-50 border-slate-200 text-slate-700";
                    if (showResult) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold";
                      } else if (isChosen) {
                        btnStyle = "bg-rose-50 border-rose-300 text-rose-800";
                      }
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handleSelectOption(i)}
                        className={`text-left px-2.5 py-2 rounded-md text-xs border transition flex items-center justify-between ${btnStyle}`}
                      >
                        <span className="truncate">{opt}</span>
                        {showResult && isCorrect && <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 ml-1" />}
                        {showResult && isChosen && !isCorrect && <X className="w-3.5 h-3.5 text-rose-600 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showResult && (
                  <div className="p-2.5 bg-white rounded-md border border-slate-200 text-[11px] text-slate-600 leading-normal">
                    <span className="font-semibold text-slate-800">
                      {selectedAnswer === qotd.correctIndex ? '✓ Correct! ' : '✕ Incorrect. '}
                    </span>
                    {qotd.explanation}
                  </div>
                )}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2 bg-slate-50 rounded-md border border-slate-200">
                  <div className="text-sm font-bold text-navy-950">14</div>
                  <div className="text-[10px] text-slate-500 font-medium">Day Streak</div>
                </div>
                <div className="p-2 bg-slate-50 rounded-md border border-slate-200">
                  <div className="text-sm font-bold text-brand-purple-700">92%</div>
                  <div className="text-[10px] text-slate-500 font-medium">Avg Accuracy</div>
                </div>
                <div className="p-2 bg-slate-50 rounded-md border border-slate-200">
                  <div className="text-sm font-bold text-emerald-700">4,500+</div>
                  <div className="text-[10px] text-slate-500 font-medium">Students</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
