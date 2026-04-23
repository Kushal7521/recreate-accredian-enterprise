'use client';

import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';

export const AcademicPartnersSection: React.FC = () => {
  const partners = [
    // IIT Partners
    { id: '1', name: 'IIT Delhi', type: 'IIT' },
    { id: '2', name: 'IIT Bombay', type: 'IIT' },
    { id: '3', name: 'IIT Kanpur', type: 'IIT' },
    { id: '4', name: 'IIT Madras', type: 'IIT' },
    { id: '5', name: 'IIT Roorkee', type: 'IIT' },
    
    // IIM Partners
    { id: '6', name: 'IIM Bangalore', type: 'IIM' },
    { id: '7', name: 'IIM Kozhikode', type: 'IIM' },
    { id: '8', name: 'IIM Lucknow', type: 'IIM' },
    
    // Global Partners
    { id: '9', name: 'Great Lakes', type: 'Global' },
    { id: '10', name: 'NUS Singapore', type: 'Global' },
    { id: '11', name: 'MIT xPRO', type: 'Global' },
    
    // Industry Partners
    { id: '12', name: 'Google', type: 'Industry' },
    { id: '13', name: 'Microsoft', type: 'Industry' },
    { id: '14', name: 'Amazon AWS', type: 'Industry' },
    { id: '15', name: 'IBM', type: 'Industry' },
    { id: '16', name: 'Tableau', type: 'Industry' },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'IIT':
        return 'bg-orange-50 border-orange-200';
      case 'IIM':
        return 'bg-blue-50 border-blue-200';
      case 'Global':
        return 'bg-green-50 border-green-200';
      case 'Industry':
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getTypeTextColor = (type: string) => {
    switch (type) {
      case 'IIT':
        return 'text-orange-700';
      case 'IIM':
        return 'text-blue-700';
      case 'Global':
        return 'text-green-700';
      case 'Industry':
        return 'text-purple-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <section id="partners" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Built on world-class institutions."
          subtitle="Academic excellence meets industry relevance. Every program on our platform carries the credential of a top-tier institution. No fluff. No self-certification. Real university partnerships, real accreditation."
        />

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <div>
            <p className="text-5xl font-bold text-blue-600">50+</p>
            <p className="text-lg text-gray-600 mt-2">Partner Institutions</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-teal-600">200+</p>
            <p className="text-lg text-gray-600 mt-2">Certified Programs</p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className={`border-2 rounded-lg p-4 flex flex-col items-center justify-center text-center h-32 transition-all duration-300 hover:shadow-md ${getTypeColor(partner.type)}`}
            >
              <div className={`text-sm font-bold ${getTypeTextColor(partner.type)} mb-2`}>
                {partner.type}
              </div>
              <div className="text-sm font-semibold text-gray-900">
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Academic excellence meets industry relevance.
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our programs are co-designed and certified by India's most prestigious academic institutions and global technology leaders. Every curriculum is built to bridge the gap between theoretical knowledge and industry demands, ensuring your teams are always one step ahead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
