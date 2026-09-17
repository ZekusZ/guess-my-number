"use strict";

document.addEventListener("click", function () {
  document.querySelector(".guess").focus();
});

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";

    // when gussing more than 20 or less than 1
  } else if (guess > 20 || guess < 0) {
    document.querySelector(".message").textContent =
      "Please Guess between 1 and 20 !";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number 🎉🎉";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".check").disabled = true;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Lost The Game! 💥💥";
      document.querySelector(".check").disabled = true;
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#c7333c";
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Lost The Game! 💥💥";
      document.querySelector(".check").disabled = true;
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#c7333c";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".check").disabled = false;
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.querySelector(".check").click();
  }
});
