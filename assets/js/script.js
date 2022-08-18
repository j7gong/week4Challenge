var startBtnEl = document.querySelector("#btn-start");
var countNumEl = document.querySelector("#countdownNum");
var timeLeft = 15; 

var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: {
            1: '<javascript>',
            2: '<scripting>',
            3: '<js>',
            4: '<script>'
        },
        correctAnswer: 4,
    }, 
    {
        question: 'How to write an IF statement in JavaScript?',
        answers: {
            1: 'if (i == 5) {}',
            2: 'if i== 5 then',
            3: 'if i = 5 then',
            4: 'if i == 5'
        },
        correctAnswer: 1,
    }, 
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        answers: {
            1: 'onmouseover',
            2: 'onclick',
            3: 'onchange',
            4: 'onmouseclick'
        },
        correctAnswer: 2,
    }
]
// function to display time
var renderTime = function () {
    // render count on the screen
    countNumEl.innerHTML = timeLeft;

    // timeout on zero
    if (timeLeft <= 0) {
        clearInterval(timer);
        countNumEl.innerHTML = 15;
    };

    console.log(document.querySelector("#countdownNum"));

    // decrease remaining time by 1
    timeLeft -= 1;
};

// start Timer
var startTimer = function () {

    countNumEl.innerHTML = timeLeft;
    timer = setInterval(renderTime, 1000);
};

startBtnEl.addEventListener("click", startTimer);

