// console.log('@@@@ estensione caricata');
// document.body.style.border = "5px solid red";
// urlPage = document.location.href;

var text = document.body.innerHTML;

document.body.innerHTML = text;

const debug = false;

//* ELEMENTI DA NASCONDERE
const selectors = [
	//* IL DIV DI GOOGLE CACHE
	"body > div:first-child", 
	// //* IL MENÙ DI MEDIUM
	// ".l.m.n.o.c",
	// //* BANNER ISCRIZIONE
	".speechify-ignore.l",

	// //* SHARE ARTICVLE
	// ".ab.co.kr.ks.kt.ku.kv.kw.kx.ky.kz.la.lb.lc.ld.le.lf.lg",
	// //* I resti
	// ".sm.sn.so.sp.sq.l.bw",

	// ".l.ae",
	// ".ch.bg.fv.fw.fx.fy",
	// ".ro.rp.ab.kd",
	// ".pg.ph.pi.pj.pk.l.bw",
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

// document.body.style.fontFamily = 'Arial';
// document.body.style.paddingLeft = '20vw';
// document.body.style.paddingRight = '20vw';
// console.log('@@@@ div nascosti');

