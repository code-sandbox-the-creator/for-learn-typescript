export{};
let args = process.argv.slice(2);
let input = args[0].toLowerCase();
let a = Number(args[1]);
let b = Number(args[2]);
switch(input){
  case "add":console.log(a + b); break;
  case "sub":console.log(a - b); break;
  case "mul":console.log(a * b); break;
  case "div":console.log(a / b); break;
  default: console.log("error"); break;
}