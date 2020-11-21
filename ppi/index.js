const round = (number, decimalPlaces) => {
	const factorOfTen = Math.pow(10, decimalPlaces);
	return Math.round(number * factorOfTen) / factorOfTen;
};


function calculatePPI() {
	height = document.getElementById("height").value;
	width = document.getElementById("width").value;
    screenSize = document.getElementById("screenSize").value;
    ppiElement = document.getElementById("ppi");

	//Calculate the diagonal length in pixels with the Pythagorean Theorem:
    diagonal = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2));

    ppi = diagonal / screenSize
    
    ppiElement.innerHTML = round(ppi,2)

}


