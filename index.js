function darkMode() {
	var element = document.getElementById("html");
	var button = document.getElementById("darkbutton");
	var elementclass = element.className;

	if (elementclass == "darkmode") {
		element.classList.remove("darkmode");
		button.innerHTML = '<i class="fas fa-moon"></i>';
	} else {
		element.classList.add("darkmode");
		button.innerHTML = '<i class="fas fa-sun"></i>';
	}
}

