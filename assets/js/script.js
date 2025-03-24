var c = setInterval(showclock,1000)
function showclock(){
var seconds = document.getElementById('hudwindow').textContent;
  seconds--;
document.getElementById('hudwindow').innerHTML=seconds;
  if(seconds==0)
    {
    clearInterval(c);
      document.getElementById('hudwindow').innerHTML="GO!";
    }
}

document.getElementById("countdown").play(countdown.mp3);