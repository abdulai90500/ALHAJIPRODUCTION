'use client';

import { TeamMember } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        'group relative bg-card rounded-2xl border border-border overflow-hidden card-hover transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-primary-dark/30">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-4xl font-heading font-bold">
            {member.name.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold font-heading text-dark mb-1">{member.name}</h3>
        <p className="text-primary font-semibold text-sm mb-3">{member.role}</p>
        <p className="text-muted text-sm leading-relaxed mb-4">{member.bio}</p>

        {/* Social Links */}
        {member.socials && (
          <div className="flex gap-3">
            {member.socials.facebook && (
              <a href={member.socials.facebook} className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
            )}
            {member.socials.twitter && (
              <a href={member.socials.twitter} className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {member.socials.linkedin && (
              <a href={member.socials.linkedin} className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
