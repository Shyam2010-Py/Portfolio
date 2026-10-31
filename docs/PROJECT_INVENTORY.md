# Portfolio Project Inventory

Audit scope: selected projects approved for the portfolio redesign.
Repository owner: `Shyam2010-Py`.
Status: initial repository and README/source inspection; live demo health and final feature verification remain pending.

## ECE, Electronics & Embedded Systems

| Project | Repository | Verified description | Evidence / notes |
|---|---|---|---|
| ECE Toolkit | [ece-toolkit](https://github.com/Shyam2010-Py/ece-toolkit) | Browser-based ECE utilities: Ohm's Law calculator, resistor colour-code decoder, electronics unit converter, and attendance calculator. | README and repository files. Static HTML/CSS/JavaScript. |
| Microcontroller Hub | [microcontroller-hub](https://github.com/Shyam2010-Py/microcontroller-hub) | Learning platform covering ESP32 basics, sensors, example projects, and GPIO / communication references. | README and multi-page source tree. Static HTML/CSS/JavaScript. |
| Logic Lab | [LogicLab](https://github.com/Shyam2010-Py/LogicLab) | Interactive digital-electronics learning platform with number conversion, logic gates, truth tables, arithmetic, adders, flip-flops, MUX/DEMUX, encoders/decoders, notes, and quizzes. | README, source tree, and QA workflow files. Static HTML/CSS/JavaScript. |
| ESP32 Secure Lock | [esp32-secure-lock](https://github.com/Shyam2010-Py/esp32-secure-lock) | Native Android app that protects access to the app with a locally stored passcode. ESP32 Bluetooth authentication is described as future work, not a completed v1 feature. | README and Android/Gradle project files. Kotlin, Jetpack Compose, Gradle. |
| AirCanvas | [AirCanvas](https://github.com/Shyam2010-Py/AirCanvas) | Android drawing app sends drawing commands over WebSocket to an ESP32, which renders them on a 128×64 OLED display. Includes pen, eraser, line, rectangle, circle, clear, demo, and coordinate mapping. | README, MainActivity.kt, ESP32WebSocketClient.kt, CoordinateMapper.kt. Android/Kotlin/Jetpack Compose, OkHttp WebSocket, ESP32 firmware integration. **Not a projector project.** |

## Programming & Education

| Project | Repository | Verified description | Evidence / notes |
|---|---|---|---|
| Python for Students | [python-for-students](https://github.com/Shyam2010-Py/python-for-students) | Beginner Python learning site with eight modules, explanations, syntax, examples, outputs, and practice. | README and source tree. Static HTML/CSS/JavaScript. |
| C Programming Hub | [c-programming-hub](https://github.com/Shyam2010-Py/c-programming-hub) | C learning site covering fundamentals, control flow, functions, arrays, strings, pointers, file handling, examples, and practice. | README and multi-page source tree. Static HTML/CSS/JavaScript. |

## Web Development & Productivity

| Project | Repository | Verified description | Evidence / notes |
|---|---|---|---|
| Attendance Tracker | [Attendance-Tracker](https://github.com/Shyam2010-Py/Attendance-Tracker) | Student attendance management app with student records, attendance entry, percentage calculations, reports, backup/restore, authentication screens, and PWA/offline features. | README and source tree. HTML/CSS/JavaScript; storage/auth implementation and security model need deeper verification. |
| PocketPilot — Student Budget Tracker | [StudentBudgetTracker](https://github.com/Shyam2010-Py/StudentBudgetTracker) | Student budget PWA with expenses, goals, analytics, reports, PDF/CSV export, offline-first local state, Supabase email/password authentication, per-user cloud state, PostgreSQL, RLS, and revision-checked sync. | README, cloud-sync.js, supabase-config.js, SQL migration, service worker, and tests. HTML/CSS/JavaScript, Supabase Auth/PostgreSQL, PWA APIs, Chart.js, jsPDF. |

## Artificial Intelligence & Automation

| Project | Repository | Verified description | Evidence / notes |
|---|---|---|---|
| AI Friend Bot | [AI-Friend-Bot](https://github.com/Shyam2010-Py/AI-Friend-Bot) | Discord bot with AI chat through OpenRouter plus utility, server information, uptime, help, and moderation commands. | README, bot.py, requirements.txt. Python, discord.py, OpenRouter. |
| J.A.R.V.I.S. Telegram Bot | [jarvis-telegram-bot](https://github.com/Shyam2010-Py/jarvis-telegram-bot) | Text-based Telegram AI assistant using Ollama, owner-approved access, password authentication, SQLite persistence, conversation context, quotas, and admin tools. | README, bot.py, requirements.txt, tests.py. Python, Telegram bot library (confirm exact package in requirements), Ollama, SQLite. |

## Termux Projects

| Project | Repository | Verified description | Evidence / notes |
|---|---|---|---|
| Phone Temperature Checker / Battery Health Checkup | [Battery-Health-Checkup](https://github.com/Shyam2010-Py/Battery-Health-Checkup) | Termux utility reads battery temperature, charge level, charging status, and current draw every three seconds; displays session min/max/average readings. | README and executable shell wrapper with embedded C source. C, POSIX shell, Termux:API, clang. |

## Fun Projects

| Project | Repository | Verified description | Evidence / notes |
|---|---|---|---|
| FLAMES | [FLAMES](https://github.com/Shyam2010-Py/FLAMES) | Mobile-first implementation of the traditional FLAMES name game, with animated calculation, sharing, PWA/offline support, and client-side-only input processing. | README and source tree. HTML/CSS/JavaScript. |

## Excluded or untouched repositories

- `LearningHub`: exclude from portfolio; user reports unresolved errors. Do not delete repository.
- `ai-study-assistant`: exclude from portfolio.
- `raksha-bandhan-surprise`: exclude from portfolio.
- `AI-Assistant-`: exclude from portfolio.
- `memorycore-ai`: private; do not inspect, modify, or publish.
- `Shyam2010-Py`: leave unchanged.
- `Portfolio`: redesign target.

## Publication rules

1. Only the 13 selected projects above are candidates for portfolio display.
2. Do not imply planned features are already implemented.
3. Do not expose private repository details, API keys, tokens, personal data, or backend secrets.
4. Live demo URLs must be checked before being shown as working demos.
5. Mark any unverified build or feature status as `Needs verification`.
