
//this variable selects the class of the button element
let drumElement = document.querySelectorAll(".drum")

//since the class is multiple., there is a  loop through instead of calling through the array of buttons one after the other
for (let i = 0; i < drumElement.length; i++) {
    
    //adds the evnt listener to any of the [i] button through the click event and a functions that checks if the ...
    document.querySelectorAll("button")[i].addEventListener("click", function (){


        // this.style.color = "white"

        //this variable selects the inner HTMl of the button
        let buttonClick = this.innerHTML

        //queries the make sound functon below and passes the selected inner HTMl above into the switch statement
        makeSound(buttonClick);

        // if (buttonClick = "w"){
        //     var tom1 = new Audio("sounds/tom-1.mp3")
        //         tom1.play();
                
        // }

        //this switch case statement below is the same thing with the if statement above

       buttonAnimation(buttonClick);

    } );

    
   
    
}

//adds an event listner on the whole document(page) through the keyboard press event and using the event class with the [key] property as the meduim between the keyboard and the button by triggering the innerhtml that corresponds to the key pressed
document.addEventListener("keydown", function (event) {
    
    makeSound(event.key)

    buttonAnimation(event.key)

    }
)



function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick.mp3")
            kick.play();
            break;
            
            default:
                console.log(buttonClick)
            break;
    }
}




// function playSound(){
//     var audio = new Audio("sounds/tom-1.mp3")
//     audio.play();
// };


function buttonAnimation(currentKey) {


   let activeButton = document.querySelector("." + currentKey)
     activeButton.classList.add("pressed");

     setTimeout(function () {
        activeButton.classList.remove("pressed")
     }, 100);

     
}