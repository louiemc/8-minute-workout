"use strict";

// DOM MANIPULATED VARIABLES
const introMessage = document.getElementById("intro-message");
const startBtn = document.getElementById("start-btn");
const againBtn = document.getElementById("again-btn");
const startMessage = document.getElementById("start-message");
const exerciseName = document.getElementById("exercise-name");
// Countdown times for 10 seconds, 45 seconds and 15 seconds (not sure if i need all of them tbd)
const tenSecondTimer = document.getElementById("ten-second-timer");
const fifteenSecondTimer = document.getElementById("fifteen-second-timer");
const fortyfiveSecondTimer = document.getElementById("fortfive-second-timer");

// Timer countdowns
const tenSeconds = 10;
const fifteenSeconds = 15;
const fortyfiveSeconds = 45;

// Exercise array - 8 workouts
const exerciseArr = ["ex1", "ex2", "ex3", "ex4", "ex5", "ex6", "ex7", "ex8"];
console.log(exerciseArr.length);
// Random exercise
let randomExercise = Math.trunc(Math.random() * exerciseArr.length);
console.log(randomExercise);
console.log(exerciseArr[randomExercise]);

// Start button - what happens when it is clicked?
startBtn.addEventListener("click", function () {
  console.log("start button was clicked");

  startBtn.classList.add("hidden");
  introMessage.classList.add("hidden");

  // Random exercise for user
  exerciseName.textContent = exerciseArr[randomExercise];
  exerciseName.classList.remove("hidden");
});
