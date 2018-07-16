var babycry = new Audio('audio/babycry.mp3');

function initEvents()
{
  setInterval(()=>{
    // Retrieve current time
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    
    // Crying baby alarm @ 10:27
    if (hours === 10 && minutes === 27) {
		babycry.loop = true;
    }
  }, 1000);
}

initEvents();