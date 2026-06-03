'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from '../ui/SectionHeading';
import StatCard from '../ui/StatCard';
import { impactStats } from '@/data/sitedata';

export default function ImpactStats() {
  const { ref } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="section-padding bg-dark text-white relative overflow-hidden font-heading"
    >
      {/* Dynamic background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-light to-primary-dark/30 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl z-0" />

      <div className="container-custom relative z-10">
        <SectionHeading
          title="Our Community Impact"
          subtitle="Real results from our continuous dedication to supporting the growth, health, and welfare of families across Sierra Leone."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
