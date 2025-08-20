# 🛠️ How I Built This Portfolio

Welcome! This markdown explains the technologies, tools, and process I followed to build my personal portfolio website — designed to showcase my skills in web development, data analytics, and data science.

---

## 🚀 Stack & Technologies

| Area               | Tools & Libraries                            |
|--------------------|----------------------------------------------|
| Framework          | [Next.js](https://nextjs.org/) (App Router) |
| Language           | TypeScript                                   |
| Styling            | Tailwind CSS                                 |
| Animations         | Framer Motion                                |
| Theming            | next-themes (dark/light mode)                |
| Icons              | React Icons                                  |
| Forms              | Native HTML + [Zod](https://zod.dev/)        |
| Data Handling      | JSON files + type-safe fetchers              |
| Hosting            | [Vercel](https://vercel.com)                 |

---

## 📦 Project Folder Structure
.
├── public/
│   ├── images/                       # Profile, project, testimonial images
│   └── Shaikh_Bilal_Resume.pdf       # Resume download file
│
├── src/
│   ├── app/ or pages/                # Next.js routing (index.tsx, about.tsx, etc.)
│   │
│   ├── components/                   # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── MotionWrapper.tsx
│   │   └── ScrollToTop.tsx (optional)
│   │
│   ├── sections/                     # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   │
│   ├── data/                         # Dynamic JSON content
│   │   ├── projects.json
│   │   ├── skills.json
│   │   └── testimonials.json
│   │
│   ├── styles/
│   │   ├── globals.css               # Tailwind setup + global styles
│   │   └── theme.css                 # CSS variables for custom theming
│   │
│   ├── utils/                        # Utility helpers
│   │   ├── fetchProjects.ts
│   │   ├── formValidator.ts
│   │   └── fetchSkills.ts (optional)
│   │
│   └── types/                        # Global type declarations
│       ├── project.d.ts
│       ├── testimonial.d.ts (optional)
│       └── skill.d.ts (optional)

├── tailwind.config.js
├── tsconfig.json
├── package.json
└── how-i-built-this.md              # This file ✨
🧠 Key Features
Dark/light mode toggle with smooth transitions

Animated entry using Framer Motion on scroll

Typed validation using Zod for contact forms

Dynamic content: Projects, skills, testimonials loaded from JSON

Responsive & accessible: Mobile-first layout with ARIA labels

Clean code structure: Reusable components and sections

Hosted on Vercel with CI/CD and preview deployments

🧪 Testing the Form
The form is validated using Zod with custom rules and real-time feedback. It’s easily extendable to work with:

Formspree

EmailJS

Custom /api/contact route

✅ Future Enhancements
Blog section using MDX

Search & filtering for projects

Add animations on scroll progress

CMS integration (like Notion, Sanity)

🙌 Credits
Next.js

Tailwind CSS

Framer Motion

Zod

React Icons

Vercel

Thanks for checking this out!
Feel free to fork, use, or contribute to this portfolio.

Built by Shaikh Bilal 💻
