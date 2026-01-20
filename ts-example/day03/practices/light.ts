export{};
let args = process.argv.slice(2);
let sigh  = args[0].toUpperCase();
if (!args){
  console.log("Unknow");
}else{
  switch(sigh){
  case "RED" : console.log("Stop"); break;
  case "YELLOW" : console.log("Caution"); break;
  case "GREEN" : console.log("Go"); break;
  default : console.log("Invalid COLOR"); break;
}
}