function countdown(birthday, name) {
	var countDownDate = new Date(birthday).getTime();

	// Update the count down every 1 second
	var x = setInterval(function () {
		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result in the element with id="demo"
		document.getElementById(name).innerHTML =
			days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

		// If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(x);
			document.getElementById(name).innerHTML = "EXPIRED";
		}
	}, 1000);
}

countdown("May 17 2021", "dsns");
countdown("Febuary 10 2021", "jiebi");
countdown("October 30 2021", "retsed");
countdown("May 3 2021", "idot777");
countdown("January 15 2021", "armster");
countdown("January 29 2021", "lonelysouls");
