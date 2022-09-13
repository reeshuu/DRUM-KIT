
var number=document.querySelectorAll(".drum").length;
for(var i=0;i<number;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var btninnerHtml=this.innerHTML;
   makesound(btninnerHtml);
   buttonAnimation(btninnerHtml);

   

});
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});
function makesound(key)
{
switch(key){
    case "k":
     var crash=new Audio("crash.mp3");
    crash.play();
     break;
 
     case "w":
     var tom1=new Audio("tom-1.mp3");
    tom1.play();
     break;
 
     case "a":
     var tom2=new Audio("tom-2.mp3");
    tom2.play();
     break;
 
     case "s":
     var tom3=new Audio("tom-3.mp3");
    tom3.play();
     break;
 
     case "d":
     var tom4=new Audio("tom-4.mp3");
    tom4.play();
     break;
 
     
     case "j":
     var snare=new Audio("snare.mp3");
    snare.play();
    break;


    case "d":
        var tom4=new Audio("tom-4.mp3");
       tom4.play();
       break;
    
       
       case "l":
        var kick=new Audio("kick-bass.mp3");
       kick.play();
       break;
        default:
            console.log("btninnerHtml");
    }
}
function buttonAnimation(currKey)
{
var activeButton=document.querySelector("."+ currKey);
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed")
},100);
}