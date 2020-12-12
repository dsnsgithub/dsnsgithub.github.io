file = "https://dsnsgithub.github.io/pi/pi.txt";
var rawFile = new XMLHttpRequest();
rawFile.open("GET", file, true);
rawFile.onreadystatechange = function () {
	if (rawFile.readyState === 4) {
		if (rawFile.status === 200 || rawFile.status == 0) {
            var pitxt = rawFile.responseText;
            for (i = 0; i < pitxt.length; i++) {
				setTimeout(() => {
					pidisplay = document.getElementById("pidisplay");
					pidisplay = pitxt[i];
				}, 1000);
			}
		}
	}
};
rawFile.send(null);

