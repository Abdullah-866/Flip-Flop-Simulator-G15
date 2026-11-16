function calculateFlipFlop(type, input1, input2, currentQ) {

    if (type === "D") {
        return input1;
    }

    if (type === "JK") {
        let J = input1;
        let K = input2;

        if (J === 0 && K === 0) {
            return currentQ;
        }
        else if (J === 0 && K === 1) {
            return 0;
        }
        else if (J === 1 && K === 0) {
            return 1;
        }
        else if (J === 1 && K === 1) {
            return currentQ === 0 ? 1 : 0;
        }
    }
}

// Example 1
console.log("Example 1:",
    calculateFlipFlop("D", 0, 0, 1)
);

// Example 2
console.log("Example 2:",
    calculateFlipFlop("JK", 1, 0, 0)
);

// Example 3
console.log("Example 3:",
    calculateFlipFlop("JK", 1, 1, 0)
);