# Changelog

All notable changes to this project will be documented here.

## [1.3.0] - 2026-08-03

### Added — Progressive Web App
- **`manifest.json`** — Web App Manifest with `name`, `short_name`, `description`, `start_url: ./`, `scope: ./`, `display: standalone`, `orientation: portrait`, `lang: en`, `background_color: #0B1020`, `theme_color: #00D4FF`, and icons pointing to `assets/favicon.svg` and `assets/logo-icon.svg`.
- **`service-worker.js`** — versioned caches (`portfolio-static-v1.3.0`, `portfolio-html-v1.3.0`, `portfolio-runtime-v1.3.0`); pre-caches all critical assets on install; purges old caches on activate; uses **Cache First** for static assets and **Network First** for HTML navigations; falls back to `offline.html` when both fail.
- **`offline.html`** — on-brand offline fallback page with logo, friendly offline message, and **Retry** / **Return Home** buttons.
- **Custom install prompt** — a non-intrusive bottom toast that appears only when `beforeinstallprompt` fires. Has **Install** and **×** dismiss buttons; auto-hides after install or dismissal. Session-scoped (dismissed state resets on tab close).
- **Update notification toast** — appears when a new service worker is waiting. Offers **Update** (sends `SKIP_WAITING` and reloads) or **Later** (dismissed for the session). No forced reloads.
- **PWA toasts CSS** — `.pwa-toast`, `.pwa-toast-content`, `.pwa-btn` (primary/ghost), responsive layout, `prefers-reduced-motion` respected.
- **PWA logic in `js/main.js`** — registers service worker, handles `updatefound`, `controllerchange`, `beforeinstallprompt`, and `appinstalled` events; provides a clean API for showing/hiding toasts.

### Changed
- `index.html` `<head>` — the previously commented `<link rel="manifest">` is now active.
- `index.html` `<body>` — added two PWA toasts (install + update) and an SW registration script.
- `manifest.json`, `service-worker.js`, `offline.html` are now part of the shipped project (V1.2 only pre-wired the structure).

### How the Pieces Fit Together
- `index.html` declares the manifest → browser uses `manifest.json` for installability + home-screen icon.
- `js/main.js` registers `service-worker.js` on load.
- On first install, the SW pre-caches essentials (HTML, CSS, JS, all logos, all project thumbnails, manifest, offline page).
- On subsequent visits: static assets load instantly from cache; HTML always tries the network first, then falls back to the cached copy or `offline.html`.
- When you ship a new SW (bump `VERSION` at the top of `service-worker.js`), the next visit detects the update → the update toast appears → user taps **Update** → `SKIP_WAITING` → new SW takes control → page reloads once.

### Internal Testing (code-inspected)
- ✅ `manifest.json` is valid JSON, includes all required keys, references existing SVG icons
- ✅ `service-worker.js` registers without syntax errors; handlers for `install` / `activate` / `fetch` / `message` are all present
- ✅ `offline.html` reuses the same CSS variables, fonts, and logo as the main site
- ✅ Install toast only triggers on the `beforeinstallprompt` event (gracefully degrades on browsers that don't support it)
- ✅ Update toast only appears when a new SW is actually installed
- ✅ `js/main.js` registration is wrapped in `'serviceWorker' in navigator` (graceful degradation)
- ✅ No layout / color / typography / animation / section changes
- ✅ Dark mode, theme persistence, navigation, project filtering, contact form, responsive design, accessibility — all untouched

### Browser Support
| Browser | Install | Offline | Update toast |
|---|---|---|---|
| Chrome (desktop) | ✅ | ✅ | ✅ |
| Edge (desktop) | ✅ | ✅ | ✅ |
| Android Chrome | ✅ | ✅ | ✅ |
| Samsung Internet | ✅ | ✅ | ✅ |
| Firefox (desktop) | ❌ (no install) | ✅ | ✅ |
| Safari (iOS) | ✅ (Add to Home Screen) | ✅ | ✅ |

## [1.2.0] - 2026-08-03

### Added
- **PocketPilot — Student Budget Tracker** added as the new flagship project (first in the projects grid)
  - Category: **Progressive Web Application (PWA)**
  - Tech: HTML5, CSS3, JavaScript, PWA, Service Worker, LocalStorage, Chart.js, jsPDF
  - Live Demo & GitHub links use the placeholders `YOUR_LIVE_DEMO_LINK` and `YOUR_GITHUB_REPOSITORY_LINK`
  - Custom thumbnail: `assets/images/project-pocketpilot.svg`
- **"Latest Project" badge** on the PocketPilot card (subtle, non-flashy pill with star icon)
- **Flagship card styling** — soft cyan border + glow to highlight the latest project without dominating the grid
- New **"Web & PWA"** skills category containing: Progressive Web Apps, Service Workers, LocalStorage, Responsive Web Design, Offline-first Apps (all truthfully gained from PocketPilot)
- **Professional SVG logo system** for the personal brand
  - `assets/logo.svg` — full-color wordmark + monogram (default for nav and footer)
  - `assets/logo-dark.svg` — bright white wordmark optimized for dark surfaces
  - `assets/logo-light.svg` — dark wordmark optimized for light surfaces
  - `assets/logo-icon.svg` — square GP monogram for app icons / social avatars
  - `assets/favicon.svg` — minimal 32×32 favicon with green accent dot
- **Favicon** wired to `assets/favicon.svg` via `<link rel="icon">` + Apple touch icon
- **Logo** integrated in **navigation bar**, **loading screen**, and **footer** (replacing text branding)
- PWA-ready structure: `theme-color` meta, commented `<link rel="manifest">` placeholder, `apple-touch-icon` — so manifest.json / service-worker.js / offline page can be added in a future update without redesign

### Changed
- **Project order** updated to: PocketPilot ⭐, Logic Lab, ECE Toolkit, Microcontroller Hub, Python for Students, C Programming Hub, Attendance Tracker
- Skills grid expanded with the new "Web & PWA" category; existing categories (Programming, Electronics, Tools) kept intact
- Footer branding switched from text `<Ghanashyam />` to the SVG logo
- Footer copyright updated to read "Ghanashyam Pabbuleti. All Rights Reserved."
- HTML `<head>` gained `theme-color` and favicon link tags
- PWA placeholder filter kept: `Web Development` filter still shows PocketPilot (category: `web`)

### Removed
- Old text branding `<ECE/>` from the navigation bar
- Old text branding `<Ghanashyam/>` from the footer
- Old "Shyam" name in the footer copyright line

### Portfolio Review (this release)
- ✅ Broken links — none (PocketPilot uses approved placeholders; existing project links still resolve)
- ✅ Missing images — none (added `project-pocketpilot.svg`; existing 6 SVGs untouched)
- ✅ Placeholders — only `YOUR_LIVE_DEMO_LINK` / `YOUR_GITHUB_REPOSITORY_LINK` for PocketPilot, as requested
- ✅ Layout consistency — preserved; only additions, no redesign
- ✅ Dark + light mode — logo has dedicated dark/light variants; CSS variables unchanged
- ✅ Typography, spacing, hover effects, animations — untouched
- ✅ Navigation — all 7 nav links still functional
- ✅ Accessibility — `aria-label` on logo links, semantic HTML preserved
- ✅ Responsive layout — logo scales via `height` (auto width); no fixed pixel widths on layout
- ⚠️ No console errors expected; no external assets were added
- ✅ Performance — SVGs are hand-optimized, no embedded fonts, no raster images

## [1.1.0] - 2026-06-30

### Changed
- Replaced placeholder name "Your Name" with **Ghanashyam Pabbuleti**
- Updated hero title to clearly identify as **Diploma ECE – 2nd Year Student**
- Updated hero subtitle to **Web Developer | Electronics Enthusiast | IoT Learner**
- Removed profile photo and replaced with animated electronics-themed circuit orb visual
- Removed all fake "15+ Projects" / "10+ Technologies" / "5+ Certificates" stats
- Removed fake counter animations from hero
- Removed Java from Skills — only C, Python, HTML, CSS, JavaScript, SQL remain
- Removed fake "Smart Environment Monitoring (Future)" project
- Updated all 6 project links to use placeholder text `YOUR_PROJECT_LIVE_LINK` / `YOUR_GITHUB_REPOSITORY_LINK`
- Rewrote About section with authentic Diploma ECE narrative
- Removed B.Tech / Engineering Undergraduate references from Journey timeline
- Updated Journey timeline with 7 truthful milestones (Diploma start → Internship prep)
- Rewrote Ideology with 6 real personal principles (removed generic quotes)
- Removed **Certificates section** entirely (no certificates yet)
- Replaced **Resume section** with "Resume will be added soon" placeholder (ready for future PDF)
- Removed Discord from Contact section
- Updated all Contact social links to placeholder format (`YOUR_EMAIL`, `YOUR_GITHUB_PROFILE`, `YOUR_LINKEDIN_PROFILE`, `YOUR_INSTAGRAM_PROFILE`)
- Cleaned up footer branding: `<GhanaShyam />` and accurate copyright

### Added
- New `.hero-visual` CSS for circuit orb with rotating rings and orbiting nodes
- New `.circuit-bg` SVG background for hero section
- New `.about-intro` glass card styling for long-form about text
- New `.resume-placeholder` component for future resume display
- Hero `.hero-title` subtitle styling

### Removed
- Profile photo SVG and all related styles
- Certificate-related DOM elements and JS rendering
- Resume preview SVG and container layout
- Old hero image morphing animations

## [1.0.0] - 2026-06-30

### Added
- Initial release with placeholder content
- Hero section with typing animation and animated counters
- About, Skills, Projects, Certificates, Resume, Ideology, Journey, Contact sections
- Glassmorphism card design with blue/cyan accents
- Dark/Light theme toggle with localStorage persistence
- Project filtering by category
- Vertical timeline for journey milestones
- Contact form with simulated submission feedback
- Sticky navigation with smooth scrolling
- Mobile responsive hamburger menu
- Loading screen animation
- Floating particles effect in hero
- Back-to-top button
- SEO meta tags and semantic structure
- Comprehensive documentation (README, CHANGELOG, GUIDE)
