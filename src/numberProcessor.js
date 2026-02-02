const fs = require("fs");

function parseNumbers(text) {
  return text
    .split("\n")
    .map(Number)
    .filter((n) => !isNaN(n));
}

function sumNumbers(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

function findMinMax(numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}

function average(numbers) {
  return numbers.length === 0 ? 0 : sumNumbers(numbers) / numbers.length;
}

// ----- Manual verification -----
if (require.main === module) {
  const data = fs.readFileSync("data/sample-numbers.txt", "utf8");
  const numbers = parseNumbers(data);

  console.log("Sum:", sumNumbers(numbers));
  console.log("Min/Max:", findMinMax(numbers));
  console.log("Average:", average(numbers));
}

module.exports = {
  parseNumbers,
  sumNumbers,
  findMinMax,
  average,
};
