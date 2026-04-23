'use client';

import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const ProgramGridSection: React.FC = () => {
  const programs = [
    {
      id: '1',
      title: 'Leadership Excellence',
      description: 'Develop executive leadership skills and strategic thinking capabilities.',
      duration: '12 weeks',
      level: 'Executive',
      category: 'Leadership',
      icon: '👔',
    },
    {
      id: '2',
      title: 'Technical Mastery',
      description: 'Stay current with the latest technologies and development practices.',
      duration: '8 weeks',
      level: 'Intermediate',
      category: 'Technical',
      icon: '💻',
    },
    {
      id: '3',
      title: 'Digital Transformation',
      description: 'Learn strategies to lead digital initiatives in your organization.',
      duration: '10 weeks',
      level: 'Intermediate',
      category: 'Digital',
      icon: '🚀',
    },
    {
      id: '4',
      title: 'Data & Analytics',
      description: 'Master data-driven decision making and advanced analytics.',
      duration: '6 weeks',
      level: 'Beginner',
      category: 'Analytics',
      icon: '📊',
    },
    {
      id: '5',
      title: 'Soft Skills Development',
      description: 'Enhance communication, collaboration, and interpersonal skills.',
      duration: '4 weeks',
      level: 'Beginner',
      category: 'Professional Development',
      icon: '🤝',
    },
    {
      id: '6',
      title: 'AI & Machine Learning',
      description: 'Understand AI/ML applications and implement them in business.',
      duration: '14 weeks',
      level: 'Advanced',
      category: 'Technology',
      icon: '🤖',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      case 'Executive':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="programs" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Programs"
          subtitle="Comprehensive learning solutions designed for every role and skill level"
        />

        {/* Programs Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} hover>
              <div className="space-y-4 h-full flex flex-col">
                {/* Icon and Title */}
                <div className="space-y-2">
                  <div className="text-4xl">{program.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm flex-grow">{program.description}</p>

                {/* Metadata */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  {/* Duration and Level */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">{program.duration}</span>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getLevelColor(program.level)}`}>
                      {program.level}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="inline-block">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {program.category}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Programs CTA */}
        <div className="mt-16 text-center">
          <Button variant="primary" size="lg">
            Explore All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};
