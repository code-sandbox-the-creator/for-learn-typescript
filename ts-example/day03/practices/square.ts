export{};
let args = process.argv.slice(2);
let n = Number(args[0]);
if (Number.isNaN(n)){
  process.exit();
}
let result = "";
for(let i = 0; i < n;i++){
  // console.log("*****");
  for(let j = 0; j< n ;j++){
    result += "*";

  }
  console.log(result);
  result = "";
}