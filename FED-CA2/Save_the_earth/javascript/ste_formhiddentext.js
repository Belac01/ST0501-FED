"use strict";
/*  Assignment Theme: Save the Earth (ste)
   CA2 assignment
   Save the Earth Javascript page
   Author: Caleb
   Date: 25/07/2023
   Filename: ste_formhiddentext.js 
*/



/*  Dynamically show/hide the text box based on whether the "Others" checkbox is selected  */

// Get the "Others" checkbox and the textbox container
const othersCheckbox = document.getElementById('check5');
const textboxContainer = document.getElementById('textboxContainer');

// Add event listener to the "Others" checkbox
othersCheckbox.addEventListener('change', function() {
  if (this.checked) {
    // Show the textbox container if the "Others" checkbox is checked
    textboxContainer.style.display = 'block';
  } else {
    // Hide the textbox container if the "Others" checkbox is unchecked
    textboxContainer.style.display = 'none';
  }
});

