export {};
let args =  process.argv.slice(2);

const weight = Number(args[0]);
const height = Number(args[1]);
let BMI = weight/(height**2);
console.log(`your BMI is ${BMI}`);