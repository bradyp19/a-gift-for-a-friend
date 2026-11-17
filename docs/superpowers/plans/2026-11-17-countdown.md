# Gift Countdown Implementation Plan

> Execute with superpowers:executing-plans, task by task.

**Goal:** Build the agreed personal countdown and preserve milestone commits in GitHub.
**Architecture:** Static HTML page, CSS transitions, JavaScript state machine and SVG pixel sprites. Time derives from the absolute target rather than decrementing a counter.
**Tech Stack:** HTML, CSS, browser JavaScript, Node built-in tests.
**Spec:** ../specs/2026-11-17-countdown-design.md

## Global Constraints
- Exact message and target from spec; no sound or replay control.
- No runtime dependencies; responsive and reduced-motion aware.

## Review Focus
- Timezone independence and zero boundary: unit tests.
- Returning visitor and unavailable localStorage: browser checks/code review.
- Mobile wrapping: browser viewport check.
- Reduced motion: immediate stable content, no loops.
- Background-tab time drift: recompute from Date.now on every update.

## Tasks
- [x] 1. Add `countdown.mjs` exporting `remaining(now)` and `TARGET`; test UTC target, one-day breakdown, fractional final second, and expiry. Commit.
- [x] 2. Add `index.html`, `styles.css`, `app.mjs`, `art.mjs`: intro, countdown, responsive layout, pixel sprites, silent bark, storage guard, reduced motion. Check in browser and commit.
- [x] 3. Review final implementation; document local use in README; run tests and syntax checks; commit. Create private GitHub repository and push when authenticated.

Verification: 4 Node tests pass; JS syntax checks pass. Live desktop intro and countdown inspected. Final independent review found text contrast and live announcement concerns; both corrected. Shell network and server binding are restricted, so remote commits were created through the GitHub connector.
