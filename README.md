# Waste the Waist - Professional Weight Loss Center

A modern, responsive website for Waste the Waist, a professional weight loss center specializing in safe and effective medical interventions.

## Features

- **Modern Design**: Clean, professional design with smooth animations and responsive layout
- **TypeScript**: Fully typed React components for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component Library**: Reusable UI components with consistent design system
- **Accessible**: Built with accessibility best practices
- **Mobile-First**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 15.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Project Structure

```
src/
├── app/                   # Next.js app directory
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   │   ├── button.tsx   # Button component with variants
│   │   └── card.tsx     # Card component family
│   ├── About.tsx        # About section component
│   ├── Contact.tsx      # Contact form and info
│   ├── Footer.tsx       # Site footer
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services/interventions section
│   ├── Team.tsx         # Team members section
│   └── Testimonials.tsx # Customer testimonials
├── lib/                 # Utility functions
│   └── utils.ts         # Common utilities (cn function)
└── types/               # TypeScript type definitions
    └── index.ts         # Shared types and interfaces
```

## Components Overview

### Header
- Responsive navigation with mobile menu
- Sticky header with smooth scrolling
- Contact information display
- Call-to-action buttons

### Hero Section
- Compelling headline and value proposition
- Feature highlights with icons
- Call-to-action buttons
- Statistics display
- Visual placeholder for hero image

### About Section
- Mission statement and company overview
- Core values with icons
- Trust indicators
- Visual content area

### Team Section
- Individual team member cards
- Professional credentials
- Specialization badges
- Team values section

### Services Section
- Three main intervention types:
  - Gastric Sleeve Surgery
  - Gastric Balloon
  - Pharmaceutical Intervention
- Detailed feature lists
- Treatment process overview
- Clear call-to-actions

### Testimonials Section
- Customer success stories
- Star ratings
- Statistics and achievements
- Social proof elements

### Contact Section
- Contact form with validation
- Multiple contact methods
- Office information
- Quick action buttons
- Business hours

### Footer
- Company information
- Contact details
- Social media links
- Emergency contact banner
- Legal links

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`. The current theme uses:
- Primary: Blue color palette
- Secondary: Gray color palette

### Content
All content is easily customizable by modifying the component files:
- Team members: Update the `teamMembers` array in `Team.tsx`
- Services: Modify the `interventions` array in `Services.tsx`
- Testimonials: Edit the `testimonials` array in `Testimonials.tsx`

### Styling
- Global styles: `src/app/globals.css`
- Component-specific styles: Tailwind classes in each component
- Custom components: `src/components/ui/`

## Best Practices Implemented

### React Component Rules
- ✅ Functional components with TypeScript
- ✅ Proper hooks usage (useState, useEffect)
- ✅ Consistent prop naming conventions
- ✅ Props destructuring for readability

### State Management
- ✅ useState for local component state
- ✅ State kept close to where it's used
- ✅ Proper state updates with immutable patterns

### Component Structure
- ✅ One component per file
- ✅ Single Responsibility Principle
- ✅ Small, focused components
- ✅ Composition over inheritance

### Performance
- ✅ Optimized with Next.js
- ✅ Proper dependency arrays
- ✅ Image optimization ready
- ✅ Code splitting with dynamic imports

### Styling
- ✅ Consistent Tailwind utility classes
- ✅ Utility-first CSS approach
- ✅ Responsive design patterns
- ✅ Design system consistency

### Accessibility
- ✅ Semantic HTML structure
- ✅ Proper ARIA labels
- ✅ Keyboard navigation support
- ✅ Screen reader friendly

## Deployment

This project can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- Railway
- Digital Ocean
- AWS Amplify

## Support

For questions or support, please contact the development team or refer to the Next.js documentation at [nextjs.org](https://nextjs.org).

## License

This project is proprietary and confidential. All rights reserved.
