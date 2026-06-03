'use client';

import { useScrollAnimation, useCounter } from '@/hooks/useScrollAnimation';
import { StatItem } from '@/types';
import { Heart, Target, Users, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart className="w-8 h-8" />,
  target: <Target className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  briefcase: <Briefcase className="w-8 h-8" />,
};

interface StatCardProps {
  stat: StatItem;
  index: number;
}

export default function StatCard({ stat, index }: StatCardProps) {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCounter(stat.value, isVisible);

  return (
    <div
      ref={ref}
      className={cn(
        'text-center p-6 md:p-8 rounded-2xl transition-all duration-700',
        'bg-white/10 backdrop-blur-sm border border-white/10',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 text-secondary mb-4">
        {iconMap[stat.icon] || <Heart className="w-8 h-8" />}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white font-heading mb-2">
        {count.toLocaleString()}
        <span className="text-secondary">{stat.suffix}</span>
      </div>
      <p className="text-white/70 text-lg">{stat.label}</p>
    </div>
  );
}
