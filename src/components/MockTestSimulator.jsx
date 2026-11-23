import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  FileCheck, 
  Sparkles, 
  Check, 
  X, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck
} from 'lucide-react';
import { MOCK_TESTS } from '../data/mockData';

export default function MockTestSimulator({ activeClass }) {
  const tests = MOCK_TESTS.filter(t => t.classLevel === activeClass) || MOCK_TESTS;
  const [selectedMock, setSelectedMock] = useState(tests[0] || MOCK_TESTS[0]);

  // Sync test when activeClass changes
  useEffect(() => {
    const match = MOCK_TESTS.find(t => t.classLevel === activeClass);
    if (match) setSelectedMock(match);
  }, [activeClass]);

  // Live Exam State
  const [isExamActive, setIsExamActive] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer countdown
  useEffect(() => {
    let timer = null;
    if (isExamActive && !isSubmitted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isExamActive, isSubmitted, timeLeft]);

  // Start exam
  const handleStartExam = (test) => {
    setSelectedMock(test);
    setIsExamActive(true);
    setCurrentQIndex(0);
    setAnswers({});
    setMarkedForReview({});
    setTimeLeft(15 * 60);
    setIsSubmitted(false);
  };

  const handleSelectOption = (qId, optionIdx) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [qId]: optionIdx
    }));
  };

  const handleToggleReview = (qId) => {
    setMarkedForReview(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleClearResponse = (qId) => {
    setAnswers(prev => {
      const copy = { ...prev };
      delete copy[qId];
      return copy;
    });
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const questions = selectedMock.sampleQuestions || [];
  const currentQ = questions[currentQIndex] || questions[0];

  const calculateResults = () => {
    let score = 0;
    let attempted = 0;
    let correct = 0;
    let incorrect = 0;

    questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        attempted++;
        if (answers[q.id] === q.correctIndex) {
          score += 1;
          correct++;
        } else {
          incorrect++;
        }
      }
    });

    return {
      score,
      total: questions.length,
      attempted,
      unattempted: questions.length - attempted,
      correct,
      incorrect,
      accuracy: attempted > 0 ? Math.round((correct / attempted) * 100) : 0
    };
  };

  const results = isSubmitted ? calculateResults() : null;

  return (
    <section id="mock-tests" className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <FileCheck className="w-3.5 h-3.5 text-navy-800" />
            <span>Online Exam Simulator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
            Online Mock Tests with Real Exam Interface
          </h2>
          <p className="text-sm text-slate-600">
            Sectional timing, Question Palette tracking, and instant evaluation with official step-wise marking answers.
          </p>
        </div>

        {/* If Exam is NOT currently active: Show Available Mock Test Series Cards */}
        {!isExamActive ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tests.map((test) => (
                <div
                  key={test.id}
                  className="rounded-xl bg-white border border-slate-200 hover:border-slate-300 p-6 shadow-sm transition flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-navy-900 bg-slate-100 px-2.5 py-0.5 rounded">
                        Class {test.classLevel}th • {test.subject}
                      </span>
                      <span className="text-[11px] font-semibold text-brand-purple-700 bg-brand-purple-50 px-2 py-0.5 rounded">
                        {test.difficulty}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-navy-950 group-hover:text-brand-purple-700 transition leading-snug">
                      {test.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {test.description}
                    </p>

                    {/* Test Specs Grid */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-center">
                      <div>
                        <span className="text-[11px] text-slate-400 block">Duration</span>
                        <span className="text-xs font-bold text-slate-800">{test.durationMinutes} Mins</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">Marks</span>
                        <span className="text-xs font-bold text-navy-900">{test.totalMarks} Marks</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">Questions</span>
                        <span className="text-xs font-bold text-slate-800">{test.totalQuestions} Qs</span>
                      </div>
                    </div>

                    {/* Benchmark info */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{test.attempts.toLocaleString()} Students Attempted</span>
                      <span className="font-semibold text-emerald-700">Avg: {test.avgScore}</span>
                    </div>
                  </div>

                  <div className="pt-4 mt-2">
                    <button
                      onClick={() => handleStartExam(test)}
                      className="w-full py-2.5 px-4 rounded-lg bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Start Online Test</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Test Interface Preview Guarantee */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-200 flex items-center justify-center text-navy-900 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950">
                    Real Examination Atmosphere
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Our test engine replicates timing, question palette statuses (Attempted, Marked for Review, Unattempted), and instant step-wise scoring.
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleStartExam(tests[0] || MOCK_TESTS[0])}
                className="shrink-0 px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs rounded-lg transition"
              >
                Launch Simulator
              </button>
            </div>
          </div>
        ) : (
          /* LIVE EXAM INTERFACE */
          <div className="rounded-xl border border-slate-300 bg-white shadow-sm overflow-hidden">
            
            {/* Exam Top Bar */}
            <div className="bg-navy-950 text-white px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-navy-800">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center text-white font-bold text-xs">
                  TEST
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {selectedMock.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                    <span>Class {selectedMock.classLevel}th</span>
                    <span>•</span>
                    <span className="text-emerald-400">Timed Exam Session</span>
                  </div>
                </div>
              </div>

              {/* Timer & Submit controls */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-navy-900 border border-slate-700 px-3 py-1 rounded-md text-xs font-mono">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-slate-300 text-[11px]">Time Left:</span>
                  <span className="font-bold text-white text-xs">
                    {formatTime(timeLeft)}
                  </span>
                </div>

                {!isSubmitted ? (
                  <button
                    onClick={handleSubmitExam}
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-md transition"
                  >
                    Submit Test
                  </button>
                ) : (
                  <button
                    onClick={() => setIsExamActive(false)}
                    className="px-3.5 py-1.5 bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs rounded-md transition"
                  >
                    Exit Test
                  </button>
                )}
              </div>
            </div>

            {/* Test Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
              
              {/* Question Area (8 Cols) */}
              <div className="lg:col-span-8 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
                
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-navy-900 bg-slate-100 px-2 py-0.5 rounded">
                        Question {currentQIndex + 1} of {questions.length}
                      </span>
                      <span className="text-xs font-semibold text-brand-purple-700 bg-brand-purple-50 px-2 py-0.5 rounded">
                        {currentQ.section}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-emerald-700 font-bold">+1.00 Marks</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-slate-500">0.00 Neg</span>
                    </div>
                  </div>

                  {/* Question Body */}
                  <div className="py-5 space-y-4">
                    <p className="text-sm font-semibold text-navy-950 leading-relaxed whitespace-pre-line">
                      {currentQ.question}
                    </p>

                    {/* Options List */}
                    <div className="space-y-2.5 pt-2">
                      {currentQ.options.map((opt, idx) => {
                        const isChosen = answers[currentQ.id] === idx;
                        const isCorrect = idx === currentQ.correctIndex;

                        let optionClass = "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800";
                        if (!isSubmitted) {
                          if (isChosen) {
                            optionClass = "border-navy-900 bg-slate-50 text-navy-950 font-semibold";
                          }
                        } else {
                          if (isCorrect) {
                            optionClass = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                          } else if (isChosen && !isCorrect) {
                            optionClass = "border-rose-400 bg-rose-50 text-rose-950 line-through";
                          }
                        }

                        return (
                          <div
                            key={idx}
                            onClick={() => handleSelectOption(currentQ.id, idx)}
                            className={`p-3 rounded-lg border transition cursor-pointer flex items-center justify-between text-xs ${optionClass}`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                                isChosen ? 'bg-navy-900 text-white' : 'bg-slate-100 text-slate-600'
                              }`}>
                                {String.fromCharCode(65 + idx)}
                              </span>
                              <span>{opt}</span>
                            </div>

                            {isSubmitted && isCorrect && (
                              <span className="text-[11px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">
                                Correct Answer
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {isSubmitted && (
                      <div className="mt-5 p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-navy-900">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Step-by-Step Explanation:</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed font-mono whitespace-pre-line">
                          {currentQ.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Navigation Toolbar */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleReview(currentQ.id)}
                      disabled={isSubmitted}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition ${
                        markedForReview[currentQ.id]
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {markedForReview[currentQ.id] ? '★ In Review' : 'Mark Review'}
                    </button>

                    <button
                      onClick={() => handleClearResponse(currentQ.id)}
                      disabled={isSubmitted || answers[currentQ.id] === undefined}
                      className="px-2.5 py-1.5 rounded-md text-xs text-slate-500 hover:text-slate-800 disabled:opacity-40"
                    >
                      Clear
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                      disabled={currentQIndex === 0}
                      className="px-3 py-1.5 rounded-md text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" /> Prev
                    </button>

                    <button
                      onClick={() => setCurrentQIndex(prev => Math.min(questions.length - 1, prev + 1))}
                      disabled={currentQIndex === questions.length - 1}
                      className="px-3.5 py-1.5 rounded-md text-xs font-bold bg-navy-900 hover:bg-navy-800 text-white disabled:opacity-40 flex items-center gap-1"
                    >
                      Next <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Question Palette Panel (4 Cols) */}
              <div className="lg:col-span-4 bg-slate-50 p-5 flex flex-col justify-between space-y-4">
                
                <div className="space-y-4">
                  {/* Status Legend */}
                  <div className="text-[11px] text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                    <div className="font-bold text-xs text-navy-950 mb-1.5">Palette Legend:</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-emerald-600 text-white text-[9px] flex items-center justify-center font-bold">✓</span>
                        <span>Answered</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-amber-500 text-white text-[9px] flex items-center justify-center font-bold">★</span>
                        <span>Review</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded bg-slate-200 text-slate-700 text-[9px] flex items-center justify-center font-bold">-</span>
                        <span>Unanswered</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded border border-navy-900 text-navy-900 text-[9px] flex items-center justify-center font-bold">●</span>
                        <span>Current</span>
                      </div>
                    </div>
                  </div>

                  {/* Question Palette Grid */}
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-2">
                    <div className="text-xs font-bold text-navy-950">Questions:</div>
                    <div className="grid grid-cols-5 gap-1.5">
                      {questions.map((q, idx) => {
                        const isCurrent = currentQIndex === idx;
                        const isAnswered = answers[q.id] !== undefined;
                        const isReviewed = markedForReview[q.id];

                        let btnBg = "bg-slate-100 text-slate-700 hover:bg-slate-200";
                        if (isReviewed) {
                          btnBg = "bg-amber-500 text-white font-bold";
                        } else if (isAnswered) {
                          btnBg = "bg-emerald-600 text-white font-bold";
                        }

                        return (
                          <button
                            key={q.id}
                            onClick={() => setCurrentQIndex(idx)}
                            className={`h-8 rounded text-xs font-semibold transition ${btnBg} ${
                              isCurrent ? 'ring-2 ring-navy-950' : ''
                            }`}
                          >
                            {idx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Results summary widget if submitted */}
                  {isSubmitted && results && (
                    <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-lg space-y-1.5">
                      <div className="text-xs font-bold text-emerald-950 flex items-center justify-between">
                        <span>Score Summary</span>
                        <span className="bg-emerald-600 text-white px-1.5 py-0.5 rounded text-[10px]">Done</span>
                      </div>
                      <div className="text-xl font-bold text-emerald-900">
                        {results.score} / {results.total} Marks
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[11px] text-emerald-800 pt-1">
                        <div>Accuracy: <strong>{results.accuracy}%</strong></div>
                        <div>Correct: <strong>{results.correct}</strong></div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsExamActive(false)}
                  className="w-full py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition"
                >
                  Exit Test
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
