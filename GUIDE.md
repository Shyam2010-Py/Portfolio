# Portfolio Website - Developer Guide

A comprehensive guide to understanding, customizing, and maintaining the portfolio.

---

## 📁 Folder Structure

```
portfolio/
├── index.html              # Entry point — all sections live here
├── css/
│   └── style.css           # All styling (theming, layout, animations, responsive)
├── js/
│   └── main.js             # All interactivity (animations, filtering, form, theme)
├── assets/
│   ├── images/             # SVG placeholders for project thumbnails
│   │   └── project1-6.svg  # Project thumbnail placeholders
│   └── resume/
│       └── resume.pdf      # Your resume (add this file in the future)
├── README.md               # Quick overview
├── CHANGELOG.md            # Version history
└── GUIDE.md                # This file
```

---

## 🎨 Sections Overview

| # | Section | Purpose |
|---|---------|---------|
| 1 | **Loader** | Loading screen during page init |
| 2 | **Navigation** | Sticky top nav with smooth scroll |
| 3 | **Hero** | Name, profession tags, intro, CTAs, stats |
| 4 | **About** | Personal intro, education, objective, interests |
| 5 | **Skills** | Programming, Electronics, Tools (badges) |
| 6 | **Projects** | Filterable project cards |
| 7 | **Resume** | "Coming soon" placeholder (ready for future PDF) |
| 8 | **Ideology** | Personal principles |
| 10 | **Journey** | Vertical timeline of milestones |
| 11 | **Contact** | Email, social links, contact form |
| 12 | **Footer** | Copyright, quick links, socials |
| 13 | **Back-to-Top** | Floating scroll button |

---

## 🧩 How the Code Works

### `index.html`
- Uses **semantic HTML5** tags (`<section>`, `<nav>`, `<footer>`)
- Loads Google Fonts (Inter + JetBrains Mono) and Font Awesome icons
- All sections have `id` attributes matching nav links for smooth scrolling
- Projects are injected dynamically by `main.js`

### `css/style.css`
- **CSS Variables** in `:root` define the entire theme system — easy to customize colors
- `[data-theme="light"]` overrides variables for light mode
- **Glassmorphism**: `.glass` class uses `backdrop-filter: blur()` with semi-transparent backgrounds
- **Responsive** breakpoints: 968px (tablet), 768px (mobile), 480px (small mobile)
- **Reveal animation**: `.reveal` class hides elements, `.reveal.visible` shows them with transition
- **Mobile menu**: Positioned fixed, slides in from top via `.nav-menu.active`

### `js/main.js`
Wrapped in an IIFE to avoid polluting the global scope. Key features:

1. **Theme toggle** — saves preference to `localStorage`
2. **Mobile menu** — toggles `.active` class on hamburger and menu
3. **Sticky navbar** — adds `.scrolled` class when scrollY > 50
4. **Active nav link** — IntersectionObserver-like logic via scroll events
5. **Typing animation** — Recursive `setTimeout` appending characters
6. **Counter animation** — `requestAnimationFrame` smooth counting
7. **Project rendering** — Builds cards from `PROJECTS` array
8. **Filtering** — Re-renders with selected category
9. **Certificates rendering** — Builds cards from `CERTIFICATES` array
10. **Reveal on scroll** — `IntersectionObserver` adds `.visible` class
11. **Particles** — Generates 30 random-positioned floating dots in hero
12. **Form handler** — Simulates submission (replace with Formspree/EmailJS for production)
13. **Footer year** — Auto-updates with `new Date().getFullYear()`

---

## ✏️ Customization Cheat Sheet

### Change Name
`js/main.js`:
```js
const nameText = 'Your Name';
```
`index.html`:
```html
<title>Your Name | ECE Portfolio</title>
```

### Change Colors
`css/style.css` → `:root`:
```css
--accent: #06b6d4;          /* Main accent */
--accent-hover: #22d3ee;    /* Hover state */
--gradient: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
```

### Add a New Project
`js/main.js` → add to `PROJECTS`:
```js
{
  title: 'My New Project',
  desc: 'What it does.',
  tech: ['React', 'Node.js'],
  category: 'web',   // 'web' | 'electronics' | 'iot' | 'programming'
  image: 'assets/images/my-project.svg',
  live: 'https://example.com',
  repo: 'https://github.com/me/repo'
}
```

### Add a Certificate
`js/main.js` → add to `CERTIFICATES`:
```js
{ title: 'Course Name', org: 'Provider', date: '2025', icon: 'fa-award' }
```
Available icons: `fa-certificate`, `fa-award`, `fa-graduation-cap`, `fa-microchip`, `fa-code-branch` (any Font Awesome 6 icon).

### Replace Placeholder Images
Replace files in `assets/images/` with your own. Recommended:
- Profile: 400×400px, square, JPG/PNG
- Project thumbnails: 600×400px, 3:2 aspect ratio
- Resume preview: 600×800px PNG screenshot

### Connect Contact Form to Real Backend
In `js/main.js`, replace the form handler with one of:
- **[Formspree](https://formspree.io)** — easiest, no backend
- **[EmailJS](https://emailjs.com)** — sends via email client
- **Cloudflare Workers** — for Cloudflare Pages deployment

Example with Formspree:
```js
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const res = await fetch('https://formspree.io/f/YOUR_ID', {
        method: 'POST', body: data, headers: { 'Accept': 'application/json' }
    });
    formStatus.textContent = res.ok ? '✓ Sent!' : '✗ Failed.';
});
```

---

## 🚀 Deployment

### Cloudflare Pages
1. Push to GitHub
2. Pages → Create project → Connect repo
3. Build settings:
   - **Build command:** _(leave empty)_
   - **Build output directory:** `/`
4. Deploy

### Other Static Hosts
The site is 100% static — works on:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any static web server

---

## ♿ Accessibility Features

- Semantic HTML5 elements
- `aria-label` on icon-only buttons
- `prefers-reduced-motion` respected
- Sufficient color contrast (WCAG AA)
- Keyboard-navigable navigation
- Focus styles on inputs
- Mobile-friendly touch targets (40px+)

---

## ⚡ Performance

- No frameworks, no build step
- SVG placeholders (tiny, scalable)
- Font preconnect hints
- Lazy-loaded images (`loading="lazy"`)
- CSS variables (no runtime recalculation)
- Minimal DOM manipulation

---

## 🔮 Future Improvements

- [ ] Add blog/articles section
- [ ] Add dark/light theme with system preference detection
- [ ] Integrate real contact form backend
- [ ] Add PWA support (manifest + service worker)
- [ ] Add internationalization (i18n)
- [ ] Add microdata/JSON-LD for richer SEO
- [ ] Add analytics (Plausible / Umami — privacy-friendly)
- [ ] Add a 404 page

---

## 🐛 Troubleshooting

**Menu not closing on mobile?**  
Make sure nav links have the correct `href="#sectionId"`.

**Theme toggle not persisting?**  
Check browser localStorage is enabled.

**Reveal animations not firing?**  
Verify the `IntersectionObserver` browser support — it's supported in all modern browsers.

**Images not loading?**  
Check file paths match exactly (case-sensitive on Linux servers).

---

## 📞 Support

Open an issue or contact via the portfolio's contact form.