"use strict";
/*  Assignment Theme: Save the Earth (ste)
   CA2 assignment
   Save the Earth Javascript page
   Author: Caleb
   Date: 25/07/2023
   Filename: ste_hiddentext.js 
*/

/* Hidden content button for additional or extra content */

// Get references to the button and hidden content elements
const toggleButton = document.getElementById('toggleButton');
const hiddenContent = document.getElementById('hiddenContent');

// Function to toggle the visibility of the content section
function toggleContent() {
    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
    } else {
        hiddenContent.style.display = 'none';
    }
}

// Add a click event listener to the button
toggleButton.addEventListener('click', toggleContent);