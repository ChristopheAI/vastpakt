# First lead response runbook

Date: 2026-05-30

## Why this exists

The contact path is technically proven:

- the live form submits successfully;
- `/api/contact` sends through Resend;
- Resend delivered the approved testlead to `christophe@vastpakt.be`;
- Umami records `contact_form_submitted`;
- Resend domain `vastpakt.be` is verified for sending.

The next risk is operational, not technical: a real visitor sends a situation and the reply is late, vague, or too sales-like.

## Public promise to honor

Current site promise:

- within 24 hours;
- short written first look;
- show where status, owner, proof, decision, or next action becomes unclear;
- or give an honest no.

Do not turn the first reply into a sales call by default.

## Inbox triage

When a new Vastpakt lead arrives:

1. Confirm the email subject starts with `Vastpakt voorbeeld van`.
2. Check whether the submitted situation is concrete enough to answer.
3. Classify the lead as one of:
   - `usable situation`;
   - `too vague`;
   - `wrong fit`;
   - `spam/test`.
4. Reply within 24 hours, even if the answer is a short no.
5. Do not request files unless the situation cannot be understood without one.

## First-look structure

Use this structure for a real lead:

```text
Dag [naam],

Ik heb je voorbeeld gelezen.

Wat ik nu zie:
- [herhaal de situatie in hun woorden]
- [waar status/eigenaar/bewijs/beslissing/volgende stap loskomt]
- [de kleinste plek om eerst zichtbaar te maken]

Mijn eerste inschatting:
[zinvol / nog te vaag / waarschijnlijk niet voor Vastpakt]

Als je wil, kan je mij nu [één concreet vervolgobject] sturen of kort antwoorden met [één vraag].

Groeten,
Christophe
```

## If the situation is too vague

Use this smaller reply:

```text
Dag [naam],

Ik heb je bericht gelezen, maar ik kan er nog niet eerlijk uit halen waar het werk precies blijft hangen.

Stuur mij één concreet voorbeeld terug:
- een offerte die wacht;
- een akkoord dat ergens in mail zit;
- een Excel-rij die iemand moet overnemen;
- of een volgende stap waar niemand zeker van is.

Dan kijk ik waar status, bewijs of opvolging loskomt.

Groeten,
Christophe
```

## If it is wrong fit

Use this smaller reply:

```text
Dag [naam],

Ik heb je voorbeeld gelezen. Ik denk niet dat Vastpakt hier de juiste eerste stap is.

Waarom:
[korte concrete reden]

Wat ik wel zou doen:
[kleine richting of doorverwijzing, zonder grote claim]

Groeten,
Christophe
```

## What to record

For each real lead, record only:

- date received;
- source;
- lead classification;
- situation object: mail, offerte, Excel, CRM, factuur, afspraak, dossier, other;
- first reply sent within 24 hours: yes/no;
- whether the lead became a follow-up conversation.

Use `docs/operations/lead-log.md`.

Do not record private message content, full emails, phone numbers, attachments, or client-identifying details in public docs.

## Next review

Review after the first 3 real non-test leads:

- Did they understand what to send?
- Were the situations concrete enough?
- Did the first reply stay small?
- Did the contact form attract wrong-fit requests?
- Which phrase from the submitted situations should inform the next copy pass?
