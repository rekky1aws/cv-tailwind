const secretCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let counter = 0;
let secretActivated = false;
let secretActivatedOnce = false;
let alertText;

document.addEventListener('keydown', checkKey);

function checkKey (evt)
{
	// Checking if enter was pressed
	if (evt.keyCode == 13 && counter == secretCode.length) {

		if (secretActivated) {
			console.log("Désactivation du Secret");
			alertText = "Désactiver le secret ?";
			secretActivated = false;
		} else {
			console.log("Activation du Secret");
			alertText = "Voulez-vous activer le secret (personnes photosensibles, abstenez-vous pour votre bien). Vous pourrez le déastiver en retapant ce code.";
			secretActivated = true;
		}

		let secretActivation = confirm(alertText);

		document.body.classList.toggle('secret');
	}

	// Checking code validity
	if (evt.keyCode == secretCode[counter]) {
		counter ++;
	} else {
		counter = 0;
	}

	// Hinting user Halfway
	if (counter == Math.floor(secretCode.length / 2) && !secretActivatedOnce) {
		console.log("Il doit y avoir quelque chose a creuser avec ca...");
		secretActivatedOnce = true;
	}
}