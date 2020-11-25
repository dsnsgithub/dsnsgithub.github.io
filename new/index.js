function darkMode() {
	var element = document.getElementById("html");
	var button = document.getElementById("darkbutton");
	var elementclass = element.className;

	//var twitterEmbed = document.getElementsByName("blockquote");

	if (elementclass == "darkmode") {
		element.classList.remove("darkmode");
		button.innerHTML = '<i class="fas fa-moon"></i>';
		//twitterEmbed.setAttribute("data-theme", "light");
	} else {
		element.classList.add("darkmode");
		button.innerHTML = '<i class="fas fa-sun"></i>';
		// twitterEmbed.setAttribute("data-theme", "dark")
	}
}

