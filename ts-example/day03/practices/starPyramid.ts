export{};
let args = process.argv.slice(2);
let n = Number(args[0]);
if (Number.isNaN(n)){
  process.exit();
}
let result = "";
for(let i = 1; i <= n;i++){
  // console.log("*****");
  for(let j = 0; j < i ;j++){
    result += "*";

  }
  console.log(result);
  result = "";
}