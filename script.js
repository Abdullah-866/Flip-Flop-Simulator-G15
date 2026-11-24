
let dQ = 0;
let jkQ = 0;
let clockCount = 0;

let dValue = 0;

// D Flip-Flop Elements
const dInput = document.getElementById("d-input");
const dClock = document.getElementById("d-clock");
const dQOut = document.getElementById("d-q");
const dQbarOut = document.getElementById("d-qbar");
const dMessage = document.getElementById("d-message");

// JK Flip-Flop Elements
const jInput = document.getElementById("j-input");
const kInput = document.getElementById("k-input");
const jkClock = document.getElementById("jk-clock");
const jkQOut = document.getElementById("jk-q");
const jkQbarOut = document.getElementById("jk-qbar");

// History Table
const historyBody = document.getElementById("history-body");

// D Flip-Flop Function
function dFlipFlop(d) {
    return d;
}

// JK Flip-Flop Function
function jkFlipFlop(j, k, q) {
    if (j === 0 && k === 0) {
        return q;
    } else if (j === 0 && k === 1) {
        return 0;
    } else if (j === 1 && k === 0) {
        return 1;
    } else {
        return q === 0 ? 1 : 0;
    }
}

// Toggle D Input Button
dInput.addEventListener("click", function() {
    dValue = dValue === 0 ? 1 : 0;
    dInput.textContent = dValue;
    dMessage.textContent = "";
});

// D Clock Button
dClock.addEventListener("click", function() {
    dQ = dFlipFlop(dValue);

    dQOut.textContent = dQ;
    dQbarOut.textContent = dQ === 0 ? 1 : 0;

    dMessage.textContent = "D Flip-Flop updated successfully!";

    addHistory(dValue, "-", "-", dQ, jkQ);
});

// Toggle J Input Button
jInput.addEventListener("click", function() {
    jInput.textContent = jInput.textContent === "0" ? "1" : "0";
});

// Toggle K Input Button
kInput.addEventListener("click", function() {
    kInput.textContent = kInput.textContent === "0" ? "1" : "0";
});

// JK Clock Button
jkClock.addEventListener("click", function() {
    const j = Number(jInput.textContent);
    const k = Number(kInput.textContent);

    jkQ = jkFlipFlop(j, k, jkQ);

    jkQOut.textContent = jkQ;
    jkQbarOut.textContent = jkQ === 0 ? 1 : 0;

    addHistory("-", j, k, dQ, jkQ);
});

// Add Clock History
function addHistory(d, j, k, dOutput, jkOutput) {
    clockCount++;

    const row = document.createElement("tr");

    const values = [
        clockCount,
        d,
        j,
        k,
        dOutput,
        jkOutput
    ];

    values.forEach(function(value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    historyBody.appendChild(row);
}
