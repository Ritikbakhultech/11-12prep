import React, { useState } from 'react';
import { X, Zap, Copy, Check, Download } from 'lucide-react';

export default function FormulaSheetModal({ isOpen, onClose, activeClass, onDownloadNotification }) {
  const [activeSubject, setActiveSubject] = useState('Physics');
  const [copiedId, setCopiedId] = useState(null);

  if (!isOpen) return null;

  const formulaBank = {
    Physics: [
      {
        id: 'p1',
        title: "Coulomb's Law & Electric Field",
        formula: "F = (1 / (4*pi*epsilon_0)) * (|q1 * q2| / r^2)",
        notes: "Where 1/(4*pi*epsilon_0) = 9 x 10^9 N m^2 / C^2 in vacuum."
      },
      {
        id: 'p2',
        title: "Gauss's Law",
        formula: "Phi = oint E . dA = q_enclosed / epsilon_0",
        notes: "Electric flux through a closed surface depends only on the enclosed charge."
      },
      {
        id: 'p3',
        title: "Lens Maker's Equation",
        formula: "1/f = (n_lens / n_med - 1) * (1/R1 - 1/R2)",
        notes: "Strict sign convention required: R1 is positive for convex surface towards object."
      },
      {
        id: 'p4',
        title: "Prism Minimum Deviation Formula",
        formula: "n = sin((A + Dm) / 2) / sin(A / 2)",
        notes: "At minimum deviation, the refracted ray is parallel to the base of an equilateral prism."
      },
      {
        id: 'p5',
        title: "Bohr's Orbit Energy & Quantization",
        formula: "E_n = -13.6 / n^2 eV,  m*v*r = n*h / (2*pi)",
        notes: "Energy is negative representing a bound system."
      }
    ],
    Chemistry: [
      {
        id: 'c1',
        title: "Nernst Equation (at 298 K)",
        formula: "E_cell = E°cell - (0.0591 / n) * log(Q)",
        notes: "Q is the reaction quotient ([Products] / [Reactants] raised to stoichiometric coefficients)."
      },
      {
        id: 'c2',
        title: "Kohlrausch's Law of Independent Migration",
        formula: "Lambda°_m = nu_+ * lambda°_+ + nu_- * lambda°_-",
        notes: "Used to determine molar conductivity of weak electrolytes at infinite dilution."
      },
      {
        id: 'c3',
        title: "Integrated Rate Law (First Order)",
        formula: "k = (2.303 / t) * log([A]_0 / [A]_t),  t_1/2 = 0.693 / k",
        notes: "Half-life of a first order reaction is independent of initial concentration."
      },
      {
        id: 'c4',
        title: "Arrhenius Equation",
        formula: "k = A * e^(-Ea / (R*T)),  log(k2/k1) = (Ea / 2.303R) * (1/T1 - 1/T2)",
        notes: "Calculates activation energy (Ea) from rates at two different temperatures."
      }
    ],
    Mathematics: [
      {
        id: 'm1',
        title: "King's Property of Definite Integrals",
        formula: "integral_a^b f(x) dx = integral_a^b f(a + b - x) dx",
        notes: "Solves 90% of 5-mark definite integral problems with trigonometric integrands."
      },
      {
        id: 'm2',
        title: "Shortest Distance Between Skew Lines",
        formula: "d = | ((a2 - a1) . (b1 x b2)) / |b1 x b2| |",
        notes: "If d = 0, lines are intersecting; if b1 x b2 = 0, lines are parallel."
      },
      {
        id: 'm3',
        title: "Bayes Theorem (Probability)",
        formula: "P(E_i | A) = (P(E_i) * P(A | E_i)) / sum(P(E_j) * P(A | E_j))",
        notes: "Computes posterior probability given an observed event A."
      },
      {
        id: 'm4',
        title: "Integration by Parts",
        formula: "integral (u * v) dx = u * integral v dx - integral (u' * integral v dx) dx",
        notes: "Follow ILATE priority order: Inverse, Logarithmic, Algebraic, Trigonometric, Exponential."
      }
    ]
  };

  const handleCopy = (id, text) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentList = formulaBank[activeSubject] || [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Formula Sheet (Class {activeClass}th)
              </h3>
              <p className="text-[11px] text-slate-300">
                Essential high-yield equations for speedy revision
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Subject Navigation Tabs */}
        <div className="px-5 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {['Physics', 'Chemistry', 'Mathematics'].map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubject(sub)}
                className={`px-3 py-1 rounded-md text-xs font-bold transition ${
                  activeSubject === sub
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-200'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>

          <button
            onClick={() => onDownloadNotification(`${activeSubject} Formula Deck`)}
            className="text-xs font-semibold text-brand-purple-700 hover:text-brand-purple-900 flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save PDF</span>
          </button>
        </div>

        {/* Formula Cards Body */}
        <div className="p-5 overflow-y-auto space-y-3">
          {currentList.map((item) => (
            <div
              key={item.id}
              className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 transition space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-navy-950">
                  {item.title}
                </h4>
                <button
                  onClick={() => handleCopy(item.id, item.formula)}
                  className="p-1 rounded text-slate-400 hover:text-navy-900 hover:bg-white border border-transparent hover:border-slate-200 transition"
                  title="Copy Formula"
                >
                  {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="p-2.5 bg-white rounded border border-slate-200 font-mono text-xs font-bold text-navy-950 select-all">
                {item.formula}
              </div>

              <p className="text-[11px] text-slate-500 leading-normal">
                {item.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Aligned with revised curriculum.
          </span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs rounded-md transition"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
