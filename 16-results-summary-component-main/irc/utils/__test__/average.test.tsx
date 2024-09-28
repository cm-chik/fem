
import { describe, it, expect } from 'vitest';
import { calculateAverage } from '../average';

describe('calculateAverage', () => {
  it('should return the correct average for an array of numbers', () => {
    const input = [1, 2, 3];
    const expectedOutput = 2;
    
    const result = calculateAverage(input);
    
    expect(result).toBe(expectedOutput);
  });
});
