// Default parameter
function add(num1, num2 = 0) {
    return num1 + num2;
}

// template string 
const list = 5;
const name = 'DMR';
const details = `My name is ${name} and I have ${list} mangoes to eat`;

// arrow functions
const add1 = (num1, num2) => num1 + num2;
const calc = (num1, num2) => {
    const add = num1 + num2;
    const abs = num1 - num2;
    const multiply = add * abs;
    const fiveTimes = multiply * 5;
    return fiveTimes;
}

// spread operators
const numbers = [3, 4, 5, 6, 7, 8, 9, 0];
const max = Math.max(...numbers);
console.log(max);