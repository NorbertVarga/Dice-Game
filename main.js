const header = document.querySelector("#main-header");
const firstDice = document.querySelector("#first-dice img");
const secondDice = document.querySelector("#second-dice img");
const playButton = document.querySelector("#play");

function playTheGame() {
    let randomNumber1 = Math.floor(Math.random() * 6 + 1)
    console.log(randomNumber1);
    firstDice.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    
    let randomNumber2 = Math.floor(Math.random() * 6 + 1)
    console.log(randomNumber2);
    secondDice.setAttribute("src", "images/dice" + randomNumber2 + ".png");
    
    
    if (randomNumber1 === randomNumber2) {
        header.innerHTML = "Thats a DRAW";
    } else if (randomNumber1 > randomNumber2) {
        header.innerHTML = "Player 1 is the winner"
    } else {
        header.innerHTML = "Player 2 is the winner"
    }
}

playButton.addEventListener("click", playTheGame);