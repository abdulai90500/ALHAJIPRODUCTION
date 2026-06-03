'use client';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Heart, Gift, Award, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PhilanthropyPage() {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: donateRef, isVisible: donateVisible } = useScrollAnimation();

  return (
    <>
      <PageHero
        title="Philanthropy & Charity"
        subtitle="Supporting communities, youth education, skills development, and humanitarian aid."
      />

      {/* Overview Section */}
      <section ref={introRef} className="section-padding bg-surface font-body">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className={cn('lg:col-span-7 space-y-6 transition-all duration-1000', introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
              <span className="text-sm font-bold text-primary uppercase tracking-widest font-heading">
                OUR CORE MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark font-heading">
                Humanitarian Assistance & Educational Support
              </h2>
              <div className="decorative-line" />
              <p className="text-muted text-lg leading-relaxed">
                Alhaji Sesay and Alhaji Production Home believe in creating a strong foundation for youth and families in Sierra Leone. We believe that development starts with clean water, education, and vocational skills.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary-dark shrink-0">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark font-heading">Ramadan Food Drives</h4>
                    <p className="text-sm text-muted">Distributing essential food supplies to over 5,000 families annually.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary-dark shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark font-heading">School Tuition Grants</h4>
                    <p className="text-sm text-muted">Paying direct student fees to support continued secondary and tertiary study.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn('lg:col-span-5 transition-all duration-1000 delay-200', introVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95')}>
              <Card className="bg-gradient-to-br from-primary-dark to-primary text-white border-none p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-2xl font-bold font-heading mb-4 text-secondary">Impact at a Glance</h3>
                
                <ul className="space-y-4 font-body">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/80">Students Supported</span>
                    <span className="font-bold text-secondary">500+</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/80">Families Feed Bags</span>
                    <span className="font-bold text-secondary">5,000+</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/80">Water Access Points</span>
                    <span className="font-bold text-secondary">15+</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-white/80">Communities Served</span>
                    <span className="font-bold text-secondary">30+</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Portal Section */}
      <section id="donate" ref={donateRef} className="section-padding bg-dark text-white relative overflow-hidden font-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-light to-primary-dark/40 z-0" />
        <div className="container-custom relative z-10 max-w-4xl">
          <SectionHeading
            title="Make a Donation"
            subtitle="Your financial contributions go directly to funding educational grants and community development projects."
            light
          />

          <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch transition-all duration-1000', donateVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
            
            {/* Method 1 */}
            <Card glass className="flex flex-col justify-between p-8 text-center border-white/10">
              <div>
                <div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 fill-current" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Direct Support</h3>
                <p className="text-white/70 font-body text-sm leading-relaxed mb-6">
                  Contact our operations center directly to set up school grant distributions or organize regional community aid projects.
                </p>
              </div>
              <Button href="/contact" variant="secondary" className="w-full justify-center">
                Contact Operations Center
              </Button>
            </Card>

            {/* Method 2 */}
            <Card glass className="flex flex-col justify-between p-8 text-center border-white/10">
              <div>
                <div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Inquire Wire Info</h3>
                <p className="text-white/70 font-body text-sm leading-relaxed mb-6">
                  For major organizational wire transfers, bank account verification, or local mobile money carrier information, speak with our finance manager.
                </p>
              </div>
              <Button href="mailto:donate@alhajiproductionhome.com" variant="outline" className="w-full justify-center text-white border-white/20 hover:bg-white/10">
                Email Finance Office
              </Button>
            </Card>

          </div>
        </div>
      </section>
    </>
  );
}
