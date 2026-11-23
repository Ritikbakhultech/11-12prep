import React, { useState } from 'react';
import { 
  GraduationCap, 
  User, 
  Menu, 
  X
} from 'lucide-react';

export default function Navbar({ 
  activeClass, 
  setActiveClass, 
  onOpenAuth, 
  user
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Class 11', 
      href: '#classes', 
      onClick: () => setActiveClass(11),
      isActive: activeClass === 11 
    },
    { 
      name: 'Class 12', 
      href: '#classes', 
      onClick: () => setActiveClass(12),
      isActive: activeClass === 12 
    },
    { name: 'Courses', href: '#subjects' },
    { name: 'Study Material', href: '#study-material' },
    { name: 'Mock Tests', href: '#mock-tests' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Simple Clean Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center text-white">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-navy-950 font-sans tracking-tight">
              Bakhul<span className="text-brand-purple-600"> Edu</span>
            </span>
          </a>

          {/* Normal Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className={`px-3 py-2 text-sm font-medium rounded-md transition ${
                  link.isActive
                    ? 'text-navy-900 font-bold bg-slate-100'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Simple Login / Profile Button */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
              >
                <div className="w-6 h-6 rounded-full bg-navy-900 text-white flex items-center justify-center text-xs font-bold">
                  {user.name.charAt(0)}
                </div>
                <span>{user.name.split(' ')[0]}</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-lg transition"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Normal Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                if (link.onClick) link.onClick();
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-navy-900 hover:bg-slate-50 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-navy-900 rounded-lg"
            >
              {user ? `Profile (${user.name})` : 'Login'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
