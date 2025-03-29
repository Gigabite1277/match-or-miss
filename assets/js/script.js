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



function gamestart()  {
cpudeck = Array ["2_of_hearts.png","2_of_spades.png","3_of_diamonds.png","4_of_clubs.png","4_of_diamonds.png" ]  

cpudeck = Math.floor(Math.random() *5);
document.getElementById("cpudeck").src = cpudeck.length;
document.getElementById("cpudeck").onclick = function() {gamestart};
document.getElementById("cardnoise1").play("cardnoise.wav");
}

//function cardplay()

//{
//cpudeck = ["2_of_hearts.png","2_of_spades.png","3_of_diamonds.png","4_of_clubs.png","4_of_diamonds.png" ]  
//document.getElementById("cpudeck").onclick = function() {cardplay};
//document.getElementById("cpudeck").innerHTML = cpudeck [3];
//document.getElementById("cardnoise1").play("cardnoise.wav");
//}

