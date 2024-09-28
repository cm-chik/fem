import { describe, it, expect } from "vitest";
import { calculateSum } from "../sum";

describe("calculateSum", () => {
  it("should return the correct sum for an array of numbers", () => {
    const input = [1, 2, 3];
    const expectedOutput = 6;

    const result = calculateSum(input);

    expect(result).toBe(expectedOutput);
  });
});
