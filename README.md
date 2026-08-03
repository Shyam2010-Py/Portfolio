# Portfolio Website — Ghanashyam Pabbuleti

A modern, premium, fully responsive personal portfolio website for **Ghanashyam Pabbuleti**, a 2nd-year Diploma student in Electronics & Communication Engineering (ECE). The site showcases real projects, skills, learning journey, and ideology — designed for genuine internship and placement opportunities.

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.3.0-blue.svg)
![PWA](https://img.shields.io/badge/PWA-installable-00E676.svg)
![Offline](https://img.shields.io/badge/offline-ready-00D4FF.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Modern Dark Theme** with Blue/Cyan accents (Light mode toggle)
- 🪟 **Glassmorphism** card design
- 🧩 **Professional SVG Branding** — hand-crafted monogram logo (full-color / dark / light / icon / favicon variants)
- ⭐ **Flagship Project** — PocketPilot (PWA) highlighted with a "Latest Project" badge
- ⌨️ **Typing Animation** in hero section
- 🎬 **Smooth Scroll Animations** on viewport entry
- 🔍 **Project Filtering** by category (Web, Electronics, IoT, Programming)
- 📱 **Fully Responsive** — mobile, tablet, and desktop
- ⚡ **Fast Loading** with SVG-only assets, no raster images, preconnect hints
- ♿ **Accessibility-friendly** with reduced-motion support
- 🚀 **SEO-friendly** semantic structure
- 📲 **Installable PWA** — custom install prompt, home-screen launch, standalone display
- 🌐 **Offline-capable** — service worker caches essentials; dedicated offline page
- 🔄 **Update notifications** — new versions prompt before applying
- 🧱 **Cache strategy** — Cache First for static assets, Network First for HTML
- ☁️ **Cloudflare Pages / GitHub Pages** compatible (fully static)

## 🗂️ Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── offline.html            # PWA offline fallback page
├── manifest.json           # PWA web app manifest
├── service-worker.js       # PWA service worker (cache + offline)
├── css/
│   └── style.css           # All styles (dark/light theme, glassmorphism, responsive, PWA toasts)
├── js/
│   └── main.js             # Logic (animations, filtering, theme toggle, form, PWA registration)
├── assets/
│   ├── logo.svg            # Full-color wordmark + GP monogram (default)
│   ├── logo-dark.svg       # White wordmark variant for dark surfaces
│   ├── logo-light.svg      # Dark wordmark variant for light surfaces
│   ├── logo-icon.svg       # Square monogram for app icons / social avatars
│   ├── favicon.svg         # Browser favicon (also used as PWA icon)
│   ├── images/             # SVG project thumbnails
│   └── resume/             # Place your resume.pdf here
├── README.md
├── CHANGELOG.md
└── GUIDE.md                # Detailed documentation
```

## 🚀 Quick Start

1. **Open** `portfolio/index.html` in any modern browser — it works out of the box
2. **Replace placeholders** before going public:
   - In `js/main.js` → `PROJECTS[0]` (PocketPilot):
     - `live: 'YOUR_LIVE_DEMO_LINK'`
     - `repo: 'YOUR_GITHUB_REPOSITORY_LINK'`
3. **Service worker must be served over HTTPS** (or `localhost`) for browsers to register it. All major static hosts (Cloudflare Pages, GitHub Pages, Netlify, Vercel) provide HTTPS by default.
4. **PWA install**: open the site in Chrome / Edge / Android Chrome / Samsung Internet → a small "Install Portfolio" toast appears at the bottom → click **Install** to add it to your home screen / apps.
5. **When ready**, add your resume PDF at `assets/resume/resume.pdf` and re-enable the Resume section (see GUIDE.md).
6. **Deploy to Cloudflare Pages** by connecting the repo or uploading the folder.

## 🌐 Deploy to Cloudflare Pages

1. Push this folder to a GitHub repository
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect your repo
4. Build settings:
   - **Build command:** (leave empty)
   - **Build output:** `/` (root)
5. Deploy!

## ✏️ Customization

### Add a new project
Edit `js/main.js`, add to the `PROJECTS` array:
```js
{
  title: 'New Project',
  desc: 'Description here.',
  tech: ['HTML', 'CSS'],
  category: 'web',  // 'web' | 'electronics' | 'iot' | 'programming'
  image: 'assets/images/project.svg',
  live: 'YOUR_PROJECT_LIVE_LINK',
  repo: 'YOUR_GITHUB_REPOSITORY_LINK'
}
```

### Mark a project as the latest
Add `latest: true` to that project's entry in the `PROJECTS` array. The "Latest Project" badge + flagship card styling will apply automatically.

### Swap the logo
- The current default is `assets/logo.svg` (full-color wordmark).
- For dark-only surfaces, use `assets/logo-dark.svg`.
- For light-only surfaces, use `assets/logo-light.svg`.
- For app icons / social avatars, use `assets/logo-icon.svg` (square monogram).

### Re-enable Certificates section (when you have them)
1. Edit `js/main.js` — populate the `CERTIFICATES` array.
2. Edit `index.html` — re-add the Certificates section before Resume. See GUIDE.md.

### Re-enable Resume section (when you have a PDF)
1. Place your PDF at `assets/resume/resume.pdf`
2. Edit `index.html` — replace the placeholder block with the resume container. See GUIDE.md.

## 📜 License

MIT License — Free to use and modify.

## 📧 Contact

- **Email:** ghanashyampabbuleti7@gmail.com
- **GitHub:** [Shyam2010-Py](https://github.com/Shyam2010-Py)
- **LinkedIn:** [Ghanashyam Pabbuleti](https://www.linkedin.com/in/ghanashyam-pabbuleti-096781413)
- **Instagram:** [itsshyam.exe](https://www.instagram.com/itsshyam.exe)
