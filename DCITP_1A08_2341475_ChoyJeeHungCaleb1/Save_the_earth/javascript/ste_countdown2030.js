"use strict";
/*  Assignment Theme: Save the Earth (ste)
   CA2 assignment
   Save the Earth Javascript page
   Author: Caleb
   Date: 25/07/2023
   Filename: ste_countdown2030.js 
*/

function countdownToYear2030() {
    const now = new Date();
    const year2030 = new Date(2030, 0, 1); // January 1, 2030 (month index starts from 0)
  
    const timeLeft = year2030 - now;
  
    // Calculate days, hours, minutes, and seconds left
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    const countdownElement = document.getElementById("year2030Countdown");
    countdownElement.innerHTML = `Time until the deadline for Singapore Green Plan 2030: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }
  
  countdownToYear2030();
  setInterval(countdownToYear2030, 1000); // Update the countdown every second