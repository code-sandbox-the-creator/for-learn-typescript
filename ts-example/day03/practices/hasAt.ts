export{};
let args = process.argv.slice(2);

let password = args[0];
if (password.includes("@")){
  console.log("Has @");
}
else{
  console.log("No @");
}