var countDownDate =  new Date("July 18, 2018 14:00:00").getTime();

var audio = new Audio('audio/woohoo.mp3');
// audio.loop = true;

var x = setInterval(function(){
    var now = new Date().getTime();

    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("CountdownTimer").innerHTML = seconds;
    if(distance < 0){
        clearInterval(x);
        var woohoo = " Woohoo! ";
        document.getElementById("CountdownTimer").innerHTML = woohoo;
        document.getElementsByClassName("pp")[0].style.display = "inline";
        document.getElementsByClassName("pp")[1].style.display = "inline";

        var confettiSettings = { target: 'my-canvas', max: 250 };
        var confetti = new window.ConfettiGenerator(confettiSettings);
        confetti.render();

        audio.play();
    }
}, 1000)