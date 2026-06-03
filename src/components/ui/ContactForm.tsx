'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Send, User, Mail, MessageSquare, FileText } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';

export default function ContactForm() {
  const { ref, isVisible } = useScrollAnimation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
    >
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Name */}
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
        <input
          type="text"
          placeholder="Your Name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-card text-dark placeholder:text-muted-light focus:border-primary transition-colors font-body"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
        <input
          type="email"
          placeholder="Your Email"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-card text-dark placeholder:text-muted-light focus:border-primary transition-colors font-body"
        />
      </div>

      {/* Subject */}
      <div className="relative">
        <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
        <input
          type="text"
          placeholder="Subject"
          value={formState.subject}
          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
          required
          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-card text-dark placeholder:text-muted-light focus:border-primary transition-colors font-body"
        />
      </div>

      {/* Message */}
      <div className="relative">
        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted" />
        <textarea
          placeholder="Your Message"
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          required
          rows={5}
          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-card text-dark placeholder:text-muted-light focus:border-primary transition-colors font-body resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full">
        {submitted ? (
          'Message Sent! ✓'
        ) : (
          <>
            Send Message <Send className="w-5 h-5" />
          </>
        )}
      </Button>

      {submitted && (
        <p className="text-center text-success font-semibold animate-fade-in">
          Thank you! We&apos;ll get back to you soon.
        </p>
      )}
    </form>
    </div>
  );
}
