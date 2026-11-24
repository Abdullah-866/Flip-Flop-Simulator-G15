
/* Lab 8: D Flip-Flop Input Validation */

let dValue = 0;
let dQ = 0;

const dInput = document.getElementById("d-input");
const dClock = document.getElementById("d-clock");
const dQOut = document.getElementById("d-q");
const dQbarOut = document.getElementById("d-qbar");
const message = document.getElementById("d-message");

function dFlipFlop(d) {
    return d;
}

// Toggle D input between 0 and 1
dInput.addEventListener("click", function () {
    dValue = dValue === 0 ? 1 : 0;
    dInput.textContent = dValue;
    message.textContent = "";
});

// Validate input and apply clock
dClock.addEventListener("click", function () {

    if (dValue !== 0 && dValue !== 1) {
        message.textContent = "Invalid input! Enter 0 or 1.";
        return;
    }

    dQ = dFlipFlop(dValue);

    dQOut.textContent = dQ;
    dQbarOut.textContent = dQ === 0 ? 1 : 0;

    message.textContent = "Clock applied successfully!";
});
