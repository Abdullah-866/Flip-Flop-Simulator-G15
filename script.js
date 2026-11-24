
/* LAB 8 - FEATURE 1: D AND JK FLIP-FLOPS */

// Initial outputs
let dQ = 0;
let jkQ = 0;
let clockCount = 0;

// D Flip-Flop elements
const dInput = document.getElementById("d-input");
const dClock = document.getElementById("d-clock");
const dQOut = document.getElementById("d-q");
const dQbarOut = document.getElementById("d-qbar");
const dMessage = document.getElementById("d-message");

// JK Flip-Flop elements
const jInput = document.getElementById("j-input");
const kInput = document.getElementById("k-input");
const jkClock = document.getElementById("jk-clock");
const jkQOut = document.getElementById("jk-q");
const jkQbarOut = document.getElementById("jk-qbar");
const jkMessage = document.getElementById("jk-message");

// History table
const historyBody = document.getElementById("history-body");

// D Flip-Flop logic
function dFlipFlop(d) {
    return d;
}

// JK Flip-Flop logic
function jkFlipFlop(j, k, q) {
    if (j === 0 && k === 0) return q;
    if (j === 0 && k === 1) return 0;
    if (j === 1 && k === 0) return 1;
    if (j === 1 && k === 1) return q === 0 ? 1 : 0;
}

// Validate binary input
function validateInput(value) {
    return value === "0" || value === "1";
}

// D Clock button
dClock.addEventListener("click", function () {

    let d = dInput.value.trim();

    if (d === "") {
        dMessage.textContent = "Error: D input cannot be empty!";
        return;
    }

    if (!validateInput(d)) {
        dMessage.textContent = "Error: Enter only 0 or 1!";
        return;
    }

    dQ = dFlipFlop(Number(d));

    dQOut.textContent = dQ;
    dQbarOut.textContent = dQ === 0 ? 1 : 0;

    dMessage.textContent = "D Flip-Flop updated successfully!";

    addHistory(d, "-", "-", dQ, jkQ);
});

// JK Clock button
jkClock.addEventListener("click", function () {

    let j = jInput.value.trim();
    let k = kInput.value.trim();

    if (j === "" || k === "") {
        jkMessage.textContent = "Error: J and K inputs cannot be empty!";
        return;
    }

    if (!validateInput(j) || !validateInput(k)) {
        jkMessage.textContent = "Error: Enter only 0 or 1!";
        return;
    }

    jkQ = jkFlipFlop(Number(j), Number(k), jkQ);

    jkQOut.textContent = jkQ;
    jkQbarOut.textContent = jkQ === 0 ? 1 : 0;

    jkMessage.textContent = "JK Flip-Flop updated successfully!";

    addHistory("-", j, k, dQ, jkQ);
});

// Add clock history
function addHistory(d, j, k, dOutput, jkOutput) {

    clockCount++;

    let row = document.createElement("tr");

    [clockCount, d, j, k, dOutput, jkOutput].forEach(function(value) {
        let cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    historyBody.appendChild(row);
}
