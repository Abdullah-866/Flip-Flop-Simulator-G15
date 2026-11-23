/* =========================================
   FLIP-FLOP SIMULATOR
   LAB 8: Feature 1 (D flip-flop)
   ========================================= */

/* ---------- Variables ---------- */
// dValue is the D switch. dQ is the stored output Q.
let dValue = 0;
let dQ = 0;

/* ---------- Page elements ---------- */
const dInput = document.getElementById("d-input");
const dClock = document.getElementById("d-clock");
const dQOut = document.getElementById("d-q");
const dQbarOut = document.getElementById("d-qbar");

/* ---------- D flip-flop rule ----------
   After a clock press, Q takes the value of D.
   (Replace this with Ali Hassan's function if his version
   has a different name.) */
function dFlipFlop(d) {
  return d;
}

/* ---------- D button: toggles between 0 and 1 ---------- */
dInput.addEventListener("click", function () {
  dValue = dValue === 0 ? 1 : 0;
  dInput.textContent = dValue;
});

/* ---------- Clock button: only here does Q change ---------- */
dClock.addEventListener("click", function () {
  dQ = dFlipFlop(dValue);

  dQOut.textContent = dQ;
  dQbarOut.textContent = dQ === 0 ? 1 : 0;
});
