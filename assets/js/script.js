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

//HUD background image
document.getElementById("hudwindow").style.backgroundImage = "url(assets/images/wtbuilding650.png)";

document.getElementById("militarydrums").play();

//card play sound


let cpudeck

cpudeck =  ["assets/images/cpudeck/2_of_hearts.png", "assets/images/cpudeck/2_of_spades.png","assets/images/cpudeck/3_of_diamonds.png","assets/images/cpudeck/4_of_clubs.png","assets/images/cpudeck/4_of_diamonds.png" ]

function gamestart()  {
  
document.getElementById("cpudeck").onclick = function() {gamestart()};
Math.floor(Math.random(cpudeck) * 5);
document.getElementById("cpudeck").src = "assets/images/cpudeck/2_of_spades.png";
}


//New Code
let cardnoise

function  cardnoise () {
document.getElementById("cardnoise1").onclick = function() {cardnoise()};
document.getElementById("cardnoise1").play(cardnoise.wav);
}
//document.getElementById("cpudeck").innerHTML = "4_of_clubs.png";
 
