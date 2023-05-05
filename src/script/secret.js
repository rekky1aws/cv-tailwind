const secretCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let counter = 0;

document.addEventListener('keydown', checkKey);

function checkKey (evt)
{
	if (evt.keyCode == 13 && counter == secretCode.length) {
		console.log("Secret unlocked");
		let secretActivation = alert("Voulez-vous activer le secret (personnes photosensibles, abstenez-vous pour votre bien)");

		document.body.classList.toggle('secret');
	}

	if (evt.keyCode == secretCode[counter]) {
		counter ++;
	} else {
		counter = 0;
	}
}