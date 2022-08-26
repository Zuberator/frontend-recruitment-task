// VARIABLES
let alertButton = document.getElementById("alert-button");
let resetButton = document.getElementById("reset-button");
let alertWindow = document.getElementById("alert");
let overlay = document.getElementById("overlay");
let xIcon = document.getElementById("x-icon");
let counter = document.getElementById("counter");
let buttonClickCounter = localStorage.getItem("counter");

// CHECK, THEN WRITE COUNTER STATE, SHOW/HIDE RESET BUTTON
function checkButton(times) {
    counter.textContent = times + " times";
    localStorage.setItem("counter", times);
    if (times > 5) return show(resetButton);
    return hide(resetButton);
};

// ALERT BUTTON CLICK LOGIC - COUNTER
alertButton.addEventListener('click', () => {
    show(overlay);
    buttonClickCounter ++;
    checkButton(buttonClickCounter);
});

// RESET BUTTON CLICK LOGIC
resetButton.addEventListener('click', () => {
    buttonClickCounter = 0;
    checkButton(buttonClickCounter);
});

// CLOSE ALERT MODAL ONCLICK X-ICON
xIcon.addEventListener('click', () => {
    hide(overlay);
});

// CLOSE ALERT MODAL ONCLICK OUTSIDE
document.addEventListener('mouseup', (element) => {
    if (!overlay.classList.contains("hide")) {
        if (!alertWindow.contains(element.target)) {
            hide(overlay);
        }
    }
});

function hide(target) {
    target.classList.remove("show");
        setTimeout(() => {
            target.classList.add("hide");
        }, 300);
}

function show(target) {
    target.classList.remove("hide");
        setTimeout(() => {
            target.classList.add("show");
        }, 1);
}