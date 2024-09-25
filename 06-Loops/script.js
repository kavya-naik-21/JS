console.log('Loops')


let number = 30;
let guess = 0;

do {
    let guess = parseInt(prompt("Guess a number")) 
    console.log("guess", guess)
    // creates prompt in browser
    if(guess == number) {
        alert("Winner")
        break;
    }
}while(guess != number)