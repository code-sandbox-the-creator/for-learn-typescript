export{};
let args = process.argv.slice(2);
let n = Number(args[0]);
if(n <= 0 || isNaN(n) || !Number.isInteger(n)){
    console.log("Invalid Input");
    process.exit();
}
for(let i = 0;i < n;i++){
    if(i === 0 || i === n-1 ){
        for(let j = 0;j< n;j++){
            process.stdout.write("x");

        }
    }else{
        for(let j = 0;j< n;j++){
            if(j === 0 || j === n-1 ){
                process.stdout.write("x");
            }else{
                 process.stdout.write("o");
            }

        }
    }
    process.stdout.write("\n");
}