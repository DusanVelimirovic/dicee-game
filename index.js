//get first random number
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//get first image source
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

//get second random number
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//get second image source
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];

//get first player
var player1 = document.querySelectorAll("p")[0];

//get second player
var player2 = document.querySelectorAll("p")[1];

//select result
var result = document.querySelector("h1");

function giveScore(){
    if(randomNumber1 > randomNumber2){
        return result.innerHTML = "Player 1 Win";
    } else if(randomNumber2 > randomNumber1){
        return result.innerHTML = "Player 2 Win";
    } else {
        return result.innerHTML = "Tied";
    }
}

//change dice
function changeDice1(){
    image1.setAttribute("src", randomImageSource);
}

function changeDice2(){
    image2.setAttribute("src", randomImageSource2);
    giveScore();
}

//add event listeners to players
player1.addEventListener("click", changeDice1);
player2.addEventListener("click", changeDice2);







function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }



//clickMe.addEventListener("click", giveScore);









