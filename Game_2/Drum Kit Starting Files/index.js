
                                        //The first method is using this
                //------------------------------------- -------------------------------------


var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');
var kick = new Audio('sounds/kick-bass.mp3');
var crash = new Audio('sounds/crash.mp3');
var c= document.querySelectorAll(".drum").length;
console.log(c);
for (i=0 ; i<c;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    console.log(this.innerHTML);
    this.style.color = "white";
    var innerLetter = this.innerHTML;
    switch (innerLetter){
        case "w":
            tom1.play();
            break;
        case 'a':
            tom2.play();
            break;
        case 's':
            tom3.play();
            break;
        case 'd':
        tom4.play();
        break;
        case 'j':
        snare.play();
        break;
        case 'k':
        crash.play();
        break;
        case 'l':
        kick.play();
        break;
        default:
        
    }
});
}
                //------------------------------------- -------------------------------------
                            //The second method is using the keyboard