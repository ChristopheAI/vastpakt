# Vastpakt GitHub And Vercel Release Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the Vastpakt static homepage through a private GitHub repository and Vercel without exposing internal research files.

**Architecture:** GitHub is the private source-of-truth repository. Vercel imports the GitHub repo, but `.vercelignore` allowlists only the public site files so internal docs and temporary research are not deployed. Cloudflare DNS stays unchanged until nameserver propagation is complete.

**Tech Stack:** GitHub private repo, Vercel Git integration, Cloudflare DNS, static HTML/CSS/JS.

---

## Current Truth

- Local branch: `main`.
- GitHub CLI is authenticated as `ChristopheAI`.
- No Git remote is currently configured.
- The worktree contains public site files plus many internal docs, research notes, review checklists, workflows, and `tmp/` extracts.
- `vastpakt.be` still resolves to Zxcs nameservers, so Cloudflare is not authoritative yet.

## Public Deploy Allowlist

Vercel must deploy only:

```text
index.html
styles.css
script.js
assets/images/christophe-vastpakt-person-block-loop57.jpg
assets/images/vastpakt-examples-work-objects-loop92.jpg
```

Do not deploy:

```text
docs/
reviews/
rules.md
AGENTS.md
workflows/
tmp/
```

## Task 1: Verify Deploy Safety

- [ ] Check `.vercelignore` exists and starts with `/*`.
- [ ] Confirm only public website paths are re-allowed with `!`.
- [ ] Confirm `index.html` references only allowlisted assets:

```bash
rg -n 'src="|href="' index.html
```

Expected public asset references:

```text
styles.css
assets/images/vastpakt-examples-work-objects-loop92.jpg
assets/images/christophe-vastpakt-person-block-loop57.jpg
script.js?v=loop95
```

## Task 2: Create A Private GitHub Repo

- [ ] Create private repository:

```bash
gh repo create vastpakt --private --source=. --remote=origin
```

Expected: `origin` points to the new private GitHub repository.

- [ ] Verify:

```bash
git remote -v
gh repo view --json name,visibility,url
```

Expected visibility: `PRIVATE`.

## Task 3: Commit Release-Safe Files

- [ ] Stage only the deploy safety files and public site files:

```bash
git add .gitignore .vercelignore README.md index.html styles.css script.js assets/images/christophe-vastpakt-person-block-loop57.jpg assets/images/vastpakt-examples-work-objects-loop92.jpg docs/superpowers/plans/2026-05-28-vastpakt-github-vercel-release-plan.md docs/superpowers/plans/2026-05-28-vastpakt-dns-vercel-analytics-runbook.md
```

- [ ] Inspect staged files:

```bash
git diff --cached --name-only
```

Expected: no `tmp/` files and no broad `docs/research/` batch.

- [ ] Commit:

```bash
git commit -m "chore: prepare safe Vastpakt Vercel release"
```

## Task 4: Push Main

- [ ] Push:

```bash
git push -u origin main
```

Expected: GitHub private repo has the release-safe commit.

## Task 5: Import Into Vercel

- [ ] In Vercel, import the GitHub repo.
- [ ] Framework preset: Other/static.
- [ ] Root directory: repository root.
- [ ] Build command: empty/default.
- [ ] Output directory: empty/default.
- [ ] Confirm Vercel respects `.vercelignore`.
- [ ] Deploy and open the generated `.vercel.app` URL.

## Task 6: Verify Preview URL

- [ ] Check page loads.
- [ ] Check both images load.
- [ ] Check the checkbox interaction updates the result.
- [ ] Try likely internal paths:

```text
/docs/
/docs/research/
/rules.md
/AGENTS.md
/tmp/
```

Expected: not publicly served.

## Task 7: Wait For Cloudflare DNS

- [ ] Recheck:

```bash
dig NS vastpakt.be +short
dig @1.1.1.1 NS vastpakt.be +short
dig @8.8.8.8 NS vastpakt.be +short
```

Proceed only when nameservers are:

```text
armfazh.ns.cloudflare.com.
diva.ns.cloudflare.com.
```

## Task 8: Attach Custom Domain

- [ ] Add `vastpakt.be` and `www.vastpakt.be` to the Vercel project.
- [ ] Copy exact Vercel-provided DNS records into Cloudflare.
- [ ] Keep Vercel records DNS-only until verification and SSL are green.
- [ ] Set canonical host: `vastpakt.be`; redirect `www` to apex.

## Review Checklist

- [ ] No internal docs are deployed.
- [ ] GitHub repo is private.
- [ ] Vercel preview works before DNS changes.
- [ ] Cloudflare nameserver gate passes before custom domain mutation.
- [ ] Rollback path is a Git revert or Vercel rollback, not manual DNS improvisation.
