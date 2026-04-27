# Mohamed Aziz Aguir - SOC/CTI Engineer Portfolio

https://portfolio-nu-nine-97.vercel.app/

A modern, SOC dashboard-styled portfolio website showcasing cybersecurity expertise in Security Operations Center (SOC), Cyber Threat Intelligence (CTI), and DevSecOps.

## Features

### Design
- **SOC Dashboard Aesthetic**: Dark theme with cyan/blue/purple accents reminiscent of professional security dashboards
- **Animated Hero Section**: Terminal-style typing animation "Booting SOC Interface..."
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Smooth Animations**: Framer Motion animations for engaging interactions

### Sections
1. **Hero** - Eye-catching introduction with typing animation
2. **SOC Pipeline Flow** - Visual representation of security operations workflow
3. **Projects** - Real projects with descriptions, technologies, and achievements
4. **Experience** - Timeline of roles, projects, and accomplishments
5. **Skills Matrix** - Technical proficiencies with proficiency levels
6. **SOC Operations** - Security operations capabilities and metrics
7. **Cyber Threat Intelligence** - CTI capabilities and analysis focus
8. **Certifications** - Professional credentials and competencies
9. **Contact** - Easy ways to reach out

## Easy Customization

**Everything is in one file:** `lib/data.ts`

No need to edit components or styling. Just update the data file with:
- Your name, title, and bio
- Projects with descriptions and technologies
- Experience and achievements
- Skills and proficiency levels
- Contact information

See `CUSTOMIZATION_GUIDE.md` for detailed instructions.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Development
```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build & Deploy
```bash
pnpm run build
pnpm run start
```

### Deploy to Vercel
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy with one click

## Project Structure

```
/components
  ├── navbar.tsx                 # Navigation bar
  ├── hero.tsx                   # Hero section with typing animation
  ├── soc-pipeline.tsx           # SOC workflow visualization
  ├── projects-section.tsx       # Featured projects
  ├── experience-section.tsx     # Work experience timeline
  ├── skills-matrix.tsx          # Skills and proficiencies
  ├── soc-section.tsx            # SOC operations info
  ├── cti-section.tsx            # CTI capabilities
  ├── certifications-section.tsx # Professional certifications
  ├── contact-section.tsx        # Contact information
  ├── footer.tsx                 # Footer
  └── ...

/lib
  └── data.ts                    # All portfolio content (EDIT THIS FILE)

/app
  ├── layout.tsx                 # Root layout
  ├── page.tsx                   # Homepage
  └── globals.css                # Global styles

/public                          # Static assets
```

## Real Content

This portfolio showcases:
- **4 Real Projects** from academic, apprenticeship, and internship work
- **Real Experience** in SOC architecture, SOAR automation, and CTI platforms
- **Authentic Skills** in Wazuh, Splunk, Shuffle, Docker, Python, and more
- **Professional Positioning** as a cybersecurity engineering student with hands-on experience

## Customization Quick Start

### Update Hero Section
Edit `lib/data.ts`:
```typescript
hero: {
  headline: "Your custom headline",
  subheadline: "Your subtitle",
}
```

### Add a Project
Edit the `projects` array in `lib/data.ts`:
```typescript
{
  id: 5,
  title: "Your Project Name",
  category: "Project Type",
  period: "Duration",
  description: "What you built...",
  technologies: ["Tech1", "Tech2"],
  link: "https://github.com/yourlink",
  highlights: ["Achievement 1", "Achievement 2"],
}
```

### Update Contact Info
Edit in `lib/data.ts`:
```typescript
email: "your.email@example.com",
github: "https://github.com/yourprofile",
linkedin: "https://linkedin.com/in/yourprofile",
```

For more details, see `CUSTOMIZATION_GUIDE.md`.

## Color Scheme

- **Primary**: Cyan (`cyan-400`, `cyan-500`, `cyan-600`)
- **Secondary**: Purple, Blue, Green
- **Background**: Slate (`slate-950`, `slate-900`)
- **Accents**: Yellow, Red (for specific sections)

## Performance

- Fast load times (optimized with Next.js)
- Lightweight animations
- Optimized images and assets
- Production-ready build

## Deployment on Vercel

1. Create GitHub repository
2. Push this code to GitHub
3. Import repo in Vercel
4. Deploy (Vercel auto-detects Next.js)

## Support & Help

- Check existing components to understand structure
- All styling uses Tailwind CSS
- Animations use Framer Motion
- Data flows from `lib/data.ts` to components

## License

Personal portfolio - feel free to customize for your own use.

---

**Built with Vercel v0** | **Next.js 16** | **Tailwind CSS** | **Framer Motion**
