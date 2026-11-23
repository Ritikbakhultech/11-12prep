import React, { useState } from 'react';
import { X, GraduationCap, User, Mail, Lock } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLogin, currentUser, onLogout }) {
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedClass, setSelectedClass] = useState('12');
  const [selectedStream, setSelectedStream] = useState('PCM');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginTab) {
      onLogin({
        name: email.split('@')[0] || 'Aarav Sharma',
        email: email || 'aarav.sharma@gmail.com',
        classLevel: parseInt(selectedClass, 10),
        stream: selectedStream
      });
    } else {
      onLogin({
        name: name || 'Aarav Sharma',
        email: email || 'aarav.sharma@gmail.com',
        classLevel: parseInt(selectedClass, 10),
        stream: selectedStream
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-navy-950 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-brand-purple-600 flex items-center justify-center text-white">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                {currentUser ? 'Student Profile' : isLoginTab ? 'Student Login' : 'Create Free Account'}
              </h3>
              <p className="text-[11px] text-slate-300">
                {currentUser ? 'Manage your academic preferences' : 'Track your mock tests and study progress'}
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

        {currentUser ? (
          /* Profile Logged-in View */
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-10 h-10 rounded-full bg-navy-900 text-white font-bold text-base flex items-center justify-center">
                {currentUser.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-950">{currentUser.name}</h4>
                <p className="text-xs text-slate-500">{currentUser.email}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-bold bg-brand-purple-100 text-brand-purple-800 px-2 py-0.5 rounded">
                    Class {currentUser.classLevel}th
                  </span>
                  <span className="text-[10px] font-semibold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                    {currentUser.stream}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Account Status:</span>
                <span className="font-bold text-emerald-600">Active Student</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Mocks Completed:</span>
                <span className="font-bold text-navy-900">4 Papers</span>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={onLogout}
                className="w-full py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs rounded-lg transition"
              >
                Log Out
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs rounded-lg transition"
              >
                Continue
              </button>
            </div>
          </div>
        ) : (
          /* Login / Register Form */
          <div className="p-5">
            
            {/* Tabs */}
            <div className="flex p-1 bg-slate-100 rounded-lg mb-4">
              <button
                onClick={() => setIsLoginTab(true)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition ${
                  isLoginTab ? 'bg-white text-navy-950 shadow-sm' : 'text-slate-600'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLoginTab(false)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-md transition ${
                  !isLoginTab ? 'bg-white text-navy-950 shadow-sm' : 'text-slate-600'
                }`}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              
              {!isLoginTab && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple-300"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="student@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple-300"
                  />
                </div>
              </div>

              {/* Class & Stream Selectors */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Class</label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple-300"
                  >
                    <option value="12">Class 12th</option>
                    <option value="11">Class 11th</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Stream</label>
                  <select
                    value={selectedStream}
                    onChange={(e) => setSelectedStream(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple-300"
                  >
                    <option value="PCM">PCM</option>
                    <option value="PCB">PCB</option>
                    <option value="PCMB">PCMB</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 mt-2 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs rounded-lg transition"
              >
                {isLoginTab ? 'Sign In' : 'Register Free'}
              </button>
            </form>

          </div>
        )}

      </div>
    </div>
  );
}
