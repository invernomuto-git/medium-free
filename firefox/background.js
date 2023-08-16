// background.js
browser.browserAction.onClicked.addListener(function( tab ) {
	// Get the current tab
	let currentTabUrl = tab.url;  

	// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create
	browser.tabs.create({
		//* COPIA CACHE NORMALE
		url: "http://webcache.googleusercontent.com/search?q=cache:"+currentTabUrl+"",		
		//* COPIA CACHE SOLO TESTO
	  	// url: "http://webcache.googleusercontent.com/search?q=cache:"+currentTabUrl+"&strip=1",
		//* COPIA CACHE DEL SOLO CODICE
		// url: "http://webcache.googleusercontent.com/search?q=cache:"+currentTabUrl+"&vwsrc=1",

		//* APRE IN MODALITÀ READER
		// openInReaderMode: true,
	}); 
});

browser.tabs.onCreated.addListener( tab => {
	browser.tabs.executeScript(tab.id, {file: "/mediumReadble.js"}).then(()=>{
		// console.log("caricamento script!")
	}).catch(err=>{
		// console.error("Not executed:")
		// console.error(err)
	})
});