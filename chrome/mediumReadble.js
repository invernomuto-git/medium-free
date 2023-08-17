console.log("@@@@ mediumReadble.js loaded");

//* CON CHROME L'ESECUZIONE DI QUESTO SCRIPT SEMBRA AVVENIRE DOPO CHE LA CANCELLAZIONE È AVVENUTA, A DIFFERENZA DI FIREFOX
//* cambio approccio lavorando sulla visualizzazione della cache del codice sorgente
// const textPage = document.body.innerHTML;
selector = "body > div > pre";
//* EFFETTUO IL DECODE DELLE HTML ENTITIES PER RENDERLO DELL'HTML VALIDO
const textPage = htmlDecode(document.querySelector(selector).innerHTML);
const titlePage = getTitle(textPage);

document.body.innerHTML = textPage;
document.title = "Google Cache - " + titlePage;

const debug = false;

// hideElements();

// document.body.style.fontFamily = 'Arial';
// document.body.style.paddingLeft = '20vw';
// document.body.style.paddingRight = '20vw';

function hideElements(){
	//* ELEMENTI DA NASCONDERE
	const selectors = [
		//* IL DIV DI GOOGLE CACHE, se visibile
		// "body > div:first-child",
		//* BANNER ISCRIZIONE
		".speechify-ignore.l:first-child",
	];

	selectors.forEach(selector => {
		const elements = document.querySelectorAll(selector);

		//* EVITO CHE SI PIANTI L'ESECUZIONE SE UN SELETTORE NON VIENE TROVATO
		elements.forEach(element => {
			// console.log("@@@@ elemento trovato "+selector);
			if( debug ){
				element.style.border = "1px solid red";
				title = document.createElement('h2');
				title.textContent = selector;
				element.insertBefore(title, element.firstChild);
			}else{
				element.style.display = 'none';
			}
		});
	});
}

function htmlDecode(input) {
	var entities = {
		"&amp;": "&",
		"&lt;": "<",
		"&gt;": ">",
		//....
	};

	for (var prop in entities) {
		if (entities.hasOwnProperty(prop)) {
		input = input.replace(new RegExp(prop, "g"), entities[prop]);
		}
	}
	return input;
}

function getTitle(totalText) {
	//determine start-pos and end-pos of desired substring, and then get it
	stringStart = '<title data-rh="true">';
	stringEnd = "</title>";
	var startPos = totalText.indexOf(stringStart) + stringStart.length;
	var endPos = totalText.indexOf(stringEnd);
	return totalText.substring(startPos, endPos).trim();
}
