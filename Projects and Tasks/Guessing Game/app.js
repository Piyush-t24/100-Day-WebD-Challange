const max = prompt("Enter the max number ");
const random = Math.floor(Math.random() * max)+1;

let guess= prompt("guess the number");

while(true){
    if (guess == "quit"){
        console.log("user quit");
        break;
    }

    if (guess == random){
        console.log("You are right! Congrats!! random number was", random);
        break;
    }else if (guess < random){
        guess= prompt("Hints : your guess was too small. Please try again");
    }else{
        guess = prompt("Hints : your guess was too large. Please try again");
    }

    // else {
    //     guess = prompt("Your guess was wrong. Please try again");
    // }
}