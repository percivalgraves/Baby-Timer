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
    if (minutes === 43 && seconds === 00) {
      babycry.play();
      document.getElementById("Clock").style.display="none";
      document.getElementById("CountdownTimer").style.display="block";
      //babycry.stop
    }
  }, 1000);
}

initEvents();