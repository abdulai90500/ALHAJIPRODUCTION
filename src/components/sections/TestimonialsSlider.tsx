'use client';

import { useState, useEffect } from 'react';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-surface font-body overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          title="Voices of the Community"
          subtitle="Read inspirational testimonies from local leaders, farmers, teachers, and individuals whose lives have been transformed."
        />

        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          {/* Slider Content Wrapper */}
          <div className="min-h-[280px] md:min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full"
              >
                <TestimonialCard
                  testimonial={testimonials[activeIndex]}
                  className="shadow-md bg-white border-2 border-primary/5"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm hover:shadow active:scale-90"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex ? 'bg-primary w-6' : 'bg-primary/20'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm hover:shadow active:scale-90"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
