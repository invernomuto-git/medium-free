### Appunti del JSon
file `manifest.json` \
Il caricamento al momento viene effettuato all'apertura del popup in modo da evitare che le modifiche vengano applicate a qualsiasi pagina di google cache che si sta visitando \
`
  "content_scripts": [
    {
      "matches": ["*://webcache.googleusercontent.com/*"],
      "js": ["mediumReadble.js"]
    }
  ],
`

istruzione per caricare lo scritp quando avviene un match tra quelli presenti \
`"matches": ["*://*.medium.com/*", "*://webcache.googleusercontent.com/*"],`

### Appunti
Per vedere i console.log di background.js cliccare su Analizza della estenzione in about:debugging#/runtime/this-firefox

Aggiungere il titolo della tab originale con prima "Google Cache - "

Creare una pagina di impostazioni dove si possa abilitare direttamente la reader mode di firefox, come da istruzione commentata in `background.js`