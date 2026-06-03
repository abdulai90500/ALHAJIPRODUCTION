'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Button from '../ui/Button';
import { Heart, Landmark, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DonationCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden font-heading text-white"
    >
      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-accent/90 z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl z-0 animate-pulse-glow" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-secondary font-bold text-sm uppercase tracking-wider">
            <Heart className="w-4 h-4 fill-current text-secondary" /> Make a Difference
          </span>

          <h2
            className={cn(
              'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            Your Support Changes Lives Today
          </h2>

          <p
            className={cn(
              'text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-body transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Every single donation helps fund school fees for youth, constructs clean water stations, expands animal farming cooperatives, and uplifts lives across Sierra Leone.
          </p>

          {/* Quick Payment Options Panel */}
          <div
            className={cn(
              'grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-4 transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center">
              <Landmark className="w-8 h-8 text-secondary mb-3" />
              <h4 className="font-bold text-white text-base">Direct Bank Transfer</h4>
              <p className="text-xs text-white/70 mt-1">Support directly using secure institutional accounts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center">
              <Smartphone className="w-8 h-8 text-secondary mb-3" />
              <h4 className="font-bold text-white text-base">Mobile Money Payments</h4>
              <p className="text-xs text-white/70 mt-1">Quick, regional local mobile carrier transfers</p>
            </div>
          </div>

          <div
            className={cn(
              'flex flex-col sm:flex-row justify-center gap-4 pt-4 transition-all duration-700 delay-400',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <Button href="/philanthropy#donate" variant="secondary" size="lg" className="w-full sm:w-auto">
              Go to Donation Portal
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10">
              Inquire Corporate Sponsorship
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
