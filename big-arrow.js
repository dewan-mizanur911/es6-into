// for single line code don't need to return it
const multiply = (num1, num2, num3) => num1 * num2 * num3;

const name = arr => arr;

const name2 = () => 'DMR';
const newName = name2();

const calculation = (x, y) => {
    const add = x + y;
    const diff = x - y;
    const multiply = add * diff;
    return multiply * 5;
}
const total = calculation(5, 4);

console.log('juthi', newName, total);