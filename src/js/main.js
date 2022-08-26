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
    if (times > 5) return resetButton.style.display = "block"
    return resetButton.style.display = "none";
};

// ALERT BUTTON CLICK LOGIC - COUNTER
alertButton.addEventListener('click', () => {
    alertWindow.style.display = "flex";
    overlay.style.display = "block";
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
    alertWindow.style.display = "none";
    overlay.style.display = "none";
});

// CLOSE ALERT MODAL ONCLICK OUTSIDE
document.addEventListener('mouseup', (element) => {
    if (alertWindow.style.display = "flex") {
        if (!alertWindow.contains(element.target)) {
            alertWindow.style.display = 'none';
            overlay.style.display = "none";
        }
    }
});