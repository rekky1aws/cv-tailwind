const goBackButton = document.querySelector('a');
const titleH1 = document.querySelector('h1');
const parag = document.querySelector('p');

const infos = {
	"fr": {
		goBack: "Retourner au CV",
		title: "Ce projet est toujours en cours de création.",
		paragraph: "Mais merci d'avoir tenté, essayez de cliquer sur d'autres logos.",
	},
	"fr-FR": {
		goBack: "Retourner au CV",
		title: "Ce projet est toujours en cours de création.",
		paragraph: "Mais merci d'avoir tenté, essayez de cliquer sur d'autres logos.",
	},
}


if (infos[navigator.language]) {
	goBackButton.textContent = infos[navigator.language].goBack;
	titleH1.textContent = infos[navigator.language].title;
	parag.textContent = infos[navigator.language].paragraph;
}