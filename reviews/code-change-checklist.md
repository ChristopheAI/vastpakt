# Code Change Checklist

Use this checklist for code edits, PRs, scripts, site changes, and implementation work.

- The real root cause or intended outcome is identified before changing code.
- The change is scoped to the smallest files needed for the task.
- Existing user changes are preserved unless the user explicitly asks to replace them.
- The implementation follows the local structure, naming, and framework patterns.
- The change does not weaken security, accessibility, type safety, performance, or maintainability.
- User-facing text and layout are checked at the relevant viewport or runtime surface when applicable.
- A concrete verification command or browser check was run, or the reason it was not run is stated.
- Any residual risk or unverified behavior is named before calling the work complete.
