# Redesign execution control

Datum: 2026-05-31

Status: interne Codex-uitvoeringslaag. Geen publieke copy. Geen implementatie.

Doel: zorgen dat Codex snel kan zien wat de volgende homepage-redesignstap is zonder opnieuw de hele thread, board of research te reconstrueren.

## Huidige GitHub-context

- Repo: `ChristopheAI/vastpakt`
- Board: `Vastpakt Homepage Redesign`
- Project URL: `https://github.com/users/ChristopheAI/projects/1`
- Codex-toegang: repo admin en project zichtbaar via `gh`.

## Huidige staat

| Issue | Status | Betekenis |
| --- | --- | --- |
| `#11 - 00 - Source-first four-page wireframe map` | In Progress | Lokale v1 bestaat, maar nog niet in branch/commit/PR. |
| `#12 - 01 - Protect current worktree and create redesign branch` | Todo | Volgende echte uitvoeringsstap. |
| `#16 - 02 - Inventory URLs, metadata and SEO risk` | Todo | Moet voor build. |
| `#13 - 03 - Define visual system and responsive layout foundation` | Todo | Moet voor page-level build. |

Lokale v1 voor `#11`:

```text
docs/plans/2026-05-31-source-first-four-page-wireframe-map-v1.md
```

Verificatie:

```text
git diff --check
```

is lokaal geslaagd zonder output na het maken van de wireframe-map.

## Uitvoeringsvolgorde

Gebruik issue-nummers niet als volgorde. Gebruik de titelprefix.

```text
00 - #11 Source-first four-page wireframe map
01 - #12 Protect current worktree and create redesign branch
02 - #16 Inventory URLs, metadata and SEO risk
03 - #13 Define visual system and responsive layout foundation
04 - #1  Create four-page site shell
05 - #2  Build homepage typographic hero and bridge line
06 - #14 Select and prepare Christophe/page assets
07 - #3  Build Christophe person block and why block
08 - #4  Build three project cards section
09 - #15 Run proof and privacy pass for /werk cases
10 - #5  Create /werk proof page structure
11 - #6  Create /voor-wie fit page structure
12 - #7  Create /over-mij Christophe page structure
13 - #8  Wire footer, contact routes and navigation
14 - #9  Update sitemap, metadata and internal links
15 - #10 Final mobile browser and source-first QA
```

## Stopregels

- Markeer `#11` niet Done zolang de lokale v1 niet in een branch/commit/PR zit.
- Start geen publieke HTML/CSS/JS-build voor `#12`, `#16` en `#13` klaar zijn.
- Wijzig geen contactroute, analytics, deployment, ads of lead-log tijdens deze housekeeping.
- Revert geen dirty worktree changes die niet door de huidige taak zijn gemaakt.
- Gebruik `docs/plans/2026-05-31-source-first-four-page-wireframe-map-v1.md` als startpunt voor buildtickets, niet de losse competitor-notities.

## Snelle commands voor Codex

Board lezen:

```bash
gh project item-list 1 --owner ChristopheAI --format json | jq -r '.items[] | [.status, (.content.number|tostring), .title] | @tsv'
```

Issue lezen:

```bash
gh issue view 12 --json number,title,state,body,url
```

Repo status:

```bash
git status --short
```

Whitespace check:

```bash
git diff --check
```

## Volgende stap

Volgende ticket:

```text
#12 - 01 - Protect current worktree and create redesign branch
```

Doel van `#12`: eerst de huidige dirty worktree documenteren en een veilige redesign branch/worktree-lane kiezen voordat er nog iets publiek gebouwd wordt.
