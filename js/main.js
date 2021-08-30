"use strict";

// DOM MANIPULATED VARIABLES
const introMessage = document.getElementById("intro-message");
const startBtn = document.getElementById("start-btn");
const againBtn = document.getElementById("again-btn");
const timeMessage = document.getElementById("time-message");
const exerciseName = document.getElementById("exercise-name");
// Countdown times for 10 seconds, 45 seconds and 15 seconds (not sure if i need all of them tbd)
const tenSecondTimer = document.getElementById("ten-second-timer");
// const fifteenSecondTimer = document.getElementById("fifteen-second-timer");
const fortyfiveSecondTimer = document.getElementById("fortfive-second-timer");
const countdownClock = document.getElementById("countdown-clock");
// Progress bar
const progressBar10 = document.getElementById("progress-bar-10");
const progressBar45 = document.getElementById("progress-bar-45");
// const progressBar15 = document.getElementById("progress-bar-15");

// Timer countdowns
let restTime = 10;
// let fifteenSeconds = 15;
let workoutTime = 45;

// Exercise array - 8 workouts
const exerciseArr = [
  "Squats",
  "Lunges",
  "Push-ups",
  "Burpees",
  "High Knees",
  "Dips",
  "Crunches",
  "Plank",
];
// console.log(exerciseArr.length);
// Random exercise
let randomExercise = Math.trunc(Math.random() * exerciseArr.length);
// console.log(randomExercise);
console.log(exerciseArr[randomExercise]);

// Time function - promise
function timer(count) {
  console.log(count);

  return new Promise((resolve) => {
    let counter = setInterval(() => {
      if (count < 0) {
        clearInterval(counter);
        resolve();
        return;
      } else {
        countdownClock.classList.remove("hidden");
        countdownClock.textContent = count;
      }
      count--;
    }, 1000);
  });
}
// Start button - what happens when it is clicked?
startBtn.addEventListener("click", function () {
  console.log("start button was clicked");

  startBtn.classList.add("hidden");
  introMessage.classList.add("hidden");

  // Random exercise for user
  exerciseName.textContent = exerciseArr[randomExercise];
  exerciseName.classList.remove("hidden");

  // Start message
  timeMessage.classList.remove("hidden");
  timeMessage.textContent = "Get ready...";

  // for (let i = 0; i < exerciseArr.length; i++) {
  //   console.log(exerciseArr[i]);
  // }

  // Run the timer function for 10, 45 and then 15 (maybe get rid of 15?)
  timer(restTime, (timeMessage.textContent = "Get ready...")).then(() =>
    timer(workoutTime, (timeMessage.textContent = "You can do it!"))
  );
});
