// Constantes
const birth = new Date('2002-03-15');

// Variables
let age;
let ageContainer = document.querySelector('#age');

// Fonctions
function getAge (dateBirth)
{
	const now = new Date();
	let age = now.getFullYear() - dateBirth.getFullYear();

	if (now.getMonth() < dateBirth.getMonth())
	{
		age--;
	} else {
		if ((now.getMonth() == dateBirth.getMonth()) && (now.getDate() < dateBirth.getDate()))
		{
			age--;
		}
	}

	return age;
}

age = getAge(birth);
ageContainer.textContent = age;
