'use client';

import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/ui/ContactForm';
import { contactInfo } from '@/data/sitedata';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function ContactPage() {
  const { ref: detailsRef, isVisible: detailsVisible } = useScrollAnimation();

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our operations center in Freetown or send a direct inquiry to the founder."
      />

      <section className="section-padding bg-surface font-body">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: Contact details card panels */}
            <div
              ref={detailsRef}
              className={cn(
                'lg:col-span-5 space-y-6 transition-all duration-1000',
                detailsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              <div className="space-y-2">
                <span className="text-sm font-bold text-primary uppercase tracking-widest font-heading">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl font-bold text-dark font-heading">
                  Operations & Support
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Have questions about our Clean Water Factory, agricultural cooperatives, or want to make a donation inquiry? Contact our office.
                </p>
              </div>

              {/* Cards details */}
              <div className="space-y-4">
                {/* Phone */}
                <Card padding="sm" className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark font-heading text-sm">Call Our Office</h4>
                    {contactInfo.phone.map((phone, idx) => (
                      <a key={idx} href={`tel:${phone.replace(/\s+/g, '')}`} className="text-muted text-xs block hover:text-primary transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </Card>

                {/* Email */}
                <Card padding="sm" className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark font-heading text-sm">Email Inquiries</h4>
                    {contactInfo.email.map((email, idx) => (
                      <a key={idx} href={`mailto:${email}`} className="text-muted text-xs block hover:text-primary transition-colors">
                        {email}
                      </a>
                    ))}
                  </div>
                </Card>

                {/* Address */}
                <Card padding="sm" className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark font-heading text-sm">Main Office</h4>
                    <p className="text-muted text-xs">{contactInfo.address}</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Column: Contact form card */}
            <div className="lg:col-span-7">
              <Card className="p-8 h-full bg-white border border-border shadow-md">
                <h3 className="text-xl font-bold font-heading text-dark mb-6">Send Us a Message</h3>
                <ContactForm />
              </Card>
            </div>

          </div>

          {/* Google Maps Container */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-border relative h-[450px]">
            <iframe
              src={contactInfo.mapUrl}
              className="absolute inset-0 w-full h-full border-none"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alhaji Production Home Office Location"
            />
          </div>

        </div>
      </section>
    </>
  );
}
