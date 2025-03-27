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

//Newly made code
let = cpudeck

let cpudeck = ["[0] 2_of_clubs.png","[1] 2_of_diamonds.png", "[2] 2_of_hearts.png","[3] 2_of_hearts.png","[4]2_of_spades.png"];

document.getElementById("cpudeck").onclick = function() {gamestart()};

function gamestart()  {
Math.floor(Math.random(cpudeck) * 5);
document.getElementById("cpudeck").innerHTML = "cpudeck";
}


 