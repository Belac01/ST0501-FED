"use strict";
/*  Assignment Theme: Save the Earth (ste)
   CA2 assignment
   Save the Earth Javascript page
   Author: Caleb
   Date: 25/07/2023
   Filename: ste_countdownEarthday.js 
*/

function countdownToEarthDay() {
    const now = new Date();
    const nextEarthDay = new Date(now.getFullYear(), 3, 22); // Earth Day is on April 22nd (month index starts from 0)
  
    // If Earth Day for this year has already passed, calculate the countdown for next year
    if (now > nextEarthDay) {
      nextEarthDay.setFullYear(nextEarthDay.getFullYear() + 1);
    }
  
    const timeLeft = nextEarthDay - now;
  
    // Calculate days, hours, minutes, and seconds left
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    const countdownElement = document.getElementById("earthDayCountdown");
    countdownElement.innerHTML = `Time until the next Earth Day: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }
  
  countdownToEarthDay();
  setInterval(countdownToEarthDay, 1000); // Update the countdown every second