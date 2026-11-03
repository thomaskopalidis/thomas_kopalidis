# Πού θα μείνεις · Αθήνα & Θεσσαλονίκη

Στατικό site: index.html, app.js, areas.js, methodology.html. Δεν χρειάζεται server ή build.

## Ανέβασμα στο GitHub Pages (δωρεάν)
1. Φτιάξε λογαριασμό στο github.com και ένα νέο repository (π.χ. `pou-tha-meineis`), Public.
2. «Add file → Upload files»: ανέβασε όλα τα αρχεία αυτού του φακέλου.
3. Settings → Pages → Source: «Deploy from a branch», Branch: `main`, φάκελος `/ (root)` → Save.
4. Σε 1–2 λεπτά το site είναι στο `https://<όνομα-χρήστη>.github.io/pou-tha-meineis/`.
5. Δικό σου domain (προαιρετικό): Settings → Pages → Custom domain.

## Σύνδεσμοι
- Αθήνα: `.../#athens` · Θεσσαλονίκη: `.../#thessaloniki`

## Ενημέρωση χρόνων OSRM
Τρέξε το osrm-times.html ή osrm_times.py και στείλε το αποτέλεσμα για να μπει στο `OSRM_TIMES` του app.js.

## Άδειες
Υπόβαθρο: OpenFreeMap (δωρεάν, χωρίς κλειδί), © OpenMapTiles, δεδομένα © OpenStreetMap contributors (ODbL). Όρια δήμων: geoBoundaries (CC BY 4.0). Πληθυσμός: ΕΛΣΤΑΤ.
Για μεγάλη κίνηση, έλεγξε την πολιτική χρήσης πλακιδίων του OpenStreetMap (operations.osmfoundation.org/policies/tiles) ή χρησιμοποίησε δικό σου πάροχο.

## Αναφορά λάθους
Στην αρχή του κομματιού «Προσθήκες» στο `app.js` υπάρχει η ρύθμιση:

    const REPORT = { github: "", email: "" };

Συμπλήρωσε ένα από τα δύο, π.χ. `github: "onoma/pou-tha-meineis"` (ανοίγει νέο issue στο GitHub) ή `email: "info@example.gr"`. Αν μείνουν κενά, η αναφορά απλώς αντιγράφεται στο πρόχειρο.

## OpenStreetMap (σχολεία, σούπερ μάρκετ, φαρμακεία, πάρκα)
Φορτώνονται από το Overpass API (overpass-api.de) όταν ο χάρτης είναι σε zoom 14 και πάνω. Δουλεύει μόνο στο δημοσιευμένο site.

## Σχετικά και απόρρητο
Οι σελίδες `about.html` και `privacy.html` είναι έτοιμες. Το Play Store ζητά τον σύνδεσμο της πολιτικής απορρήτου (π.χ. https://to-site-sou/privacy.html).
