'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { animalCategories } from '@/data/sitedata';
import { cn } from '@/lib/utils';
import { ChevronRight, Egg, Beef, Fish, Sprout } from 'lucide-react';

const categoryIcons = {
  poultry: <Egg className="w-5 h-5" />,
  cattle: <Beef className="w-5 h-5" />,
  'goat-farming': <Sprout className="w-5 h-5" />,
  'fish-farming': <Fish className="w-5 h-5" />,
};

export default function AnimalRearingPage() {
  const [activeCategory, setActiveCategory] = useState('poultry');

  const currentCategory = animalCategories.find(cat => cat.slug === activeCategory) || animalCategories[0];

  return (
    <>
      <PageHero
        title="Animal Rearing Section"
        subtitle="Sustainable agriculture programs empowering local families through livestock and fish farming."
      />

      <section className="section-padding bg-surface font-body">
        <div className="container-custom">
          
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {animalCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.slug)}
                className={cn(
                  'px-6 py-3 rounded-full font-heading font-semibold text-sm transition-all cursor-pointer flex items-center gap-2',
                  activeCategory === cat.slug
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-muted border border-border hover:border-primary/30 hover:text-primary'
                )}
              >
                {categoryIcons[cat.slug as keyof typeof categoryIcons]}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Box: Stats & Category Details */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="bg-gradient-to-br from-primary-dark to-primary text-white border-none p-8 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest font-heading">
                    {currentCategory.name} Metrics
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1 mb-6">Program Impact</h3>

                  <div className="space-y-5">
                    {currentCategory.stats.map((stat, idx) => (
                      <div key={idx} className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-white/80 font-medium text-sm">{stat.label}</span>
                        <span className="font-bold text-secondary text-lg">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-white/50 mt-6">
                  *Updated quarterly in accordance with local veterinary census.
                </p>
              </Card>
            </div>

            {/* Right Box: Description list and project reports */}
            <div className="lg:col-span-8 space-y-6">
              <Card className="p-8 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-dark mb-3">
                      About the {currentCategory.name} Program
                    </h3>
                    <p className="text-muted text-base leading-relaxed">
                      {currentCategory.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-dark font-heading text-lg mb-3">Key Details & Activities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {currentCategory.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <span className="text-muted text-sm leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-muted">
                    Interested in starting a community cooperative or joining our training program?
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1 text-primary font-bold text-sm hover:underline"
                  >
                    Contact Co-op Manager →
                  </a>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
