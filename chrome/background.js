chrome.action.onClicked.addListener(async function (sourceTab) {
	// Get the current tab	
	let currentTabUrl = sourceTab.url;
	if (!currentTabUrl.includes('chrome://')) {	
		chrome.tabs.create({
			//* COPIA CACHE NORMALE
			// url: "https://webcache.googleusercontent.com/search?q=cache:"+currentTabUrl+"",		
			//* COPIA CACHE SOLO TESTO
			// url: "http://webcache.googleusercontent.com/search?q=cache:"+currentTabUrl+"&strip=1",
			//* COPIA CACHE DEL SOLO CODICE
			url: "http://webcache.googleusercontent.com/search?q=cache:"+currentTabUrl+"&vwsrc=1",
		});
	}
});

chrome.tabs.onCreated.addListener(function (tab) {
	//* SENZA UN TIMEOUT DI ALMENO 300 MILLISECONDI, SEMBRA NON ESEGUIRE LO SCRIPT: STESSA COSA SE SI METTE COME CALLBACK ALLA FUNZIONE DI TABS.CREATE
	//* questo comportamento curioso si verifica per tutti i siti, mentre se si passa alla visualizzazione solo testo non si presente il problema
	// setTimeout( () => {
		chrome.scripting.executeScript({
			target : {tabId : tab.id},
			files : [ "mediumReadble.js" ],
		});
	// }, 300);
});