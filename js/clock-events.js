var babycry = new Audio('audio/babycry.mp3');
babycry.loop = true;

function initEvents() {
	const interval = setInterval(() => {
		// Retrieve current time
		var date = new Date();
		var seconds = date.getSeconds();
		var minutes = date.getMinutes();
		var hours = date.getHours();

		// Crying baby alarm @ 10:27
		if (hours === 10 && minutes === 27 && babycry.paused) {
			babycry.play();
		}

		// Pause baby crying @ 10:28
		if (hours === 10 && minutes === 28 && !babycry.paused) {
			babycry.pause();
			babycry.currentTime = 0;
		}

		if (hours === 11 && minutes === 4) {
			document.getElementById("Clock").style.display = "none";
			document.getElementById("CountdownTimer").style.display = "block";
			document.getElementsByClassName("pp")[0].style.display = "inline";
			document.getElementsByClassName("pp")[1].style.display = "inline";
			clearInterval(interval);
		}
	}, 1000);
}

initEvents();
