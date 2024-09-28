export function calculateSum(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((acc, current) => acc + current, 0);
}

export default calculateSum;
