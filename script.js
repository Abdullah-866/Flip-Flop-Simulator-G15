
let dQ = 0;
let jkQ = 0;
let clockCount = 0;

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

// Validate D Input
function validateDInput(value) {
    if (value === "") {
        dMessage.textContent = "Error: D input cannot be empty!";
        return false;
    }

    if (value !== "0" && value !== "1") {
        dMessage.textContent = "Error: Enter only 0 or 1!";
        return false;
    }

    return true;
}

// D Input Clock Button
dClock.addEventListener("click", function () {
    const value = dInput.value.trim();

    if (!validateDInput(value)) {
        return;
    }

    const d = Number(value);

    dQ = dFlipFlop(d);

    dQOut.textContent = dQ;
    dQbarOut.textContent = dQ === 0 ? 1 : 0;

    dMessage.textContent = "D Flip-Flop updated successfully!";

    addHistory(d, "-", "-", dQ, jkQ);
});

// Clear D Error When User Types
dInput.addEventListener("input", function () {
    dMessage.textContent = "";
});

// J Input Button
jInput.addEventListener("click", function () {
    jInput.textContent = jInput.textContent.trim() === "0" ? "1" : "0";
});

// K Input Button
kInput.addEventListener("click", function () {
    kInput.textContent = kInput.textContent.trim() === "0" ? "1" : "0";
});

// JK Clock Button
jkClock.addEventListener("click", function () {
    const j = Number(jInput.textContent.trim());
    const k = Number(kInput.textContent.trim());

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

    values.forEach(function (value) {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    historyBody.appendChild(row);
}
