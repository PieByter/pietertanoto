# Product Requirements Document (PRD)

## Portfolio Website - pietertanoto.vercel.app

---

## 1. Product Overview

**Product Name:** Pieter Tanoto Personal Portfolio Website

**Platform:** Web (Next.js + React)

**Hosting:** Vercel (https://pietertanoto.vercel.app)

**Repository:** GitHub

**Purpose:** A single-page, interactive portfolio website to showcase projects, certifications, work experience, and provide contact information with smooth animations and clean, maintainable code.

---

## 2. Technical Stack

- **Framework:** Next.js (latest stable version)
- **UI Library:** React
- **Styling:** Tailwind CSS (recommended for easy customization)
- **Animations:** Framer Motion
- **Deployment:** Vercel
- **Version Control:** GitHub

---

## 3. Features & Components

### 3.1 Navigation Bar (Sticky/Fixed)

- **Position:** Top of page, fixed/sticky
- **Items:**
  - Home
  - Projects
  - About
  - Contact
- **Functionality:**
  - Smooth scroll to sections
  - Active section highlight
  - Light/Dark mode toggle button
  - Mobile responsive (hamburger menu)

---

### 3.2 Hero Section (About Me)

**Content:**

- Profile picture (circular or rounded)
- Name: "Pieter Tanoto"
- Tagline/Role (e.g., "Full Stack Developer | Software Engineer")
- Brief introduction (2-3 sentences)
- Social media icons with links:
  - LinkedIn
  - GitHub
  - Instagram
  - Twitter/X
  - TikTok
  - HackerRank
  - Email
  - Other platforms as needed

**Design:**

- Clean, modern layout
- Subtle animations (fade-in, slide-in)
- CTA button (e.g., "View My Work" → scrolls to Projects)

---

### 3.3 Toolbox Section

**Content:**

- Technologies/tools you use (e.g., JavaScript, React, Next.js, Python, etc.)

**Design:**

- **Auto-scrolling carousel** (left-to-right OR right-to-left)
- Infinite loop animation
- Icons/logos of technologies
- Pause on hover (optional)
- Clean, minimal design

**Implementation:**

- Easy to add/remove items via array/config file
- Responsive grid or horizontal scroll

---

### 3.4 Projects Section

**Content:**

- List of projects with:
  - Project title
  - Brief description
  - Technologies used
  - Live demo link (if available)
  - GitHub repository link
  - Project thumbnail/image

**Design:**

- **Grid layout** (2-3 columns on desktop, 1 on mobile)
- Card-based design
- Hover effects (lift, glow, scale)
- Filter/category tags (optional)
- "Load More" or "View All" button (if many projects)

**Data Structure:**

```javascript
projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Short description",
    image: "/path/to/image.jpg",
    tags: ["React", "Node.js"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
  },
  // ...
];
```

---

### 3.5 Certifications & Awards Section

**Content:**

- List of certifications/awards with:
  - Certificate name
  - Issuing organization
  - Date received
  - Badge/logo (optional)
  - Credential link (if available)

**Design:**

- **Timeline layout** OR **card grid**
- Animations on scroll (fade-in, slide-up)
- Easy to add new items via config/array

**Data Structure:**

```javascript
certifications = [
  {
    id: 1,
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "January 2024",
    credentialUrl: "https://...",
    logo: "/path/to/logo.png",
  },
  // ...
];
```

---

### 3.6 Work Experience Section

**Content:**

- List of work experiences with:
  - Company name
  - Job title
  - Duration (start - end date)
  - Key responsibilities/achievements (bullet points)
  - Company logo (optional)

**Design:**

- **Timeline layout** (vertical)
- Alternating left-right design (optional)
- Animations on scroll
- Clean typography

**Data Structure:**

```javascript
experiences = [
  {
    id: 1,
    company: "Company Name",
    role: "Software Engineer",
    duration: "Jan 2023 - Present",
    responsibilities: ["Developed feature X", "Improved performance by Y%"],
    logo: "/path/to/logo.png",
  },
  // ...
];
```

---

### 3.7 Contact Section

**Content:**

- Contact form with fields:
  - Name
  - Email
  - Phone number (optional)
  - Message
- Submit button
- Alternative contact methods:
  - Email address
  - Phone number
  - Social media links (repeated from hero)

**Design:**

- Clean, centered form
- Validation feedback
- Success/error messages
- Optional: Email service integration (EmailJS, Resend, etc.)

---

### 3.8 Footer (Bottom Navigation)

**Content:**

- Quick links (Home, Projects, About, Contact)
- Social media icons
- Copyright notice
- "Back to Top" button

**Design:**

- Minimal, clean
- Dark background (even in light mode)
- Sticky or static

---

## 4. Design Requirements

### 4.1 Theme

- **Color Scheme:** Modern, professional (suggest: Dark blue/purple gradient OR minimalist black/white)
- **Typography:** Clean, readable fonts (e.g., Inter, Poppins, Space Grotesk)
- **Light/Dark Mode:** Toggle switch in navbar
  - Smooth transition between modes
  - Persistent preference (localStorage)

### 4.2 Animations

- **Principles:**
  - Subtle, not overwhelming
  - Enhance UX, not distract
  - Performant (60fps)

- **Types:**
  - Fade-in on scroll (sections)
  - Slide-in from sides
  - Hover effects (cards, buttons)
  - Auto-scroll (toolbox)
  - Page transition animations
  - Loading states

- **Library:** Framer Motion (recommended) or CSS animations

### 4.3 Responsive Design

- **Breakpoints:**
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

- **Testing:** All sections must work seamlessly on all devices

---

## 5. Code Structure & Maintainability

### 5.1 Project Structure

```
/portfolio-website
├── /public
│   ├── /images
│   └── /icons
├── /src
│   ├── /app
│   │   ├── layout.js
│   │   └── page.js
│   ├── /components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Toolbox.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── /data
│   │   ├── projects.js
│   │   ├── certifications.js
│   │   ├── experience.js
│   │   └── socials.js
│   ├── /styles
│   └── /utils
├── tailwind.config.js
└── package.json
```

### 5.2 Data Management

- All content (projects, certifications, experience) stored in **separate config/data files**
- Easy to add/remove items without touching component code
- Example: `/data/projects.js` exports array of project objects

### 5.3 Code Quality

- **Clean Code:**
  - Reusable components
  - Clear variable/function names
  - Comments for complex logic
  - Consistent formatting (Prettier)

- **Performance:**
  - Lazy loading images
  - Optimized animations
  - Minimal bundle size

- **Best Practices:**
  - SEO optimization (meta tags, Open Graph)
  - Accessibility (ARIA labels, keyboard navigation)
  - Error handling

---

## 6. Deployment

### 6.1 GitHub Repository

- **Repository Name:** `portfolio-website` (or `pietertanoto-portfolio`)
- **Visibility:** Public or Private
- **Branches:**
  - `main` → production (auto-deploys to Vercel)
  - `dev` → development

### 6.2 Vercel Hosting

- **Domain:** pietertanoto.vercel.app
- **Auto-deployment:** Every push to `main` branch triggers deployment
- **Environment Variables:** If using email service or analytics

### 6.3 Custom Domain (Optional)

- If you have a custom domain, connect it in Vercel settings

---

## 7. Success Metrics

- **Load Time:** < 3 seconds on 3G connection
- **Performance Score:** Lighthouse score > 90
- **Accessibility Score:** > 95
- **Mobile Responsive:** 100% functional on all devices
- **Cross-browser:** Works on Chrome, Firefox, Safari, Edge

---

## 8. Future Enhancements (Optional)

- Blog section (using MDX)
- Testimonials/recommendations
- Download resume button
- Analytics integration (Google Analytics, Vercel Analytics)
- Multilingual support
- CMS integration (Sanity, Contentful) for easy content updates

---

## 9. Timeline Estimate

| Phase       | Tasks                                           | Duration       |
| ----------- | ----------------------------------------------- | -------------- |
| Setup       | Next.js project, GitHub repo, Vercel connection | 1 day          |
| Design      | Wireframes, color scheme, component design      | 2 days         |
| Development | Build all components                            | 5-7 days       |
| Content     | Add all data (projects, experience, etc.)       | 1-2 days       |
| Testing     | Responsive, cross-browser, performance          | 2 days         |
| Deployment  | Final push to production                        | 1 day          |
| **Total**   |                                                 | **12-15 days** |

---

## 10. Acceptance Criteria

✅ Single-page website with smooth scrolling  
✅ All sections implemented as per requirements  
✅ Light/Dark mode toggle working  
✅ Auto-scrolling toolbox  
✅ Responsive on all devices  
✅ All animations smooth and performant  
✅ Easy to add/edit content via data files  
✅ Deployed on Vercel at pietertanoto.vercel.app  
✅ Code pushed to GitHub repository  
✅ Clean, documented code

---

**Document Version:** 1.0  
**Last Updated:** April 6, 2026  
**Prepared For:** Pieter Tanoto

---

## Notes for Developer

1. **Start with data structure first** - Create all data files before building components
2. **Use Tailwind CSS** for rapid styling and easy customization
3. **Framer Motion** for animations - simpler than CSS for complex animations
4. **Component-driven** - Each section is a separate component
5. **Mobile-first** - Design for mobile, then scale up
6. **Test frequently** - Check responsiveness and animations at each step

Ready to start building? Let me know if you need any clarification! 🚀
