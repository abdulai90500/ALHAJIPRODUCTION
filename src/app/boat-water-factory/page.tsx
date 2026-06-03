'use client';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import VideoEmbed from '@/components/ui/VideoEmbed';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Ship, Waves, Droplet, Milestone, CheckCircle } from 'lucide-react';

export default function BoatWaterFactoryPage() {
  const { ref: overviewRef, isVisible: overviewVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <>
      <PageHero
        title="Boat & Water Factory Project"
        subtitle="Empowering coastal transportation, fishing, and producing clean drinking water for the community."
      />

      {/* Overview Section */}
      <section ref={overviewRef} className="section-padding bg-surface font-body">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className={cn('lg:col-span-7 space-y-6 transition-all duration-1000', overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
              <span className="text-sm font-bold text-primary uppercase tracking-widest font-heading">
                PROJECT OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark font-heading">
                Clean Water & Modern Coastal Access
              </h2>
              <div className="decorative-line" />
              <p className="text-muted text-lg leading-relaxed">
                Clean drinking water and transportation are fundamental elements of community growth. The Clean Water Factory is our state-of-the-art water purification facility providing safe, affordable water to over 15 communities.
              </p>
              <p className="text-muted text-base leading-relaxed">
                Complementing the water factory, our Fishing Boat initiative provides local cooperatives with modern vessels, tools, and training to safely fish, increase harvest, and distribute fresh seafood to local markets.
              </p>
            </div>

            <div className={cn('lg:col-span-5 transition-all duration-1000 delay-200', overviewVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95')}>
              <Card className="bg-gradient-to-br from-primary-dark via-primary to-accent text-white border-none p-8 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                <h3 className="text-2xl font-bold font-heading mb-6 text-secondary">Factory Information</h3>
                
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <Droplet className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Daily Production Capacity</h4>
                      <p className="text-sm text-white/70">5,000 Liters of Purified Water</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Waves className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Purification Method</h4>
                      <p className="text-sm text-white/70">Multi-Stage Reverse Osmosis & UV Sterilization</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Ship className="w-6 h-6 text-secondary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Boat Fleet Size</h4>
                      <p className="text-sm text-white/70">5 Co-op Fishing & Transport Vessels</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Progress Timeline Section */}
      <section ref={statsRef} className="section-padding bg-dark text-white relative overflow-hidden font-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-light to-primary-dark/30 z-0" />
        
        <div className="container-custom relative z-10">
          <SectionHeading
            title="Development Milestones"
            subtitle="Follow the building steps and progress achievements of the Boat & Water Factory initiative."
            light
          />

          <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000', statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
            
            <Card glass className="border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">Phase 1 (Completed)</span>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Structural Foundation</h3>
                <p className="text-white/70 font-body text-sm leading-relaxed">
                  Construction of the water purification physical factory facility, boreholes drilling, and electric power system setups.
                </p>
              </div>
            </Card>

            <Card glass className="border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">Phase 2 (In Progress)</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-warning animate-ping" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Equipment Setup</h3>
                <p className="text-white/70 font-body text-sm leading-relaxed">
                  Installing reverse osmosis membrane systems, bottling pipelines, testing water quality, and launching boat distributions.
                </p>
              </div>
            </Card>

            <Card glass className="border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">Phase 3 (Upcoming)</span>
                  <Milestone className="w-5 h-5 text-accent-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Community Distribution</h3>
                <p className="text-white/70 font-body text-sm leading-relaxed">
                  Distributing bottled clean water to local schools, clinics, and building filling stations across rural areas.
                </p>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Video Demonstration */}
      <section className="section-padding bg-surface font-body">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            title="Video Documentation"
            subtitle="Watch video footage showing the factory construction progress and clean water distribution."
          />
          <VideoEmbed url="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Water Factory Project Documentary" />
        </div>
      </section>
    </>
  );
}
