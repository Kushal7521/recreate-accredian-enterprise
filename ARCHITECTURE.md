# Project Architecture & Code Organization

## 🏗️ Architecture Overview

This project follows a **component-driven, modular architecture** using Next.js 14 App Router pattern.

### Directory Structure Philosophy

```
app/              → Next.js App Router (routes, layouts, API)
components/       → Reusable React components
  ├── ui/        → Atomic UI components (Button, Card, Input)
  ├── common/    → Layout components (Navbar, Footer)
  └── sections/  → Page sections (Hero, Stats, etc.)
styles/           → Global CSS and Tailwind styles
types/            → TypeScript interfaces and types
public/           → Static assets (images, icons)
```

## 🎯 Component Hierarchy

```
Root Layout (app/layout.tsx)
├── Navbar (sticky, responsive)
├── Main Content (app/page.tsx)
│   ├── HeroSection
│   ├── StatsSection
│   ├── ProgramGridSection
│   ├── HowItWorksSection
│   └── ContactFormSection
└── Footer
```

## 📦 Component Categories

### UI Components (Reusable Primitives)
- **Button**: Variants (primary, secondary, outline, ghost), Sizes (sm, md, lg)
- **Card**: Wrapper component with optional hover effect
- **FormInput**: Form field with validation and error states

### Common Components (Layout)
- **Navbar**: Sticky header with mobile menu, smooth scroll navigation
- **Footer**: Multi-column footer with links and contact info
- **SectionHeader**: Reusable section title and subtitle

### Section Components (Page Sections)
- **HeroSection**: Hero banner with CTA buttons and stats preview
- **StatsSection**: Impact metrics with supporting features
- **ProgramGridSection**: 6-card grid of programs with filtering
- **HowItWorksSection**: 4-step process with detailed info
- **ContactFormSection**: Lead capture form with validation

## 🔄 Data Flow

### Form Submission Flow
```
User Input
    ↓
Client-side Validation (FormInput, ContactFormSection)
    ↓
POST /api/lead (Server)
    ↓
Server-side Validation
    ↓
Mock Response (Replace with DB/Email in production)
    ↓
Success/Error Response
    ↓
UI Update & User Feedback
```

## 🎨 Styling Strategy

### Tailwind CSS Approach
- **Utility-first**: All styling via Tailwind classes
- **Custom colors**: Extended in `tailwind.config.ts`
- **Responsive**: Mobile-first design with breakpoints
- **Dark mode ready**: Can be enabled in config

### Color System
```
Primary (Blue)    → Main CTAs, headers, focus states
Secondary (Teal)  → Alternate CTAs, accents
Accent (Orange)   → Highlights, special elements
Neutral (Gray)    → Text, backgrounds, borders
```

## 🔐 Type Safety

All components use TypeScript interfaces:
```ts
// UI Component Props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

// Form Data
interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: string;
  interest: string;
}

// API Response
interface LeadResponse {
  success: boolean;
  message: string;
  data?: LeadFormData;
}
```

## 🚀 Performance Optimizations

1. **Code Splitting**: Components load on demand
2. **Image Optimization**: Next.js Image component ready
3. **CSS-in-JS**: Tailwind for minimal CSS
4. **Lazy Loading**: Sections can use dynamic imports
5. **Next.js Optimizations**: Built-in bundle optimization

## 🔌 API Integration Pattern

### Current Implementation (Mock)
```ts
// app/api/lead/route.ts
POST /api/lead → Console log → Mock response
```

### Production Implementation Pattern
```ts
POST /api/lead
  → Validate input
  → Save to database
  → Send email notification
  → Trigger CRM sync
  → Return success response
```

## 📱 Responsive Design Pattern

All sections use this pattern:
```tsx
<section className="py-20 md:py-32">  {/* Padding scales with breakpoint */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  {/* Container with padding */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">  {/* Grid scales */}
      {/* Items */}
    </div>
  </div>
</section>
```

## 🧩 Component Composition Pattern

```tsx
// Section component structure
'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/common/SectionHeader';

export const SectionName: React.FC = () => {
  const [state, setState] = React.useState(...);

  const handleEvent = () => { ... };

  return (
    <section id="sectionid" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Title" subtitle="Subtitle" />
        {/* Content */}
      </div>
    </section>
  );
};
```

## 🌐 Accessibility Considerations

- Semantic HTML (section, nav, footer)
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliant
- Form labels associated with inputs

## 🔄 State Management

Currently using React hooks (useState). For larger apps, consider:
- Context API for shared state
- Zustand for simple state management
- Redux for complex state

## 📊 SEO & Meta Tags

Metadata configured in `app/layout.tsx`:
```ts
export const metadata: Metadata = {
  title: '...',
  description: '...',
  keywords: '...',
  openGraph: { ... },
};
```

## 🛠️ Development Workflow

1. **Create component** → Follow naming convention
2. **Define types** → Add interfaces to `types/index.ts`
3. **Write component** → Use functional components + hooks
4. **Add styles** → Use Tailwind classes
5. **Test responsiveness** → Chrome DevTools
6. **Export from index** → Update `components/index.ts`
7. **Import and use** → In page or other components

## 📝 Naming Conventions

- **Components**: PascalCase (HeroSection.tsx)
- **Files**: PascalCase for components, camelCase for utils
- **Props interfaces**: ComponentNameProps
- **Sections**: Use section id in component (id="hero", id="stats")
- **CSS classes**: kebab-case (Tailwind)
- **Variables**: camelCase

## 🔗 Import Aliases

```ts
// Use @ alias for cleaner imports
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/common/SectionHeader';
import type { LeadFormData } from '@/types/index';

// Instead of
import { Button } from '../../../components/ui/Button';
```

## 🚀 Deployment Readiness

- ✅ Type-safe with TypeScript
- ✅ Vercel-optimized (Next.js default)
- ✅ Environment variables support
- ✅ API routes ready
- ✅ Image optimization ready
- ✅ Mobile responsive
- ✅ SEO meta tags
- ✅ Production-ready code

## 📚 Extension Points

### Add Features
1. **Authentication**: NextAuth.js integration
2. **Database**: Prisma + PostgreSQL
3. **CMS**: Headless CMS (Contentful, Sanity)
4. **Analytics**: Vercel Analytics or GA
5. **Email**: SendGrid or Mailgun integration
6. **Payment**: Stripe integration

### Modify Behavior
1. **Theme**: Update `tailwind.config.ts`
2. **Animation**: Add in `styles/globals.css`
3. **Layout**: Modify spacing in sections
4. **Content**: Update arrays in section components

## 🎓 Learning Resources

For team members:
- Next.js routing: [Docs](https://nextjs.org/docs/app/building-your-application/routing)
- Tailwind components: [Documentation](https://tailwindcss.com/docs/installation)
- TypeScript: [Handbook](https://www.typescriptlang.org/docs/)
- React Hooks: [API Reference](https://react.dev/reference/react/hooks)
