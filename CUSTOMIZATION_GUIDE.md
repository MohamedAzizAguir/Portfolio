# Portfolio Customization Guide

Welcome! This is your SOC dashboard portfolio. Everything is designed to be **super easy to customize** by editing one main file.

## Quick Start

All your portfolio content lives in **`lib/data.ts`**. This is the **only file** you need to edit to update your portfolio!

---

## What's Where

### Hero Section
Edit in `lib/data.ts`:
```typescript
name: "Your Name",
title: "Your Title",
bio: "Your bio...",
hero: {
  headline: "Your headline",
  subheadline: "Your subtitle",
}
```

### Real Projects
Edit the `projects` array in `lib/data.ts`:
```typescript
projects: [
  {
    id: 1,
    title: "Project Name",
    category: "Academic Project",
    period: "Nov 2024 – Present",
    description: "What you built and why...",
    technologies: ["Tech1", "Tech2"],
    link: "https://github.com/yourlink",
    highlights: [
      "Key achievement 1",
      "Key achievement 2",
    ],
  },
  // Add more projects here
]
```

### Experience Timeline
Edit the `experience` array in `lib/data.ts`:
```typescript
experience: [
  {
    id: 1,
    title: "Role Title",
    company: "Company Name",
    duration: "Start - End",
    description: "What you did...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
]
```

### Skills & Proficiencies
Edit in `lib/data.ts`:

1. **Skills by Category:**
```typescript
skills: [
  { 
    category: "SOC / SIEM", 
    items: ["Wazuh", "Splunk", ...] 
  },
]
```

2. **Skill Levels (0-100):**
```typescript
skillsMatrix: [
  { skill: "Wazuh / SIEM", level: 85 },
  { skill: "Incident Response", level: 80 },
  // Add more skills
]
```

### SOC Pipeline Flow
The pipeline stages are in `lib/data.ts`:
```typescript
socPipeline: [
  { stage: "Logs", icon: "📊", color: "from-blue-500 to-blue-600" },
  { stage: "SIEM", icon: "🔍", color: "from-purple-500 to-purple-600" },
  // Edit stages, icons, colors
]
```

### Certifications
Edit in `lib/data.ts`:
```typescript
certifications: [
  {
    id: 1,
    name: "Cert Name",
    issuer: "Issuer Name",
    date: "2024",
  },
]
```

### Contact Information
Edit in `lib/data.ts`:
```typescript
email: "your.email@example.com",
github: "https://github.com/yourusername",
linkedin: "https://linkedin.com/in/yourprofile",
location: "Your Location",
```

---

## Design Customization

### Colors
The portfolio uses a **cyan/blue/purple/green** color scheme. All colors are Tailwind classes:
- Primary: `cyan` (e.g., `cyan-400`, `cyan-500`)
- Secondary: `purple`, `blue`, `green`
- Background: `slate-950`, `slate-900`

To change colors, find and replace in relevant components:
- `cyan-400` → your color
- `cyan-500` → your color
- `cyan-600` → your color

### Fonts
The portfolio uses:
- **Headings:** `font-mono` (monospace, gives SOC dashboard feel)
- **Body:** Default sans-serif

To change, edit `app/globals.css` and `app/layout.tsx`

### Layout
Each section is a component in `/components`:
- `hero.tsx` - Hero section with typing animation
- `soc-pipeline.tsx` - Pipeline visualization
- `projects-section.tsx` - Your projects
- `experience-section.tsx` - Work experience
- `skills-matrix.tsx` - Skills and proficiencies
- `soc-section.tsx` - SOC stats
- `cti-section.tsx` - CTI stats
- `certifications-section.tsx` - Certifications
- `contact-section.tsx` - Contact info
- `footer.tsx` - Footer

---

## Adding New Sections

Want to add a new section? Here's how:

1. **Create a component** in `/components/my-section.tsx`
2. **Import it** in `app/page.tsx`
3. **Add it to the page** in the right order

Example:
```typescript
// components/my-section.tsx
export function MySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      {/* Your content */}
    </section>
  )
}

// app/page.tsx - Add import
import { MySection } from '@/components/my-section'

// Add to page
<MySection />
```

---

## Common Customizations

### Change Hero Typing Text
Edit `components/hero.tsx`:
```typescript
const fullText = "Your custom text..."
```

### Add More Projects
Just add to the `projects` array in `lib/data.ts`

### Change Section Colors
Each component has color classes. Change `cyan` to your color:
- From: `text-cyan-400`
- To: `text-blue-400`

### Remove a Section
1. Delete the component (e.g., `components/awards-section.tsx`)
2. Remove the import from `app/page.tsx`
3. Remove the component usage from the page

---

## Best Practices

✅ **DO:**
- Edit `lib/data.ts` for content changes
- Use the existing color scheme for consistency
- Keep descriptions concise but detailed
- Use real links to your GitHub/projects

❌ **DON'T:**
- Don't modify component files unless you want to change the design
- Don't remove imports unless you remove the component
- Don't use generic descriptions

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Manual Deployment
```bash
npm run build
npm run start
```

---

## Need Help?

- Check the component files to understand the structure
- All components use Tailwind CSS for styling
- Animations use Framer Motion
- Data flows from `lib/data.ts` to components

---

**That's it! Enjoy your portfolio.** 🚀
