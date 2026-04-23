import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'SOLUTIONS',
      links: ['Enterprise Learning', 'Custom Programs', 'Analytics Dashboard', 'HR Integrations', 'Certificates'],
    },
    {
      title: 'PROGRAMS',
      links: ['Data Science & AI', 'Product Management', 'Leadership', 'Business Analytics', 'Cloud Computing'],
    },
    {
      title: 'COMPANY',
      links: ['About Us', 'Careers', 'Blog', 'Press', 'Contact'],
    },
    {
      title: 'RESOURCES',
      links: ['Case Studies', 'Whitepapers', 'Webinars', 'L&D Playbook', 'API Docs'],
    },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-lg">Accredian ENTERPRISE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's most trusted enterprise learning platform. Upskill your workforce with programs from IITs, IIMs, and global universities.
            </p>
          </div>

          {/* Footer Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm uppercase tracking-widest mb-4 text-gray-300">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6">
              {[
                { name: 'Twitter', icon: 'tw' },
                { name: 'LinkedIn', icon: 'in' },
                { name: 'YouTube', icon: 'yt' },
                { name: 'Email', icon: '✉️' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-semibold text-sm"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright & Policies */}
            <div className="text-center md:text-right space-y-2">
              <p className="text-gray-400 text-sm">
                © {currentYear} Accredian. All rights reserved. Accredian is a registered trademark.
              </p>
              <div className="flex justify-center md:justify-end space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
