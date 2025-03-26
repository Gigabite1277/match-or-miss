var c = setInterval(showclock,1000)
 function showclock(){
 var seconds = document.getElementById('countdown').textContent;
   seconds--;
 document.getElementById('countdown').innerHTML=seconds;
   if(seconds==0)
     {
     clearInterval(c);
       document.getElementById('countdown').innerHTML="GO!";
     }
 }
 
 document.getElementById('countdownaudio').play();
 setTimeout(timer, 6000);
 
 function timer() {
  document.getElementById("countdown").innerHTML = ""
}
document.getElementById("wtbuilding").src = "assets/images/wtbuilding650.png";
