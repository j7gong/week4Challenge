var startBtnEl = document.querySelector("#btn-start");
var countNumEl = document.querySelector("#countdownNum");
var timeLeft = 10; 

var startIntroEl = document.querySelector("#start-intro");
var questionContentEl = document.querySelector("#question");
var optionContentEl = document.querySelector("#option");
var option1El = document.querySelector("#option1");
var option2El = document.querySelector("#option2");
var option3El = document.querySelector("#option3");
var option4El = document.querySelector("#option4");
var answerEl = document.querySelector("#answer");

var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: {
            "1": '\<javascript\>',
            "2": '<scripting>',
            "3": '<js>',
            "4": '<script>'
        },
        correctAnswer: "4",
    }, 
    {
        question: 'How to write an IF statement in JavaScript?',
        answers: {
            "1": 'if (i == 5) {}',
            "2": 'if i== 5 then',
            "3": 'if i = 5 then',
            "4": 'if i == 5'
        },
        correctAnswer: "1",
    }, 
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        answers: {
            "1": 'onmouseover',
            "2": 'onclick',
            "3": 'onchange',
            "4": 'onmouseclick'
        },
        correctAnswer: "2",
    }
]

// function to display time
function renderTime() {
    // render count on the screen
    countNumEl.innerHTML = timeLeft;

    // timeout on zero
    if (timeLeft <= 0) {
        clearInterval(timer);
        countNumEl.innerHTML = 0;
    };

    console.log(document.querySelector("#countdownNum"));

    // decrease remaining time by "1"
    timeLeft -= 1;
}

// start Timer
var startTimer = function () {

    countNumEl.innerHTML = timeLeft;
    timer = setInterval(renderTime, 1000);
};

// hide Start Content
var hideStart = function () {
    startBtnEl.style.visibility = 'hidden';
    startIntroEl.style.visibility = 'hidden';
};

// display question
var displayQuestion = function () {

    questionContentEl.innerText = questions[0].question;
    
    // display option
    optionContentEl.style.visibility = 'visible';
    option1El.innerText = "1. "+ questions[0].answers[1];
    option2El.innerText = "2. "+ questions[0].answers[2];
    option3El.innerText = "3. "+ questions[0].answers[3];
    option4El.innerText = "4. "+ questions[0].answers[4];

};

// Respond to the option checked
var option1Response = function () {
    var option = 1;
    if (option == questions[0].correctAnswer) {
        answerEl.innerText = 'Correct!';
        
    } else {
        answerEl.innerText = 'Wrong!';
    };

    answerEl.style.visibility = 'visible';
};

var option2Response = function () {
    var option = 2;
    if (option == questions[0].correctAnswer) {
        answerEl.innerText = 'Correct!';
        
    } else {
        answerEl.innerText = 'Wrong!';
    };

    answerEl.style.visibility = 'visible';
};

var option3Response = function () {
    var option = 3;
    if (option == questions[0].correctAnswer) {
        answerEl.innerText = 'Correct!';
        
    } else {
        answerEl.innerText = 'Wrong!';
    };

    answerEl.style.visibility = 'visible';
};

var option4Response = function () {
    var option = 4;
    if (option == questions[0].correctAnswer) {
        answerEl.innerText = 'Correct!';
        
    } else {
        answerEl.innerText = 'Wrong!';
    };
    
    answerEl.style.visibility = 'visible';
};

startBtnEl.addEventListener("click", startTimer);
startBtnEl.addEventListener("click", hideStart);

startBtnEl.addEventListener("click", displayQuestion);

option1El.addEventListener("click", option1Response);
option2El.addEventListener("click", option2Response);
option3El.addEventListener("click", option3Response);
option4El.addEventListener("click", option4Response);
