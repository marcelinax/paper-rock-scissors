"use strict";

const paperBtn = document.querySelector(".btn-paper");
const scissorsBtn = document.querySelector(".btn-scissors");
const rockBtn = document.querySelector(".btn-rock");
const npcResult = document.querySelector(".npc-mov");
const btn = document.querySelectorAll(".btn");
const playerScoreEl = document.querySelector(".player-score");
const npcScoreEl = document.querySelector(".npc-score");

let playerMov;
let npcMov;
let winner;
let playerScore = 0;
let npcScore = 0;

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const drawComputerMovement = () => {
  const mov = getRandom(0, 3);
  switch (mov) {
    case 0:
      npcMov = "paper";
      break;
    case 1:
      npcMov = "scissors";
      break;
    case 2:
      npcMov = "rock";
      break;
  }
  npcResult.innerHTML = npcMov;
  return npcResult;
};

const checkWinner = (mov1, mov2) => {
  if (mov1 === "paper" && mov2 === "scissors") {
    winner = mov2;
  }
  if (mov1 === "scissors" && mov2 === "rock") {
    winner = mov2;
  }
  if (mov1 === "rock" && mov2 === "paper") {
    winner = mov2;
  }
  if (mov1 === "scissors" && mov2 === "paper") {
    winner = mov1;
  }
  if (mov1 === "rock" && mov2 === "scissors") {
    winner = mov1;
  }
  if (mov1 === "paper" && mov2 === "rock") {
    winner = mov1;
  }
  if (mov1 === mov2) winner = "draw";

  return winner;
};

const calcScore = () => {
  if (checkWinner(playerMov, npcMov) === playerMov) {
    playerScore++;
    playerScoreEl.innerHTML = playerScore;
  }

  if (checkWinner(playerMov, npcMov) === npcMov) {
    npcScore++;
    npcScoreEl.innerHTML = npcScore;
  }

  return playerScoreEl, npcScoreEl;
};

const btnFunc = (btn) => {
  document
    .querySelectorAll(".btn")
    .forEach((btn) => (btn.style.backgroundColor = ""));
  if (checkWinner(playerMov, npcMov) === playerMov)
    btn.style.backgroundColor = "#aaf683";
  if (checkWinner(playerMov, npcMov) === npcMov)
    btn.style.backgroundColor = "#ef233c";
  if (checkWinner(playerMov, npcMov) === "draw")
    btn.style.backgroundColor = "#ffea00";
};

const game = () => {
  drawComputerMovement();
  checkWinner(playerMov, npcMov);
  calcScore();
};

const paper = () => {
  paperBtn.addEventListener("click", function () {
    playerMov = "paper";
    game();
    btnFunc(paperBtn);
  });
};

const rock = () => {
  rockBtn.addEventListener("click", function () {
    playerMov = "rock";
    game();
    btnFunc(rockBtn);
  });
};

const scissors = () => {
  scissorsBtn.addEventListener("click", function () {
    playerMov = "scissors";
    game();

    btnFunc(scissorsBtn);
  });
};

const init = () => {
  scissors();
  paper();
  rock();
};

document.addEventListener("DOMContentLoaded", init);
