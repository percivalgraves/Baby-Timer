var babycry = new Audio('audio/babycry.mp3');
babycry.loop = true;

function initEvents() {
	setInterval(() => {
		// Retrieve current time
		var date = new Date();
		var seconds = date.getSeconds();
		var minutes = date.getMinutes();
		var hours = date.getHours();

		// Crying baby alarm @ 10:27
		if (hours === 10 && minutes === 27 && babycry.paused) {
			babycry.play();
		}


		if (hours === 10 && minutes === 28 && !babycry.paused) {
			babycry.pause();
			babycry.currentTime = 0;
		}

		if (hours === 10 && minutes === 29 && seconds === 0) {
			document.getElementById("Clock").style.display = "none";
			document.getElementById("CountdownTimer").style.display = "block";
		}
	}, 1000);
}

initEvents();
