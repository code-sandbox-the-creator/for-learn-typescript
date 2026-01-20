export{};
let args = process.argv.slice(2);
let n = Number(args[0]);
if (Number.isNaN(n)){
  process.exit();
}
let result = "";

for(let i = 1; i < n;i++){
  for(let k = n - i -1 ;k >0;k--){
    result += " ";
  }

  console.log(result + "*****");
  result = "";
}