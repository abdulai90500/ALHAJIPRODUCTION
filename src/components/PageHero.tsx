'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
}: PageHeroProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-dark text-white pt-24 font-heading"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-light/95 via-dark/95 to-primary-dark/80 z-10" />

      {/* Decorative blurred spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/15 blur-3xl z-0" />

      <div className="container-custom relative z-20 text-center max-w-4xl px-4">
        <h1
          ref={ref}
          className={cn(
            'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              'text-lg md:text-xl text-white/80 font-body max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
