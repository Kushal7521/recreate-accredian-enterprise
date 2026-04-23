'use client';

import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const PlatformCapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      id: '1',
      title: 'World-Class Curriculum',
      description: 'Programs co-designed with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability.',
      icon: '📚',
    },
    {
      id: '2',
      title: 'Enterprise L&D Dashboard',
      description: 'Real-time analytics on learner progress, engagement metrics, and ROI reporting — all in one command center.',
      icon: '📊',
    },
    {
      id: '3',
      title: 'Expert Mentor Network',
      description: '1:1 live sessions with industry practitioners. Over 500 mentors across AI/ML, Data Science, Product, and Leadership.',
      icon: '👥',
    },
    {
      id: '4',
      title: 'Live Cohort Learning',
      description: 'Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%.',
      icon: '🎓',
      badge: 'Popular',
    },
    {
      id: '5',
      title: 'Custom Learning Paths',
      description: 'Tailor programs to your organization\'s skill gaps, industry context, and strategic goals. No one-size-fits-all.',
      icon: '🛤️',
    },
    {
      id: '6',
      title: 'Accredited Certificates',
      description: 'Globally recognized credentials from partner institutions. Verifiable, shareable, and career-defining.',
      icon: '🏅',
    },
    {
      id: '7',
      title: 'AI-Powered Personalization',
      description: 'Adaptive learning engine surfaces the right content at the right time, maximizing engagement and retention.',
      icon: '🤖',
    },
    {
      id: '8',
      title: 'Seamless HR Integration',
      description: 'Native integrations with Workday, SAP SuccessFactors, and major HRMS platforms for frictionless deployment.',
      icon: '🔗',
    },
  ];

  return (
    <section id="capabilities" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Everything your L&D team needs to scale."
          subtitle="Everything your L&D team needs to scale."
        />

        {/* Capabilities Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability) => (
            <Card key={capability.id} hover className="relative">
              {capability.badge && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                    {capability.badge}
                  </span>
                </div>
              )}
              
              <div className="space-y-4">
                {/* Icon */}
                <div className="text-5xl">{capability.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900">{capability.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>

                {/* Learn More Link */}
                <div className="pt-2">
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1">
                    <span>Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="primary" size="lg">
            Ready to see it all in action?
          </Button>
        </div>
      </div>
    </section>
  );
};
