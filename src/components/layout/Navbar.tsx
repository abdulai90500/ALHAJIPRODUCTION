'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navigation';
import { Menu, X, Heart } from 'lucide-react';
import Button from '../ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-heading',
        scrolled
          ? 'bg-dark/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <div>
            <span className="text-white font-bold text-lg tracking-wider block leading-none">ALHAJI</span>
            <span className="text-secondary font-semibold text-xs tracking-widest block mt-0.5 leading-none">PRODUCTION HOME</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-all duration-300 relative py-1 hover:text-secondary',
                  isActive ? 'text-secondary font-semibold' : 'text-white/80'
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <Button href="/philanthropy#donate" variant="secondary" size="sm" className="gap-2">
            <Heart className="w-4 h-4 fill-current" /> Donate
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-secondary transition-colors p-2 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-[72px] bg-dark-light/95 backdrop-blur-lg border-b border-white/10 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)] py-6 px-6 z-40"
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-lg font-medium py-2 border-b border-white/5 transition-all duration-300 hover:text-secondary pl-2',
                      isActive ? 'text-secondary font-semibold border-l-4 border-l-secondary pl-3' : 'text-white/80'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 flex flex-col gap-4">
                <Button href="/philanthropy#donate" variant="secondary" className="w-full justify-center">
                  <Heart className="w-5 h-5 fill-current" /> Donate Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
