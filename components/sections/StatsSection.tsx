'use client';

import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/ui/Card';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '500+',
      label: 'Enterprise Clients',
      description: 'Organizations trust Accredian',
    },
    {
      value: '100K+',
      label: 'Learners Upskilled',
      description: 'Professionals transformed',
    },
    {
      value: '95%',
      label: 'Satisfaction Rate',
      description: 'Learner satisfaction score',
    },
    {
      value: '200+',
      label: 'Curated Programs',
      description: 'Across 15+ domains',
    },
    {
      value: '94%',
      label: 'Completion Rate',
      description: 'Industry-leading outcome',
    },
    {
      value: '50+',
      label: 'University Partners',
      description: 'IITs, IIMs & global institutions',
    },
  ];

  return (
    <section id="stats" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="The platform enterprises trust"
          subtitle=""
        />

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-blue-600">{stat.value}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{stat.label}</h3>
                  <p className="text-sm text-gray-600 mt-2">{stat.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
