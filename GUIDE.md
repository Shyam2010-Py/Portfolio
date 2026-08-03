# Portfolio Website — Developer Guide

A comprehensive guide to understanding, customizing, and maintaining the portfolio (currently **V1.2.0**).

---

## 📁 Folder Structure

```
portfolio/
├── index.html              # Entry point — all sections live here
├── offline.html            # PWA offline fallback page
├── manifest.json           # PWA web app manifest
├── service-worker.js       # PWA service worker (cache + offline + update)
├── css/
│   └── style.css           # All styling (theming, layout, animations, responsive, PWA toasts)
├── js/
│   └── main.js             # All interactivity (animations, filtering, form, theme, PWA registration)
├── assets/
│   ├── logo.svg            # Full-color wordmark + GP monogram (default for nav/footer/loader)
│   ├── logo-dark.svg       # White wordmark for dark surfaces
│   ├── logo-light.svg      # Dark wordmark for light surfaces
│   ├── logo-icon.svg       # Square GP monogram for app icons / social avatars
│   ├── favicon.svg         # Browser favicon + PWA icon
│   ├── images/             # SVG placeholders for project thumbnails
│   │   ├── project1.svg … project6.svg
│   │   └── project-pocketpilot.svg
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
| 1 | **Loader** | Loading screen during page init — now shows the SVG logo |
| 2 | **Navigation** | Sticky top nav with **SVG logo** + smooth scroll |
| 3 | **Hero** | Name, profession tags, intro, CTAs, circuit orb |
| 4 | **About** | Personal intro, education, focus, interests, approach |
| 5 | **Skills** | Programming, Electronics, **Web & PWA (new in V1.2)**, Tools |
| 6 | **Projects** | Filterable project cards; **PocketPilot is the flagship** |
| 7 | **Resume** | "Coming soon" placeholder (ready for future PDF) |
| 8 | **Ideology** | Personal principles |
| 9 | **Journey** | Vertical timeline of milestones |
| 10 | **Contact** | Email, social links, contact form |
| 11 | **Footer** | **SVG logo**, quick links, socials |
| 12 | **Back-to-Top** | Floating scroll button |

---

## 🧩 How the Code Works

### `index.html`
- Uses **semantic HTML5** tags (`<section>`, `<nav>`, `<footer>`)
- Loads Google Fonts (Inter + JetBrains Mono) and Font Awesome icons
- All sections have `id` attributes matching nav links for smooth scrolling
- Projects are injected dynamically by `main.js`
- `<head>` includes `theme-color`, `favicon.svg`, and a **commented-out `<link rel="manifest">`** placeholder — flipping the comment on activates PWA mode in a future update

### `css/style.css`
- **CSS Variables** in `:root` define the entire theme system — easy to customize colors
- `[data-theme="light"]` overrides variables for light mode
- **Glassmorphism**: `.glass` class uses `backdrop-filter: blur()` with semi-transparent backgrounds
- **Responsive** breakpoints: 968px (tablet), 768px (mobile), 480px (small mobile)
- **Reveal animation**: `.reveal` class hides elements, `.reveal.visible` shows them with transition
- **Mobile menu**: Positioned fixed, slides in from top via `.nav-menu.active`
- **Latest project**: `.project-card.is-latest` + `.latest-badge` highlight the flagship card without being flashy
- **Logos**: `.nav-logo-img`, `.loader-logo`, `.footer-logo` are sized via `height` with `width: auto` so they scale fluidly in both themes

### `js/main.js`
Wrapped in an IIFE to avoid polluting the global scope. Key features:

1. **Theme toggle** — saves preference to `localStorage`
2. **Mobile menu** — toggles `.active` class on hamburger and menu
3. **Sticky navbar** — adds `.scrolled` class when scrollY > 50
4. **Active nav link** — IntersectionObserver-like logic via scroll events
5. **Typing animation** — Recursive `setTimeout` appending characters
6. **Project rendering** — Builds cards from `PROJECTS` array; cards marked with `latest: true` get `.is-latest` + the "Latest Project" badge
7. **Filtering** — Re-renders with selected category
8. **Reveal on scroll** — `IntersectionObserver` adds `.visible` class
9. **Particles** — Generates 30 random-positioned floating dots in hero
10. **Form handler** — Simulates submission (replace with Formspree/EmailJS for production)
11. **Footer year** — Auto-updates with `new Date().getFullYear()`

---

## 🧠 Branding — The SVG Logo System (V1.2.0)

The portfolio uses an original **GP monogram** logo, hand-crafted as pure SVG (no fonts, no rasters, no external assets).

### Concept
A bold **"GP"** monogram sits inside a **rounded-square microchip outline** with three pins on the top edge and three on the bottom — a clear nod to DIP-style IC packages and your ECE background. A short PCB trace with a circular node extends out of the chip toward the wordmark, evoking a signal line.

### Design Elements & Meaning
| Element | Meaning |
|---|---|
| **GP monogram** | Your initials (Ghanashyam Pabbuleti) — readable and personal |
| **Rounded square chip body** | Microcontroller / integrated circuit — your ECE identity |
| **Top & bottom pins** | DIP-package IC legs — recognizable to electronics students |
| **Inner PCB trace rectangle** | Subtle PCB board outline |
| **Corner circuit nodes** (icon only) | Connection points on a PCB |
| **Right-edge trace + node** | A digital signal line leaving the chip and connecting to your name |
| **Green accent dot** (`#00E676`) | "Active signal" / status LED — represents real, working projects |
| **Cyan / indigo wordmark** (`#00D4FF` / `#4F46E5`) | Modern tech palette, matches the existing portfolio theme |

### Color Palette
| Token | Hex | Use |
|---|---|---|
| Primary | `#00D4FF` | Chip border, traces, dark-theme accents |
| Secondary | `#4F46E5` | Pins, secondary text, light-theme strokes |
| Dark | `#0B1020` | Chip body, dark-theme wordmark text |
| Light | `#FFFFFF` | Light-theme wordmark text |
| Accent | `#00E676` | Signal LED / accent dot |

### Where Each Variant Is Used
| File | Purpose |
|---|---|
| `assets/logo.svg` | **Default** — used in the **navigation bar**, **loader**, and **footer** |
| `assets/logo-dark.svg` | Drop-in replacement for dark-only contexts (e.g. dark cover images) |
| `assets/logo-light.svg` | Drop-in replacement for light-only contexts (e.g. print, light PDFs) |
| `assets/logo-icon.svg` | Square monogram — ideal for **GitHub social avatar**, app icon, Open Graph preview |
| `assets/favicon.svg` | Browser **favicon** and Apple touch icon (wired in `index.html`) |

### Swap the active logo
If you want to use a different variant somewhere (e.g. light variant in the footer), simply change the `src` of the corresponding `<img>` in `index.html`. CSS uses `height` + `width: auto`, so the file is fluid in any container.

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

### Mark a project as "Latest"
Add the `latest: true` flag — the card will automatically gain the cyan border, soft glow, and the "⭐ Latest Project" badge.

```js
{
  title: 'PocketPilot — Student Budget Tracker',
  // ...
  latest: true
}
```

### Re-enable Certificates (when you have them)
1. Edit `js/main.js` → populate the `CERTIFICATES` array.
2. Edit `index.html` → re-add the Certificates section before Resume. (V1.2 keeps it removed until you have real certificates.)

### Replace Placeholder Images
Replace files in `assets/images/` with your own. Recommended:
- Profile: 400×400px, square, JPG/PNG
- Project thumbnails: 600×400px, 3:2 aspect ratio
- Resume preview: 600×800px PNG screenshot

> 💡 All thumbnails in this project are **SVG** — scalable, tiny, and theme-friendly.

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

## 🧱 Progressive Web App (V1.3.0)

The portfolio is now a fully installable, offline-capable PWA. The existing UI, layout, colors, branding, animations, and features are 100% preserved.

### Files Added
| File | Role |
|---|---|
| `manifest.json` | Web App Manifest — install metadata, icons, theme colors, display mode |
| `service-worker.js` | Service Worker — caching, offline fallback, update flow |
| `offline.html` | Fallback page shown when navigation fails offline |

### Files Modified
| File | Change |
|---|---|
| `index.html` | Activated `<link rel="manifest">`; added PWA toasts (install + update) |
| `js/main.js` | Added SW registration, install-prompt handling, update-prompt flow |
| `css/style.css` | Added `.pwa-toast` styles (non-intrusive bottom toast) |
| `README.md`, `CHANGELOG.md`, `GUIDE.md` | V1.3.0 documentation |

### Cache Strategy

| Request type | Strategy | Cache |
|---|---|---|
| HTML navigations (`index.html`, `offline.html`) | **Network First** → fall back to cache → fall back to `offline.html` | `portfolio-html-v1.3.0` |
| Static assets (CSS, JS, SVG logos, project thumbnails) | **Cache First** → fall back to network | `portfolio-static-v1.3.0` |
| Future runtime fetches (e.g. images added later) | Stale-while-revalidate (via runtime cache) | `portfolio-runtime-v1.3.0` |

**Versioned cache names** ensure that whenever you ship a new version, the old caches are purged automatically on `activate`.

### Manifest Summary

```json
{
  "name": "Ghanashyam Portfolio",
  "short_name": "Portfolio",
  "description": "Professional portfolio of Ghanashyam Pabbuleti, Diploma in Electronics & Communication Engineering (ECE) – 2nd Year Student, showcasing web development, electronics, IoT, and student-focused projects.",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "orientation": "portrait",
  "lang": "en",
  "background_color": "#0B1020",
  "theme_color": "#00D4FF",
  "icons": [
    { "src": "assets/favicon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any" },
    { "src": "assets/logo-icon.svg", "sizes": "any", "type": "image/svg+xml", "purpose": "any maskable" }
  ]
}
```

### Installation Process

1. User visits the deployed site in a supported browser.
2. Browser fires `beforeinstallprompt`.
3. `js/main.js` captures the event and reveals the custom **"Install Portfolio"** toast at the bottom of the screen.
4. User clicks **Install** → `deferredInstallPrompt.prompt()` → browser shows its native install dialog.
5. User accepts → `appinstalled` fires → toast hides → app appears in their launcher / home screen.
6. If the user dismisses (×), the toast hides and won't re-appear in the same session.

### Update Flow

1. You bump `VERSION` at the top of `service-worker.js` and re-deploy.
2. On the user's next visit, the browser downloads the new SW in the background.
3. When the new SW is `installed` and the page already has a controller (i.e. it's a real update, not the first install), `updatefound` → `statechange` fires.
4. `js/main.js` reveals the **"New version available"** toast.
5. User clicks **Update** → `controller.postMessage({ type: 'SKIP_WAITING' })` → new SW activates → `controllerchange` fires → page reloads once.
6. User clicks **Later** → toast hides and won't re-appear in the same session.

### Offline Capabilities

- ✅ All static assets (HTML, CSS, JS, SVGs, project thumbnails) are pre-cached on first install
- ✅ After first visit, the site loads fully **with zero network** for the cached content
- ✅ HTML navigations fall back to the cached copy if the network is unavailable
- ✅ If neither the network nor the cache has the page, the user sees the on-brand `offline.html` with **Retry** and **Return Home** actions

### Service Worker Limitations
- The service worker **only intercepts same-origin requests** (the portfolio itself). CDN-hosted fonts (Google Fonts, Font Awesome) are intentionally left to the browser's normal HTTP cache so they always load fresh.
- HTTPS (or `localhost`) is required for SW registration. All recommended hosts (Cloudflare Pages, GitHub Pages, Netlify, Vercel) provide HTTPS automatically.
- iOS Safari has some PWA quirks: install uses "Add to Home Screen", and the theme color + status bar style is best tuned via Apple-specific meta tags if needed later.

### Testing PWA Locally

1. **Serve over HTTPS or `localhost`**: opening `index.html` directly via `file://` will not register a service worker. Use any of:
   ```bash
   # Python 3
   python3 -m http.server 8000
   # Node (npx)
   npx serve .
   # PHP
   php -S localhost:8000
   ```
2. Open `http://localhost:8000` in Chrome / Edge.
3. Open DevTools → **Application** tab:
   - **Manifest** — should show all fields from `manifest.json` with no errors
   - **Service Workers** — should show `service-worker.js` as **activated and running**
   - **Cache Storage** — should list `portfolio-static-v1.3.0` and `portfolio-html-v1.3.0`
4. Check the **Install** icon in the Chrome address bar (or wait for the custom toast).
5. Test offline: in DevTools → **Network** tab → set throttling to **Offline** → reload → `offline.html` should appear for unknown navigations; cached assets still render.
6. Test updates: bump `VERSION` in `service-worker.js` → reload → the update toast should appear.

### Browser Support

| Browser | Install | Offline | Update toast |
|---|---|---|---|
| Chrome (desktop) | ✅ | ✅ | ✅ |
| Edge (desktop) | ✅ | ✅ | ✅ |
| Android Chrome | ✅ | ✅ | ✅ |
| Samsung Internet | ✅ | ✅ | ✅ |
| Firefox | ❌ (no install prompt) | ✅ | ✅ |
| Safari (iOS) | ✅ (Add to Home Screen) | ✅ | ✅ |

Unsupported browsers gracefully degrade — the site works exactly as it did in V1.2.

---

## 🚀 Deployment

### Cloudflare Pages
1. Push to GitHub
2. Pages → Create project → Connect repo
3. Build settings:
   - **Build command:** _(leave empty)_
   - **Build output directory:** `/`
4. Deploy
5. **Service worker note**: Cloudflare Pages serves everything from the root, so `service-worker.js` is automatically available at `https://your-domain/service-worker.js`. No additional config needed.

### Other Static Hosts
The site is 100% static — works on:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Any static web server

> **Important:** service workers require HTTPS (or `localhost`). All hosts above provide HTTPS by default.

---

## ♿ Accessibility Features

- Semantic HTML5 elements
- `aria-label` on icon-only buttons and on the logo links
- `prefers-reduced-motion` respected
- Sufficient color contrast (WCAG AA)
- Keyboard-navigable navigation
- Focus styles on inputs
- Mobile-friendly touch targets (40px+)
- All logo variants are pure SVG (sharp at any zoom, including for users with low vision)

---

## ⚡ Performance

- No frameworks, no build step
- All assets are SVG (text + shapes) — tiny, scalable, and infinitely sharp
- No embedded fonts in SVGs (text uses system fallbacks declared in `font-family`)
- Font preconnect hints
- Lazy-loaded images (`loading="lazy"`)
- CSS variables (no runtime recalculation)
- Minimal DOM manipulation

---

## 🔮 Future Improvements

- [ ] Add blog/articles section
- [ ] Integrate real contact form backend
- [ ] Add internationalization (i18n)
- [ ] Add microdata/JSON-LD for richer SEO
- [ ] Add analytics (Plausible / Umami — privacy-friendly)
- [ ] Add a 404 page
- [ ] Add Open Graph preview image (can reuse `logo-icon.svg`)
- [ ] Pre-cache CDN fonts once they are self-hosted
- [ ] Add an "Update available" push for visible update moments (e.g. after navigation)

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

**Logo looks blurry?**  
The logo SVG is fully scalable — if it looks fuzzy, you may have a fixed `width`/`height` in CSS that is upscaling a too-small container. Use `height: 40px; width: auto;` (already in place).

---

## 📞 Support

Open an issue or contact via the portfolio's contact form.
