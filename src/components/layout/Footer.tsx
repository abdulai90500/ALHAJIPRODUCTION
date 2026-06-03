'use client';

import Link from 'next/link';
import { navLinks } from '@/data/navigation';
import { contactInfo } from '@/data/sitedata';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden font-body">
      {/* Decorative Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* About Alhaji Production Home */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-wider block leading-none">ALHAJI</span>
              <span className="text-secondary font-semibold text-xs tracking-widest block mt-0.5 leading-none">PRODUCTION HOME</span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Empowering youth, providing clean water, developing agriculture, and lifting up communities across West Africa through sustainable philanthropy.
          </p>
          {/* Social Links */}
          <div className="flex gap-3 pt-2">
            <a
              href={contactInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={contactInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={contactInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={contactInfo.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-heading text-secondary mb-2">Quick Links</h3>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-secondary text-sm transition-colors duration-200 flex items-center gap-1"
                >
                  <span className="text-xs">→</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-heading text-secondary mb-2">Contact Us</h3>
          <ul className="space-y-3.5">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
              <span className="text-white/60 text-sm">{contactInfo.address}</span>
            </li>
            {contactInfo.phone.map((phone, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-light shrink-0" />
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-white/60 hover:text-secondary text-sm transition-colors">
                  {phone}
                </a>
              </li>
            ))}
            {contactInfo.email.map((email, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-light shrink-0" />
                <a href={`mailto:${email}`} className="text-white/60 hover:text-secondary text-sm transition-colors break-all">
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Action */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-heading text-secondary mb-2">Support Our Mission</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Your support changes lives. Join hands with us to build a better future.
          </p>
          <Link
            href="/philanthropy#donate"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-dark font-heading font-semibold hover:bg-secondary-light transition-all duration-300 shadow-lg shadow-secondary/15 hover:shadow-secondary/25 w-full justify-center"
          >
            <Heart className="w-4 h-4 fill-current" /> Donate Now
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-custom pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-white/40 text-xs">
          &copy; {currentYear} Alhaji Production Home. All Rights Reserved.
        </p>
        <p className="text-white/40 text-xs">
          Designed with ❤️ for community empowerment.
        </p>
      </div>
    </footer>
  );
}
