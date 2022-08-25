let alertButton = document.getElementById("alert-button");
let resetButton = document.getElementById("reset-button");
let alertWindow = document.getElementById("alert");
let overlay = document.getElementById("overlay");
let xIcon = document.getElementById("x-icon");
let counter = document.getElementById("counter");
let buttonClickCounter = 0;

function checkButton(times) {
    counter.textContent = times + " times";
    if (times > 5) return resetButton.style.display = "block"
    return resetButton.style.display = "none";
};

alertButton.addEventListener('click', () => {
    alertWindow.style.display = "flex";
    overlay.style.display = "block";
    buttonClickCounter += 1;
    checkButton(buttonClickCounter);
});

resetButton.addEventListener('click', () => {
    buttonClickCounter = 0;
    checkButton(buttonClickCounter);
});

xIcon.addEventListener('click', () => {
    alertWindow.style.display = "none";
    overlay.style.display = "none";
});

document.addEventListener('mouseup', (element) => {
    if (alertWindow.style.display = "flex") {
        if (!alertWindow.contains(element.target)) {
            alertWindow.style.display = 'none';
            overlay.style.display = "none";
        }
    }
  });






