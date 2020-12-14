var video = document.getElementById("videoElement");

if (navigator.mediaDevices.getUserMedia) {
	navigator.mediaDevices
		.getUserMedia({ video: true })
		.then(function (stream) {
			video.srcObject = stream;
		})
}
