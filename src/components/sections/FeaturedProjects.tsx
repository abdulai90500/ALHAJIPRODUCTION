'use client';

import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';
import { projects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProjects() {
  // Show first 3 projects on the home page as highlights
  const featured = projects.slice(0, 3);

  return (
    <section className="section-padding bg-surface font-body">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-bold text-primary uppercase tracking-widest font-heading">
              OUR INITIATIVES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark font-heading mt-2">
              Featured Projects
            </h2>
            <p className="text-muted mt-3 text-base">
              A glimpse into our ongoing and completed development projects aimed at fostering community self-sufficiency and health.
            </p>
          </div>
          <Button href="/boat-water-factory" variant="outline" className="mt-6 md:mt-0 group shrink-0">
            View All Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
