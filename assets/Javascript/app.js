

var questions = [
    {
      choices: [9, 10, 8, 7],
      correct: "8",
      text: 'How many planets are in our Solar System?'
      },
    {
      choices: ['Jupiter', 'Neptune', 'Mars', 'Saturn'],
      correct: "Jupiter",
      text: 'What is the largest planet in our Solar System?'
      },
     
    {
      choices: ['Venus', 'Earth', 'Mercury', 'Neptune'],
      correct: "Mercury",
      text: 'What is the smallest planet in our solar system?'
      },
    {
      choices: [3, 5, 4, 2],
      correct: "4",
      text: 'How many main groups of rings does Saturn have?'
    }
];

//console.log(questions);

var userScoreRight = 0;
var userScoreWrong = 0;
var unanswered = 0;
var count = 5;
var timerId = setInterval(countdown, 1000);
var questionNum = 0;



function countdown() {
  if (count <= 0) {
    clearTimeout(timerId);
    alert("times up")
    resetTimer();
    //alert("Time's Up!!")
  } else {
    $("#timer").text(count);
    count--;
  }

};

function resetTimer(){
  count = 5;
}



//when document is opened
$(document).ready(function() {
  $(".questions").hide();
  $(".choices").hide();
  $(".timer").hide();
  $(".alert").hide();
  $(".endGame").hide();
});

//on the click of the START button
$("#start").click(function() {
    console.log("work");
    $(".instructions").hide();
    $(".questions").show();
    $(".choices").show();
    $(".timer").show();
    renderNewQuestion()
    resetTimer();
    countdown();
});


  function renderNewQuestion() {
      $("#timer").text(count);
      $("#newQuestion").text(questions[questionNum].text);
      $("#a").text(questions[questionNum].choices[0]).parent().attr("data-choices", questions[questionNum].choices[0]);
      $("#b").text(questions[questionNum].choices[1]).parent().attr("data-choices", questions[questionNum].choices[1]);
      $("#c").text(questions[questionNum].choices[2]).parent().attr("data-choices", questions[questionNum].choices[2]);
      $("#d").text(questions[questionNum].choices[3]).parent().attr("data-choices", questions[questionNum].choices[3]);

      console.log(questions[questionNum].choices[0]);
  };




//DOM ELEMENTS
// var questionDiv = $('.questions')
// var answerDiv = $('.answer-container')
// var timerDiv = $('.timer')





// dom elements
// question-container
// answer-container
// timer


$(".choices button").on( "click", function(){
  //alert("click")
  var userGuess = $(this).attr("data-choices")
 // alert(userGuess)
 resetTimer();
 countdown();

 if(userGuess == questions[questionNum].correct){
  userScoreRight++
  updateUserRight()

 }else if (count <= 0){
  unanswered++
  updaterUnanswered()
  alert("times up")
  resetTimer();
  countdown();
 }else{
  userScoreWrong++
  updateUserWrong()
 }questionNum++ 

if (questionNum < questions.length){

 renderNewQuestion();
 updateUserRight();
 updateUserWrong();

}else{
  finalPage();
}

});

$("#startOver").click(function(){
  questionNum = 0;
  userScoreRight = 0;
  userScoreWrong = 0;
  unanswered = 0;

  resetTimer();
  countdown();
  renderNewQuestion();
  $(".endGame").hide();
  $(".questions").show();
  $(".choices").show();
  $(".timer").show();
});


function updateUserRight(){
  $("#correctAnswers").text(userScoreRight);
  console.log(updateUserRight);

}

function updateUserWrong(){
  $("#incorrectAnswers").text(userScoreWrong);
  console.log(updateUserWrong);
}

function updaterUnanswered(){
  $("#unansweredQuestions").text(unanswered);
}

function finalPage(){
  $(".endGame").show();
  $(".questions").hide();
  $(".choices").hide();
  $(".timer").hide();
};






/*
trivia game

** Event Bubbling**

- questions is an array of question objects
  - question object
    - choices for each
    - a correct answer
    - question text


- user score (how many correct) - array of booleans or null for skipped
- timer - int that decrements every second by SetInterval()


use for loop to iterate over questions

when loop finishes, call end game function


1. timer starts & question is displayed to user with mulitple choice answers

2. user clicks an answer

3a. check if answer is correct
    if correct:
      handle correct answer
        push true value into score array

    if false:
      handle wrong answer
        push false value into score array

    proceed to next question

3b. timer runs out:
      push null value into score array 
      proceed to next question

4. repeat steps with next question until end of question array



5. Out of questions:
    handle end game.
      inform user of score (details?)
      clear game variables
      - offer chance to revist skipped questions




*/