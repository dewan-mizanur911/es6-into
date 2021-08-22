const numbers = [33, 66, 22, 55, 77, 88];
// const max = Math.max(numbers);
const max = Math.max(...numbers);
console.log(max);

const newNumbers = [...numbers, 99];
numbers.push(123);
console.log(numbers);
console.log(newNumbers);
