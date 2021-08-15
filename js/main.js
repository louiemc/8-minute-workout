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
const countdownClock = document.getElementById("countdown-clock");

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

  // Start message
  startMessage.classList.remove("hidden");
  startMessage.textContent = "Starts in...";

  // 10 second countdown to prep for exercise -- maybe separate functions for the timers? -- add a progress bar? look into
  // use the timer countdown variables and declare a function
  // const tenSecondCountdown = setInterval(function (tenSeconds) {
  //   if (tenSeconds <= 0) {
  //     clearInterval(tenSecondCountdown);
  //     // return;
  //   } else {
  //     countdownClock.textContent = tenSeconds + " seconds";
  //   }
  //   tenSeconds--;
  // }, 1000);
  // if the timer is less than or equal to 0, hide the countdown
  // else show the next countdown
  // decrement the timer

  // 45 second countdown to do exercise

  // 15 second countdown to rest

  const countdownSeconds = setInterval(countdownTimer, 1000);
  function countdownTimer(seconds) {
    if (seconds <= 0) {
      clearInterval(countdownSeconds);
      return; // countdownSeconds ended, so do something...come back to this
    } else {
      console.log(seconds + " seconds");
      countdownClock.classList.remove("hidden");
      countdownClock.textContent = seconds + " seconds";
    }
    seconds--;
  }
  countdownTimer(tenSeconds);
});
