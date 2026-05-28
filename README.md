# Vastpakt Static Homepage

First static homepage version for Vastpakt.

## Open Locally

Open `index.html` in a browser.

## Verify

- Hero starts from recognizable market language, not generic AI/automation language.
- The first visual proof object is a Situatiekaart.
- Proof examples use ordinary workday sentences.
- The page names what is missing: status, eigenaar, bewijs, volgende stap.
- The page explains what the reader brings, what they get back, and who it is not for.
- The Loshang-check updates when checkboxes are selected.
- The contact form posts to `/api/contact` and shows a clear fallback if mail sending is not configured.
- Public copy does not mention internal process words such as research, Swipefile, proof mechanism, or agent.

## Contact Form

The Vercel function at `api/contact.js` expects these environment variables:

- `RESEND_API_KEY`
- `CONTACT_FROM`, for example `Vastpakt <contact@vastpakt.be>` after the sending domain is verified
- `CONTACT_TO`, optional, defaults to `christophe@vastpakt.be`
