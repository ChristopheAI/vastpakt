# Loop 94 - Contact Form Action Blocker

## Question

After the visual proof pass, where is the next real homepage weakness?

## Sources Used

- Current loop 93 homepage.
- Rendered Browser/Playwright route from examples to contact.
- `script.js` inspection.
- Exa pass on B2B form friction, CTA hierarchy and expectation setting.
- Local direct-response and Swipefile notes around keeping the first contact step small and concrete.

## External Signals

- B2B forms create friction when they feel like the start of a heavy sales process.
- Low-commitment forms should stay short and make the next step explicit.
- The space around a form should say what happens next.
- A CTA must complete the action it promises; otherwise the page loses trust at the exact moment of intent.

## Local Finding

The public contact block does a good job of keeping the first step small:

- name;
- e-mail;
- one example;
- a 24-hour fit/first-question expectation.

But the form currently has no working submission route:

- `<form class="contact-form">` has no `action`;
- the button is `type="button"`;
- `script.js` only handles the checkbox result in the check section;
- clicking `Stuur dit voorbeeld` after filling the form changes nothing.

## Verdict

This is now the strictest weakness.

Further copy polish is lower priority than making the promised first action real.

## Decision

Do not add a fake endpoint or guessed e-mail address.

Hold public-file changes until the public destination is confirmed:

- a public e-mail address;
- a mailto route;
- a form endpoint;
- or a deliberate replacement of the form with a direct contact link.

## Boundary

Do not use a private or inferred address from local files as the public contact destination.

Do not create a deployment/form-service configuration in this loop.
