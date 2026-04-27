# Portfolio Customization Guide

Your new portfolio is fully customizable through a single data file. All content is centralized in `lib/data.ts` making it easy to update without touching component code.

## Quick Start

### 1. Update Personal Information
Edit `lib/data.ts` and update the top section:

```typescript
export const portfolioData = {
  name: "Your Name",
  title: "Your Job Title",
  bio: "Your bio here...",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  location: "Your Location",
  // ... rest of data
}
```

## Adding/Editing Content

### Add a New Project
In `lib/data.ts`, find the `projects` array and add a new object:

```typescript
{
  id: 5,
  title: "Your Project Title",
  description: "What your project does...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  link: "https://github.com/your-repo",
  highlights: ["Achievement 1", "Achievement 2"],
  image: "/projects/your-project.jpg",
}
```

### Add a New Certification
Find the `certifications` array:

```typescript
{
  id: 5,
  name: "Certification Name",
  issuer: "Issuing Organization",
  date: "2024",
  credentialId: "YOUR-ID-123",
  credentialUrl: "https://verify.credential.org",
}
```

### Add a New Award
Find the `awards` array:

```typescript
{
  id: 4,
  title: "Award Title",
  organization: "Organization Name",
  year: 2024,
  description: "What you accomplished...",
}
```

### Add Work Experience
Find the `experience` array:

```typescript
{
  id: 4,
  title: "Job Title",
  company: "Company Name",
  duration: "2023 - 2024",
  description: "What you did...",
  achievements: [
    "Achievement 1",
    "Achievement 2",
  ],
}
```

### Add Skills
Find the `skills` array:

```typescript
{ 
  category: "New Skill Category", 
  items: ["Skill 1", "Skill 2", "Skill 3"] 
}
```

## Customization Tips

### Colors
The portfolio uses a cybersecurity-themed dark design with these accent colors:
- **Primary:** Cyan/Blue (Navbar, CTAs, primary elements)
- **SOC Section:** Blue accent colors
- **CTI Section:** Purple accent colors
- **Certifications:** Yellow accent colors
- **Awards:** Red accent colors

To change colors, edit the Tailwind color classes in each component file:
- `components/navbar.tsx` - Navigation colors
- `components/soc-section.tsx` - SOC section colors
- `components/cti-section.tsx` - CTI section colors
- etc.

### Social Links
Update these in the navbar and footer components:
- `components/navbar.tsx` - Navigation links
- `components/footer.tsx` - Footer links
- `components/contact-section.tsx` - Contact section links

### Contact Information
Update in multiple places:
1. `lib/data.ts` - email and social links
2. `components/hero.tsx` - Email link in hero
3. `components/contact-section.tsx` - All contact details
4. `components/footer.tsx` - Footer links

### Remove Sections
To remove a section, delete its import and usage in `app/page.tsx`:

```typescript
// Remove the import
import { CtiSection } from '@/components/cti-section' // Delete this line

// Remove from the page
<CtiSection /> // Delete this line
```

## Project Structure

```
app/
  page.tsx              # Main portfolio page
  layout.tsx            # Metadata and layout
  globals.css           # Global styles

components/
  navbar.tsx            # Navigation
  hero.tsx              # Hero section
  projects-section.tsx  # Projects showcase
  soc-section.tsx       # SOC operations
  cti-section.tsx       # CTI analysis
  certifications-section.tsx  # Certs and skills
  awards-section.tsx    # Awards and experience
  contact-section.tsx   # Contact info
  footer.tsx            # Footer

lib/
  data.ts               # ALL YOUR CONTENT HERE
  utils.ts              # Utility functions
```

## Important Notes

- **All content is in `lib/data.ts`** - Update this file to change portfolio content
- **Colors are defined in component files** - Each section has its own color theme
- **Responsive design** - Works great on mobile, tablet, and desktop
- **Fast and optimized** - Built with Next.js 16 and Tailwind CSS

## Need Help?

If you need to make more advanced changes:
1. Component structure is in `components/` folder
2. Each component is self-contained and easy to modify
3. Uses Tailwind CSS for styling
4. Lucide React icons for icons

Happy building! 🚀
