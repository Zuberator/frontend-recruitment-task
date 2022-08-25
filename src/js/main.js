let alertButton = document.getElementById("alert-button");
let alertWindow = document.getElementById("alert");
let overlay = document.getElementById("overlay");
let xIcon = document.getElementById("x-icon");

alertButton.addEventListener('click', () => {
    alertWindow.style.display = "block";
    overlay.style.display = "block";
    // document.body.classList.add("dimm");
});

xIcon.addEventListener('click', () => {
    alertWindow.style.display = "none";
    overlay.style.display = "none";
    // document.body.classList.remove("dimm");
});