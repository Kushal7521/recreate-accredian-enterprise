'use client';

import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/ui/Card';

export const ClientStoriesSection: React.FC = () => {
  const testimonials = [
    {
      id: '1',
      quote: 'Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team\'s velocity improved by 40%. The ROI is undeniable.',
      author: 'Priya Sharma',
      title: 'Chief People Officer',
      company: 'Razorpay',
      initials: 'PS',
    },
    {
      id: '2',
      quote: 'The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.',
      author: 'Vikram Nair',
      title: 'VP of Engineering',
      company: 'PhonePe',
      initials: 'VN',
    },
    {
      id: '3',
      quote: 'We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.',
      author: 'Ananya Krishnan',
      title: 'Head of Learning & Development',
      company: 'Infosys BPM',
      initials: 'AK',
    },
  ];

  return (
    <section id="stories" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Trusted by India's fastest-growing companies."
          subtitle="Hear from the L&D leaders and CHROs who transformed their organizations with Accredian Enterprise."
        />

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col space-y-6">
              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
