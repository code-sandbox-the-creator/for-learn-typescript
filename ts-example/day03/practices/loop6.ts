export{};
let args = process.argv.slice(2);

let n = Number(args[0]);
if(Number.isNaN(n)){
  process.exit();
}
for(let i = 0;i <= n;i++){
  if(i % 2 === 0){
    console.log(i);
  }
}