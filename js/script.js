// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const eleSlider = document.querySelector('.slider');
const eleBtnUp = document.querySelector('.btn-up');
const eleBtnDown = document.querySelector('.btn-down');


for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}

	eleSlider.append(eleImg);
}

const listEleImg = document.querySelectorAll('.slider-img'); 

let activeIndex = 0;

// const firstClone = listEleImg[0].cloneNode(true);
// const lastClone = listEleImg[listEleImg.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

// eleSlider.append(firstClone);
// eleSlider.prepend(lastClone);



eleBtnDown.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');

    if (activeIndex === (arrImages.length - 1)) {
        activeIndex = 0;
    }else{
	activeIndex++;
    }

	listEleImg[activeIndex].classList.add('active');

	// eleBtnUp.classList.remove('hidden');
	// if (activeIndex === listEleImg.length - 1) {
	// 	eleBtnDown.classList.add('hidden');
	// }
});

eleBtnUp.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');

    if (activeIndex === 0) {
        activeIndex = (arrImages.length - 1)
    }else{
	activeIndex--;
    }

	listEleImg[activeIndex].classList.add('active');

	// eleBtnDown.classList.remove('hidden');
	// if (activeIndex === 0) {
	// 	eleBtnUp.classList.add('hidden');
	// }
});