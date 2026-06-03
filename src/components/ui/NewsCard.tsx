'use client';

import { NewsItem } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  item: NewsItem;
  index: number;
}

const categoryColors = {
  news: 'bg-primary/10 text-primary',
  event: 'bg-accent/10 text-accent',
  announcement: 'bg-secondary/10 text-secondary-dark',
};

export default function NewsCard({ item, index }: NewsCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        'group bg-card rounded-2xl border border-border overflow-hidden card-hover transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image Area */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center text-white text-2xl font-heading font-bold">
            {item.title.charAt(0)}
          </div>
        </div>
        {/* Category Badge */}
        <div className={cn('absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold', categoryColors[item.category])}>
          <Tag className="w-3 h-3" />
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted text-sm mb-3">
          <Calendar className="w-4 h-4" />
          {formatDate(item.date)}
        </div>
        <h3 className="text-lg font-bold font-heading text-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
          {item.excerpt}
        </p>
        <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-1.5 transition-all duration-300">
          Read More <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
