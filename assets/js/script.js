


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




var x = document.getElementById("cardnoise1"); 

function playAudio() { 
  x.play(); 
} 






function cpuplay()

{

const imagearray = ["2_of_diamonds.png","2_of_hearts.png","4_of_spades","5_of_Clubs"]
document.getElementById("cpudeck").onclick = function() {cpuplay()};
document.getElementById("cpudeck").src = "2_of_hearts.png";
}
//Math.floor(Math.random() *5);
//document.getElementById("cpudeck").src = "assets/images/carddeck/3_of_spades.png";
 //imagearray = ["2_of_diamonds.png","2_of_hearts.png","4_of_spades","5_of_Clubs"]
 document.getElementById("cpudeck").innerHTML = "4_of_spades.png";















