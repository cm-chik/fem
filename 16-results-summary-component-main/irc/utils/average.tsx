export function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum / numbers.length;
}

export default calculateAverage;
