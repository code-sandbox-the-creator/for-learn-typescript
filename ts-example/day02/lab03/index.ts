export {};
let args =  process.argv.slice(2);

const name = args[0];
const height = Number(args[1]);
const old = Number(args[2]);
console.log(`name: ${name}
height: ${height}
age: ${old} `);