var countDownDate =  new Date("July 16, 2018 10:45:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("CountdownTimer").innerHTML = seconds + "s";
    if(distance < 0){
        clearInterval(x);
        document.getElementById("CountdownTimer").innerHTML = "it's ya boi SeanningTatum";
        var audio = new Audio('bensound-buddy.mp3');
        audio.play();
    }
},1000)
