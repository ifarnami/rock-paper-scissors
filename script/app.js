import {
  paperElement,
  rockElement,
  scissorsElement,
} from "./elementCreator.js";
import { generateComputerChoice, compareChoices } from "./helpers.js";

const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const timer = document.querySelector("#timer");
const resultWrapper = document.querySelector("#result-wrapper");
const result = document.querySelector("#result");
const chosenItemPlayerWrapper = document.querySelector(
  "#chosen-item-player-wrapper"
);
const chosenItemPlayer = document.querySelector("#chosen-item-player");
const chosenItemComputerWrapper = document.querySelector(
  "#chosen-item-computer-wrapper"
);
const chosenItemComputer = document.querySelector("#chosen-item-computer");
const items = document.querySelectorAll(".choice");
let intervalId;

const choices = ["🪨", "📃", "✂️"];

const initialState = {
  userScore: 0,
  computerScore: 0,
  time: 5,
  playersChoice: null,
  computerChoice: null,
};

window.addEventListener("DOMContentLoaded", () => {
  countDown(initialState.time, timer);
});

const countDown = (time, element) => {
  intervalId = setInterval(() => {
    time--;
    element.textContent = time;

    if (time === 0) {
      clearInterval(intervalId);
      element.textContent = "0 - You ran out of time!";
      items.forEach((item) => {
        item.disabled = true;
      });
    }
  }, 1000);
};

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    const { textContent } = e.target;
    let { computerChoice, playersChoice } = initialState;

    playersChoice = textContent;

    computerChoice = generateComputerChoice(choices);

    console.log("Computer:", computerChoice);
    console.log("Player:", playersChoice);

    switch (computerChoice) {
      case "🪨":
        chosenItemComputer.innerHTML = rockElement;
        break;
      case "📃":
        chosenItemComputer.innerHTML = paperElement;
        break;
      case "✂️":
        chosenItemComputer.innerHTML = scissorsElement;
        break;

      default:
        throw new Error("Something went wrong!");
    }

    switch (textContent) {
      case "🪨":
        chosenItemPlayer.innerHTML = rockElement;
        break;

      case "📃":
        chosenItemPlayer.innerHTML = paperElement;
        break;

      case "✂️":
        chosenItemPlayer.innerHTML = scissorsElement;
        break;

      default:
        throw new Error("Item selected is not available!");
    }

    const comparedResult = compareChoices(playersChoice, computerChoice);

    result.textContent = comparedResult;

    comparedResult !== "Draw!🟰" && comparedResult === "You Loose!🏳️"
      ? initialState.computerScore++
      : initialState.userScore++;

    computerScore.textContent = initialState.computerScore;
    playerScore.textContent = initialState.userScore;

    chosenItemPlayerWrapper.classList.replace("hidden", "flex");
    chosenItemComputerWrapper.classList.replace("hidden", "flex");
    resultWrapper.classList.remove("hidden");
  });
});
