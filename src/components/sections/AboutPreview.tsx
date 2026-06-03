'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ArrowRight, Award, Compass, Heart } from 'lucide-react';
import { teamMembers } from '@/data/team';
import { cn } from '@/lib/utils';

export default function AboutPreview() {
  const { ref, isVisible } = useScrollAnimation();
  const founder = teamMembers[0]; // Alhaji Sesay

  return (
    <section ref={ref} className="section-padding bg-surface font-body overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Photo & Stats */}
          <div
            className={cn(
              'lg:col-span-5 relative transition-all duration-1000',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            )}
          >
            {/* Design backing circles */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -right-4 w-40 h-40 bg-secondary/15 rounded-full blur-3xl -z-10" />

            {/* Main Founder Card with Image placeholder/frame */}
            <Card padding="none" className="overflow-hidden border-2 border-primary/15 shadow-xl relative group">
              <div className="aspect-[4/5] w-full bg-gradient-to-br from-primary/30 to-primary-dark/40 relative flex items-center justify-center overflow-hidden">
                {/* Photo Container */}
                <img
                  src="/images/team/founder.jpg"
                  alt={founder.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Bottom Overlay Info */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent p-6 text-white text-center">
                  <h3 className="text-xl font-bold font-heading text-secondary">{founder.name}</h3>
                  <p className="text-xs text-white/80 uppercase tracking-widest mt-1">{founder.role}</p>
                </div>
              </div>
            </Card>

            {/* Floating Overlay Stats Card */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white/95 backdrop-blur-md border border-primary/20 rounded-2xl p-5 shadow-xl flex items-center gap-4 max-w-xs animate-float">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white shrink-0">
                <Heart className="w-6 h-6 fill-current text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-dark font-heading">10+ Years</p>
                <p className="text-xs text-muted font-medium">Of Philanthropic Service</p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy text & Founder intro */}
          <div
            className={cn(
              'lg:col-span-7 space-y-6 transition-all duration-1000 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            )}
          >
            <div className="space-y-2">
              <span className="text-sm font-bold text-primary uppercase tracking-widest font-heading">
                MEET THE FOUNDER
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark font-heading leading-tight">
                Empowering People, <br />
                Building Communities
              </h2>
            </div>
            
            <div className="decorative-line" />

            <p className="text-muted text-lg leading-relaxed">
              {founder.bio}
            </p>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-base font-heading">Education Support</h4>
                  <p className="text-sm text-muted">Helping students pay school fees and secure their academic futures.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-dark text-base font-heading">Vocational Training</h4>
                  <p className="text-sm text-muted">Equipping young minds with practical skills for modern economic self-reliance.</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <Button href="/about" variant="primary" size="md" className="w-full sm:w-auto">
                Read Full Biography <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" variant="ghost" size="md" className="w-full sm:w-auto text-primary">
                Contact Founder
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
