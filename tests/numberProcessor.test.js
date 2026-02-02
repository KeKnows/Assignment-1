const {
  sumNumbers,
  findMinMax,
  average,
} = require("../src/numberProcessor");

describe("Number Processor", () => {
  const numbers = [1, 2, 3, 4, 5];

  test("calculates sum", () => {
    expect(sumNumbers(numbers)).toBe(15);
  });

  test("finds highest and lowest numbers", () => {
    expect(findMinMax(numbers)).toEqual({ min: 1, max: 5 });
  });

  test("calculates average", () => {
    expect(average(numbers)).toBe(3);
  });

  test("handles empty array", () => {
    expect(average([])).toBe(0);
  });
});
