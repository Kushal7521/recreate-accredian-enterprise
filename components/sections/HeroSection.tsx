'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Build the Skills
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Your Enterprise
              </span>
              <br />
              Needs to Win.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              India's most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams at scale — with measurable outcomes.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
              onClick={scrollToContact}
            >
              Schedule a Free Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-500 text-white hover:bg-white hover:bg-opacity-10"
            >
              See Platform Tour
            </Button>
          </div>

          {/* Quick Stats/Benefits */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-12 border-t border-gray-700">
            <div className="text-left">
              <p className="text-gray-300 text-sm font-semibold mb-1">🎓 IIT & IIM certified</p>
            </div>
            <div className="text-left">
              <p className="text-gray-300 text-sm font-semibold mb-1">⚡ Go live in 2 weeks</p>
            </div>
            <div className="text-left">
              <p className="text-gray-300 text-sm font-semibold mb-1">📊 Real-time analytics</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm">SCROLL</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
