# Vastpakt DNS, Vercel, and Analytics Runbook

> **For agentic workers:** Execute this runbook task-by-task. Do not skip verification gates. Do not make live DNS, registrar, Vercel, or Proxmox changes without the relevant gate passing.

**Goal:** Move `vastpakt.be` to Cloudflare-managed DNS, connect the public site to Vercel, and reserve a clean self-hosted analytics path.

**Architecture:** Vimexx remains the registrar. Cloudflare becomes authoritative DNS. Vercel serves the public static website. Proxmox is reserved for self-hosted analytics under a subdomain such as `analytics.vastpakt.be`.

**Tech Stack:** Vimexx registrar, Cloudflare DNS, Vercel static hosting, Proxmox, Plausible CE or Umami, Caddy or Cloudflare Tunnel.

---

## Operating Rules

- Treat Cloudflare as DNS control plane only until propagation is complete.
- Keep Vercel records DNS-only until Vercel domain verification and SSL are green.
- Do not enable Cloudflare DNSSEC until the Cloudflare nameserver migration is stable.
- Do not enable Cloudflare Under Attack Mode or WAF tuning during migration.
- Do not invent DNS records. Use values from the relevant dashboard or live DNS evidence.
- Before each live mutation, state the exact target, expected result, and rollback.

## Current State

- Cloudflare zone created for `vastpakt.be`.
- Cloudflare plan: Free.
- Cloudflare assigned nameservers:
  - `armfazh.ns.cloudflare.com`
  - `diva.ns.cloudflare.com`
- Vimexx nameserver profile created:
  - Profile: `Cloudflare vastpakt.be`
  - ID: `3042230`
  - Primary: `armfazh.ns.cloudflare.com`
  - Secondary: `diva.ns.cloudflare.com`
  - Tertiary: empty
- Vimexx confirmed `1 domeinen aangepast`.
- Vimexx profile shows `Domeinen koppelen (1)`.
- Cloudflare status: waiting for registrar/nameserver propagation.
- Public DNS last observed still returned:
  - `ns.zxcs.eu`
  - `ns.zxcs.nl`
  - `ns.zxcs.be`

## Cloudflare Records Currently Seeded

- `A` `vastpakt.be` -> `185.104.28.238`
- `AAAA` `vastpakt.be` -> `2a06:2ec0:1::ffed`
- `A` `www` -> `185.104.28.238`
- `AAAA` `www` -> `2a06:2ec0:1::ffed`
- `TXT` `vastpakt.be` -> `"v=spf1 a mx -all"`
- `TXT` `_dmarc` -> `"v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s"`

These are carry-over records from the Zxcs/Vimexx zone. They are temporary until Vercel provides the correct records.

---

## Task 1: Wait For Cloudflare Nameserver Propagation

**Status:** In progress

**Verification command:**

```bash
dig NS vastpakt.be +short
dig @1.1.1.1 NS vastpakt.be +short
dig @8.8.8.8 NS vastpakt.be +short
```

**Pass condition:**

All checks return Cloudflare nameservers:

```text
armfazh.ns.cloudflare.com.
diva.ns.cloudflare.com.
```

**Fail condition:**

Any resolver still returns:

```text
ns.zxcs.eu.
ns.zxcs.nl.
ns.zxcs.be.
```

**Action if fail:** Wait and recheck. Do not change Vercel or Cloudflare records yet unless correcting an obvious copied DNS record.

---

## Task 2: Confirm Cloudflare Activation

**Status:** Pending

**Browser target:**

```text
https://dash.cloudflare.com/4f546ae8dbda53157bdb5cd6975b19c7/vastpakt.be
```

**Pass condition:**

Cloudflare no longer says:

```text
Waiting for your registrar to propagate your new nameservers
```

**Action:**

Click `Check nameservers now` only after Task 1 starts returning Cloudflare nameservers from at least one public resolver.

---

## Task 3: Check DNSSEC Safety

**Status:** Pending

**Goal:** Ensure no old Vimexx/Zxcs DS record breaks validation after nameserver migration.

**Verification command:**

```bash
dig DS vastpakt.be +short
```

**Pass condition:**

No DS record is returned while Cloudflare DNSSEC is not yet enabled.

**If a DS record exists:**

Stop and inspect Vimexx DNSSEC settings before proceeding. Do not enable Cloudflare DNSSEC until the old DS state is understood.

---

## Task 4: Review Cloudflare DNS Records After Activation

**Status:** Pending

**Browser target:**

```text
https://dash.cloudflare.com/4f546ae8dbda53157bdb5cd6975b19c7/vastpakt.be/dns/records
```

**Check:**

- Apex `A` and `AAAA` exist.
- `www` `A` and `AAAA` exist.
- SPF TXT exists.
- `_dmarc` TXT exists.
- No unexpected MX records were invented.

**Decision:**

Leave temporary Zxcs web records in place only until Vercel is ready to provide exact replacement values.

---

## Task 5: Deploy Vastpakt Static Site To Vercel

**Status:** Pending

**Local project:**

```text
/Users/christophe/Documents/Vastpakt
```

**Evidence that project is static:**

```text
index.html
styles.css
script.js
```

**Action:**

Deploy the static site to Vercel or connect a Git repo/project.

**Pass condition:**

Vercel provides a working deployment URL and a domain settings page for `vastpakt.be`.

---

## Task 6: Add `vastpakt.be` In Vercel

**Status:** Pending

**Rule:**

Use exact DNS values from Vercel. Do not reuse generic examples unless Vercel shows them for this project.

**Expected records usually include:**

- Apex `A` or equivalent Vercel-provided target.
- `www` `CNAME` to a Vercel-provided target.
- Possible TXT verification record.

**Cloudflare proxy rule:**

Set Vercel validation and hosting records to DNS-only while verifying.

---

## Task 7: Replace Temporary Zxcs Web Records With Vercel Records

**Status:** Pending

**Prerequisites:**

- Task 2 passed.
- Task 5 passed.
- Task 6 has exact Vercel DNS values.

**Action:**

Replace the temporary Zxcs `A`/`AAAA` records for `vastpakt.be` and `www` with the Vercel-required records.

**Verification:**

```bash
dig A vastpakt.be +short
dig CNAME www.vastpakt.be +short
dig A www.vastpakt.be +short
```

**Pass condition:**

The DNS answers match Vercel's expected configuration.

---

## Task 8: Choose And Enforce Canonical Host

**Status:** Pending

**Default recommendation:**

Use `vastpakt.be` as canonical and redirect `www.vastpakt.be` to `vastpakt.be`.

**Pass condition:**

Both URLs resolve over HTTPS and one canonical target is consistent:

```text
https://vastpakt.be
https://www.vastpakt.be
```

---

## Task 9: Set Up Self-Hosted Analytics Route

**Status:** Pending

**Default recommendation:**

Start with Plausible CE on:

```text
analytics.vastpakt.be
```

**Decision gate:**

- Use Plausible CE if the need is privacy-friendly marketing stats.
- Use Umami if the need is more event/journey-oriented tracking.

**Infrastructure decision:**

- Caddy direct TLS: Cloudflare `analytics` record should usually be DNS-only.
- Cloudflare Tunnel: create a tunnel route for `analytics.vastpakt.be` and keep Proxmox origin private.

**Do not do yet:**

Do not add tracking script to the website until analytics is reachable and stable.

---

## Task 10: Add Analytics Script To Vastpakt Site

**Status:** Pending

**Prerequisites:**

- Analytics service is reachable.
- Dashboard login is secured.
- Tracking endpoint receives a test event.

**Files likely touched:**

- `/Users/christophe/Documents/Vastpakt/index.html`

**Verification:**

- Load `https://vastpakt.be`.
- Confirm one visit appears in analytics.
- Confirm no cookie banner is needed for the chosen configuration, or add proper disclosure if needed.

---

## Status Log

- 2026-05-28: Cloudflare zone created.
- 2026-05-28: Vimexx nameserver profile `Cloudflare vastpakt.be` created.
- 2026-05-28: `vastpakt.be` linked to the Cloudflare nameserver profile in Vimexx.
- 2026-05-28: Cloudflare check triggered; propagation still pending.
