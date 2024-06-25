"use strict";
/*  Assignment Theme: Save the Earth (ste)
   CA2 assignment
   Save the Earth Javascript page
   Author: Caleb
   Date: 25/07/2023
   Filename: ste_text.js 
*/

/* Interactive button that allows the user to change the displayed quote upon being clicked*/

// Get references to the paragraph and button elements
const displayTextElement = document.getElementById('displayText');
const changeButton = document.getElementById('changeButton');

// Array of texts to be displayed
const texts = [
    '"The greatest threat to our planet is the belief that someone else will save it." - Robert Swan',
    '"It\'s not only what we do, but also what we do not do, for which we are accountable." - Molière',
    '"It does not matter how slowly you go as long as you do not stop." - Confucius',
    '"Fear is the reaction. Courage is the decision." - Winston Churchill'
];

let currentTextIndex = 0;

// Function to update the text based on the current index
function updateText() {
    displayTextElement.textContent = texts[currentTextIndex];
}

// Add a click event listener to the button
changeButton.addEventListener('click', function() {
    // Increment the index to show the next text
    currentTextIndex++;

    // If the index exceeds the array length, loop back to the start
    if (currentTextIndex >= texts.length) {
        currentTextIndex = 0;
    }

    // Update the text based on the current index
    updateText();
});