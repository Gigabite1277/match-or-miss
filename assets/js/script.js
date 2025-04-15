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

//Military drums - Background soundtrack.
document.getElementById("militarydrums").play();

//Event listener: to play cardnoise.mp3 Sound fx when cpu PLAY button is pressed
let cardNoise = document.getElementById("cpubutton");
cardNoise.addEventListener("click", cardnoise);

//Function: to play cardnoise sound effect when PLAY button is clicked
function cardnoise() {
document.getElementById("cardnoise1").play();
}


//const holdPlay = setTimeout(cpuplay, 5000);


//Code to randomly display 1 cpu data card and three Player 1 decks

document.getElementById("cpubutton").onclick = function() {cpuplay()};

function cpuplay(random, random1, random2, random3) {
//deck = ["assets/images/carddeck/3_of_spades.png","assets/images/carddeck/2_of_hearts.png","assets/images/carddeck/4_of_spades.png","assets/images/carddeck/5_of_clubs.png"];
//deck1 = ["assets/images/carddeck/3_of_spades.png","assets/images/carddeck/2_of_hearts.png","assets/images/carddeck/4_of_spades.png","assets/images/carddeck/5_of_clubs.png"];
//deck2 = ["assets/images/carddeck/3_of_spades.png","assets/images/carddeck/2_of_hearts.png","assets/images/carddeck/4_of_spades.png","assets/images/carddeck/5_of_clubs.png"];
//deck3 = ["assets/images/carddeck/3_of_spades.png","assets/images/carddeck/2_of_hearts.png","assets/images/carddeck/4_of_spades.png","assets/images/carddeck/5_of_clubs.png"];
deck = ["assets/images/1.png","assets/images/2.png","assets/images/3.png","assets/images/4.png"];
deck1 = ["assets/images/1.png","assets/images/2.png","assets/images/3.png","assets/images/4.png"];
deck2 = ["assets/images/1.png","assets/images/2.png","assets/images/3.png","assets/images/4.png"];
deck3 = ["assets/images/1.png","assets/images/2.png","assets/images/3.png","assets/images/4.png"];
random = Math.floor(Math.random(deck) *deck.length);
random1 = Math.floor(Math.random(deck1) *deck1.length);
random2 = Math.floor(Math.random(deck2) *deck2.length);
random3 = Math.floor(Math.random(deck3) *deck3.length);
document.getElementById("cpudeck1").src = deck[random];
document.getElementById("p1deck1").src = deck1[random1];
document.getElementById("p1deck2").src = deck2[random2];
document.getElementById("p1deck3").src = deck3[random3];
//This code shows the card for 1 second before being hidden although data should be available to the CPU to run a comparison with the other P1 deck

setInterval(cardHidden, 700);
function cardHidden(){
document.getElementById("cpudeck1").style.visibility = "hidden";
}





/**
 * Onclick commands for the
 * the returned calculateCorrectAnswer array
 */
document.getElementById("p1deck1").onclick = function() {cardCheck1()};
document.getElementById("p1deck2").onclick = function() {cardCheck2()};
document.getElementById("p1deck3").onclick = function() {cardCheck3()};

function cardCheck1() {
var cpudeck1
var p1deck1
var random
var random1
random = document.getElementById("cpudeck1").value;
random1 = document.getElementById("p1deck1").value;
  
if (cpudeck1 == p1deck1){
    document.getElementById("p1window").innerHTML = "DECK 1 ELIMINATED!!!";
    document.getElementById("cardnoise1").play();
} else {
  document.getElementById("p1window").innerHTML = "TARGET MISSED!!!";
}
} 
function cardCheck2() {
var cpudeck1
var p1deck2

random = parseInt(document.getElementById("cpudeck1").innerHTML);
random2 = parseInt(document.getElementById("p1deck2").innerHTML);
if (cpudeck1 === p1deck2){
    document.getElementById("p1window").innerHTML = "DECK 2 ELIMINATED!!!";
    document.getElementById("cardnoise1").play();
} else {
  document.getElementById("p1window").innerHTML = "TARGET MISSED!!!";
}
}
function cardCheck3() {
  var cpudeck1//CHANGED VARIABLES TO CPUDECK1 AND P1DECK1
  var p1deck3
  
  random = parseInt(document.getElementById("cpudeck1").innerHTML);
  random3 = parseInt(document.getElementById("p1deck3").innerHTML);
  if (cpudeck1 === p1deck3){
      document.getElementById("p1window").innerHTML = "DECK 3 ELIMINATED!!!";
      document.getElementById("cardnoise1").play();
  } else {
    document.getElementById("p1window").innerHTML = "TARGET MISSED!!!";
  }
  }
}








//parseInt(document.getElementById("cpudeck1").value);
//parseInt(document.getElementById("p1deck1").value);
//let p1deck1 = random === random1;
//let cpudeck1 = random === random1;