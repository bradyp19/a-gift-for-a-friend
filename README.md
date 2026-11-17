# A gift for a friend

A tiny countdown for Angie, with mango boba and a very encouraging corgi.

Target: **November 18, 2026, 8:00 p.m. Eastern**.

Built with plain HTML, CSS, and JavaScript. No installation or build step.

## Run locally

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. ES modules require HTTP rather than opening index.html directly.

## Test

```sh
node --test
```

The intro plays once per browser, remembered after it finishes. Clearing this site's local storage resets it. Reduced-motion preferences skip the intro animation. No audio, analytics, or external requests.
