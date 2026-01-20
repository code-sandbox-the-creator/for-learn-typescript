export{};
let args = process.argv.slice(2);
let input = Number(args[0]);
for(let i = 0;i < input ;i++){
  if(i === 0 || i === input - 1 ){
    for(let j = 0; j < input ;j++){
      if(j === 0 || j === input - 1){
        process.stdout.write("0");
      }else{
        process.stdout.write("1");
      }
    }
    process.stdout.write("\n");
  }else{
    for(let j = 0; j < input ;j++){
      if(j === 0 || j === input - 1){
        process.stdout.write("1");
      }else{
        process.stdout.write("0");
      }
    }
    process.stdout.write("\n");
  }

}