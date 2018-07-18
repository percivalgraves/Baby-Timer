var countDownDate =  new Date("July 18, 2018 10:17:00").getTime();

var audio = new Audio('audio/woohoo.mp3');
// audio.loop = true;

var x = setInterval(function(){
    var now = new Date().getTime();

    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("CountdownTimer").innerHTML = seconds + "s";
    if(distance < 0){
        clearInterval(x);
        document.getElementById("CountdownTimer").innerHTML = "&#x1F389; Woohoo &#x1F389;";
        // audio.play();
    }
},1000)