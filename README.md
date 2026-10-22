# stiller-reflux.de

Statische Website (Astro) für Betroffene von stillem Reflux im DACH-Raum, finanziert über Affiliate-Links.

## Starten

```bash
npm install
npm run dev      # lokale Vorschau auf http://localhost:4321
npm run build    # fertige Seite in dist/ (z. B. auf Netlify oder Cloudflare Pages hochladen)
```

## Aufbau

| Seite | Zweck |
|---|---|
| `/` | Einstieg: Symptome, Fehldiagnosen, Geschichte, Konzept, Newsletter |
| `/erkennen/` | Symptome, Abgrenzung, Warnzeichen, Weg zur Diagnose |
| `/selbsttest/` | Interaktiver Test, angelehnt an den Reflux Symptom Index |
| `/meine-geschichte/` | Persönliche Geschichte |
| `/mein-konzept/` | Die fünf Bausteine mit Studienlage |
| `/ernaehrung/` | Lebensmittel-Check mit pH-Werten, Startphase, Beispieltag |
| `/rueckfaelle/` | Rückfälle erkennen und den Weg zurück finden |
| `/empfehlungen/` | Affiliate-Empfehlungen |
| `/impressum/`, `/datenschutz/`, `/haftungsausschluss/` | Rechtliches |

Wettbewerbsanalyse und Strategie: [`docs/wettbewerbsanalyse.md`](docs/wettbewerbsanalyse.md)

## Vor dem Livegang (offene Punkte)

1. **Pseudonym** „Cornelius van den Hoven“ ist in `src/config.ts` → `author` eingetragen.
   Der echte Name und eine ladungsfähige Anschrift müssen trotzdem ins Impressum (Pflicht nach § 5 DDG).
   Tipp: Eine Impressums-Adresse über einen Impressum-Service oder Coworking-Space hält die Privatadresse raus.
2. **Domain** stiller-reflux.de ist eingetragen. Produktname **„Reflux Reset“** (4-Wochen-Startphase, später
   eigenes Produkt): vor dem Verkauf Markenrecherche bei DPMA/EUIPO, ggf. Wortmarke anmelden.
3. **Impressum und Datenschutz** ausfüllen (gelb markierte Stellen) und rechtlich prüfen lassen.
4. **Amazon-PartnerNet**: Tracking-ID in `src/config.ts` → `amazonTag` eintragen. Danach konkrete Produkte
   wählen und in `src/pages/empfehlungen.astro` je Produkt `url` setzen.
5. **Newsletter-Anbieter** (z. B. Brevo, MailerLite, Double-Opt-in) einrichten und das Formular-Ziel in
   `src/config.ts` → `newsletterAction` eintragen. Erst dann erscheint das Anmeldeformular.
6. **Geschichte gegenlesen**: `src/pages/meine-geschichte.astro` und `src/pages/rueckfaelle.astro` sind aus deinen
   Stichpunkten formuliert. Bitte prüfen, ergänzen (Jahre, konkrete Fehldiagnosen, deine Trigger) und alles streichen,
   was nicht stimmt. Das Zitat auf der Startseite ebenfalls.
7. **Fachliche Gegenlese** durch HNO-Arzt oder Ernährungsfachkraft. Danach „Medizinisch geprüft von …“ ergänzen.
   Das ist der größte Ranking-Hebel im Gesundheitsbereich.
8. **Fotos**: ein persönliches Bild (darf anonym sein, z. B. Hände beim Kochen, Keilkissen im Schlafzimmer) und
   eigene Fotos von Gerichten machen die Seite deutlich glaubwürdiger.

## Inhalte pflegen

- Lebensmittel und pH-Werte: `src/data/foods.ts`
- Navigation, Name, Tags: `src/config.ts`
- Farben und Schriften: `src/styles/global.css` (Schriften sind selbst gehostet, kein Google-Fonts-Abruf)
