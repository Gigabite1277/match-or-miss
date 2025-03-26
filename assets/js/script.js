var c = setInterval(showclock,1000)
 function showclock(){
 var seconds = document.getElementById("countdown").textContent;
   seconds--;
 document.getElementById("countdown").innerHTML=seconds;
   if(seconds==0)
     {
     clearInterval(c);
       document.getElementById("countdown").innerHTML="GO!";
     }
 }
 
 document.getElementById("countdownaudio").play();
 setTimeout(timer, 6000);
 
 function timer() {
  document.getElementById("countdown").innerHTML = "";
  //document.getElementById("hudwindow").innerHTML = wtbuilding650.png;
}
document.getElementById("hudwindow").style.backgroundImage = "url(assets/images/wtbuilding650.png)";

document.getElementById("militarydrums").play();




//document.getElementById("hudwindow").src = "wtbuilding650.png";
//document.getElementById("countdown").src = "wtbuilding650.png";
//document.getElementById("countdown").innerHTML = wtbuilding650.png;
//document.getElementById("hudwindow").src = ("assets/images/wtbuilding650.png");



var cpudeck = ['2_of_clubs', '2_of_diamonds', '2_of_hearts', '2_of_spades', '3_of_clubs', 'oranges'];

function gamestart() {
cpudeck[Math.floor(Math.random()*cpudeck.length)];
document.getElementById("cpudeck").src = ("assets/images/cpudeck");
    
}

