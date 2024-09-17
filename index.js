// First player dice
let randomNumber1 = Math.floor(Math.random() * 6 + 1);

let randomImageSource = "images/dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// Second player dice
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

// check if player one win
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Ark Wins!";
  // Check if player two win
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "🚩Kabia Wins!";
  // Check if there is a draw
} else {
  document.querySelector("h1").textContent = "🪢Draw!";
}
