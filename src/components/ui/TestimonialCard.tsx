'use client';

import { Testimonial } from '@/types';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'bg-card rounded-2xl border border-border p-6 md:p-8 relative',
        className
      )}
    >
      <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
      <p className="text-muted leading-relaxed mb-6 text-base italic relative z-10">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold font-heading text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-dark font-heading">{testimonial.name}</h4>
          <p className="text-sm text-muted">{testimonial.role} — {testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}
