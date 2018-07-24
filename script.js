//Task number 1
const hello = 'Hello';
const world = 'World';

const together =() => `${hello} ${world}`;

console.log(together())

//Task number 2
const multiply =(a, b = 1) =>  a * b;
console.log(multiply(4))

//Task number 3
const average = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue)/args.length;

//Task number 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//Task number 5
const data = [1, 4, 'Iwona', false, 'Nowak']
const [,,firstName,,secondName] = data

console.log(firstName, secondName);
console.log(`${firstName} ${secondName}`);
