# 🌿 Junimo Guide – Stardew-Valley-Begleiter

Eine einzelne HTML-Datei (`index.html`), die als App auf dem iPhone läuft.
Keine Installation, kein Server, keine Internetverbindung nötig – der Fortschritt
wird lokal im Browser gespeichert.

## Was drin ist

**🏛️ Gemeinschaftszentrum** – alle 7 Bereiche (inklusive Tresorraum und dem
fehlenden Bündel im verlassenen JojaMart), 28 Bündel, 135 Gegenstände.
Pro Gegenstand: wie viele du brauchst, wo du ihn findest, in welcher Jahreszeit,
bei Fischen zusätzlich Uhrzeit und Wetter. Abhaken, Teilmengen mitzählen
(z. B. „37 von 99 Holz"), Suche und Filter „nur offene". Jedes Bündel zeigt seine
Belohnung, jeder Raum die Freischaltung dahinter.

**🌱 Anbau** – für jede Jahreszeit alle Feldfrüchte, sortiert nach **Gewinn pro Tag
und Feld**. Gerechnet mit Saatpreis, Wachstumsdauer, Nachwachszeit und Ertrag je
Ernte über eine volle Saison (28 Tage). Umschaltbar auf den Beruf *Ackerbauer*
(+10 %) und auf Silber-/Gold-/Iridium-Qualität. Dazu eine Übersicht, was sich im
Fass bzw. im Einmachglas zu verarbeiten lohnt. Der Winter zeigt stattdessen, womit
man in der toten Jahreszeit Geld macht; das Gewächshaus wird über ein volles Jahr
gerechnet, damit die Uralte Frucht fair dasteht.

**⭐ Berufe** – alle fünf Fähigkeiten mit beiden Entscheidungsstufen (5 und 10),
jeweils mit Begründung und einer klar markierten Empfehlung:

| Fähigkeit | Stufe 5 | Stufe 10 |
|---|---|---|
| Landwirtschaft | Ackerbauer | **Kunsthandwerker** |
| Bergbau | Bergmann | Schmied |
| Sammeln | Sammler | Botaniker |
| Angeln | Fischer | Angler |
| Kampf | Kämpfer | Rohling |

**🧭 Plan** – der „Was mache ich als Nächstes?"-Berater. Du gibst Jahr,
Jahreszeit und Tag an, und die App sagt dir: was jetzt ansteht, welche
Bündel-Gegenstände nur noch in dieser Jahreszeit zu holen sind, welche
Zeitfenster gerade laufen (Brombeersaison, Heuvorrat vor dem Winter),
welche Feste anstehen und in wie vielen Tagen. Dazu eine Sparziel-Leiter
vom Rucksack für 2.000 G bis zum Keller für 100.000 G: immer nur das
nächste Ziel mit Begründung, abhaken und das nächste erscheint. Und eine
Liste der Dinge, die man schleifen lässt und später bereut.

**🏠 Übersicht** – Fortschrittsbalken gesamt und pro Raum, ein Jahr-1-Fahrplan pro
Jahreszeit und eine Liste „nur in dieser Jahreszeit verfügbar und noch offen",
damit nichts durchrutscht (Kugelfisch, Nautilusschale, Brombeersaison …).

## Auf dem iPhone öffnen

**Variante A – über GitHub Pages (empfohlen):**
1. Im Repository auf **Settings → Pages** gehen.
2. Unter *Source* „Deploy from a branch" wählen, als Branch diesen Branch und
   den Ordner `/ (root)`, dann **Save**.
3. Nach ein paar Minuten ist die App unter
   `https://r3ikx.github.io/Stardew-guide/` erreichbar.
4. Die Seite in Safari öffnen → **Teilen-Symbol** → **Zum Home-Bildschirm**.
   Danach startet sie wie eine echte App im Vollbild.

**Variante B – ohne Pages:** `index.html` herunterladen, z. B. in iCloud Drive
oder in die Dateien-App legen und von dort in Safari öffnen.

## Hinweise

- Datenstand: Stardew Valley 1.6, Standard-Bündel (nicht „Remixed").
- Alle Preise sind Verkaufspreise in normaler Qualität ohne Berufs-Boni;
  die Boni lassen sich in der App zuschalten.
- Der Fortschritt liegt im `localStorage` des Browsers – also pro Gerät.
  Safaris „Website-Daten löschen" setzt ihn zurück.
- Hell/Dunkel folgt den iPhone-Einstellungen, lässt sich oben rechts
  aber auch manuell umschalten.
