var startBtnEl = document.querySelector("#btn-start");
var submitBtnEl = document.querySelector("#btn-submit");
var countNumEl = document.querySelector("#countdownNum");
var timeLeft = 75;
var correctScore = 11; 

var startIntroEl = document.querySelector("#start-intro");
var questionContentEl = document.querySelector("#question");
var optionContentEl = document.querySelector("#option");
var option1El = document.querySelector("#option1");
var option2El = document.querySelector("#option2");
var option3El = document.querySelector("#option3");
var option4El = document.querySelector("#option4");
var responseEl = document.querySelector("#response");
var answerEl = document.querySelector("#answer");

var finalScoreEl = document.querySelector("#final-score");
var scoreNumEl = document.querySelector("#finalScore");
var scoreTextEl = document.querySelector("#scoreText");
var enterInitialEl = document.querySelector("#enterInitials");
var pageContentEl = document.querySelector("#page-content");
var headerEl = document.querySelector("header");

// Initiate question list
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

var endGame = function () {
    questionContentEl.innerText = "All Done!";
    optionContentEl.style.visibility = 'hidden';
    localStorage.setItem("questionsNum", 0);
    
    // Count the final Score
    scoreNumEl.innerText = correctNum * correctScore;
    
    // Store the final Score
    console.log("final score: " + correctNum * correctScore);

    // Display final score and allow user to save intials
    finalScoreEl.style.visibility = 'visible';
    enterInitialEl.style.visibility = 'visible';
    
    // hide options
    optionContentEl.remove();
};

if(questionsNum == null || correctNum == null || totalScore == null) {
    localStorage.setItem("questionsNum", 0);
    localStorage.setItem("correctNum", 0);
    localStorage.setItem("totalScore", 0);
};

// Initiate number to count the question that has been answered 
var questionsNum = localStorage.getItem("questionsNum");
console.log("default question number: " + questionsNum);

// Initiate number to count the question that has been answered correctly
var correctNum = localStorage.getItem("correctNum");
console.log("default correct number: " + correctNum);

// Initiate number to count the total score for question answered correctly
var totalScore = localStorage.getItem("totalScore");
console.log("default score number: " + totalScore);

// Initiate place to store previous score
var scoreList = localStorage.getItem("scoreList");
if(scoreList == null) {
    localStorage.setItem("scoreList", "[]");
}; 

console.log("initial old Score: " + scoreList);
// Initiate number to track the order of initials input
var userOrder = localStorage.getItem("userOrder");

if (userOrder == null) {
    localStorage.setItem("userOrder", 0);
};

console.log("default userOrder: " + userOrder);

// function to display time
function renderTime() {
    // render count on the screen
    countNumEl.innerHTML = timeLeft;

    // timeout on zero
    if (timeLeft <= 0 || questionsNum == questions.length) {
        clearInterval(timer);
        countNumEl.innerHTML = 0;
        endGame();

    };

    // console.log(document.querySelector("#countdownNum"));

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
    startBtnEl.remove();
    startIntroEl.remove();
};

// display question
var displayQuestion = function () {
    localStorage.setItem("correctNum", 0);

    if (questionsNum < questions.length) {

        questionContentEl.innerText = questions[questionsNum].question;
    
        // display option
        optionContentEl.style.visibility = 'visible';
        option1El.innerText = "1. "+ questions[questionsNum].answers[1];
        option2El.innerText = "2. "+ questions[questionsNum].answers[2];
        option3El.innerText = "3. "+ questions[questionsNum].answers[3];
        option4El.innerText = "4. "+ questions[questionsNum].answers[4];
    } else {
        endGame();
    };

};

// Response that applies to any options checked
var optionCommonResponse = function (option, questionsNum) {
    if (option == questions[questionsNum].correctAnswer) {
        answerEl.innerText = 'Correct!';
        localStorage.setItem("correctNum", ++correctNum);

        console.log("Correct Num: " + correctNum);
        
    } else {
        answerEl.innerText = 'Wrong!';
        // Substract time from clock 
        timeLeft -= 20;
    };
    
    answerEl.style.visibility = 'visible';
};

// Respond to the option checked
var option1Response = function () {
    var option = 1;
    optionCommonResponse(option, questionsNum);

    localStorage.setItem("questionsNum", ++questionsNum); 
    // console.log("ClickOption1: " + questionsNum);
};

var option2Response = function () {
    var option = 2;
    optionCommonResponse(option, questionsNum);

    localStorage.setItem("questionsNum", ++questionsNum); 
    // console.log("ClickOption2: " + questionsNum);
};

var option3Response = function () {
    var option = 3;
    optionCommonResponse(option, questionsNum);

    localStorage.setItem("questionsNum", ++questionsNum); 
    // console.log("ClickOption3: " + questionsNum);
};

var option4Response = function () {
    var option = 4;
    optionCommonResponse(option, questionsNum);

    localStorage.setItem("questionsNum", ++questionsNum); 
    // console.log("ClickOption4: " + questionsNum);
};

var submitRefresh = function () {
    responseEl.remove();
    headerEl.style.visibility = "hidden";

    var userOrder = localStorage.getItem("userOrder");
    localStorage.setItem("userOrder", ++userOrder);
    console.log("userOrder: " + userOrder);
};

var refresh = function () {
    window.location.reload();

};

var showScore = function () {
    questionContentEl.innerText = "High scores";
    // Store old score
    var personList = JSON.parse(localStorage.getItem("scoreList"));
    var orderDict = {};
    var person = initialsInput;
    var personScore = scoreNumEl.innerText
    // console.log("person: " + person + " personScore: " + personScore);
    orderDict["order"] = localStorage.getItem("userOrder");
    orderDict[person] = personScore;
    // console.log("orderDict: " + JSON.stringify(orderDict));
    personList.push(orderDict);
    console.log("personList: " + JSON.stringify(personList));

    localStorage.setItem("scoreList", JSON.stringify(personList));
    // console.log("personDict: " + JSON.stringify(personDict));
    // console.log("scoreDict: " + scoreDict);

    // Create placeholder to display initials input with score
    var initialsInput = document.querySelector("input[name='initials']").value;
    var displayScoreEl = document.createElement("div");
    displayScoreEl.className = "displayScore";
    var resultEl = document.createElement("p");
    resultEl.innerText = localStorage.getItem("userOrder") + ". " + initialsInput + " - " + scoreNumEl.innerText;
    displayScoreEl.appendChild(resultEl);
    finalScoreEl.append(displayScoreEl);
    
    scoreTextEl.remove();
    enterInitialEl.remove();
    
    // Create back button
    var btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";
    var backBtn = document.createElement("button");
    backBtn.textContent = "Go back";
    backBtn.className = "btn";
    backBtn.setAttribute("id", "btn-back");
    
    btnContainer.appendChild(backBtn);
    
    // Create clear button
    var clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear high scores";
    clearBtn.className = "btn";
    btnContainer.appendChild(clearBtn);
    clearBtn.setAttribute("id", "btn-clear");

    pageContentEl.appendChild(btnContainer);

    var backBtnEl = document.querySelector("#btn-back");
    // var clearBtnEl = document.querySelector("#btn-clear");

    backBtnEl.addEventListener("click", refresh);
};

startBtnEl.addEventListener("click", startTimer);
startBtnEl.addEventListener("click", hideStart);
startBtnEl.addEventListener("click", displayQuestion);

option1El.addEventListener("click", option1Response);
option1El.addEventListener("click", displayQuestion);

option2El.addEventListener("click", option2Response);
option2El.addEventListener("click", displayQuestion);

option3El.addEventListener("click", option3Response);
option3El.addEventListener("click", displayQuestion);

option4El.addEventListener("click", option4Response);
option4El.addEventListener("click", displayQuestion);

submitBtnEl.addEventListener("click", submitRefresh);
submitBtnEl.addEventListener("click", showScore);


