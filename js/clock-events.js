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
		if (hours === 11 && minutes === 38 && babycry.paused) {
			babycry.play();
		}

		// Pause baby crying @ 10:28
		if (hours === 11 && minutes === 39 && !babycry.paused) {
			babycry.pause();
			babycry.currentTime = 0;
		}

		// Latch GO! at @ 10:29

		// When timer is at @11:30 hide clock and show countdown timer
		if (hours === 13 && minutes === 59) {
			document.getElementById("Clock").style.display = "none";
			document.getElementById("CountdownTimer").style.display = "block";
			clearInterval(interval);
		}
	}, 1000);
}

initEvents();
