
// this is a array of questions. 
var list = [
    {
        question: "What does HTML",
        answer1: "Hyper Text Markup Language",
        answer2: "Hover Text Marketing Lounge",
        answer3: "Hyper Thinking Market Language",
        answer4: "Honky Tonk Man Lion",
        correctAnswer: "Hyper Text Markup Language",
    },

    {
        question: "What does CSS stand for",
        answer1: "Cascading Style Sheet",
        answer2: "Cascading Sheets Styling",
        answer3: "Correct Style Sheet",
        answer4: "Columbia Style Sheet",
        correctAnswer: "Cascading Style Sheet",
    },

    {
        question: "What does JS stand for?",
        answer1: "JavaScribing",
        answer2: "JustifyedScript",
        answer3: "JavaScript",
        answer4: "JimmyScript",
        correctAnswer: "JavaScript",
    },

    {
        question: "How many licks to the center of a tootsie pop?",
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "100",
        correctAnswer: "3",
    },

    {
        question: "I need to spend _____ more hours doing HW",
        answer1: "1",
        answer2: "2",
        answer3: "5",
        answer4: "20+ and I dont know how to end the quiz",
        correctAnswer: "20+ and I dont know how to end the quiz",
    },
];
var timePenelty = 10;


var elBtnStartGame = document.querySelector("#btnStartGame");


elBtnStartGame.addEventListener("click", function () {
    // hide start container
    document.querySelector(".start").style.display = "none";
    // display the game container
    document.querySelector(".game").style.display = "block";

    document.querySelector(".btn-secondary").style.color = "blue";
});

// Timer that starts once the Start Button is clicked and begins the game.
// timer starts at 60 seconds once StartButton is clicked. 
// clock stops at 0

document.getElementById("btnStartGame").addEventListener("click", function () {
    var timeleft = 20;

    var downloadTimer = setInterval(function function1() {
        document.getElementById("countdown").innerHTML = timeleft +
            "&nbsp" + "seconds remaining";


// AFTER THE TIMER HITS ZERO IT TAKES YOU TO THE SCORE PAGE.
        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Game Over";
            window.location.href = 'score.html';
            clearInterval(end);
        }
    }, 1000);

    console.log(countdown);
});







// this is the function that is displaying the contentent from the array to the buttons on the HTML.
function askQuestion(index) {
    let userAnswer;
    let correctAnswer = list[index].correctAnswer;
    var questionNumber = 0;


    document.getElementById("question").textContent = list[index].question;
    document.getElementById("answer1").textContent = list[index].answer1;
    document.getElementById("answer2").textContent = list[index].answer2;
    document.getElementById("answer3").textContent = list[index].answer3;
    document.getElementById("answer4").textContent = list[index].answer4;


//   These are the click events that are cycling the questions throw
    document.getElementById("answer1").addEventListener("click", function(event) {
        compareAnswers(event.target.textContent, correctAnswer);
    });
    
    document.getElementById("answer2").addEventListener("click", function (event) {
        compareAnswers(event.target.textContent, correctAnswer);
    });
    
    document.getElementById("answer3").addEventListener("click", function (event) {
        compareAnswers(event.target.textContent, correctAnswer);
    });
    document.getElementById("answer4").addEventListener("click", function (event) {
        compareAnswers(event.target.textContent, correctAnswer);
    });
}


// This function is what is compairing the answers from the users choice to the correct answer in the array

var questionNumber = 0;
askQuestion(questionNumber);

function compareAnswers(userAnswer, correctAnswer) {
    
    if (userAnswer === correctAnswer) {
        console.log("NIIIIIIICCCCCEEEEEEE");
        askQuestion(questionNumber++) 
    }
    else (userAnswer !== correctAnswer)
        console.log("WROOOONNNNNNGGGG");{
            
    }

}


// this is the start of trying to figure out how to get the wrong answer to pop up under the choices if the user selects a wrong answer.

// var wrongTextPopUp = document.querySelector("#thatsWrongText");
// document.querySelector("#thatsWrongText").style.display = "none";

// wrongTextPopUp.addEventListener("click", function () {
//     document.querySelector("#thatsWrongText").style.display = "block";
// });

askQuestion(0);


// this ises 





// click event that would subtract time form the time variable


/*
1. WELCOME SCREEN  -
    once you click the button on the index page it takes you to the game page
    intro the player to

2. GAME SCREEN
    - create list that has questions and answers
    - create function to compair answers.
    - create function to total score.
    - create functions to go through questions.

    once the game is started the timer/score starts
            -timer needs to start once either screen is deployed or when user clicks to starts quiz

    user is prompted with a question from a object list that has 3 wrong answers and 1 correct answer

    user needs to select 1 of 4 buttons that had the correct answer

        if user selcts correct answer:
            right answer goes to the next question no penalties

        else
            - wrong answer has:
            -time/score deduction to a scoreKeeper Variable
            -after penalty, users is taken to next question

    user needs to do this 5 times.

    game is done after user answers all 5 questions or time expires

    score needs to be totalled and displayed on screen and logged into Local memory.

    final score is the time left after completing the quiz.

3. HIGHSCORES SCREEN
    after completiting quiz
        user is propmted to keep score in local storage
            logs users name.
            computer logs users score into local storage.
    User options after completeing quiz
        users selects play again
            takes user to quiz again
        option to clear local storage.
            deletes all information that is stored into local storage
        option to quit/return to Index.html.
*/