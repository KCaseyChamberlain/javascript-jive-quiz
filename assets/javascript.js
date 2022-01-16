// Variables
var count = 60
var scoreBoard = 0
var questionIndex = 0
var scorePoint
var highscores
var time = document.querySelector("#time")
var btnBox = document.querySelector("#btn-box")
var score = document.querySelector("#score")
var introArticle = document.querySelector("#intro-article")
var quizQ = document.querySelector("#quiz-question")
var quizTitle = document.querySelector("#title")
var startBtn = document.querySelector("#start")
var highScoreBox = document.querySelector("#highscore-box")
var headPannel = document.querySelector("#head-pannel")
var scoreName = document.querySelector("#input-name")

// Quiz question; title, choice, and answer
var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["scr", "javascript", "js", "script"],
        answer: "script"
    },
    {
        title: "Who designed JavaScript?",
        choices: ["Paul Byron", "Brendan Eich", "Stuart Bruce", "Andrew Carne"],
        answer: "Brendan Eich"
    },
    {
        title: "In JQuery, which of these symbol is often seen?",
        choices: ["&", "@", "$", "#"],
        answer: "$"
    },
    {
        title: "What does the z-index property do?",
        choices: ["Removes an element from the DOM", "Changes element's stacking order", "Changes element's opacity", "Positions element relatively"],
        answer: "Changes element's stacking order"
    },
    {
        title: "What is an example of a pseudo-element?",
        choices: ["::be1e", "::after", "::first-letter", "All of the above"],
        answer: "All of the above"
    },
];

// Start button to start the quiz, timer, and scorer
$("#start").click(function () {
    quizTitle.setAttribute("class", "hide")
    startBtn.setAttribute("class", "hide")
    console.log("click")
    timer()
    nextQ()
    scorer()
});

// Timer function
function timer() {
    time.innerHTML = count
    interval = setInterval(function () {
        if (count === 0) {
            stopQuiz()
        }

        else {
            count--
            time.innerHTML = count
        }
    // console.log(count)
    }, 1000);
}

// Scorer function
function scorer() {
    score.innerHTML = scoreBoard
}

// Next question function
function nextQ() {
    var currentQ = questions[questionIndex];
        questionIndex++
        console.log(currentQ)
        // Creates answerBtn for choices and applies classes
        if (questionIndex <= questions.length) {
            quizQ.innerText = currentQ.title
            for (var i = 0; i < currentQ.choices.length; i++) {
                var answerBtn = document.createElement("button")
                answerBtn.setAttribute("class", "btn answer-btn")
                answerBtn.innerHTML = currentQ.choices[i]
                answerBtn.setAttribute("data-id", currentQ.choices[i])
                btnBox.appendChild(answerBtn);
            }
        }
        else {
            stopQuiz()
        }
    // If else statements to determine consequences of user's choices
    $(".answer-btn").click(function () {
        var selected = $(this).attr("data-id")
        var answer = currentQ.answer
        console.log(answer)
        console.log(selected)
        // Add 15 points if answered correctly
        if (answer === selected) {
            scoreBoard = scoreBoard + 15
            $("#btn-box").empty();
            nextQ()
            score.innerHTML = scoreBoard
        }
        // Minus 15 seconds if answered incorrectly
        else {
            $("#btn-box").empty();
            count = count - 15
            time.innerHTML = count
            nextQ()
        }
    });
}

//Function that stops quiz
function stopQuiz() {
    stopTimer()
    $("#btn-box").empty();
    introArticle.setAttribute("class", "viz")
    highScoreBox.removeAttribute("class", "hide")
    headPannel.innerText = "You completed the JavaScript Jive Quiz!"
}

//Function to stop timer
function stopTimer() {
    time.innerHTML = "TIMES UP!"
    clearInterval(interval); 
}

   //Button that calls the generateScores function and hides itself. 
$("#submit").click(function (event) {
    highScoreBox.setAttribute("class", "hide")
    generateScores()
});

//Function that sends score to localStorage
function generateScores() {
    highscores = JSON.parse(localStorage.getItem("scores")) || [];
    highscores.unshift({
        Initials: scoreName.value,
        Score: scoreBoard,
    });
    localStorage.setItem("scores", JSON.stringify((highscores)))
    }