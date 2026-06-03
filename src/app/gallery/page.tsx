'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import VideoEmbed from '@/components/ui/VideoEmbed';
import { galleryItems } from '@/data/gallery';
import { cn } from '@/lib/utils';
import { Play, Image as ImageIcon } from 'lucide-react';

const tabs = [
  { id: 'all', label: 'All Media' },
  { id: 'charity', label: 'Charity & Events' },
  { id: 'water', label: 'Water Projects' },
  { id: 'animal-rearing', label: 'Animal Rearing' },
  { id: 'community', label: 'Community Development' },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <>
      <PageHero
        title="Photo & Video Gallery"
        subtitle="Browse documentation of our local animal farming, water factory construction, and charity distribution drives."
      />

      <section className="section-padding bg-surface font-body">
        <div className="container-custom">
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-6 py-2.5 rounded-full font-heading font-semibold text-sm transition-all cursor-pointer',
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-muted border border-border hover:border-primary/30 hover:text-primary'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                padding="none"
                className="overflow-hidden border border-border group relative aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10"
              >
                {item.type === 'video' ? (
                  /* Video preview overlay */
                  <div className="relative w-full h-full">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-dark shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-current text-dark" />
                      </div>
                    </div>
                    {/* Background icon indicator */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-dark/70 rounded-full text-white text-xs font-semibold">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Video
                    </div>
                    {/* Open Modal / Embed placeholder */}
                    <iframe
                      src={item.videoUrl}
                      title={item.alt}
                      className="absolute inset-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  /* Standard Image Card */
                  <div className="relative w-full h-full overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-primary/20 group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    {/* Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-primary/70 rounded-full text-white text-xs font-semibold">
                      <ImageIcon className="w-3.5 h-3.5" />
                      Image
                    </div>
                    {/* Description Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent p-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.alt}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
