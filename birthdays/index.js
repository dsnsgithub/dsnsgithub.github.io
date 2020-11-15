const round = (number, decimalPlaces) => {
	const factorOfTen = Math.pow(10, decimalPlaces);
	return Math.round(number * factorOfTen) / factorOfTen;
};


function countdown(birthday, name) {
    //Gets the EPOCH time for the birthday in milliseconds
	var countDownDate = new Date(birthday).getTime();


	var x = setInterval(function () {

		var now = new Date().getTime();

        var distance = countDownDate - now;

        
        while (distance < 0) {
            birthdayArray = birthday.split(" ")

            birthdayArray[2] = Number(birthdayArray[2]) + 1
            birthday = birthdayArray.join(" ")

            countDownDate = new Date(birthday).getTime();
            distance = countDownDate - now;
        }

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        

		document.getElementById(name).innerHTML =
			days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        document.getElementById(name + "Bar").value = 31536000000 - distance;
        

        document.getElementById(name + "percent").innerHTML =
		    round(((31536000000 - distance) / 31536000000)*100,2) + "%";
	}, 1000);
}

countdown("May 17, 2021", "dsns");
countdown("Febuary 10 2021", "jiebi");
countdown("October 30 2021", "retsed");
countdown("May 3 2021", "idot777");
countdown("January 15 2021", "armster");
countdown("January 29 2021", "lonelysouls");
countdown("April 18 2021", "jakeybakers")
countdown("September 24, 2021", "node13");
countdown("January 7, 2021","meh")
