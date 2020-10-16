//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

function rimg() {
	var items = document.querySelectorAll("img");
	for (var i = items.length; i--;) {
		var img = items[i]
		var src = img.src.replace(/.*?:\/\//g, "");
		img.src= "/pebbleSling/splits/"+String(getRandomIntInclusive(0,655)).padStart(4, '0')+".png";;
	}

}
