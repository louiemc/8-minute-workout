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
let tenSeconds = 10;
let fifteenSeconds = 15;
let fortyfiveSeconds = 45;

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
  // note: once the 10 second countdown is done, the startMessage will disappear

  // 10 Second Countdown Timer
  const countdownTenSeconds = setInterval(countdownTenSecondsTimer, 1000);
  // console.log(typeof countdownSeconds); // number
  function countdownTenSecondsTimer() {
    if (tenSeconds < 0) {
      clearInterval(countdownTenSeconds);
      document.getElementById("progressBar10").classList.add("hidden");
      startMessage.classList.add("hidden");

      // 45 Second Countdown Timer
      const countdownFortyfiveSeconds = setInterval(
        countdownFortyfiveSecondsTimer,
        1000
      );
      // console.log(typeof countdownSeconds); // number
      function countdownFortyfiveSecondsTimer() {
        if (fortyfiveSeconds < 0) {
          clearInterval(countdownFortyfiveSeconds);
          document.getElementById("progressBar45").classList.add("hidden");

          // 15 Second Countdown Timer
          const countdownFifteenSeconds = setInterval(
            countdownFifteenSecondsTimer,
            1000
          );
          // console.log(typeof countdownSeconds); // number
          function countdownFifteenSecondsTimer() {
            if (fifteenSeconds < 0) {
              clearInterval(countdownFifteenSeconds);
              document.getElementById("progressBar15").classList.add("hidden");
              countdownTenSecondsTimer(tenSeconds);
            } else {
              console.log(fifteenSeconds + " seconds");
              // console.log(typeof seconds); // number
              countdownClock.classList.remove("hidden");
              countdownClock.textContent = fifteenSeconds + " seconds";
              document
                .getElementById("progressBar15")
                .classList.remove("hidden");
              document.getElementById("progressBar15").value =
                15 - fifteenSeconds;
            }
            fifteenSeconds--;
          }
          countdownFifteenSecondsTimer(fifteenSeconds);
        } else {
          console.log(fortyfiveSeconds + " seconds");
          // console.log(typeof seconds); // number
          countdownClock.classList.remove("hidden");
          countdownClock.textContent = fortyfiveSeconds + " seconds";
          document.getElementById("progressBar45").classList.remove("hidden");
          document.getElementById("progressBar45").value =
            45 - fortyfiveSeconds;
        }
        fortyfiveSeconds--;
      }
      countdownFortyfiveSecondsTimer(fortyfiveSeconds);
    } else {
      console.log(tenSeconds + " seconds");
      // console.log(typeof seconds); // number
      countdownClock.classList.remove("hidden");
      countdownClock.textContent = tenSeconds + " seconds";
      document.getElementById("progressBar10").classList.remove("hidden");
      document.getElementById("progressBar10").value = 10 - tenSeconds;
    }
    tenSeconds--;
  }
  countdownTenSecondsTimer(tenSeconds);
});

// // 45 Second Countdown Timer
// const countdownFortyfiveSeconds = setInterval(
//   countdownFortyfiveSecondsTimer,
//   1000
// );
// // console.log(typeof countdownSeconds); // number
// function countdownFortyfiveSecondsTimer() {
//   if (fortyfiveSeconds < 0) {
//     clearInterval(countdownFortyfiveSeconds);
//     document.getElementById("progressBar45").classList.add("hidden");
//   } else {
//     console.log(fortyfiveSeconds + " seconds");
//     // console.log(typeof seconds); // number
//     countdownClock.classList.remove("hidden");
//     countdownClock.textContent = fortyfiveSeconds + " seconds";
//     document.getElementById("progressBar45").classList.remove("hidden");
//     document.getElementById("progressBar45").value = 45 - fortyfiveSeconds;
//   }
//   fortyfiveSeconds--;
// }
// countdownFortyfiveSecondsTimer(fortyfiveSeconds);

// // 15 Second Countdown Timer
// const countdownFifteenSeconds = setInterval(countdownFifteenSecondsTimer, 1000);
// // console.log(typeof countdownSeconds); // number
// function countdownFifteenSecondsTimer() {
//   if (fifteenSeconds < 0) {
//     clearInterval(countdownFifteenSeconds);
//     document.getElementById("progressBar15").classList.add("hidden");
//     countdownTenSecondsTimer(tenSeconds);
//   } else {
//     console.log(fifteenSeconds + " seconds");
//     // console.log(typeof seconds); // number
//     countdownClock.classList.remove("hidden");
//     countdownClock.textContent = fifteenSeconds + " seconds";
//     document.getElementById("progressBar15").classList.remove("hidden");
//     document.getElementById("progressBar15").value = 15 - fifteenSeconds;
//   }
//   fifteenSeconds--;
// }
// countdownFifteenSecondsTimer(fifteenSeconds);
