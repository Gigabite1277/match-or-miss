


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

//code to play cardnoise Sound fx when cpu PLAY button is pressed
document.getElementById("cpubutton").onclick = function() {playAudio()};
function playAudio() { 
document.getElementById("cardnoise1").play(); 
} 

//Code to randomly display cpu card
document.getElementById("cpubutton").onclick = function() {cpuplay()};
function cpuplay() {
deck1 = ["assets/images/carddeck/3_of_spades.png","assets/images/carddeck/2_of_hearts.png","assets/images/carddeck/4_of_spades.png","assets/images/carddeck/5_of_clubs.png"];
random = Math.floor(Math.random(deck1) *deck1.length);
document.getElementById("cpudeck1").src = deck1[random];
//document.getElementById("cpudeck1").innerHTML = deck1[random];
}























//var chosenDrink = Math.floor(Math.random(drinkOptions) *drinkOptions.length);
//var message = `Enjoy your ${chosenMeal} and ${chosenDrink}!`;
//log the message
//console.log(message);
//deck1 = Math.floor(Math.random(deck1) *deck1.length);
//document.getElementById("cpudeck1").src = "assets/images/2_of_diamonds.png";
//var cpudeck1 = ["2_of_diamonds.png","2_of_hearts.png","4_of_spades","5_of_Clubs"];
//random = Math.floor(Math.random(cpudeck1) *cpudeck1.length);
//p1deck1 = Math.floor(Math.random(p1deck1) *p1deck1.length);
//document.getElementById("cpudeck1").innerHTML = "assets/images/carddeck/4_of_spades.png";
//document.getElementById("cpudeck1").innerHTML = (cpudeck1[random]);
//log the message
//var imageArray = ["2_of_clubs.png","carddeck/2_of_diamonds.png","2_of_hearts.png","2_of_spadesrandomPic = cpudeck = Math.floor(Math.random() *imageArray.length);]
//document.getElementById("cpudeck1").src = "assets/images/carddeck/2_of_diamonds.png";
//document.getElementById("cpudeck").innerHTML = imageArray[randomPic];
//document.getElementById("cpudeck").innerHTML = "images/carddeck/2_of_diamonds.png";
//const randompic = Math.floor(Math.random() *5)/document.getElementById("cpudeck").src = "assets/images/carddeck/3_of_spades.png";
//imagearray = ["2_of_diamonds.png","2_of_hearts.png","4_of_spades","5_of_Clubs"]
//
//}












