# Loop 99 - Land-book CTA hard stop

## Vraag

Gebruik Land-book opnieuw als design-inspiratie voor Vastpakt en zoek streng naar verdere designzwaktes.

## Bronnen

- Land-book `pricing` en `call-to-action` secties: de bruikbare les is niet de visuele stijl, maar de discipline dat een pagina naar een duidelijke actie moet sluiten.
- Land-book `forms`, `contact` en `social-proof` secties gaven in deze browserpass een foutpagina, dus daar is geen inhoudelijk patroon uit overgenomen.
- Rendered Vastpakt loop 98 op ongeveer 853px breed.
- Lokale inspectie van `index.html` en `script.js`.

## Observatie

De visuele route is na loops 95-98 duidelijk korter en compacter geworden:

- hero en check staan nog in de juiste volgorde;
- voorbeelden blijven langer als set zichtbaar;
- contact en person block zijn compacter;
- method en connection zijn geen lange single-column route meer op tablet/app-browserbreedte.

De strengste zwakte zit nu bij de CTA zelf:

- de pagina vraagt `Stuur één voorbeeld`;
- de contactknop is zichtbaar als primaire actie;
- maar de knop is `type="button"`;
- er is geen `action`, `mailto`, endpoint of submit handler voor de contact form;
- `script.js` handelt alleen de check-form af.

## Verdict

Geen nieuwe designlaag toevoegen om dit te maskeren.

De juiste volgende stap is de contactactie echt maken of de publieke actie aanpassen naar een waarheidsgetrouwe contactroute. Zonder bevestigde bestemming zou extra CTA-design het probleem mooier maken, niet oplossen.

## Publieke copy-impact

Geen zichtbare copy gewijzigd.

## Boundary

- Geen nieuw formuliergedrag verzinnen.
- Geen e-mailadres, endpoint, CRM-route of mail handler raden.
- Geen extra trust/social-proof toevoegen om een kapotte actie te compenseren.
- Eerst de echte bestemming bevestigen, daarna pas de CTA/form-flow afwerken.
