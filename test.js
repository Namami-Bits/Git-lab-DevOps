const calculator = require('./calculator');

if (calculator.add(2,3) !== 5) {
    throw new Error("Test failed: add function is wrong");
}

console.log("All tests passed");
