function sum(numbers: number[]): number {
  let total = 0;
  numbers.forEach((number) => {
    total += number;
  });
  return total;
}

console.log(sum([1, 2, 3, 4, 5]));
