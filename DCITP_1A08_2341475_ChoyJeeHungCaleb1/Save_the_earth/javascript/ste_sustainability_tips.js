"use strict";
/*  Assignment Theme: Save the Earth (ste)
   CA2 assignment
   Save the Earth Javascript page
   Author: Caleb
   Date: 25/07/2023
   Filename: ste_sustainablity_tips.js 
*/

// Array of sustainable practices
const sustainabilityTips = [
    "Reduce, Reuse, Recycle: Opt for reusable items, recycle materials, and minimize waste.",
    "Conserve Water: Turn off faucets when not in use, fix leaks, and use water-saving appliances.",
    "Save Energy: Use energy-efficient light bulbs, appliances, and unplug devices when not in use.",
    "Choose Sustainable Transportation: Walk, bike, carpool, or use public transportation to reduce emissions.",
    "Plant Trees: Trees help absorb carbon dioxide and support biodiversity.",
    "Support Local and Sustainable Products: Buy locally-produced goods and those with eco-friendly certifications.",
    "Reduce Meat Consumption: Consider a plant-based diet to lower greenhouse gas emissions.",
    "Educate Others: Spread awareness about sustainable practices and environmental conservation.",
    "Practice Minimalism: Buy only what you need and avoid excessive consumption.",
    "Use Renewable Energy: Explore solar, wind, or hydroelectric power for sustainable energy sources."
];

// Get references to the button and placeholder element
const showTipButton = document.getElementById('showSustainabilityTip');
const tipDisplay = document.getElementById('sustainabilityTipDisplay');

// Function to display a random sustainable practice
function showRandomSustainabilityTip() {
    const randomIndex = Math.floor(Math.random() * sustainabilityTips.length);
    tipDisplay.textContent = sustainabilityTips[randomIndex];
}

// Add a click event listener to the button
showTipButton.addEventListener('click', showRandomSustainabilityTip);