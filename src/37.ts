import { add } from 'lodash-es';

// Function to calculate the sum of all even numbers in an array
function calculateEvenSum(numbers: number[]): number {
    return numbers.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}

// Main function
const main = () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    console.log(`The sum of all even numbers in the array is: ${calculateEvenSum(numbers)}`);
};

main();
