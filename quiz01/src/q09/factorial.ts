export{};
let args = process.argv.slice(2);
let n = Number(args[0]);
let fac = 1;
if(n < 0 || isNaN(n) || !Number.isInteger(n)){
    console.log("Invalid Input");
    process.exit();
}
if(n === 0){
    console.log(String(1));
    process.exit();
}
for(let i = n;i > 0;i--){
    fac *= i;
}
console.log(String(fac));