export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  cover: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "modern-web-design-trends-2024",
    title: "Modern Web Design Trends Shaping 2024",
    description: "Explore the latest design trends that are revolutionizing the web in 2024.",
    date: "2024-01-15",
    author: "Sarah Johnson",
    tags: ["Design", "Trends", "Web Development"],
    cover: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=400&fit=crop",
    content: `
# Modern Web Design Trends Shaping 2024

The web design landscape is constantly evolving, and 2024 brings exciting new trends that are reshaping how we create digital experiences.

## 1. AI-Powered Personalization

Artificial intelligence is no longer just a buzzword. Modern websites are leveraging AI to create personalized experiences for each visitor, from content recommendations to adaptive interfaces that change based on user behavior.

## 2. Immersive 3D Experiences

WebGL and Three.js are making 3D web experiences more accessible than ever. We're seeing more websites incorporate immersive 3D elements that engage users without sacrificing performance.

## 3. Micro-interactions and Animations

Subtle animations and micro-interactions continue to be crucial for creating delightful user experiences. These small details make interfaces feel more responsive and alive.

## 4. Dark Mode as Default

Dark mode isn't just an option anymore—many designers are creating dark-first experiences that are easier on the eyes and save battery life on mobile devices.

## 5. Sustainable Web Design

With growing environmental concerns, sustainable web design practices are becoming essential. This includes optimizing assets, reducing server requests, and implementing efficient code.

## Conclusion

Staying ahead of design trends is crucial for creating modern, competitive web experiences. However, it's important to balance trends with timeless design principles and user needs.
    `,
  },
  {
    slug: "why-performance-matters",
    title: "Why Website Performance Matters More Than Ever",
    description: "Learn why optimizing your website's performance is crucial for business success.",
    date: "2024-01-10",
    author: "Michael Chen",
    tags: ["Performance", "SEO", "User Experience"],
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    content: `
# Why Website Performance Matters More Than Ever

In today's fast-paced digital world, website performance can make or break your business. Here's why it should be your top priority.

## The Impact on User Experience

Studies show that 53% of mobile users abandon sites that take longer than 3 seconds to load. Every second counts, and poor performance directly translates to lost revenue.

## SEO Benefits

Google's Core Web Vitals are now a ranking factor. Sites with better performance metrics rank higher in search results, leading to increased organic traffic.

## Key Metrics to Track

1. **First Contentful Paint (FCP)**: How quickly users see content
2. **Largest Contentful Paint (LCP)**: When the main content is visible
3. **Time to Interactive (TTI)**: When the page becomes fully interactive
4. **Cumulative Layout Shift (CLS)**: Visual stability of the page

## Optimization Strategies

- Implement lazy loading for images
- Minimize JavaScript bundles
- Use modern image formats (WebP, AVIF)
- Leverage browser caching
- Implement a Content Delivery Network (CDN)

## Business Impact

Companies that invest in performance optimization see:
- Higher conversion rates
- Better user engagement
- Reduced bounce rates
- Increased customer satisfaction

Don't let poor performance hold your business back. Invest in optimization today.
    `,
  },
  {
    slug: "building-accessible-websites",
    title: "Building Accessible Websites: A Complete Guide",
    description: "Learn how to create inclusive web experiences that work for everyone.",
    date: "2024-01-05",
    author: "Emily Rodriguez",
    tags: ["Accessibility", "Web Development", "UX"],
    cover: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=400&fit=crop",
    content: `
# Building Accessible Websites: A Complete Guide

Web accessibility isn't optional—it's essential. Here's how to create inclusive experiences that work for everyone.

## Why Accessibility Matters

- **Legal compliance**: Many countries require accessible websites
- **Larger audience**: 15% of the world's population has some form of disability
- **Better UX**: Accessibility improvements benefit all users
- **SEO benefits**: Many accessibility practices improve search rankings

## Key Accessibility Principles

### 1. Semantic HTML

Use proper HTML elements that convey meaning:
- \`<header>\`, \`<nav>\`, \`<main>\`, \`<footer>\`
- \`<button>\` for interactive elements
- \`<h1>\`-\`<h6>\` for proper heading hierarchy

### 2. Keyboard Navigation

Ensure all functionality is available via keyboard:
- Visible focus indicators
- Logical tab order
- Skip navigation links

### 3. Color Contrast

Maintain sufficient contrast ratios:
- 4.5:1 for normal text
- 3:1 for large text
- Don't rely solely on color to convey information

### 4. Alternative Text

Provide descriptive alt text for images:
- Describe the content and function
- Keep it concise but informative
- Use empty alt="" for decorative images

## Testing Tools

- WAVE Browser Extension
- axe DevTools
- Lighthouse Accessibility Audit
- Screen readers (NVDA, JAWS, VoiceOver)

## Conclusion

Accessibility is an ongoing process, not a one-time task. Regular testing and updates ensure your site remains accessible to all users.
    `,
  },
];
