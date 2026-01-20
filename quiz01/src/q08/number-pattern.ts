export{};
let args = process.argv.slice(2);
let n = Number(args[0]);
if(n <= 0 || isNaN(n) || !Number.isInteger(n)){
    console.log("Invalid Input");
    process.exit();
}
for(let i =n;i> 0;i--){
    n = i;
    for(let j =0;j<i;j++){
        process.stdout.write(`${n}`)
        n-=1;
    }
    
    process.stdout.write("\n");
}