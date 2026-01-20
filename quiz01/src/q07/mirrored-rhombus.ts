export{};
let args = process.argv.slice(2);
let n = Number(args[0]);
let sp = 0;
if(n <= 0 || isNaN(n) || !Number.isInteger(n)){
    console.log("Invalid Input");
    process.exit();
}
for(let i = 0;i< n ;i++){
    for(let j = 0;j< sp;j++){
        process.stdout.write(" ");
    }
    for(let j = 0;j< n;j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
    sp+=1;
}