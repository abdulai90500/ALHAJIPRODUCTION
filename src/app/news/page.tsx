'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import NewsCard from '@/components/ui/NewsCard';
import Card from '@/components/ui/Card';
import { newsItems } from '@/data/news';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === activeFilter);

  // Filter out events for a special upcoming events sidebar
  const events = newsItems.filter(item => item.category === 'event');

  return (
    <>
      <PageHero
        title="News & Events"
        subtitle="Stay updated with our latest charity distributions, project milestones, and upcoming community meetings."
      />

      <section className="section-padding bg-surface font-body">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main News Area */}
            <div className="lg:col-span-8 space-y-8">
              {/* Category Filter buttons */}
              <div className="flex gap-2.5 pb-4 border-b border-border overflow-x-auto">
                {['all', 'news', 'event', 'announcement'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={cn(
                      'px-5 py-2 rounded-full font-heading font-semibold text-xs transition-all cursor-pointer whitespace-nowrap',
                      activeFilter === cat
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-white text-muted border border-border hover:border-primary/30 hover:text-primary'
                    )}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}s
                  </button>
                ))}
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredItems.map((item, idx) => (
                  <NewsCard key={item.id} item={item} index={idx} />
                ))}
              </div>
            </div>

            {/* Sidebar: Upcoming Events Calendar */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="p-6 border border-border bg-white sticky top-24">
                <h3 className="text-xl font-bold font-heading text-dark border-b border-border pb-4 mb-4">
                  Upcoming Events
                </h3>

                <div className="space-y-6">
                  {events.map((event) => (
                    <div key={event.id} className="group border-b border-border/50 last:border-none pb-4 last:pb-0">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-heading block mb-1">
                        {event.category}
                      </span>
                      <h4 className="font-bold text-dark text-base group-hover:text-primary transition-colors mb-2.5">
                        {event.title}
                      </h4>
                      
                      <div className="space-y-2 text-xs text-muted">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-secondary-dark" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-secondary-dark" />
                          <span>10:00 AM — 2:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-secondary-dark" />
                          <span>Community Center, Sierra Leone</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
