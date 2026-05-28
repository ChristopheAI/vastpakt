# Loop 26 - Exa Proof Near Claim

## Question

Should the compact BAVAST proof stay near the check, and how should it be worded?

## Exa Signals

Belgian/KMO software pages commonly put proof close to operational claims:

- Novadesko: `Bespaar tijd`, `Bespaar 10u/week`, customer quotes near automation claims.
- Nymus: `65% minder manueel werk`, `zonder dat er gesleuteld moet worden aan het bestaande ERP-systeem`, testimonial nearby.
- Peppol Box: `Alle gegevens worden automatisch overgenomen`, `Geen handmatige invoer meer`.
- ERP op maat: `Minder manueel werk`, `bestaande gegevens samen`, `uw huidige werking beschrijven`.
- Afandi: `zonder manuele overschrijving`, `Geen dubbele invoer`, `Alle gegevens worden automatisch overgenomen`.
- myKMO: `Factureer niet langer in Word of Excel`, `veel tijd besparen`, `uitgespaarde werkuren`.

## Decision

Keep compact BAVAST proof near the check.

But public wording should lean on market-readable outcomes:

```text
automatisch klaargezet
bestaande Word-template
controle bij de plaatsbeschrijver
minder copy-paste en Word-werk
```

Do not make the line depend on `Python` in the short proof strip. Python remains a true implementation detail, but it is less useful as first proof language for a KMO reader.

## Classification

- `automatisch klaargezet`: market language/light edit from automatic-overname signals.
- `bestaande Word-template`: local BAVAST work object.
- `controle bij de plaatsbeschrijver`: trust boundary/Vastpakt translation.
- `Ongeveer één uur minder copy-paste en Word-werk per dossier`: user-provided case claim; still not a general promise.
- `Python-tool`: local implementation fact, better kept in deeper case notes than the compact proof strip.
