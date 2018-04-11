
let questions = [
    {
      choices: [9, 10, 8, 7],
      correct: "8",
      text: 'How many planets are in our Solar System?',
      answerText: "Four are terrestrial planets which include Mercury, Venus, Earth and Mars. The other four are giant planets which include Jupiter, Saturn, Uranus and Neptune. Jupiter and Saturn are gas giant planets, and Uranus and Neptune are ice giant planets. Pluto was declassified as a planet in August 2006. Sorry Pluto! In 2014, the hypothetical planet dubbed Planet Nine was discovered, but its existence has not yet been confirmed."

      },
    {
      choices: ['Jupiter', 'Neptune', 'Mars', 'Saturn'],
      correct: "Jupiter",
      text: 'What is the largest planet in our Solar System?',
      answerText: "Jupiter is the largest planet in our solar system in terms of mass, volume, and surface. Jupiters diameter is roughly 11 times that of Earth. Jupiters mass is one thousandth that of the sun but 2.5 times the mass of all the planets in our solar system combined. Jupiter also boasts the largest moon in our solar system with its moon Ganymede."
      },
     
    {
      choices: ['Venus', 'Earth', 'Mercury', 'Neptune'],
      correct: "Mercury",
      text: 'What is the smallest planet in our solar system?',
      answerText: "Mercury only has an equatorial radius of 1,516 miles. This means that Mercury is actually smaller than Jupiter’s largest moon, Ganymede."
      },
    {
      choices: [3, 5, 4, 2],
      correct: "4",
      text: 'How many main groups of rings does Saturn have?',
      answerText: "Saturn has four main groups of rings and three fainter, narrower ring groups. These groups are separated by gaps called divisions. Close up views of Saturn's rings by the Voyager spacecrafts, which flew by them in 1980 and 1981, showed that these seven ring groups are made up of thousands of smaller rings."
    },
    {
      choices: ["100,345", "587,764", "346,689", "248,655"],
      correct: "248,655",
      text: 'What is the farthest distance from Earth a manned mission has traveled? (Plus or minus 20,000 miles.)',
      answerText: "248,655 miles.  This was achieved during the Apollo 13 mission which launched on April 11, 1970. During the mission an oxygen tank exploded. The explosion forced the crew to abort its mission to land on the moon, and the trial of the crew attempting to get home safely has been widely publicized. The Apollo 13 mission launched at 13:13 military time, and the explosion occurred two days after launch on April 13, 1970. That’s a lot of 13’s if you are the superstitious type!"
    },
    {
      choices: [365, 574, 437, 200],
      correct: "437",
      text: 'What is the longest continuous time a human has spent in space? (Plus or minus 20 days.)',
      answerText: "The longest time spent in space was 437 days.  This amounts to more than 14 months in space. This feat was accomplished by Valeri Polyakov, a Russian astronaut who stayed aboard the Mir space station from January 1994 to March 1995. When Polyakov retired he had over 678 cumulative days in space, and his combined space time was over 22 months."
    },
    {
      choices: [50, 181, 135, 86],
      correct: "181",
      text: 'How many moons are in our Solar System?',
      answerText: "There are 181 moons in our solar system.  These moons (also known as natural satellites) vary greatly in size and quantity per planet. For example, the largest moon is Jupiter’s Ganymede, and the smallest is Mar’s Deimos. Ganymede has a diameter of 3,273 miles, and Deimos has a diameter of 7 miles."
    },
    {
      choices: ["Red dwarf stars", "Red supergiant stars", "White dwarf stars", "Proxima Centauri"],
      correct: "Red dwarf stars",
      text: 'What is the most common type of star found in the Milky Way?',
      answerText: "Red dwarf stars make up an estimated ¾ of all stars found in the Milky Way. The surface temperature of red dwarf stars is less than 4,000 Kelvin, and they have a very low luminosity and therefore cannot be easily seen. In fact, from Earth not one red dwarf star can be seen with the naked eye. Since they develop very slowly and are constant for trillions of years, there are actually no advanced stars of this type in our universe because our universe is too young!"
    },
    {
      choices: ['20.8 billion light years old', '13.8 billion light years old', '9.4 billion light years old', '18.7 billion light years old'],
      correct: '13.8 billion light years old',
      text: 'How old is the universe in light years? (Plus or minus 1 billion light years.)',
      answerText: "13.8 billion light years old.  Scientists used various methods to estimate its age. These included methods such as measuring the composition of matter and energy density in the universe. Scientists also studied the oldest objects in space to help calculate its age. For example, they measured the age of some of the oldest known stars since there is a set method of determining the life cycle of a star based on its mass."
    },
    {
      choices: [10, 15, 45, 28],
      correct: "15",
      text: 'How many minutes was the shortest space flight?',
      answerText: "15 minutes.  This occurred on May 5, 1961 when Alan Shepard achieved an altitude of 115 miles in NASA’s Freedom 7. He was also the first American in space. Shepard later went on to become the oldest person to walk on the surface of the moon. He achieved this in 1971 during the Apollo 14 mission. At the time, he was 47 years old."
    }
];
//declare the variables
let userScoreRight = 0;
let userScoreWrong = 0;
let unanswered = 0;
let count = 2;
let timerId = setInterval(countdown, 1000);
let questionNum = 0;

//when document is opened
$(document).ready(function() {
  $(".questions").hide();
  $(".choices").hide();
  $(".showAnswerCorrect").hide();
  $(".showAnswerIncorrect").hide();
  $(".timer").hide();
  $(".alert").hide();
  $(".endGame").hide();
  clearInterval(timerId);
});
//======================================================================
//======================================================================
//======================================================================
//the following contains all of the click events for the game
//on the click of the START button
$("#start").click(function() {
    timerId = setInterval(countdown, 1000);
    questionNum = 0;
    userScoreRight = 0;
    userScoreWrong = 0;
    unanswered = 0;
    
    $(".instructions").hide();
    $(".questions").show();
    $(".choices").show();
    $(".showAnswerCorrect").hide();
    $(".showAnswerIncorrect").hide();
    $(".timer").show();
    $(".endGame").hide();

    renderNewQuestion()
    resetTimer();
    countdown();
});
//the users choice
$(".choices button").on( "click", function(){
  var userGuess = $(this).attr("data-choices");

    if(userGuess == questions[questionNum].correct){
      userScoreRight++
      updateUserRight()
      displayAnswerTextCorrect();
    }else{
      userScoreWrong++
      updateUserWrong()
      displayAnswerTextIncorrect();
    }
  questionNum++ 
  resetTimer();
  countdown();
});
//continue to next question
$(".next").click(function() {
  timerId = setInterval(countdown, 1000);

  $(".instructions").hide();
  $(".questions").show();
  $(".choices").show();
  $(".showAnswerCorrect").hide();
  $(".showAnswerIncorrect").hide();
  $(".timer").show();
  $(".alert").hide();
  $(".endGame").hide();

  if (questionNum < questions.length){
    renderNewQuestion()
    resetTimer();
    countdown();
  }else{
    finalPage();
  }
  
});
//endgame button
$("#startOver").click(function(){
  timerId = setInterval(countdown, 1000);
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
//endgame button
$("#home").click(function() {
  $(".instructions").show();
  $(".questions").hide();
  $(".choices").hide();
  $(".showAnswerCorrect").hide();
  $(".showAnswerIncorrect").hide();
  $(".timer").hide();
  $(".alert").hide();
  $(".endGame").hide();
  clearInterval(timerId);
});
//======================================================================
//======================================================================
//======================================================================
//the following are all the game functions
//timer function: also increases the unanswered count when it runs out
function countdown() {
  if (count == 0) {
      unanswered++
      updateUnanswered();
      questionNum++;
      resetTimer();
      alert("times up");
    if (questionNum < questions.length){
      renderNewQuestion();
    }else{
    finalPage();
    }
  } else {
    $("#timer").text(count);
    count--;
  }
};
//resets timer to 30 seconds
function resetTimer(){
  count = 30;
}
//renders a new question based off of the questionNum variable
function renderNewQuestion() {
    $("#timer").text(count);
    $("#newQuestion").text(questions[questionNum].text);
    $("#a").text(questions[questionNum].choices[0]).parent().attr("data-choices", questions[questionNum].choices[0]);
    $("#b").text(questions[questionNum].choices[1]).parent().attr("data-choices", questions[questionNum].choices[1]);
    $("#c").text(questions[questionNum].choices[2]).parent().attr("data-choices", questions[questionNum].choices[2]);
    $("#d").text(questions[questionNum].choices[3]).parent().attr("data-choices", questions[questionNum].choices[3]);
};
//displays the correct answer if they answered correctly
function displayAnswerTextCorrect(){
    clearInterval(timerId);
    $(".instructions").hide();
    $(".questions").hide();
    $(".choices").hide();
    $(".showAnswerCorrect").show();
    $(".showAnswerIncorrect").hide();
    $(".timer").hide();
    $("#newAnswer").text(questions[questionNum].answerText)

    if (questionNum < questions.length){
      renderNewQuestion();
    }else{
      finalPage();
    }
}
//displays the correct answer if they answered incorrectly
function displayAnswerTextIncorrect(){
  console.log("here")
    clearInterval(timerId);
    $(".instructions").hide();
    $(".questions").hide();
    $(".choices").hide();
    $(".showAnswerCorrect").hide();
    $(".showAnswerIncorrect").show();
    $(".timer").hide();
    $("#newAnswerIncorrect").text(questions[questionNum].answerText)

    if (questionNum < questions.length){
      renderNewQuestion();
    }else{
      finalPage();
    }
}
//the next three function update the scores on the page based off of the user responses
function updateUserRight(){
  $("#correctAnswers").text(userScoreRight);
}

function updateUserWrong(){
  $("#incorrectAnswers").text(userScoreWrong);
}

function updateUnanswered(){
  $("#unansweredQuestions").text(unanswered);
}
//the function the shows the users overall results
function finalPage(){
  clearInterval(timerId);
  $(".instructions").hide();
  $(".questions").hide();
  $(".choices").hide();
  $(".showAnswerCorrect").hide();
  $(".showAnswerIncorrect").hide();
  $(".timer").hide();
  $(".endGame").show();
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