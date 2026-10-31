# Technology Stack Audit

Status: preliminary audit based on repository README files, source file names, and selected source inspections. This document distinguishes verified technologies from details that still need validation.

| Project | Verified technologies | Architecture | Remaining checks |
|---|---|---|---|
| ECE Toolkit | HTML5, CSS3, vanilla JavaScript | Static browser application | Inspect calculator logic and run smoke checks. |
| Python for Students | HTML5, CSS3, vanilla JavaScript | Static educational website | Inspect module content and interactive practice behaviour. |
| Microcontroller Hub | HTML5, CSS3, vanilla JavaScript | Multi-page static learning site | Verify code examples and navigation on mobile. |
| Attendance Tracker | HTML5, CSS3, JavaScript, PWA manifest/service worker | Client-side attendance application | Inspect authentication and storage implementation; do not describe it as server-backed unless verified. |
| C Programming Hub | HTML5, CSS3, JavaScript | Multi-page static learning site | Inspect tutorial pages and example interactions. |
| Logic Lab | HTML5, CSS3, JavaScript, service worker, browser storage | Static interactive learning platform | Run existing QA smoke test and verify all simulator modules. |
| AI Friend Bot | Python 3.13, discord.py, OpenRouter API, dotenv configuration | Discord bot | Inspect dependency versions, test suite, and secret handling without reading secret values. |
| PocketPilot / StudentBudgetTracker | HTML5, CSS3, JavaScript, Supabase JS client, Supabase Auth, PostgreSQL, RLS, service worker, Chart.js, jsPDF | Offline-first PWA with authenticated cloud synchronisation | Validate auth flows, migration, RLS policies, offline merge/conflict handling, and CI results. |
| Battery Health Checkup | C, POSIX shell, Termux:API, clang | Termux shell launcher compiles and runs embedded C monitor | Validate Termux:API prerequisites and test script on a compatible Android/Termux device. |
| ESP32 Secure Lock | Kotlin, Jetpack Compose, Material 3, Gradle, AndroidX Security Crypto, PBKDF2-HMAC-SHA256, Kotlin Coroutines | Native Android app | Check clean build/test status. ESP32 BLE authentication is future work, not a completed feature. |
| FLAMES | HTML5, CSS3, vanilla JavaScript, PWA manifest, service worker, Web Share API | Client-side PWA | Verify algorithm tests, offline behaviour, and accessibility. |
| AirCanvas | Kotlin, Android/Jetpack Compose, OkHttp WebSocket, ESP32 communication protocol | Android tablet drawing UI communicates with ESP32 OLED target | Verify ESP32 firmware repository/source is available and confirm end-to-end hardware test. OLED mapping is 128×64. |
| J.A.R.V.I.S. Telegram Bot | Python, Telegram Bot API library, Ollama, SQLite | Authenticated Telegram bot with persistent state | Confirm exact Telegram package/version from requirements and run tests. |

## Portfolio rebuild target stack

- Frontend: React + Vite.
- Styling: Tailwind CSS.
- Backend: Node.js + Express.
- Database: Supabase PostgreSQL.
- API style: REST.
- Authentication: only add portfolio admin authentication if an actual admin feature is required. Public contact submission should not require visitors to create accounts.
- Deployment provider: intentionally undecided until the release phase.

## Architecture constraints

- Keep the portfolio frontend independently buildable.
- Keep secrets exclusively in server-side environment variables.
- Use Supabase publishable/anon credentials only in browser code where appropriate; never expose service-role credentials.
- Validate and rate-limit public contact submissions on the server.
- Do not add a database or backend feature merely for appearance; each service must have a clear use.
- Preserve the existing portfolio content and assets during migration until replacements are tested.
