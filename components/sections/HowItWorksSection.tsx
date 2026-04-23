'use client';

import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Needs Assessment',
      description: 'We start with a deep-dive audit of your team\'s skill gaps and strategic objectives. Our L&D consultants conduct structured interviews, skills benchmarking, and role-based gap analysis to map a precise learning agenda for your organization.',
      icon: '🔍',
    },
    {
      number: 2,
      title: 'Program Design',
      description: 'Custom learning paths are architected with your domain, culture, and timelines in mind. From curriculum selection to cohort composition and mentor matching — every program is built to your specifications, not off-the-shelf.',
      icon: '✏️',
    },
    {
      number: 3,
      title: 'Deployment & Onboarding',
      description: 'Seamless rollout with zero disruption to your team\'s workflow. White-glove onboarding, SSO integration, HRMS sync, and dedicated account management ensure a day-one-ready launch.',
      icon: '🚀',
    },
    {
      number: 4,
      title: 'Track & Optimize',
      description: 'Live dashboards surface progress, risks, and ROI in real time. Monthly business reviews, completion nudges, and adaptive content recommendations keep engagement high and learning sticky long after program end.',
      icon: '📈',
    },
  ];

  return (
    <section id="howitworks" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Live in 14 days. Measurable ROI in 90."
          subtitle="Our structured four-step methodology takes you from assessment to measurable outcomes without disrupting your business operations."
        />

        {/* Steps */}
        <div className="mt-16 space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {index % 2 === 0 ? (
                <>
                  {/* Content on Left for odd steps */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">{step.description}</p>
                  </div>

                  {/* Icon on Right */}
                  <div className="flex items-center justify-center">
                    <div className="text-7xl">{step.icon}</div>
                  </div>
                </>
              ) : (
                <>
                  {/* Icon on Left for even steps */}
                  <div className="flex items-center justify-center order-last md:order-first">
                    <div className="text-7xl">{step.icon}</div>
                  </div>

                  {/* Content on Right */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
