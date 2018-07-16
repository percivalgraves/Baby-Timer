var babycry = new Audio('sounds/babycry.mp3');

function initEvents()
{
  setInterval(()=>{
    // Retrieve current time
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    
    // Crying baby alarm @ 10:27
    if (minutes === 10 && seconds === 27) {
      babycry.play();
    }
  }, 1000);
}

initEvents();