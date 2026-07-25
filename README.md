# Portfolio Website — Ghanashyam Pabbuleti

A modern, premium, fully responsive personal portfolio website for **Ghanashyam Pabbuleti**, a 2nd-year Diploma student in Electronics & Communication Engineering (ECE). The site showcases real projects, skills, learning journey, and ideology — designed for genuine internship and placement opportunities.

![Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Modern Dark Theme** with Blue/Cyan accents (Light mode toggle)
- 🪟 **Glassmorphism** card design
- ⌨️ **Typing Animation** in hero section
- 📊 **Animated Counters** for stats
- 🎬 **Smooth Scroll Animations** on viewport entry
- 🔍 **Project Filtering** by category (Web, Electronics, IoT, Programming)
- 📱 **Fully Responsive** — mobile, tablet, and desktop
- ⚡ **Fast Loading** with SVG placeholders and preconnect hints
- ♿ **Accessibility-friendly** with reduced-motion support
- 🚀 **SEO-friendly** semantic structure
- 🌐 **Cloudflare Pages** compatible

## 🗂️ Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles (dark/light theme, glassmorphism, responsive)
├── js/
│   └── main.js         # Logic (animations, filtering, theme toggle, form)
├── assets/
│   ├── images/         # SVG placeholders for projects, profile, resume
│   └── resume/         # Place your resume.pdf here
├── README.md
├── CHANGELOG.md
└── GUIDE.md            # Detailed documentation
```

## 🚀 Quick Start

1. **Open** `portfolio/index.html` in any modern browser — it works out of the box
2. **Replace placeholders** before going public:
   - In `index.html` → Contact section: `YOUR_EMAIL`, `YOUR_GITHUB_PROFILE`, `YOUR_LINKEDIN_PROFILE`, `YOUR_INSTAGRAM_PROFILE`
   - In `index.html` → Footer: same placeholders
   - In `js/main.js` → `PROJECTS` array: `YOUR_PROJECT_LIVE_LINK` and `YOUR_GITHUB_REPOSITORY_LINK` per project
3. **When ready**, add your resume PDF at `assets/resume/resume.pdf` and re-enable the Resume section (see GUIDE.md)
4. **When ready**, add certificates to the `CERTIFICATES` array in `js/main.js` and re-enable the Certificates section in `index.html`
5. **Deploy to Cloudflare Pages** by connecting the repo or uploading the folder

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

### Re-enable Certificates section (when you have them)
1. Edit `js/main.js` — populate the `CERTIFICATES` array.
2. Edit `index.html` — re-add the Certificates section before Resume. See GUIDE.md.

### Re-enable Resume section (when you have a PDF)
1. Place your PDF at `assets/resume/resume.pdf`
2. Edit `index.html` — replace the placeholder block with the resume container. See GUIDE.md.

### Add a certificate
Edit `js/main.js`, add to the `CERTIFICATES` array:
```js
{ title: 'Certificate Name', org: 'Organization', date: '2025', icon: 'fa-award' }
```

## 📜 License

MIT License — Free to use and modify.

## 📧 Contact

- **Email:** your.email@example.com
- **GitHub:** [github.com/yourusername](https://github.com/yourusername)
- **LinkedIn:** [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)