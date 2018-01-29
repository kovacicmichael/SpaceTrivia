

var questions = {
    questionOne: {
      choices: [9, 10, 8, 7],
      correct: 2,
      text: 'How many planets are in our Solar System?'
      },
    questionTwo: {
      choices: ['Jupiter', 'Neptune', 'Mars', 'Saturn'],
      correct: 0,
      text: 'What is the largest planet in our Solar System?'
      },
    questionThree: 
    {
      choices: ['Venus', 'Earth', 'Mercury', 'Neptune'],
      correct: 2,
      text: 'What is the smallest planet in our solar system?'
    }
};

var userScoreRight = 0;
var userScoreWrong = 0;
var count = 30;
var counter = setInterval(timer(), 1000);


function timer() {

  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }
};

Object.keys(questions.text).forEach(function(key) {

  console.log(key, questions[key]);

});

//DOM ELEMENTS
// var questionDiv = $('.questions')
// var answerDiv = $('.answer-container')
// var timerDiv = $('.timer')


// console.log(questions.questionOne.text)


// dom elements
// question-container
// answer-container
// timer


// function game() {
//   for(var i=0; i < questions.length; i++) {
//     startTimer()
//     renderQuestion(questions[i])
//   }

// }


$(document).ready(function() {
  $(".questions").hide();
  $(".choices").hide();
  $(".timer").hide();
})



$("#start").click(function() {
    console.log("work");
    $(".instructions").hide();
    $(".questions").show();
    $(".choices").show();
    $(".timer").show();
    renderQuestion1();
    timer();

});



$("#buttonA, #buttonB, #buttonC, #buttonD").click(function() {
        if(this.id = "#buttonA") {
          // console.log("button a works");
          userScoreWrong++
          renderQuestion2();
        }else if(this.id = "#buttonB"){
          userScoreWrong++
          renderQuestion2();
          // console.log("buttonA works")
        }else if(this.id = "#buttonC"){
          userScoreRight++
          renderQuestion2();
        }else if(this.id = "#buttonD"){
          userScoreWrong++
          renderQuestion2();
        }
      
    });


function renderQuestion1() {
    $("#timer").text(count);
    $("#newQuestion").text(questions.questionOne.text);
    $("#a").text(questions.questionOne.choices[0]);
    $("#b").text(questions.questionOne.choices[1]);
    $("#c").text(questions.questionOne.choices[2]);
    $("#d").text(questions.questionOne.choices[3]);

    // $("#buttonA", "#buttonB", "buttonC", "buttonD").click(function() {
    //   console.log("button");
    // });

}

function renderQuestion2() {
    $("#timer").text(count);
    $("#newQuestion").text(questions.questionTwo.text);
    $("#a").text(questions.questionTwo.choices[0]);
    $("#b").text(questions.questionTwo.choices[1]);
    $("#c").text(questions.questionTwo.choices[2]);
    $("#d").text(questions.questionTwo.choices[3]);
}

function renderQuestion3() {
    $("#timer").text(count);
    $("#newQuestion").text(questions.questionThree.text);
    $("#a").text(questions.questionThree.choices[0]);
    $("#b").text(questions.questionThree.choices[1]);
    $("#c").text(questions.questionThree.choices[2]);
    $("#d").text(questions.questionThree.choices[3]);
}

// answerDiv.on('click', function(event) {
//   var target = event.target

// })


// function renderQuestion(questionObj) {
//   questionDiv.text(questionObj.text)
//   answerDiv.empty()
//   for (var i=0; i < questionObj.choices; i++) {
//     answerDiv.append("<span data-value=" + i + ">" + questionObj.choices[i] + "</span>")
//   }
// }


// function startTimer() {
//   timer = 60;
//   setInterval(function() {
//     timer--
//   }, 1000)
// }





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