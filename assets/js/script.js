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
