// var time = document.querySelector('#time')
var count = 60
var scoreBoard = 0
var time = document.querySelector("#time")
var btnBox = document.querySelector("#btn-box")
var score = document.querySelector("#score")
var introArticle = document.querySelector("#intro-article")
var quizQ = document.querySelector("#quiz-question")
var quizTitle = document.querySelector("#title")
var startBtn = document.querySelector("#start")
var questionIndex = 0


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
        choices: ["::before", "::after", "::first-letter", "All of the above"],
        answer: "All of the above"
    },
];


// Start button to start the quiz and start the timer function
$("#start").click(function () {
    quizTitle.setAttribute("class", "hide")
    startBtn.setAttribute("class", "hide")
    // score.setAttribute("class", "hide")
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



function scorer() {
    score.innerHTML = scoreBoard
}




function nextQ() {
    var currentQ = questions[questionIndex];
        questionIndex++
        console.log(currentQ)

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

    $(".answer-btn").click(function () {

        var selected = $(this).attr("data-id")
        var answer = currentQ.answer
        console.log(answer)
        console.log(selected)

        if (answer === selected) {1
            scoreBoard = scoreBoard + 15
            $("#btn-box").empty();
            nextQ()
            score.innerHTML = scoreBoard
        }
        else {
            $("#btn-box").empty();
            nextQ()
            count = count - 15
            time.innerHTML = count
        }
    });
}




    //Function that stops quiz and stores time as score
    function stopQuiz() {
        stopTimer()
        $("#btn-box").empty();
        btnBox.setAttribute("class", "hide")
        formBoxEl.removeAttribute("class", "hide")
        formBoxEl.setAttribute("class", "col-8 text-center")
        questionEl.innerText = "You completed the quick coding quiz!"
    }


    //Function to stop timer
    function stopTimer() {
        clearInterval(interval); 
        time.innerHTML = "TIMES UP!"
    }

