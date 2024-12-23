"use strict";

// Declaring constant variables to store references to the elements that will be updated by your code.
const bookAnswerEl = document.getElementById("book-answer")
const activityAnswerEl = document.getElementById("activity-answer")
const colorAnswerEl = document.getElementById("color-answer")
const submissionBtn = document.getElementById("submission-btn")

// Declare a constant variable named "book" and assign the name of your favorite book to that variable.
const book = "Trustful Surrender to Divine Providence"
let activity = "Bible Study"
let color = "Metalic Orange"
// Declare a mutable variable named "activity" and assign an activity to it.

function updateBookSentence() { // Sets the text inside the element with the id of book answer. 
    bookAnswerEl.innerText = book
}

function updateActivitySentence() {// Update this function 
activityAnswerEl.innerText = activity   // (hint: it will be similiar to the previous function)
}

function updateColorSentence() {
    // Update this function 
colorAnswerEl.innerText = color   // (hint: it will be similiar to the previous function)
}

function render() {
    // Finish writing this function
    updateBookSentence();
    updateActivitySentence();
    updateColorSentence();
}

submissionBtn.addEventListener("click", function () {// Calling the function that renders the update
    // when the button is clicked
    render();
})
