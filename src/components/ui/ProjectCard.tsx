'use client';

import { Project } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Clock, CheckCircle, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusConfig = {
  completed: { icon: CheckCircle, label: 'Completed', color: 'text-success bg-success/10' },
  'in-progress': { icon: Clock, label: 'In Progress', color: 'text-warning bg-warning/10' },
  upcoming: { icon: Circle, label: 'Upcoming', color: 'text-accent bg-accent/10' },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isVisible } = useScrollAnimation();
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <div
      ref={ref}
      className={cn(
        'group bg-card rounded-2xl border border-border overflow-hidden card-hover transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/30 to-accent/20">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-white text-3xl font-heading font-bold">
            {project.title.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
        {/* Status Badge */}
        <div className={cn('absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold', status.color)}>
          <StatusIcon className="w-3.5 h-3.5" />
          {status.label}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
          {project.category.replace('-', ' ')}
        </p>
        <h3 className="text-xl font-bold font-heading text-dark mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-1.5 transition-all duration-300">
          Learn More <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
