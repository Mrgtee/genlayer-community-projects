GenLayer Ecosystem Projects

A merge-ready ecosystem directory for showcasing community-built products around GenLayer.

---

Overview

GenLayer has strong visibility around partners and core ecosystem components, but community-built products are currently distributed across links, posts, and conversations.

This project introduces a structured Community Projects Directory — a dedicated page that aggregates and presents ecosystem products in a clean, discoverable format.

It is designed to match the visual style and layout of the GenLayer website and can be integrated with minimal effort.

---

Live Demo

Deployed on Vercel:

https://genlayer-ecosystem-projects.vercel.app/ecosystem/projects

---

Problem

- Community projects are hard to discover in one place
- No centralized directory for ecosystem products
- Builders lack visibility
- Users cannot easily explore what is being built

---

Solution

A dedicated Ecosystem → Community Projects page that:

- Displays projects in a structured grid
- Includes logo, description, and external links
- Matches GenLayer’s design language
- Scales as more projects are added

---

Features

- Clean, GenLayer-style UI
- Responsive grid layout (1 / 2 / 3 columns)
- Project cards with:
  - Logo
  - Name
  - Description
  - External link
- Contribution-ready structure
- Lightweight and modular

---

Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide Icons

---

Project Structure

app/
  ecosystem/projects/       → Page entry

components/
  community-project-card.tsx
  site-header.tsx

data/
  community-projects.ts     → Static project registry

public/
  project-logos/            → Project logos

This structure is intentionally modular so it can be easily integrated into an existing codebase.

---

Integration Guide (For GenLayer Team)

This project is built as a standalone feature and can be merged into the main GenLayer site.

Steps:

1. Copy "/app/ecosystem/projects" into the main app router
2. Move "components/" into your shared components directory
3. Replace the mock header with the existing site navigation
4. Replace "community-projects.ts" with a dynamic data source (API or CMS)

Notes

- No heavy dependencies
- Fully responsive
- Designed to match existing ecosystem/partners page styling
- Easily extendable

---

Contributing: Add Your Project

Community projects can be added via Pull Request.

Steps:

1. Fork the repository
2. Open "data/community-projects.ts"
3. Add your project:

{
  name: "",
  slug: "",
  logo: "/project-logos/yourlogo.svg",
  description: "",
  website: "",
  domainLabel: ""
}

4. Add your logo to "/public/project-logos/"
5. Submit a Pull Request

---

Guidelines

- Keep descriptions short and clear
- Use SVG logos where possible
- Ensure links are valid
- Maintain consistent formatting

---

---

Author

Built as a contribution to the GenLayer ecosystem.

---

License

MIT
