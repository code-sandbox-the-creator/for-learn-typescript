export{};
let args = process.argv.slice(2);

let n = Number(args[0]);
if (Number.isNaN(n)){
  process.exit();
}
for(let i = 1;i <=n;i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }else if(i%3 === 0){
    console.log("Fizz");
  }else if(i%5 === 0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
}