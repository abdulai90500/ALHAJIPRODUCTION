'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className,
  hover = true,
  glass = false,
  padding = 'md',
}: CardProps) {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'rounded-2xl border',
        glass
          ? 'glass border-white/15'
          : 'bg-card border-border shadow-sm',
        hover && 'card-hover',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
