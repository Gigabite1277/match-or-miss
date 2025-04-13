


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

function cpuplay() {
deck = ["assets/images/carddeck/3_of_spades.png","assets/images/carddeck/2_of_hearts.png","assets/images/carddeck/4_of_spades.png","assets/images/carddeck/5_of_clubs.png"];
deck1 = ["assets/images/carddeck/3_of_spades.png","assets/images/carddeck/2_of_hearts.png","assets/images/carddeck/4_of_spades.png","assets/images/carddeck/5_of_clubs.png"];
deck2 = ["assets/images/carddeck/3_of_spades.png","assets/images/carddeck/2_of_hearts.png","assets/images/carddeck/4_of_spades.png","assets/images/carddeck/5_of_clubs.png"];
deck3 = ["assets/images/carddeck/3_of_spades.png","assets/images/carddeck/2_of_hearts.png","assets/images/carddeck/4_of_spades.png","assets/images/carddeck/5_of_clubs.png"];
random = Math.floor(Math.random(deck) *deck.length);
random1 = Math.floor(Math.random(deck1) *deck1.length);
random2 = Math.floor(Math.random(deck2) *deck2.length);
random3 = Math.floor(Math.random(deck3) *deck3.length);
document.getElementById("cpudeck1").src = deck[random];
document.getElementById("p1deck1").src = deck1[random1];
document.getElementById("p1deck2").src = deck2[random2];
document.getElementById("p1deck3").src = deck3[random3];
//This code shows the card for 1 second before being hidden although data should  be available to the CPU
setInterval(cardHidden, 700);
function cardHidden (){
document.getElementById("cpudeck1").style.visibility = "hidden";
}

//cpuplay()
//document.getElementById("cpubutton").onclick = function() {cpuplay()};






//document.getElementById("deck1").onclick = function() {cardCheck};



//setInterval(cardHidden, 500);
//cardHidden (cardHide)
//cardHide = document.getElementById("cpudeck1").style.visibility = "visable";
//cardHide = document.getElementById("cpudeck1").style.visibility = "hidden";
}



//Event listener: to play delay the card being hidden onscreen PLAY button is pressed


//let cardBlink = document.getElementById("cpubutton");
//cardBlink.addEventListener("click", cardHidden);


//const cardHide = setInterval(cardHidden, 9000);
//const cardShow = setInterval(cardHidden, 1000);

//function cardHidden(cardHide){
//cardShow = document.getElementById("cpudeck1").style.visibility = "visable";
//cardHide = document.getElementById("cpudeck1").style.visibility = "hidden";

//}



//Code used to compare cpu deck to the Player 1 deck
//let deck1 = document.getElementById("deck1");
//  .addEventListener("click", cardCheck);




//let pl = document.getElementById("p1deck2");
//cardClick2.addEventListener("click", cardCheck);

//let cardClick3 = document.getElementById("p1deck3");
//cardClick3.addEventListener("click", cardCheck);










// Code used to compare cpu deck to the Player 1 deck
//let deck = document.getElementById("deck");
//cardCheck.addEventListener("click", cardCheck);

//let deck1 = document.getElementById("deck1");
//cardCheck.addEventListener("click", cardCheck);

//let deck2 = document.getElementById("deck2");
//cardCheck.addEventListener("click", cardCheck);

//let deck3 = document.getElementById("deck3");
//cardCheck.addEventListener("click", cardCheck);
 //function cardCheck()
  //if (deck === deck1) {
      //getElementById("p1window").innerHTML = ("Well done! all targets eleiminated");
  //if (deck === deck2) 
        //getElementById("p1window").innerHTML = ("Well done! all targets eleiminated");
  //if (deck === deck3) {
          //getElementById("p1window").innerHTML = ("Well done! all targets eleiminated");
 //} else {
     //getElementById("p1window").innerHTML = ("You IDIOT! You got everyone kiled");
  //}



























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
//d//document.getElementById("cpudeck1").innerHTML = deck1[random];ocument.getElementById("cpudeck1").src = "assets/images/carddeck/2_of_diamonds.png";
//document.getElementById("cpudeck").innerHTML = imageArray[randomPic];
//document.getElementById("cpudeck").innerHTML = "images/carddeck/2_of_diamonds.png";
//const randompic = Math.floor(Math.random() *5)/document.getElementById("cpudeck").src = "assets/images/carddeck/3_of_spades.png";
//imagearray = ["2_of_diamonds.png","2_of_hearts.png","4_of_spades","5_of_Clubs"]
//
//}












