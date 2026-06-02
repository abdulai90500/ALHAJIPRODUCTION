'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-semibold rounded-full transition-all duration-300 cursor-pointer';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl hover:shadow-primary/25 active:scale-95',
    secondary:
      'bg-secondary text-dark hover:bg-secondary-light shadow-lg hover:shadow-xl hover:shadow-secondary/25 active:scale-95',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95',
    ghost:
      'text-primary hover:bg-primary/10 active:scale-95',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm gap-1.5',
    md: 'px-7 py-3 text-base gap-2',
    lg: 'px-9 py-4 text-lg gap-2.5',
  };

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
