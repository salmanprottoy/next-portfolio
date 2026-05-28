# Next.js Portfolio Template

A modern, glassmorphism-styled portfolio template built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features dark/light mode, animated backgrounds, sticky navigation, and responsive design.

## ✨ What's Included

- **Dark / Light Mode Toggle** — Next Themes with animated sun/moon icon
- **Interactive Particle Background** — Canvas-based with mouse attraction
- **Glassmorphism UI** — Frosted glass cards, gradients, and glow effects
- **Sticky Header** — Smooth-scroll nav with active section highlighting
- **Responsive Design** — Mobile-first with hamburger menu
- **SEO Ready** — Dynamic sitemap, robots.txt, JSON-LD schema, Open Graph
- **Accessibility** — ARIA labels, keyboard navigation, semantic HTML

## 🚀 Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/salmanprottoy/next-portfolio.git my-portfolio
cd my-portfolio
```

### 2. Install dependencies

```bash
yarn install
# or
npm install
```

### 3. Copy the environment file

```bash
cp example.env .env.local
```

Edit `.env.local` if you need:
- `NEXT_PUBLIC_S3_BASE_URL` — for hosting your profile image on a CDN
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — for Google Analytics

### 4. Customize your data

**Open `app/data/portfolio.config.ts`** and replace the placeholder values with your own:

```typescript
export const siteConfig = {
  fullName: "Your Full Name",
  shortName: "YN",
  defaultTitle: "Your Name - Job Title",
  // ...
};
```

Each section has its own array — `Experience`, `Educations`, `Skills`, `Projects`, etc. Just edit the strings. **You do not need to touch any components.**

### 5. Add your profile image

Option A — **Local**: Replace `public/favicon.svg` with your own image and update the fallback in `page.tsx`.

Option B — **CDN / S3**: Set `NEXT_PUBLIC_S3_BASE_URL` in `.env.local` and upload your image to `/images/yourname.jpg`.

### 6. Run the dev server

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 7. Build for production

```bash
yarn build
# or
npm run build
```

## 📁 Where to Edit What

| You want to change... | Go to... |
|---|---|
| Name, title, SEO meta | `app/data/portfolio.config.ts` → `siteConfig` |
| Hero text & badges | `app/data/portfolio.config.ts` → `heroConfig` |
| About paragraphs | `app/data/portfolio.config.ts` → `AboutMe` |
| Work experience | `app/data/portfolio.config.ts` → `Experience` |
| Education | `app/data/portfolio.config.ts` → `Educations` |
| Skills | `app/data/portfolio.config.ts` → `Skills` |
| Research / Publications | `app/data/portfolio.config.ts` → `ResearchExperience`, `Publications` |
| Honors & Awards | `app/data/portfolio.config.ts` → `HonorsAndAwards` |
| Extra-Curricular | `app/data/portfolio.config.ts` → `ExtraCurricular` |
| Projects | `app/data/projects.ts` |
| Social links | `app/data/portfolio.config.ts` → `socialMedia` |
| Resume URL | `app/data/portfolio.config.ts` → `resume` |
| Contact email / phone | `app/data/portfolio.config.ts` → `contact` |
| Colors / Theme | `app/globals.css` (CSS variables) & `tailwind.config.ts` |
| Section order | `app/page.tsx` (move `<Section id="...">` blocks) |

## 🎨 Customization Tips

### Change the primary color

Edit `app/globals.css`:

```css
:root {
  --primary: 175 70% 45%; /* Hue Saturation Lightness */
}
```

### Change fonts

Edit `app/layout.tsx` and `tailwind.config.ts`:

```tsx
import { Inter, JetBrains_Mono } from "next/font/google";
```

### Hide a section

Simply remove (or comment out) the corresponding `<Section id="...">` block in `app/page.tsx`.

### Add a new section

1. Add your data array to `app/data/portfolio.config.ts`
2. Re-export it from `app/data/Data.ts`
3. Create a new section in `app/page.tsx` following the existing pattern
4. (Optional) Add a nav link in `components/organisms/Header.tsx`

## 🌐 Deployment

### Vercel (Recommended)

Click the button below or push to a repo connected to Vercel.

### GitHub Pages

The project includes a CI/CD workflow in `.github/workflows/ci-cd.yml`. Set `NEXT_PUBLIC_BASE_PATH` in your repository secrets if your site lives under a sub-path.

### Docker

```bash
docker-compose up -d
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Analytics**: Vercel Analytics (optional)
- **Error Tracking**: Sentry (optional)

## 🛡️ Scripts

```bash
yarn dev          # Development server
yarn build        # Production build
yarn lint         # ESLint check
yarn security:check  # npm audit + outdated packages
```

## 📄 License

MIT — feel free to use this for your own portfolio. A credit link is appreciated but not required.

## 🙋 Need Help?

1. Check the **"Where to Edit What"** table above
2. Make sure you only edited `app/data/portfolio.config.ts` and `app/data/projects.ts`
3. Run `yarn build` to catch any type errors
4. Open an issue if something breaks
