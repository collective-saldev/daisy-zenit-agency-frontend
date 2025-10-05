# Modern Agency Website

A beautiful, production-ready agency website built with React, Vite, Tailwind CSS, and daisyUI.

## ✨Features

### Pages
- **Home** - Hero section with animated gradient, services overview, featured work, process steps, testimonials
- **Services** - Detailed service offerings with interactive cards
- **Work** - Portfolio showcase with case studies
- **Work Detail** - Individual case study pages with full project details
- **Pricing** - Three-tier pricing plans with FAQ section
- **Blog** - Article listing with search functionality
- **Blog Detail** - Individual article pages with formatted content
- **Contact** - Contact form with validation and location information
- **404** - Custom not found page

### Components
- **Navbar** - Sticky navigation with scroll effects, mobile drawer menu
- **Hero** - Animated gradient background with floating orbs
- **ServiceCard** - Interactive service cards with hover effects
- **LogoMarquee** - Auto-scrolling client logo showcase
- **CaseCard** - Portfolio item cards with cover images
- **Process** - Step-by-step workflow visualization
- **Testimonials** - Carousel with client testimonials
- **Pricing** - Pricing tiers with feature lists
- **FAQ** - Collapsible accordion for common questions
- **ContactForm** - Validated contact form with toast notifications
- **Footer** - Complete footer with links and social media
- **ScrollToTop** - Automatic scroll to top on route change

### Design Features
- ✅ Modern glassmorphism effects
- ✅ Animated gradients and smooth transitions
- ✅ Responsive design (mobile-first)
- ✅ Dark/light theme support (daisyUI)
- ✅ Beautiful color palette with purple-blue gradients
- ✅ Consistent design system
- ✅ Framer Motion animations throughout
- ✅ SEO-optimized with proper meta tags

## 🚀Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **daisyUI** - Component library
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **React Hook Form + Zod** - Form validation

## 📁Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── LogoMarquee.tsx
│   ├── CaseCard.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── ScrollToTop.tsx
├── pages/
│   ├── Index.tsx
│   ├── Services.tsx
│   ├── Work.tsx
│   ├── WorkDetail.tsx
│   ├── PricingPage.tsx
│   ├── Blog.tsx
│   ├── BlogDetail.tsx
│   └── Contact.tsx
├── data/
│   ├── caseStudies.ts
│   └── blogPosts.ts
└── App.tsx
```

## 🎨Design System

The design system is defined in `src/index.css` and `tailwind.config.ts`:

### Colors
- **Primary**: Purple gradient (HSL 262 83% 58%)
- **Accent**: Blue accent (HSL 217 91% 60%)
- **Gradients**: Custom animated gradients for hero and cards

### Animations
- Gradient animations (gradient-x, gradient-y)
- Fade in/out effects
- Float animation for decorative elements
- Smooth transitions throughout

### Typography
- Clean, modern font hierarchy
- Text gradient effects for headings
- Proper contrast ratios for accessibility

## 🛠 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝Content Management

### Adding Case Studies
Edit `src/data/caseStudies.ts` to add new projects:

```typescript
{
  slug: "daisy-zenith-agency",
  title: "agency",
  client: "Client",
  year: 2025,
  services: ["Service 1", "Service 2"],
  tags: ["Tag1", "Tag2"],
  cover: "image-url",
  summary: "Brief description",
  challenge: "The challenge description",
  solution: "The solution description",
  outcomes: ["Outcome 1", "Outcome 2"],
  images: ["image1-url", "image2-url"]
}
```

### Adding Blog Posts
Edit `src/data/blogPosts.ts` to add new articles:

```typescript
{
  slug: "article-slug",
  title: "Article Title",
  description: "Brief description",
  date: "2025-10-05",
  author: "andi-nugroho",
  tags: ["Tag1", "Tag2"],
  cover: "image-url",
  content: "Full article content in markdown format"
}
```

## ✅Features Checklist

- [x] Sticky navbar with scroll effect
- [x] Animated hero with gradient background
- [x] Services grid with hover effects
- [x] Auto-scrolling logo marquee
- [x] Case studies with detail pages
- [x] Process/workflow steps
- [x] Testimonials carousel
- [x] Pricing plans with FAQ
- [x] Blog with search functionality
- [x] Contact form with validation
- [x] Responsive mobile design
- [x] Dark/light theme support
- [x] SEO optimization
- [x] Scroll to top on route change
- [x] Custom 404 page
- [x] Toast notifications
- [x] Smooth page transitions

## 🎯Performance

- Optimized images and assets
- Code splitting by route
- Lazy loading for images
- Minimal bundle size
- Fast page transitions

## 🔒Form Validation

Contact form includes:
- Required field validation
- Email format validation
- Budget selection
- Success/error toast notifications
- Form reset after submission

## 🌐SEO

- Proper meta tags in `index.html`
- Semantic HTML structure
- Heading hierarchy
- Alt text for images
- Mobile-friendly design

## 📱Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components are fully responsive with mobile-first design.

## 🎨Theme Customization

To change the theme, edit `tailwind.config.ts`:

```typescript
daisyui: {
  themes: ["light", "dark"], // or use custom themes
}
```

To customize colors, edit `src/index.css`:

```css
:root {
  --primary: [your-hsl-values];
  --accent: [your-hsl-values];
  /* ... other colors */
}
```

## 📞Contact Information

Update contact details in `src/pages/Contact.tsx`:
- Email address
- Phone number
- Office address
- Business hours

## 🚀Deployment

This project is ready to deploy on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## 🧑‍💻Author

**GitHub:** [@andi-nugroho](https://github.com/andi-nugroho)

---

## 📄License

This is a production-ready template for agency websites.

---

Built with ❤️ using React, Vite, Tailwind CSS, and daisyUI
