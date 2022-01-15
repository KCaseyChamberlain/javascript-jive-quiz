// var time = document.querySelector('#time')
var count = 60
var time = document.querySelector("#time")
var btnBox = document.querySelector("#btn-box")
var introArticle = document.querySelector("#intro-article")


// Start button to start the quiz and start the timer function
$("#start").click(function () {
    btnBox.setAttribute("class", "hide")
    introArticle.setAttribute("class", "hide")
    console.log("click")
    timer()
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
    console.log(count)
    }, 1000);
}

// Stops quiz
function stopQuiz() {

}


function nextQ() {

}






// $(document).ready(function() {
//     $("#hidden").hover(function() {
//         $(this).css("color", "black");
//     },
//     function() {
//         $(this).hide();
//     })
// });
