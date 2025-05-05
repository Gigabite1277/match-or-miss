

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

document.getElementById("hudwindow").style.backgroundImage = "url(assets/images/greenhud350.png)";

//Military drums - Background soundtrack.
document.getElementById("militarydrums").play();

//Event listener: to play cardnoise.mp3 Sound fx when cpu PLAY button is pressed
let cardNoise = document.getElementById("cpubutton");
cardNoise.addEventListener("click", cardnoise);

//Event listener: to reveal the hidden card when the user makes a selection.
document.getElementById("p1deck1").addEventListener("click", cardReveal);
document.getElementById("p1deck2").addEventListener("click", cardReveal);
document.getElementById("p1deck3").addEventListener("click", cardReveal);

//Function: to play cardnoise sound effect when PLAY button is clicked
function cardnoise() {
document.getElementById("cardnoise1").play();
}


//const holdPlay = setTimeout(cpuplay, 5000);


//Code to randomly display 1 cpu deck and three Player 1 decks 1-3

document.getElementById("cpubutton").onclick = function() {cpuplay()};

function cpuplay(random, random1, random2, random3) {

  
deck = ["assets/images/newdeck/2_of_diamonds.png","assets/images/newdeck/3_of_diamonds.png","assets/images/newdeck/3_of_hearts.png","assets/images/newdeck/10_of_diamonds.png","assets/images/newdeck/10_of_diamonds.png", "assets/images/newdeck/ace_of_spades2.png","assets/images/newdeck/jack_of_clubs2.png","assets/images/newdeck/jack_of_diamonds2.png","assets/images/newdeck/king_of_clubs2.png", "assets/images/newdeck/king_of_diamonds2.png","assets/images/newdeck/king_of_diamonds2.png","assets/images/newdeck/queen_of_hearts2.png"];
deck1 = ["assets/images/newdeck/2_of_diamonds.png","assets/images/newdeck/3_of_diamonds.png","assets/images/newdeck/3_of_hearts.png","assets/images/newdeck/10_of_diamonds.png","assets/images/newdeck/10_of_diamonds.png", "assets/images/newdeck/ace_of_spades2.png","assets/images/newdeck/jack_of_clubs2.png","assets/images/newdeck/jack_of_diamonds2.png","assets/images/newdeck/king_of_clubs2.png", "assets/images/newdeck/king_of_diamonds2.png","assets/images/newdeck/king_of_diamonds2.png","assets/images/newdeck/queen_of_hearts2.png"];
deck2 = ["assets/images/newdeck/2_of_diamonds.png","assets/images/newdeck/3_of_diamonds.png","assets/images/newdeck/3_of_hearts.png","assets/images/newdeck/10_of_diamonds.png","assets/images/newdeck/10_of_diamonds.png", "assets/images/newdeck/ace_of_spades2.png","assets/images/newdeck/jack_of_clubs2.png","assets/images/newdeck/jack_of_diamonds2.png","assets/images/newdeck/king_of_clubs2.png", "assets/images/newdeck/king_of_diamonds2.png","assets/images/newdeck/king_of_diamonds2.png","assets/images/newdeck/queen_of_hearts2.png"];
deck3 = ["assets/images/newdeck/2_of_diamonds.png","assets/images/newdeck/3_of_diamonds.png","assets/images/newdeck/3_of_hearts.png","assets/images/newdeck/10_of_diamonds.png","assets/images/newdeck/10_of_diamonds.png", "assets/images/newdeck/ace_of_spades2.png","assets/images/newdeck/jack_of_clubs2.png","assets/images/newdeck/jack_of_diamonds2.png","assets/images/newdeck/king_of_clubs2.png", "assets/images/newdeck/king_of_diamonds2.png","assets/images/newdeck/king_of_diamonds2.png","assets/images/newdeck/queen_of_hearts2.png"];
random = Math.floor(Math.random(deck) *deck.length);
random1 = Math.floor(Math.random(deck1) *deck1.length);
random2 = Math.floor(Math.random(deck2) *deck2.length);
random3 = Math.floor(Math.random(deck3) *deck3.length);
document.getElementById("cpudeck1").src = deck[random];
document.getElementById("p1deck1").src = deck1[random1];
document.getElementById("p1deck2").src = deck2[random2];
document.getElementById("p1deck3").src = deck3[random3];

function randomValue() {
  return random  
  }
 function randomValue1() {
  return random1  
    }
    function randomValue2() {
      return random2  
        }
        function randomValue3() {
          return random3  
            }
/**
 *This code shows the card for 1 second before being hidden although data should be available 
 *to the CPU to run a comparison with the other P1 deck
 */
setTimeout(cardHidden, 1000);
function cardHidden(){
document.getElementById("cpudeck1").style.visibility = "hidden";
}

/**
 * Onclick commands for the returned calculateCorrectAnswer array.
 * 
 */
document.getElementById("p1deck1").onclick = function() {cardCheck1()};
document.getElementById("p1deck2").onclick = function() {cardCheck2()};
document.getElementById("p1deck3").onclick = function() {cardCheck3()};
/**
 * Code for the ther cardCheck function to check if cpudeck1(random) is the same as 
 * the p1deck1, p1deck2, p1deck3.
 * There are 3 cardCheck functions, as the human has three decks to make a select one
 * card from.
 */




function cardCheck1(random, random1) {
  
random = document.getElementById("cpudeck1").innerHTML = randomValue();
random1 = document.getElementById("p1deck1").innerHTML = randomValue1();

if (random === random1){
    document.getElementById("status").innerHTML = "MATCH";
    document.getElementById("match-sound").play();
    document.getElementById("cpudeck1").innerHTML = cardReveal();
       
    
} else {
  document.getElementById("status").innerHTML = "MISS";
  document.getElementById("miss-sound").play();
  document.getElementById("health").innerHTML = healthDeduct(); 
  //document.getElementById("health").innerHTML = --health;
  
  }
}

function cardCheck2(random, random2) {
 
  random = document.getElementById("cpudeck1").innerHTML = randomValue();
  random2 = document.getElementById("p1deck2").innerHTML = randomValue2();
  
    
  if (random === random2){
      document.getElementById("status").innerHTML = "MATCH";
      document.getElementById("match-sound").play();
      document.getElementById("cpudeck1").innerHTML = cardReveal();
      
     
  } else {
    document.getElementById("status").innerHTML = "MISS";
    document.getElementById("miss-sound").play();
    document.getElementById("health").innerHTML = healthDeduct();
   // document.getElementById("health").innerHTML = --health;
    
    } 
   
  } 
  function cardCheck3(random, random3) {
   
    random = document.getElementById("cpudeck1").innerHTML = randomValue();
    random3 = document.getElementById("p1deck3").innerHTML = randomValue3();
    
      
    if (random === random3){
        document.getElementById("status").innerHTML = "MATCH";
        document.getElementById("match-sound").play();
        document.getElementById("cpudeck1").innerHTML = cardReveal();
        
    } 
  else {
      document.getElementById("status").innerHTML = "MISS";
      document.getElementById("miss-sound").play();
      document.getElementById("health").innerHTML = healthDeduct();
      //document.getElementById("health").innerHTML = --health;
      
                }
               
    } 
  }

function cardReveal(){
document.getElementById("cpudeck1").style.visibility = "";
}



function healthDeduct(health) {
  var health = 1;
     if (health > 0)
      --health;
            document.getElementById("health").innerHTML =  health;
            
        if (health === 0) {
            document.getElementById("status").innerHTML = "Game Over";
            // Additional logic to end the game
        }
    }
  
  

