var startBtnEl = document.querySelector("#btn-start");
var countNumEl = document.querySelector("#countdownNum");
var timeLeft = 15; 

// function to display time
var renderTime = function () {
    // render count on the screen
    countNumEl.innerHTML = timeLeft;

    // timeout on zero
    if (timeLeft === 0) {
        clearInterval(timer);
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

