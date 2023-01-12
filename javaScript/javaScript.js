"use strict";

//scroll slowly
function Scroll(id) {
  event.preventDefault();
  var element = document.getElementById(id); 
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

//checks that the phone number is in the right format
function validatePhoneNumber() {
    let phone = document.getElementById("Phone").value;
    // Regular expression to match most phone number formats
    let phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (phoneNumberPattern.test(phone)) {
        return true;
    }
    else {
        alert("Invalid Phone Number!");
        return false;
    }
}


//quiz
function submitQuiz() {
    // get each answer score
    const question1 = document.querySelector('input[name="question1"]:checked').value;
    const question2 = document.querySelector('input[name="question2"]:checked').value;
    const question3 = document.querySelector('input[name="question3"]:checked').value;
    const question4 = document.querySelector('input[name="question4"]:checked').value;

    // initialize variables for each answer
    let score = 0;
    let correctAnswers = "";
    let incorrectAnswers = "";

    // check if correct answer and increment score
    if (question1 === "beige") {
      score++;
      correctAnswers += "1 ";
    } else {
      incorrectAnswers += "1 ";
    }
    
    if (question2 === "dog") {
      score++;
      correctAnswers += "2 ";
    } else {
      incorrectAnswers += "2 ";
    }
    
    if (question3 === "salad") {
      score++;
      correctAnswers += "3 ";
    } else {
      incorrectAnswers += "3 ";
    }

    if (question4 === "175") {
        score++;
        correctAnswers += "4 ";
      } else {
        incorrectAnswers += "4 ";
      }

    // display results
    const results = document.getElementById("results");
    results.innerHTML = `You scored ${score} out of 4 <br> Correct answers: ${correctAnswers} <br> Incorrect answers: ${incorrectAnswers}`;
}