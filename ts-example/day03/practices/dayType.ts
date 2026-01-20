export{};
let args = process.argv.slice(2);
let input = Number(args[0]);
switch(input){
  case 0: console.log("Weekend"); break;
  case 1: console.log("Working day");break;
  case 2: console.log("Working day");break;
  case 3: console.log("Working day");break;
  case 4: console.log("Working day");break;
  case 5: console.log("Working day");break;
  case 6: console.log("Weekend");break;
  default: console.log("error");break;
}