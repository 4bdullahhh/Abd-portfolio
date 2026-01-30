import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NavItem } from '../types';
import { useTheme } from '../context/ThemeContext';

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Journey', href: '/journey' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] md:w-auto md:min-w-[600px] rounded-full px-6 py-3 
        ${scrolled || mobileMenuOpen ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-purple-200 dark:border-purple-500/30 shadow-lg shadow-purple-500/10' : 'bg-transparent border border-transparent'}`}
      >
        <div className="flex justify-between items-center gap-8">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 hover:scale-105 transition-transform">
            ABDULLAH<span className="text-purple-600 dark:text-purple-400">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link 
                  key={item.label} 
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-300 relative px-3 py-1 rounded-full ${
                    isActive 
                      ? 'text-purple-600 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-yellow-400 hover:bg-purple-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-gray-800 dark:text-white hover:text-purple-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-2xl p-6 flex flex-col gap-4 transform transition-all duration-300 origin-top ${
          mobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <Link 
            key={item.label} 
            to={item.href}
            className={`text-lg font-medium p-3 rounded-lg transition-colors ${
              location.pathname === item.href 
                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};