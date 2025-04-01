


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
  
}

//HUD background image

document.getElementById("hudwindow").style.backgroundImage = "url(assets/images/wtbuilding650.png)";

document.getElementById("militarydrums").play();


function playAudio() { 
  var x = document.getElementById("cardnoise1"); 
  x.play(); 
} 







function cpuplay()
{
var cpuplay = cpudeck1

document.getElementById("cpubutton").onclick = function(){cpuplay()};  
//var imageArray = ["2_of_clubs.png","carddeck/2_of_diamonds.png","2_of_hearts.png","2_of_spadesrandomPic = cpudeck = Math.floor(Math.random() *imageArray.length);]
document.getElementById("cpudeck1").src = "assets/images/carddeck/2_of_diamonds.png";
//document.getElementById("cpudeck").innerHTML = imageArray[randomPic];
  //document.getElementById("cpudeck").innerHTML = "images/carddeck/2_of_diamonds.png";
}
//const randompic = Math.floor(Math.random() *5)/document.getElementById("cpudeck").src = "assets/images/carddeck/3_of_spades.png";
 //imagearray = ["2_of_diamonds.png","2_of_hearts.png","4_of_spades","5_of_Clubs"]
//document.getElementById("cpudeck").innerHTML = "assets/images/carddeck/2_of_diamonds.png";
//}












