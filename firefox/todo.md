### Appunti del JSon
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions \
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

## TO DO
Creare una pagina di impostazioni dove si possa abilitare direttamente la reader mode di firefox, come da istruzione commentata in `background.js`

Cercare di passare alla versione 3 del amnifest che il 2023, almeno su chrome, sarà deprecato - questo sotto funzionava ma va sostituito  in `background.js`
browser.browserAction.onClicked -> browser.action.onClicked
browser.tabs.executeScript -> non funziona
{
	"manifest_version": 3,
	"name": "Medium Free with Google Cache",
	"version": "1.1",
	"homepage_url": "https://github.com/invernomuto-git/medium-free",
	"description": "Medium articles fully readable using Google Cache",

	"icons": {
		"48": "icons/medium-48.png"
	},

	"permissions": [
		"scripting",
		"activeTab",
		"tabs"
	],
	
	"host_permissions": [
		"https://*/*",
		"http://*/*"
	],

	"background": {
		"scripts": ["background.js"]    
	},

	"action": {
		"default_icon": {
			"48": "icons/medium-48.png"
		},
		"default_title": "Read Me"
	}
}

Inserire le icone migliorate prensenti nel folder icons/