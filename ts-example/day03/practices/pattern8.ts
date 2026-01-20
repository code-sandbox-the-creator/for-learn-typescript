export{};
let args = process.argv.slice(2);
let input = Number(args[0]);
let n = 0;
for (let i = 0;i < input;i++){
  for(let j = 0;j< input;j++){
    if(j === i || j === input -1 - i){
      process.stdout.write(`1`);
    }
    else{
      process.stdout.write(`0`);
    }
  }
  process.stdout.write(`\n`);
}
