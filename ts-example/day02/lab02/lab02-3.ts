export {};
let args =  process.argv.slice(2);

const num1 = Number(args[0]);
const num2 = Number(args[1]);

let val = num1 % num2;

console.log(`mod of two number is ${val}`);