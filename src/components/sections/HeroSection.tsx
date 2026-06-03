'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Button from '../ui/Button';
import { ArrowRight, Heart, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const backgroundImages = [
  '/images/team/party to chapter one.jpg',
  '/images/team/restuarant.jpg',
  '/images/team/ward.jpg',
  '/images/team/founder.jpg',
];

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark text-white pt-20 font-heading"
    >
      {/* Rotating Background Images */}
      {backgroundImages.map((src, index) => (
        <div
          key={src}
          className={cn(
            'absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out',
            currentBg === index ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Image
            src={src}
            alt="Alhaji Production Home Background"
            fill
            className="object-cover object-top"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 bg-dark/80 z-10" />

      {/* Background Graphic Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-light/50 via-dark/70 to-primary-dark/60 z-10" />

      {/* Blurred background circles for rich visuals */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl z-0 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl z-0 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-custom relative z-20 text-center max-w-5xl px-4 py-16 md:py-24">
        {/* Animated Slogan Badge */}
        <div
          className={cn(
            'inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-secondary text-sm font-semibold mb-8 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          )}
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          Empowering Communities, Changing Lives
        </div>

        {/* Hero Title */}
        <h1
          className={cn(
            'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-100',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          Welcome to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-secondary to-accent text-glow">
            Alhaji Production Home
          </span>
        </h1>

        {/* Hero Description */}
        <p
          className={cn(
            'text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed font-body transition-all duration-1000 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          Empowering young people, building sustainable agriculture, providing clean water, and supporting community development across Sierra Leone.
        </p>

        {/* Hero CTA Buttons */}
        <div
          className={cn(
            'flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <Button href="/philanthropy#donate" variant="secondary" size="lg" className="w-full sm:w-auto">
            <Heart className="w-5 h-5 fill-current" /> Donate Now
          </Button>
          <Button href="/about" variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:border-white">
            <Info className="w-5 h-5" /> About Founder
          </Button>
          <Button href="/boat-water-factory" variant="ghost" size="lg" className="w-full sm:w-auto text-white hover:text-secondary group">
            View Projects <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </Button>
        </div>
      </div>

      {/* Decorative Wave/Angle transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent z-20 pointer-events-none" />
    </section>
  );
}
