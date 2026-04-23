# Development Guide

## Project Setup Checklist

After cloning/creating this project, follow these steps:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Verify All Sections Are Working
- [ ] Hero Section loads and buttons are clickable
- [ ] Navigation bar is sticky and responsive
- [ ] All sections are accessible via anchor links
- [ ] Contact form validation works
- [ ] Form submission works (logs to console in dev)
- [ ] Footer displays correctly
- [ ] Mobile menu opens/closes properly

## Making Improvements

### Add New Section
1. Create a new file in `components/sections/`
2. Export component from `components/index.ts`
3. Import and use in `app/page.tsx`

Example:
```tsx
// components/sections/NewSection.tsx
'use client';

import React from 'react';
import { SectionHeader } from '@/components/common/SectionHeader';

export const NewSection: React.FC = () => {
  return (
    <section id="newsection" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="New Section" />
        {/* Your content */}
      </div>
    </section>
  );
};
```

### Customize Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  primary: '#new-color',
  secondary: '#new-color',
  accent: '#new-color',
}
```

### Add Images
1. Place images in `public/` folder
2. Use Next.js Image component:
```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority
/>
```

### Connect Real API for Lead Submission
Replace the mock implementation in `app/api/lead/route.ts`:

```ts
// Example with SendGrid
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  const body: LeadFormData = await request.json();

  try {
    await sgMail.send({
      to: 'sales@accredian.com',
      from: 'noreply@accredian.com',
      subject: `New Lead: ${body.name}`,
      html: `<p>Name: ${body.name}</p>...`,
    });

    // Save to database
    // await db.leads.create(body);

    return NextResponse.json({ success: true, message: '...' });
  } catch (error) {
    return NextResponse.json({ success: false, message: '...' }, { status: 500 });
  }
}
```

### Add Animation Effects
Use Tailwind CSS animations or add custom ones in `styles/globals.css`:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}
```

### Performance Optimization
1. Use Next.js Image component
2. Implement lazy loading for sections
3. Code splitting with dynamic imports
4. Use Vercel Analytics

Example:
```tsx
import dynamic from 'next/dynamic';

const ContactFormSection = dynamic(
  () => import('@/components/sections/ContactFormSection'),
  { loading: () => <div>Loading...</div> }
);
```

## Testing Responsive Design

Use Chrome DevTools:
1. Press F12 to open DevTools
2. Click responsive design mode (Ctrl+Shift+M)
3. Test at different breakpoints:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1024px

## Common Customizations

### Change Logo
Edit `components/common/Navbar.tsx` and `components/common/Footer.tsx`:
```tsx
<div className="w-8 h-8 bg-blue-600 rounded-lg">
  {/* Replace with your logo */}
  <img src="/logo.png" alt="Logo" />
</div>
```

### Update Navigation Links
Edit the `navLinks` array in `components/common/Navbar.tsx`

### Modify Program Categories
Edit the `programs` array in `components/sections/ProgramGridSection.tsx`

### Change Stats
Edit the `stats` array in `components/sections/StatsSection.tsx`

### Update Contact Info
Edit the contact information in `components/sections/ContactFormSection.tsx`

## Deployment Checklist

Before deploying to production:

- [ ] Update metadata in `app/layout.tsx`
- [ ] Replace mock API with real implementation
- [ ] Add environment variables to deployment platform
- [ ] Test all forms and submissions
- [ ] Verify all links work correctly
- [ ] Check mobile responsiveness
- [ ] Optimize images
- [ ] Test on actual devices
- [ ] Set up analytics/tracking
- [ ] Configure SEO and Open Graph tags

## Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [React Hooks](https://react.dev/reference/react)
- [Vercel Deployment](https://vercel.com/docs)

## Troubleshooting

**Styles not applying?**
- Make sure `globals.css` is imported in layout
- Check Tailwind config includes all directories
- Restart dev server

**Form not submitting?**
- Check browser console for errors
- Verify API route exists at `/api/lead`
- Test with Postman or similar

**Mobile menu not working?**
- Clear browser cache
- Check z-index values
- Verify mobile breakpoint (md:)

**Images not loading?**
- Ensure images are in `public/` folder
- Use correct paths without leading slash
- Check Image component configuration
