function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNum = getRandomInt(0, 100);
console.log(`Random number generated between 0 and 100: ${randomNum}`);
