'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center',
        className
      )}
    >
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-700',
          light ? 'text-white' : 'text-dark',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'decorative-line transition-all duration-700 delay-200',
          centered && 'mx-auto',
          isVisible ? 'opacity-100 w-[60px]' : 'opacity-0 w-0'
        )}
      />
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg md:text-xl max-w-2xl transition-all duration-700 delay-300',
            centered && 'mx-auto',
            light ? 'text-white/70' : 'text-muted',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
