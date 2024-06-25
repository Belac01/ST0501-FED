"use strict";
/*  Assignment Theme: Save the Earth (ste)
   CA2 assignment
   Save the Earth Javascript page
   Author: Caleb
   Date: 25/07/2023
   Filename: ste_timedate.js
*/

// Get a reference to the placeholder element
const dateTimeDisplay = document.getElementById('dateTimeDisplay');

// Function to display the current date and time
function displayCurrentDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    dateTimeDisplay.textContent = formattedDateTime;
}

// Update the date and time immediately when the page loads
displayCurrentDateTime();

// Update the date and time every second (1000 milliseconds)
setInterval(displayCurrentDateTime, 1000);