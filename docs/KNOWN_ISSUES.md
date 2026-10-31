# Known Issues & Verification Queue

This is an initial audit queue, not a claim that every listed item is a confirmed defect.

## Existing Portfolio repository

1. Current frontend is plain HTML/CSS/JavaScript rather than the agreed React/Vite/Tailwind stack.
2. Existing presentation uses a dark blue/cyan visual system; user requested a cleaner redesign because the current presentation feels too dark and cluttered.
3. Existing project data in `js/main.js` contains only seven projects and omits several approved projects.
4. PocketPilot's old portfolio description says LocalStorage/offline-first only and omits the now-documented Supabase authentication and cloud sync.
5. AirCanvas is not represented in the current seven-project list.
6. Contact form handler in `js/main.js` displays “Message sent successfully” and resets the form without making a network request. This is a misleading success message and must be replaced by a real backend submission or a clearly labelled non-functional contact method.
7. Existing PWA manifest and service worker need review during the Vite migration. Old cache names, asset paths, and service-worker scope must not be carried over blindly.
8. Existing assets include logo variants and seven project SVG illustrations. Their accuracy and usefulness for the new selected project list need review.

## Project-specific checks

### Attendance Tracker
- README advertises password-protected access, session handling, backup/restore, and offline PWA functionality.
- Inspect the actual auth/storage implementation and verify whether it is local-only or has any remote service. Do not imply cloud authentication without evidence.

### PocketPilot
- README documents Supabase email/password authentication, per-user cloud state, RLS, revision-checked sync, offline local state, and tests.
- Verify Supabase migration, RLS policies, authentication recovery, offline/online reconciliation, and CI/test status before writing detailed claims.
- Do not copy project Supabase credentials into portfolio backend configuration.

### AirCanvas
- Android source maps tablet drawing coordinates to a 128×64 OLED and sends commands over WebSocket to the ESP32.
- The repository inspected here contains the Android app source; end-to-end hardware verification and ESP32 firmware availability remain to be confirmed.
- Do not describe this as a projector system.

### ESP32 Secure Lock
- README states the current Android application protects itself with an application-level passcode.
- ESP32 Bluetooth authentication is future work and is explicitly not configured in the described release.
- Repository tree includes a large `app/build/` output tree and an unexpected root path named `Could`; review repository hygiene before featuring the repository. Do not delete files without review.

### Battery Health Checkup
- Shell wrapper embeds C source and invokes `termux-battery-status` at three-second intervals.
- Requires Termux and the Termux:API companion app. The portfolio should state prerequisites and avoid implying Android system battery-health diagnostics beyond the fields actually read.

### AI Friend Bot / J.A.R.V.I.S.
- Verify dependencies and test status.
- Never place Discord, Telegram, or AI-provider tokens in the portfolio.
- Describe bot functionality accurately without suggesting a public hosted bot unless a live instance is confirmed.

## Global verification queue

- Check all live demo URLs and GitHub links.
- Check mobile and tablet layouts.
- Check for exposed secrets and accidental credentials in public source (report findings without reproducing values).
- Inspect repository default branches and latest CI status.
- Run each project's available tests where a suitable environment exists.
- Verify screenshots and asset licensing/ownership.
- Verify project descriptions with the actual source, not only README claims.


## GitHub Actions status observed during audit (2026-10-31)

| Repository | Latest observed workflow status | Interpretation |
|---|---|---|
| Portfolio | Portfolio QA completed successfully for the audit-doc commit; Pages deployment was pending at the time checked. | Re-check Pages deployment before declaring the site published. |
| StudentBudgetTracker | Latest observed regression tests, QA, and Pages deployment completed successfully (2026-10-28). | Positive CI signal; does not replace a live manual test. |
| LogicLab | Latest observed QA and Pages deployment completed successfully (2026-08-21). | Positive historical CI signal; re-run after any project changes. |
| Attendance-Tracker | Latest observed Pages deployment completed successfully (2026-06-30). | Historical deployment signal; no current application test workflow was observed. |
| AI-Friend-Bot | No GitHub Actions runs returned in the checked first page. | Test locally or add CI later. |
| J.A.R.V.I.S. Telegram Bot | No GitHub Actions runs returned in the checked first page. | Inspect and run its existing tests locally or add CI later. |
| AirCanvas | No GitHub Actions runs returned in the checked first page. | Android build and hardware integration need dedicated verification. |
| ESP32 Secure Lock | No GitHub Actions runs returned in the checked first page. | Android build/test verification is still required. |

Workflow status is time-sensitive and must be checked again before release.
