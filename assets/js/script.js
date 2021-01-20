var correctAnswer;
var userAnswer;



var list = [
    {
        question: "Who is the best Smash Player?",
        answer1: "Ryan",
        answer2: "David",
        answer3: "Seth",
        answer4: "Caleb",
        correctAnswer: "David",
    },
    {
        question: "Who is the best Poker Player?",
        answer1: "Ryan",
        answer2: "Kevin",
        answer3: "Peter",
        answer4: "Robby",
        correctAnswer: "Ryan",
    },
    {
        question: "Who is the most musically gifted?",
        answer1: "Jared",
        answer2: "David",
        answer3: "Dan",
        answer4: "Robby",
        correctAnswer: "Seth",
    },
];

function askQuestion(index) {
    list[index].question;
    document.getElementById("question").textContent = list[index].question;
    document.getElementById("answer1").textContent = list[index].answer1;
    document.getElementById("answer2").textContent = list[index].answer2;
    document.getElementById("answer3").textContent = list[index].answer3;
    document.getElementById("answer4").textContent = list[index].answer4;

    console.log(list[index].question);

}
askQuestion(2);

function buttonAlert(id) {
    alert(id);
};



// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var fiveMinutes = 60
//     display = document.querySelector('#time');
//     startTimer(fiveMinutes, display);
// };



/*
1. WELCOME SCREEN  -
    once you click the button on the index page it takes you to the game page
    intro the player to

2. GAME SCREEN
    once this screen starts
        timer starts which is the score
            clock starts to count down as soon as the screen appears

        user is prompted with a question 4 possible answers
            - right answer goes to the next question
            - wrong answer has a time/score deduction and goes to next question
            - create list that has questions and answers
            - create functions to go through questions.
            - create function to compair answers.
            - create function to total score.

        final score is the time left after completing the quiz

3. HIGHSCORES SCREEN
    after completiting quiz
        user is propmted to keep score in local storage
            logs users name
            logs users score

        option to clear local storage.
        option to play game agin.
        option to quit.
*/