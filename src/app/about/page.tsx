'use client';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import TeamCard from '@/components/ui/TeamCard';
import { teamMembers, timeline, mission, vision } from '@/data/team';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Compass, Heart, GraduationCap, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  const { ref: bioRef, isVisible: bioVisible } = useScrollAnimation();
  const { ref: mvRef, isVisible: mvVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const founder = teamMembers[0];

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Learn about the history, mission, and the leadership behind Alhaji Production Home."
      />

      {/* Founder Biography Section */}
      <section ref={bioRef} className="section-padding bg-surface font-body">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image frame */}
            <div className={cn('lg:col-span-5 transition-all duration-1000', bioVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12')}>
              <Card padding="none" className="overflow-hidden border-2 border-primary/10 shadow-xl relative group">
                <div className="aspect-[4/5] w-full bg-gradient-to-br from-primary/30 to-primary-dark/40 overflow-hidden">
                  <img
                    src="/images/team/founder.jpg"
                    alt={founder.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Card>
            </div>

            {/* Biography Copy */}
            <div className={cn('lg:col-span-7 space-y-6 transition-all duration-1000 delay-200', bioVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12')}>
              <span className="text-sm font-bold text-primary uppercase tracking-widest font-heading">
                THE FOUNDER
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark font-heading leading-tight">
                Alhaji Sesay
              </h2>
              <p className="text-primary font-semibold font-heading text-lg">Philanthropist & Community Builder</p>
              
              <div className="decorative-line" />

              <div className="space-y-4 text-muted leading-relaxed text-base">
                <p>
                  Alhaji Sesay is a Sierra Leonean-born philanthropist based in the United States of America. He is dedicated to empowering young people and supporting community development through education, skills training, and humanitarian assistance.
                </p>
                <p>
                  Over the years, he has helped numerous students pay their school fees, enabling them to continue their education and achieve their goals. He has also supported skills-development programs that equip young people with practical knowledge and vocational training for a better future.
                </p>
                <p>
                  Through his commitment to giving back, Alhaji Sesay continues to make a positive impact on the lives of individuals and communities across Sierra Leone, creating opportunities and inspiring hope for future generations.
                </p>
              </div>

              {/* Quick Achievements List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary-dark">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-dark font-semibold text-sm">Educational Grants</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary-dark">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-dark font-semibold text-sm">Skills-Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={mvRef} className="section-padding bg-dark text-white relative overflow-hidden font-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-light to-primary-dark/30 z-0" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Card
              glass
              className={cn('transition-all duration-700', mvVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 font-body leading-relaxed">{mission}</p>
            </Card>

            <Card
              glass
              className={cn('transition-all duration-700 delay-200', mvVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 font-body leading-relaxed">{vision}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="section-padding bg-surface font-body">
        <div className="container-custom">
          <SectionHeading title="Our Journey" subtitle="A brief history of our growth and key milestones over the years." />

          <div className="max-w-3xl mx-auto relative border-l-2 border-primary/20 pl-8 ml-4 md:ml-auto">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={cn(
                  'relative mb-10 transition-all duration-700',
                  timelineVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Bullet circle */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-surface bg-primary flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                </div>
                {/* Event Card */}
                <Card className="hover:shadow-md">
                  <span className="text-sm font-bold text-primary uppercase tracking-widest font-heading">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-bold text-dark font-heading mt-1 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {event.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="section-padding bg-surface font-body border-t border-border">
        <div className="container-custom">
          <SectionHeading title="Our Team" subtitle="Meet the dedicated individuals driving operations and projects on the ground." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
