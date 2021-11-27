# REACT

## Fakta
- React er et JavaScript-bibliotek
- Brukes for UI og front-end
- React blir ofte kalt et rammeverk
- Gjør JavaScript mye enklere
- Med vanilla JS må du gjøre alt med DOM manuelt, React har virtual DOM.
- Forenkler samarbeid i team

---

## Prereq.
- JavaScript fundamentals
- Klasser
- Destructuring
- High order array methods (forEach, map, filter)
- Arrow-funksjoner
- Fetch API og Promises
  
---

## React state
- Komponenter kan ha en state som er et objekt som bestemmer oppførsel til objektete
- Vi kan også ha "application level" state ved å bruke en state manager som _Redux_ eller React sin egen _context API_.

---

## Hvordan lage React-applikasjoner
- Et eget CLI-verktøy gjør dette
- Bruker _Webpack_, og trenger ingen konfigurasjoner
- Det følger med en dev server med _hot reload_
- `npm run build` kompilerer koden til noe som browseren kan lese

---

## Anatomien til en komponent
- Klasser extends Component
- render-metode sørger for å rendre komponenten på siden. Returnerer JSX, likt HTML