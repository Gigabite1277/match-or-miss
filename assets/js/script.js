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
  document.getElementById("countdown").innerHTML = "";
 // document.getElementById("hudwindow").innerHTML = wtbuilding650.png;
}
let image = wtbuilding

//document.getElementById("hudwindow").src = "wtbuilding650.png";
//document.getElementById("countdown").src = "wtbuilding650.png";
//document.getElementById("countdown").innerHTML = wtbuilding650.png;
//document.getElementById("hudwindow").src = ("assets/images/wtbuilding650.png");




