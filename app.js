var count_length = document.querySelectorAll(".drum").length;
for(var i=0;i<count_length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var dab = this.innerHTML;
    checkplz(dab);
    buttonckicked(dab); });


}
document.addEventListener("keydown", function(event) {
  checkplz(event.key);
  buttonckicked(event.key); });

function checkplz(maau){
 switch (maau)
  {
    case "w":
    {   var aud = new Audio("sounds/tom-1.mp3");
        aud.play(); } break;
    case "a":
    {   var aud = new Audio("sounds/tom-2.mp3");
        aud.play(); } break;
    case "s":
    {   var aud = new Audio("sounds/tom-3.mp3");
        aud.play(); } break;
    case "d":
    {   var aud = new Audio("sounds/tom-4.mp3");
        aud.play(); } break;
    case "j":
    {   var aud = new Audio("sounds/snare.mp3");
        aud.play(); } break;
    case "k":
    {   var aud = new Audio("sounds/crash.mp3");
        aud.play(); } break;
    case "l":
    {   var aud = new Audio("sounds/kick-bass.mp3");
        aud.play(); } break;
  }
}
function buttonckicked(num){
  activebutton = document.querySelector("."+num);
  activebutton.classList.add("pressed");
  setTimeout(function(){
  activebutton.classList.remove("pressed");} , 100);
}
