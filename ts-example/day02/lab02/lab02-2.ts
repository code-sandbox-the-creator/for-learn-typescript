export {};
let args =  process.argv.slice(2);
let radius = Number(args[0]);
let area = Math.PI*(Math.pow(radius,2));
console.log(`the area is ${area}`);